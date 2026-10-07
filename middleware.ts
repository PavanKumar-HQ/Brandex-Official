import { isKnownRoute, getMarkdownForRoute, get404Markdown } from "./src/lib/agentContent";

export const config = {
  matcher: [
    /*
     * Match all request paths except for internal Vercel paths
     */
    "/((?!_vercel).*)",
  ],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const accept = request.headers.get("accept") || "";

  // 1. Handle Accept: text/markdown content negotiation (acceptmarkdown.com compliance)
  if (accept.includes("text/markdown") || accept.includes("text/x-markdown")) {
    const { content, status } = getMarkdownForRoute(pathname);
    return new Response(content, {
      status,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=3600",
        "X-Robots-Tag": status === 404 ? "noindex, follow" : "index, follow",
      },
    });
  }

  // 2. Validate known routes vs nonexistent paths (Real HTTP 404 instead of soft-200)
  if (!isKnownRoute(pathname)) {
    const isHtmlPreferred = accept.includes("text/html");
    if (isHtmlPreferred) {
      const htmlBody = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 Not Found | Brandex</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://www.brandex.co.in/404" />
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #020617; color: #f8fafc; padding: 2rem; display: flex; justify-content: center; align-items: center; min-height: 80vh; }
    .card { max-width: 600px; background: #0f172a; border: 1px solid #1e293b; padding: 2rem; border-radius: 1rem; }
    h1 { font-size: 1.75rem; margin-bottom: 0.75rem; color: #f8fafc; }
    p { color: #94a3b8; line-height: 1.6; margin-bottom: 1rem; }
    a { color: #38bdf8; text-decoration: none; }
    a:hover { text-decoration: underline; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  <main class="card">
    <h1>404 — Resource Not Found</h1>
    <p>The requested resource <code>${pathname}</code> does not exist on this server.</p>
    <p><strong>Machine-Readable Indexes for AI Agents:</strong></p>
    <ul>
      <li>&bull; <a href="/llms.txt">https://www.brandex.co.in/llms.txt</a></li>
      <li>&bull; <a href="/.well-known/agent.json">https://www.brandex.co.in/.well-known/agent.json</a></li>
      <li>&bull; <a href="/sitemap.xml">https://www.brandex.co.in/sitemap.xml</a></li>
    </ul>
    <p><a href="/">Return to Brandex Homepage &rarr;</a></p>
  </main>
</body>
</html>`;
      return new Response(htmlBody, {
        status: 404,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Vary": "Accept, Accept-Encoding",
          "X-Robots-Tag": "noindex, follow",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    }

    const markdownBody = get404Markdown(pathname);
    return new Response(markdownBody, {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "X-Robots-Tag": "noindex, follow",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }

  // Known route proceeds normally
}
