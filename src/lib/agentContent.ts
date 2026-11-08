/**
 * agentContent.ts - Agent readiness, routing validation, and Accept-Markdown content negotiation
 */

export const VALID_SERVICES = [
  "software-development",
  "website-development",
  "ai-automation",
  "cybersecurity"
];

export const VALID_CASE_STUDIES = [
  "the-man-wanders-globe",
  "vignan-public-school",
  "vignan-tutorials",
  "srushti-publications",
  "geniusphere",
  "qshala-quiz-league"
];

export const VALID_BLOG_POSTS = [
  "astro-framework-high-performance-websites",
  "luxury-ui-ux-high-ticket-conversion",
  "core-web-vitals-inp-mastery",
  "autonomous-ai-agents-in-production",
  "saas-growth-engineering-retention",
  "ecommerce-architecture-bangalore",
  "nextjs-vs-react-startup",
  "local-seo-bangalore",
  "ui-fundamentals-for-founders",
  "zero-trust-cybersecurity",
  "ai-automation-paradox",
  "seo-growth-strategies",
  "engineering-for-scale",
  "power-of-branding",
  "ai-in-web-development"
];

export const VALID_TEAM_MEMBERS = [
  "sathvik-nagesh",
  "pavan-kumar"
];

export const STATIC_ROUTES = [
  "/",
  "/services",
  "/solutions",
  "/industries",
  "/resources",
  "/case-studies",
  "/about",
  "/team/sathvik-nagesh",
  "/team/pavan-kumar",
  "/contact",
  "/careers",
  "/faq",
  "/blog",
  "/products",
  "/projects",
  "/projects/travel-crm",
  "/products/travel-crm",
  "/products/invoice-builder",
  "/projects/invoice-builder",
  "/community",
  "/community/events",
  "/community/stories",
  "/education",
  "/education/workshops",
  "/education/campus-ambassador",
  "/privacy-policy",
  "/privacy",
  "/terms-and-conditions",
  "/contact-us",
  "/website-development",
  "/404",
  "/404.html"
];

export function normalizePath(path: string): string {
  if (!path) return "/";
  const clean = path.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) {
    return clean.slice(0, -1);
  }
  return clean;
}

export function isStaticAsset(pathname: string): boolean {
  const clean = normalizePath(pathname);
  if (
    clean.startsWith("/assets/") ||
    clean.startsWith("/Clients/") ||
    clean.startsWith("/Favicon/") ||
    clean.startsWith("/og/") ||
    clean.startsWith("/api/") ||
    clean.startsWith("/.well-known/")
  ) {
    return true;
  }

  const staticExtensions = [
    ".ico", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif",
    ".js", ".css", ".webmanifest", ".xml", ".txt", ".json", ".md",
    ".woff", ".woff2", ".ttf", ".eot"
  ];
  return staticExtensions.some(ext => clean.endsWith(ext));
}

export function isKnownRoute(pathname: string): boolean {
  const clean = normalizePath(pathname);

  if (isStaticAsset(clean)) return true;
  if (STATIC_ROUTES.includes(clean)) return true;

  if (clean.startsWith("/services/")) {
    const slug = clean.replace("/services/", "");
    return VALID_SERVICES.includes(slug);
  }

  if (clean.startsWith("/case-studies/")) {
    const slug = clean.replace("/case-studies/", "");
    return VALID_CASE_STUDIES.includes(slug);
  }

  if (clean.startsWith("/blog/")) {
    const slug = clean.replace("/blog/", "");
    return VALID_BLOG_POSTS.includes(slug);
  }

  if (clean.startsWith("/team/")) {
    const slug = clean.replace("/team/", "");
    return VALID_TEAM_MEMBERS.includes(slug);
  }

  return false;
}

export function get404Markdown(pathname: string): string {
  return `# 404 Not Found

> The requested path \`${pathname}\` does not exist on Brandex (https://www.brandex.co.in).

## Machine-Readable Resources for AI Agents
- **Agent Instructions & Directives**: https://www.brandex.co.in/llms.txt
- **Machine Protocol Metadata**: https://www.brandex.co.in/.well-known/agent.json
- **Full XML Sitemap**: https://www.brandex.co.in/sitemap.xml

## Trust Anchors & Core Navigation
- **Homepage**: https://www.brandex.co.in/
- **About Brandex**: https://www.brandex.co.in/about
- **Services**: https://www.brandex.co.in/services
- **Solutions**: https://www.brandex.co.in/solutions
- **Case Studies**: https://www.brandex.co.in/case-studies
- **Contact**: https://www.brandex.co.in/contact
- **Privacy Policy**: https://www.brandex.co.in/privacy-policy
`;
}

