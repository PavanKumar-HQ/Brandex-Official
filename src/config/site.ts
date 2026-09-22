/**
 * Brandex Centralized Site Configuration
 * 
 * Single source of truth for all domain resolution, canonical URLs,
 * contact details, social profiles, and Schema.org metadata.
 * 
 * When a custom domain is configured, set VITE_SITE_URL in your environment
 * or update the fallback URL below to automatically update canonicals,
 * sitemaps, Open Graph, Twitter cards, and structured data.
 */

export const SITE_CONFIG = {
  name: "Brandex",
  legalName: "Brandex Digital Systems & Infrastructure",
  alternateName: "Brandex Digital",
  tagline: "Engineering Digital Systems Built For Real Scale",
  // Fallback to current temporary production origin; override with VITE_SITE_URL if provided
  url: (import.meta.env.VITE_SITE_URL || "https://brandex-official.vercel.app").replace(/\/+$/, ""),
  description: "Brandex empowers businesses with high-performance websites, custom web applications, and automated workflows designed to accelerate growth.",
  address: {
    street: "#121, 13th Main M.C. Layout, Vijaynagar",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560040",
    country: "IN",
  },
  geo: {
    latitude: "12.9716",
    longitude: "77.5946",
  },
  contact: {
    phone: "+91 94809 44727",
    email: "brandexhq@gmail.com",
    gstin: "29OGNPS8060K1Z5",
    areaServed: ["IN", "US", "GB", "AE", "Worldwide"],
    availableLanguages: ["en", "kn", "hi"],
  },
  social: {
    instagram: "https://www.instagram.com/brandexlabs/",
    twitter: "https://x.com/brandexlabs",
    linkedin: "https://www.linkedin.com/company/brandex-lab",
    github: "https://github.com/Brandex-Labs",
    discord: "https://discord.gg/6MVYPzBn9g",
    whatsapp: "https://chat.whatsapp.com/JYJokicBTSE4suaJ2pKvgI?mode=gi_t",
  },
  founders: [
    {
      name: "Pavan Kumar S",
      role: "Co-Founder & Chief Systems Architect",
      urlSlug: "/pavan-kumar",
    },
    {
      name: "Sathvik Nagesh",
      role: "Co-Founder & Head of Product Design",
      urlSlug: "/sathvik",
    },
  ],
  defaultOgImage: "/main_logo.png",
  themeColor: "#0f1e37",
};

/**
 * Returns a fully qualified canonical URL for a given relative or absolute path.
 */
export function getCanonicalUrl(path: string = ""): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * Returns an absolute URL for an asset located in public/.
 */
export function getAbsoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  const cleanAsset = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${SITE_CONFIG.url}${cleanAsset}`;
}
