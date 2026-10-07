const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define all pages and categories to generate images for
const pages = [
  // Core Pages
  { id: 'home', title: 'Brandex', subtitle: 'Technology, AI, Infrastructure & Business Solutions' },
  { id: 'about', title: 'About Brandex', subtitle: 'Built for Business' },
  { id: 'contact', title: 'Contact Us', subtitle: 'Start Your Project with Brandex' },
  { id: 'careers', title: 'Careers at Brandex', subtitle: 'Join Our Team' },
  { id: 'faq', title: 'Frequently Asked Questions', subtitle: 'Everything you need to know' },
  { id: 'terms', title: 'Terms & Conditions', subtitle: 'Legal Information' },
  { id: 'privacy', title: 'Privacy Policy', subtitle: 'How we handle your data' },
  { id: '404', title: 'Page Not Found', subtitle: 'Error 404' },
  
  // Hub Pages
  { id: 'services', title: 'Our Services', subtitle: 'End-to-End Business Solutions' },
  { id: 'solutions', title: 'Business Solutions', subtitle: 'Tailored Technology & Infrastructure' },
  { id: 'industries', title: 'Industries We Serve', subtitle: 'Expertise Across Sectors' },
  { id: 'resources', title: 'Resources Hub', subtitle: 'Insights, Guides & Case Studies' },
  { id: 'blog', title: 'Brandex Blog', subtitle: 'Latest News & Tech Insights' },
  { id: 'case-studies', title: 'Case Studies', subtitle: 'Client Success Stories' },

  // Individual Services
  { id: 'software-development', title: 'Software Development', subtitle: 'Custom ERP, CRM & Web Apps' },
  { id: 'website-development', title: 'Website Development', subtitle: 'High-Performance Web Experiences' },
  { id: 'mobile-app-development', title: 'Mobile App Development', subtitle: 'iOS, Android & Cross-Platform Apps' },
  { id: 'ai-and-automation', title: 'AI & Automation', subtitle: 'Intelligent Business Workflows' },
  { id: 'cybersecurity', title: 'Cybersecurity', subtitle: 'Enterprise Security & Protection' },
  { id: 'cloud-and-it', title: 'Cloud & IT', subtitle: 'Server, Cloud & Infrastructure Setup' },
  { id: 'branding', title: 'Branding & Design', subtitle: 'Identity, UI/UX & Creative Strategy' },
  { id: 'digital-marketing', title: 'Digital Marketing', subtitle: 'SEO, Ads & Growth Strategy' },

  // Individual Industries
  { id: 'startups-msmes', title: 'Startups & MSMEs', subtitle: 'Scalable Solutions for Growing Businesses' },
  { id: 'retail-restaurants', title: 'Retail & Restaurants', subtitle: 'POS, Tech & Interior Setup' },
  { id: 'healthcare', title: 'Healthcare', subtitle: 'Hospital Management & IT Infrastructure' },
  { id: 'education', title: 'Education', subtitle: 'School Management & Smart Classrooms' },
  { id: 'real-estate', title: 'Real Estate', subtitle: 'PropTech, Portals & Marketing' },
  { id: 'manufacturing', title: 'Manufacturing', subtitle: 'Automation & ERP Solutions' },
];

const OUT_DIR = path.join(__dirname, '../public/og');

// Ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function generateOGImages() {
  console.log('Generating OG Images...');

  // We will load the logo to composite on top
  // Using original main_logo.png as it might be better colored for a white bg
  const logoPath = path.join(__dirname, '../public/main_logo.webp');
  let logoBuffer = null;
  
  if (fs.existsSync(logoPath)) {
    // Resize logo to fit nicely in the header of the OG image
    logoBuffer = await sharp(logoPath)
      .resize({ height: 80, fit: 'contain' })
      .toBuffer();
  } else {
    console.warn("main_logo.webp not found. Text 'Brandex' will be used in SVG.");
  }

  // XML encode function
  const escapeXml = (unsafe) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case "'": return '&apos;';
        case '"': return '&quot;';
      }
    });
  };

  for (const page of pages) {
    const safeTitle = escapeXml(page.title);
    const safeSubtitle = escapeXml(page.subtitle);

    // SVG Template
    // Accent color: #3b82f6 (blue-500) or brand default
    const svgContent = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#f8fafc"/>
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563eb"/>
            <stop offset="100%" stop-color="#3b82f6"/>
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bgGrad)"/>
        
        <!-- Decorative Top Accent Bar -->
        <rect width="1200" height="12" fill="url(#accentGrad)"/>
        
        <!-- Decorative grid/dots in corner (optional subtle design) -->
        <circle cx="1100" cy="530" r="150" fill="#3b82f6" opacity="0.03" />
        <circle cx="1000" cy="600" r="200" fill="#2563eb" opacity="0.04" />

        <!-- Logo Placeholder (if image missing) -->
        ${!logoBuffer ? `<text x="80" y="120" font-family="system-ui, sans-serif" font-size="42" font-weight="800" fill="#0f172a">Brandex</text>` : ''}
        
        <!-- Content -->
        <text x="80" y="320" font-family="system-ui, sans-serif" font-size="76" font-weight="800" fill="#0f172a" letter-spacing="-1">${safeTitle}</text>
        <text x="80" y="390" font-family="system-ui, sans-serif" font-size="36" font-weight="500" fill="#64748b">${safeSubtitle}</text>
        
        <!-- Footer / Domain -->
        <rect x="80" y="520" width="220" height="48" rx="24" fill="#f1f5f9" />
        <text x="104" y="551" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#475569">www.brandex.co.in</text>
      </svg>
    `;

    const svgBuffer = Buffer.from(svgContent);

    try {
      let image = sharp(svgBuffer);

      // Composite logo if available (placed at x: 80, y: 70 to align with top-left)
      if (logoBuffer) {
        image = image.composite([
          { input: logoBuffer, top: 70, left: 80 }
        ]);
      }

      await image.png().toFile(path.join(OUT_DIR, `${page.id}.png`));
      console.log(`✅ Generated OG Image: ${page.id}.png`);
    } catch (err) {
      console.error(`❌ Error generating ${page.id}.png:`, err);
    }
  }

  console.log('🎉 All OG images generated successfully!');
}

generateOGImages();