export function getMarkdownForRoute(pathname: string): { content: string; status: number } {
  const clean = normalizePath(pathname);

  if (!isKnownRoute(clean)) {
    return {
      content: get404Markdown(clean),
      status: 404
    };
  }

  if (clean === "/about") {
    return {
      status: 200,
      content: `# About Brandex

> Brandex is an end-to-end Technology, Digital Transformation, Business Solutions and Infrastructure Company based in Bangalore, India.

## Our Mission & Philosophy
Every line of code we write serves a concrete business goal. We combine software engineering, cloud infrastructure, AI automation, and cybersecurity to help businesses scale securely.

## Leadership & Founders
- **Sathvik Nagesh**: Founder & CTO ([Profile](https://www.brandex.co.in/team/sathvik-nagesh))
- **Pavan Kumar**: Co-Founder & CEO ([Profile](https://www.brandex.co.in/team/pavan-kumar))

## United Nations Sustainable Development Goals (SDG) Alignment
Brandex supports the UN 2030 Agenda for Sustainable Development, actively aligned with:
- **SDG 4 (Quality Education)**: Applied AI literacy, prompt engineering, and collegiate coding workshops.
- **SDG 8 (Decent Work & Economic Growth)**: Campus Ambassador program, student mentorship, and builder incubation.
- **SDG 9 (Industry, Innovation & Infrastructure)**: Enterprise software (Travel CRM, Invoice Builder) and open-source tooling.
- **SDG 10 (Reduced Inequalities)**: Democratizing access to frontier AI education across tier-2 and tier-3 colleges in Karnataka.
- **SDG 17 (Partnerships for the Goals)**: Institutional university, school, and builder community partnerships.
*(Brandex supports the SDGs. Content has not been approved by the United Nations.)*

## Physical Headquarters & Trust Verification
- **Address**: #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India
- **Phone**: +91 94809 44727
- **Email**: team@brandex.co.in
- **Website**: https://www.brandex.co.in

## Core Values
1. **Purpose-Driven Engineering**: Building scalable systems that solve real operational bottlenecks.
2. **Clarity Over Complexity**: Modern, maintainable architectures using TypeScript, React, and cloud-native services.
3. **Security by Design**: Zero-trust principles integrated across all web and data layers.
4. **Long-Term Partnership**: Continuous support, SLA-backed maintenance, and dedicated technical leadership.
`
    };
  }

  if (clean === "/contact") {
    return {
      status: 200,
      content: `# Contact Brandex

> Get in touch with our engineering and leadership team in Bangalore.

## Direct Inquiries
- **Official Email**: team@brandex.co.in
- **Direct Phone**: +91 94809 44727
- **Response Time**: Within 24 business hours

## Headquarters Location
- **Office**: #121, 13th Main M.C. Layout, Vijaynagar
- **City**: Bangalore - 560040, Karnataka, India
- **Coordinates**: 12.9719° N, 77.5300° E

## Consultation Booking
Visit https://www.brandex.co.in/contact to request a comprehensive architecture review or software development quote.
`
    };
  }

  if (clean === "/privacy-policy" || clean === "/privacy") {
    return {
      status: 200,
      content: `# Brandex Privacy Policy

> Last updated: July 10, 2026. Official privacy and data protection terms for Brandex.

## 1. Information Collection
We collect personal information that you provide directly to us (e.g. name, email, company, project requirements) when contacting us or using our services. Technical data such as browser type and aggregated analytics are collected solely to optimize site performance.

## 2. Use of Information
Your information is strictly used to deliver contracted engineering services, communicate project updates, and fulfill legal compliance. We do not sell, rent, or trade personal data to third parties.

## 3. Data Security & Storage
We employ industry-standard encryption, strict access controls, and zero-trust data protection principles to prevent unauthorized access.

## 4. Inquiries
For privacy questions or data deletion requests, contact us at team@brandex.co.in.
`
    };
  }

  if (clean === "/services") {
    return {
      status: 200,
      content: `# Brandex Services & Capabilities

- **Custom Software Development**: https://www.brandex.co.in/services/software-development
- **High-Performance Web Development**: https://www.brandex.co.in/services/website-development
- **AI & Workflow Automation**: https://www.brandex.co.in/services/ai-automation
- **Cybersecurity & Hardening**: https://www.brandex.co.in/services/cybersecurity

Learn more at https://www.brandex.co.in/services
`
    };
  }

  // Fallback to overview / llms.txt content
  return {
    status: 200,
    content: `# Brandex — End-to-End Technology Solutions

> High-performance custom software, modern web development, business workflow automation, and cybersecurity.

- **Website**: https://www.brandex.co.in
- **Headquarters**: Vijaynagar, Bangalore, India
- **Direct Contact**: team@brandex.co.in | +91 94809 44727
- **Agent Guide**: https://www.brandex.co.in/llms.txt
- **Sitemap**: https://www.brandex.co.in/sitemap.xml
`
  };
}
