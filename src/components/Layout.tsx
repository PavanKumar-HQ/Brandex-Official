import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "./PageLoader";
import ScrollToTop from "./ScrollToTop";
import SEOHead from "./SEOHead";
import CommunityNav from "./community/CommunityNav";
import EducationNav from "./education/EducationNav";

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

  const isCommunitySection =
    pathname.startsWith("/community") ||
    pathname === "/projects" ||
    pathname === "/careers" ||
    pathname === "/media" ||
    pathname === "/stories" ||
    pathname === "/status" ||
    pathname === "/events" ||
    pathname === "/training" ||
    pathname === "/ambassador";

  const isEducationSection =
    pathname.startsWith("/education") ||
    pathname === "/explore" ||
    pathname === "/studio" ||
    pathname === "/login" ||
    pathname === "/admin";

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafd]">
      <SEOHead />
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      {isCommunitySection && <CommunityNav />}
      {isEducationSection && <EducationNav />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
