import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import SEOHead from "./SEOHead";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isClassroomMode = pathname.startsWith("/classroom") || pathname.startsWith("/education/classroom");

  if (isClassroomMode) {
    return (
      <div className="min-h-screen bg-[#090e1a] text-slate-100 flex flex-col">
        <SEOHead />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafd]">
      <SEOHead />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
