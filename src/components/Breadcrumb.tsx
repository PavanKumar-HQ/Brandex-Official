import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.brandex.co.in";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for the current (last) item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Renders a visible breadcrumb navigation and injects BreadcrumbList JSON-LD.
 * Always prepends "Home" as the first item automatically.
 * Ensures 100% of ListItems include an 'item' URL to guarantee zero Search Console Breadcrumb errors.
 *
 * Usage:
 *   <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Software Development" }]} />
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "" : location.pathname.replace(/\/$/, "");
  const currentUrl = `${BASE_URL}${currentPath}`;

  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;
      const targetUrl = item.href ? `${BASE_URL}${item.href}` : currentUrl;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: targetUrl,
      };
    }),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap ${className}`}
      >
        <ol className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    size={13}
                    className="text-muted-foreground/40 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-foreground font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
