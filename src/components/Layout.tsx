import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "./PageLoader";
import ScrollToTop from "./ScrollToTop";
import WhatsAppWidget from "./WhatsAppWidget";
import { ProductCheckoutProvider } from "@/contexts/ProductCheckoutContext";
import ProductCheckoutModal from "./ProductCheckoutModal";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isClassroomMode = pathname.startsWith("/classroom") || pathname.startsWith("/education/classroom");

  if (isClassroomMode) {
    return (
      <div className="min-h-screen bg-[#090e1a] text-slate-100 flex flex-col">
        <ScrollToTop />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <ProductCheckoutProvider>
      <div className="min-h-screen flex flex-col">
        <PageLoader />
        <ScrollToTop />
        <Navbar />
        <main className={`flex-1 ${pathname === "/" ? "" : "pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.5rem+env(safe-area-inset-top,0px))]"}`}>{children}</main>
        <WhatsAppWidget />
        <ProductCheckoutModal />
        <Footer />
      </div>
    </ProductCheckoutProvider>
  );
}
