/**
 * Brandex Live GitHub API Service
 *
 * Fetches real-time telemetry from public GitHub repositories:
 * - Real live star counts (stargazers_count)
 * - Real live fork counts (forks_count)
 * - Real live open issues & PR counts (open_issues_count)
 * - Latest commit & push activity (pushed_at)
 * - Verified license & default branch
 * - Homepage / Live deployment URL
 *
 * Implements client-side TTL caching (10 minutes) and resilient offline fallbacks
 * to adhere strictly to GitHub's unauthenticated API rate limits.
 */

export interface GitHubRepoLiveData {
  owner: string;
  repo: string;
  name: string;
  fullName: string;
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
  language: string;
  license: string;
  description: string;
  homepage?: string;
  defaultBranch: string;
  updatedAt: string;
  pushedAt: string;
  isLive: boolean;
  lastSyncedAt: string;
  htmlUrl: string;
}

const CACHE_KEY_PREFIX = 'brandex_gh_cache_';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Extract owner and repository name from a GitHub URL
 */
export const parseGitHubUrl = (url: string): { owner: string; repo: string } | null => {
  if (!url || typeof url !== 'string') return null;
  try {
    const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace(/\.git$/, '')
      };
    }
  } catch (err) {
    console.warn('[GitHubService] Error parsing GitHub URL:', err);
  }
  return null;
};

/**
 * Formats relative time (e.g. "pushed 2h ago", "updated 3d ago")
 */
export const formatRelativeTime = (isoString?: string): string => {
  if (!isoString) return 'recently';
  try {
    const date = new Date(isoString);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSec < 60) return 'just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour}h ago`;
    const diffDays = Math.floor(diffHour / 24);
    if (diffDays < 30) return `${diffDays}d ago`;
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths}mo ago`;
  } catch {
    return 'recently';
  }
};

/**
 * Read cached repo data if still valid within TTL
 */
const getCachedRepoData = (key: string): GitHubRepoLiveData | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed._cachedAt && Date.now() - parsed._cachedAt < CACHE_TTL_MS) {
      return parsed.data;
    }
  } catch {}
  return null;
};

/**
 * Store repo data in cache
 */
const setCachedRepoData = (key: string, data: GitHubRepoLiveData): void => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(
      key,
      JSON.stringify({
        _cachedAt: Date.now(),
        data
      })
    );
  } catch {}
};

/**
 * Fetch live data for a specific repository from GitHub REST API
 */
export const fetchGitHubRepoData = async (
  repoUrl: string,
  fallback?: Partial<GitHubRepoLiveData>
): Promise<GitHubRepoLiveData> => {
  const parsed = parseGitHubUrl(repoUrl);

  const defaultResult: GitHubRepoLiveData = {
    owner: parsed?.owner || 'brandex-official',
    repo: parsed?.repo || 'brandex-official',
    name: parsed?.repo || 'brandex-official',
    fullName: parsed ? `${parsed.owner}/${parsed.repo}` : 'brandex-official/brandex-official',
    stars: fallback?.stars ?? 0,
    forks: fallback?.forks ?? 0,
    openIssues: fallback?.openIssues ?? 0,
    watchers: fallback?.watchers ?? 0,
    language: fallback?.language || 'TypeScript',
    license: fallback?.license || 'MIT License',
    description: fallback?.description || '',
    homepage: fallback?.homepage || undefined,
    defaultBranch: fallback?.defaultBranch || 'main',
    updatedAt: fallback?.updatedAt || new Date().toISOString(),
    pushedAt: fallback?.pushedAt || new Date().toISOString(),
    isLive: false,
    lastSyncedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    htmlUrl: repoUrl
  };

  if (!parsed) {
    return defaultResult;
  }

  const cacheKey = `${CACHE_KEY_PREFIX}${parsed.owner}_${parsed.repo}`;
  const cached = getCachedRepoData(cacheKey);
  if (cached) {
    return { ...cached, isLive: true };
  }

  try {
    // Public GitHub API allows 60 requests/hr unauthenticated
    const response = await fetch(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      const liveData: GitHubRepoLiveData = {
        owner: parsed.owner,
        repo: parsed.repo,
        name: data.name || parsed.repo,
        fullName: data.full_name || `${parsed.owner}/${parsed.repo}`,
        stars: data.stargazers_count ?? defaultResult.stars,
        forks: data.forks_count ?? defaultResult.forks,
        openIssues: data.open_issues_count ?? defaultResult.openIssues,
        watchers: data.subscribers_count ?? data.watchers_count ?? defaultResult.watchers,
        language: data.language || defaultResult.language,
        license: data.license?.spdx_id || data.license?.name || defaultResult.license,
        description: data.description || defaultResult.description,
        homepage: data.homepage || defaultResult.homepage,
        defaultBranch: data.default_branch || 'main',
        updatedAt: data.updated_at || defaultResult.updatedAt,
        pushedAt: data.pushed_at || defaultResult.pushedAt,
        isLive: true,
        lastSyncedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        htmlUrl: data.html_url || repoUrl
      };

      setCachedRepoData(cacheKey, liveData);
      return liveData;
    } else {
      console.info(
        `[GitHubService] Repo ${parsed.owner}/${parsed.repo} returned ${response.status} (using verified baseline)`
      );
      return defaultResult;
    }
  } catch (err) {
    console.warn('[GitHubService] Network fetch failed (offline or rate-limited):', err);
    return defaultResult;
  }
};

/**
 * Fetch live data in parallel for multiple repositories
 */
export const fetchMultipleGitHubRepos = async (
  repoUrls: string[],
  fallbacks: Record<string, Partial<GitHubRepoLiveData>> = {}
): Promise<Record<string, GitHubRepoLiveData>> => {
  const entries = await Promise.all(
    repoUrls.map(async (url) => {
      const parsed = parseGitHubUrl(url);
      const key = parsed ? `${parsed.owner}/${parsed.repo}` : url;
      const data = await fetchGitHubRepoData(url, fallbacks[key]);
      return [url, data] as const;
    })
  );

  return Object.fromEntries(entries);
};

/**
 * Clear the cache to force live reload
 */
export const clearGitHubCache = (): void => {
  if (typeof window === 'undefined') return;
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith(CACHE_KEY_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => sessionStorage.removeItem(k));
  } catch {}
};
