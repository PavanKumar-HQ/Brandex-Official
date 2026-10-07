import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.brandex.co.in";
const LOGO_URL = `${BASE_URL}/main_logo.webp`;
const LOGO_WEBP = `${BASE_URL}/main_logo.webp`;

interface SEOTagsProps {
  title: string;
  description: string;
  keywords?: string;
  category?: string;
  author?: string;
  badge?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
  schema?: Record<string, any> | Record<string, any>[];
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function SEOTags({
  title,
  description,
  keywords,
  category,
  author,
  badge,
  type = "website",
  image,
  imageAlt,
  imageWidth = "1200",
  imageHeight = "630",
  schema,
  canonicalUrl,
  noindex = false,
}: SEOTagsProps) {
  const { pathname } = useLocation();

  // Clean canonical URL — no trailing slashes
  const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  const url = canonicalUrl || `${BASE_URL}${cleanPath}`;

  // Build dynamic OG URL params
  const ogParams = new URLSearchParams();
  ogParams.set("title", title.split("|")[0].split("—")[0].trim());
  if (category) ogParams.set("category", category);
  if (author) ogParams.set("author", author);
  if (badge) ogParams.set("badge", badge);
  if (description) ogParams.set("description", description.slice(0, 140));

  // Resolve OG image: prefer explicitly provided static image → fallback to dynamic Vercel OG image
  const resolvedImage = image
    ? (image.startsWith("http") ? image : `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`)
    : `${BASE_URL}/api/og?${ogParams.toString()}`;

  const finalImage = resolvedImage;
  const finalImageAlt = imageAlt || `${title} — Brandex`;

  // Automated BreadcrumbList Schema for structured hierarchy
  const pathSegments = cleanPath.split("/").filter(Boolean);
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    },
    ...pathSegments.map((segment, index) => {
      const itemUrl = `${BASE_URL}/${pathSegments.slice(0, index + 1).join("/")}`;
      const itemName = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": index === pathSegments.length - 1 ? title.split("|")[0].split("—")[0].trim() : itemName,
        "item": itemUrl
      };
    })
  ];

  // Base schema graph
  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "Brandex",
        "alternateName": ["Brandex Labs", "Brandex Digital", "Brandex Technology"],
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          "url": LOGO_WEBP,
          "contentUrl": LOGO_WEBP,
          "width": 512,
          "height": 512,
          "caption": "Brandex"
        },
        "image": {
          "@type": "ImageObject",
          "url": LOGO_URL,
          "width": 512,
          "height": 512
        },
        "slogan": "Built for Business.",
        "description": "End-to-end Technology, Digital Transformation, Business Solutions and Infrastructure Company based in Bangalore, India.",
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "#121, 13th Main M.C. Layout, Vijaynagar",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560040",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9719,
          "longitude": 77.5300
        },
        "identifier": {
          "@type": "PropertyValue",
          "name": "GSTIN",
          "value": "29OGNPS8060K1Z5"
        },
        "areaServed": [
          { "@type": "City", "name": "Bangalore" },
          { "@type": "State", "name": "Karnataka" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Brandex Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development", "url": `${BASE_URL}/services/software-development` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "url": `${BASE_URL}/services/website-development` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Workflow Automation", "url": `${BASE_URL}/services/ai-automation` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity", "url": `${BASE_URL}/services/cybersecurity` } }
          ]
        },
        "sameAs": [
          "https://www.instagram.com/brandexlabs/",
          "https://x.com/brandexlabs",
          "https://www.linkedin.com/company/brandex-lab",
          "https://github.com/brandex",
          "https://discord.gg/brandex"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9480944727",
            "email": "team@brandex.co.in",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Kannada"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-9480944727",
            "email": "team@brandex.co.in",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Kannada"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "Brandex",
        "description": "Next-Gen Digital Solutions for Ambitious Brands",
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/solutions?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": title,
        "description": description,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@id": `${BASE_URL}/#organization` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": finalImage
        }
      },
      ...(pathSegments.length > 0 ? [{
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": breadcrumbElements
      }] : [])
    ]
  };

  // Merge additional page-level schema
  if (schema) {
    if (Array.isArray(schema)) {
      (baseSchema["@graph"] as any[]).push(...schema);
    } else {
      (baseSchema["@graph"] as any[]).push(schema);
    }
  }

  return (
    <Helmet>
      {/* ── Primary Meta ───────────────────────────────── */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Brandex" />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={url} />

      {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ──── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:secure_url" content={finalImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={finalImageAlt} />
      <meta property="og:site_name" content="Brandex" />
      <meta property="og:locale" content="en_IN" />
      {/* Logo explicitly for platforms that support it */}
      <meta property="og:logo" content={LOGO_URL} />

      {/* ── Twitter / X Card ───────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@brandexlabs" />
      <meta name="twitter:creator" content="@brandexlabs" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={finalImageAlt} />

      {/* ── LinkedIn specific ──────────────────────────── */}
      <meta property="linkedin:owner" content="brandexlabs" />

      {/* ── Googlebot / Bingbot directives ────────────── */}
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* ── Structured Data ───────────────────────────── */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
}
