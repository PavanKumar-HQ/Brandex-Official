import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.brandex.co.in';

// All service slugs (must match servicesData.ts)
const services = ['software-development', 'website-development', 'ai-automation', 'cybersecurity'];

// All case study IDs (must match projects.ts)
const caseStudies = [
  'the-man-wanders-globe',
  'vignan-public-school',
  'vignan-tutorials',
  'srushti-publications',
  'geniusphere',
  'qshala-quiz-league'
];

// All blog post IDs (must match blogPosts.ts)
const blogPosts = [
  'how-we-built-brandex-travel-crm-itinerary-automation',
  'why-lifetime-licenses-beat-saas-subscriptions-invoice-builder',
  'how-to-choose-erp-system-india-2026',
  'whatsapp-business-api-automation-guide',
  'website-redesign-checklist-conversion-audit',
  'cybersecurity-checklist-sme-india-dpdp',
  'ai-customer-service-bots-roi-benchmarks',
  'full-stack-web-architecture-checklist-2026',
  'astro-framework-high-performance-websites',
  'luxury-ui-ux-high-ticket-conversion',
  'core-web-vitals-inp-mastery',
  'autonomous-ai-agents-in-production',
  'saas-growth-engineering-retention',
  'ecommerce-architecture-bangalore',
  'nextjs-vs-react-startup',
  'local-seo-bangalore',
  'ui-fundamentals-for-founders',
  'zero-trust-cybersecurity',
  'ai-automation-paradox',
  'seo-growth-strategies',
  'engineering-for-scale',
  'power-of-branding',
  'ai-in-web-development'
];

// Route definitions with SEO metadata
// NOTE: /contact-us is intentionally excluded — it 301-redirects to /contact via vercel.json
const routes = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/projects/travel-crm', changefreq: 'weekly', priority: '0.9' },
  { path: '/products/travel-crm', changefreq: 'weekly', priority: '0.9' },
  { path: '/products/invoice-builder', changefreq: 'weekly', priority: '0.9' },
  { path: '/pricing', changefreq: 'weekly', priority: '0.9' },
  { path: '/community', changefreq: 'weekly', priority: '0.9' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/stories', changefreq: 'weekly', priority: '0.8' },
  { path: '/training', changefreq: 'weekly', priority: '0.8' },
  { path: '/education', changefreq: 'weekly', priority: '0.9' },
  { path: '/education/workshops', changefreq: 'weekly', priority: '0.8' },
  { path: '/education/campus-ambassador', changefreq: 'monthly', priority: '0.7' },
  { path: '/solutions', changefreq: 'weekly', priority: '0.9' },
  { path: '/industries', changefreq: 'monthly', priority: '0.8' },
  { path: '/case-studies', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/team/sathvik-nagesh', changefreq: 'monthly', priority: '0.8' },
  { path: '/team/pavan-kumar', changefreq: 'monthly', priority: '0.8' },
  { path: '/resources', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/careers', changefreq: 'monthly', priority: '0.6' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/refund-policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  // Service detail pages
  ...services.map(slug => ({
    path: `/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  // Case study pages
  ...caseStudies.map(id => ({
    path: `/case-studies/${id}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
  // Blog post pages
  ...blogPosts.map(id => ({
    path: `/blog/${id}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

async function generateSitemap() {
  const sitemapPath = path.resolve(process.cwd(), 'dist', 'sitemap.xml');
  const today = new Date().toISOString().split('T')[0];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${BASE_URL}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  try {
    const publicSitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(publicSitemapPath, sitemapXML);
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
      fs.writeFileSync(sitemapPath, sitemapXML);
    }
    console.log(`✅ Generated sitemap.xml with ${routes.length} URLs.`);
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
  }
}

generateSitemap();
