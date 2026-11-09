import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { RegistrationProvider } from "@/community/contexts/RegistrationContext";
import { RegistrationModal } from "@/community/components/ui/RegistrationModal";
import { InstitutionPartnershipModal } from "@/community/components/ui/InstitutionPartnershipModal";

// Main Official Pages (Index is statically imported for instant zero-delay home render)
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const Projects = lazy(() => import("./pages/Projects"));
const Products = lazy(() => import("./pages/Products"));
const TravelCRM = lazy(() => import("./pages/TravelCRM"));
const InvoiceBuilder = lazy(() => import("./pages/InvoiceBuilder"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Careers = lazy(() => import("./pages/Careers"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TeamMember = lazy(() => import("./pages/TeamMember"));
const Pricing = lazy(() => import("./pages/Pricing"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const CRMBridgePage = lazy(() => import("./pages/CRMBridgePage"));

// Education Sub-Portal Pages
const EducationHome = lazy(() => import("./pages/education/EducationHome"));
const EducationWorkshops = lazy(() => import("./pages/EducationWorkshops"));
const CampusAmbassador = lazy(() => import("./pages/CampusAmbassador"));
const CurriculumExplorer = lazy(() => import("./pages/education/CurriculumExplorer"));
const ClassDetailPage = lazy(() => import("./pages/education/ClassDetailPage"));
const SubjectChaptersPage = lazy(() => import("./pages/education/SubjectChaptersPage"));
const ClassroomPlayer = lazy(() => import("./pages/education/ClassroomPlayer"));
const EducatorLoginPage = lazy(() => import("./pages/education/EducatorLoginPage"));
const EducatorAdminPage = lazy(() => import("./pages/education/EducatorAdminPage"));
const SubjectStudioPage = lazy(() => import("./pages/education/SubjectStudioPage"));
const LessonPage = lazy(() => import("./pages/education/LessonPage"));

// Community Sub-Portal Pages
const CommunityHome = lazy(() => import("./pages/community/CommunityHome"));
const CommunityPage = lazy(() => import("./pages/community/CommunityPage"));
const EventsPage = lazy(() => import("./pages/community/EventsPage"));
const EventDetailPage = lazy(() => import("./pages/community/EventDetailPage"));
const TrainingPage = lazy(() => import("./pages/community/TrainingPage"));
const TrainingDetailPage = lazy(() => import("./pages/community/TrainingDetailPage"));
const StoriesPage = lazy(() => import("./pages/community/StoriesPage"));
const StoryDetailPage = lazy(() => import("./pages/community/StoryDetailPage"));
const BrandAmbassadorPage = lazy(() => import("./pages/community/BrandAmbassadorPage"));
const CommunityGuidelinesPage = lazy(() => import("./pages/community/CommunityGuidelinesPage"));
const WorkWithBrandexPage = lazy(() => import("./pages/community/WorkWithBrandexPage"));
const ApplicationStatusPage = lazy(() => import("./pages/community/ApplicationStatusPage"));
const ProjectsPage = lazy(() => import("./pages/community/ProjectsPage"));
const CareersPage = lazy(() => import("./pages/community/CareersPage"));
const MediaPage = lazy(() => import("./pages/community/MediaPage"));
const SearchPage = lazy(() => import("./pages/community/SearchPage"));
const BrandexHQPage = lazy(() => import("./pages/community/BrandexHQPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/community/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/community/TermsPage"));
const CommunityEducationPage = lazy(() => import("./pages/community/EducationPage"));

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.12, ease: "easeIn" as const } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial={false}
          animate="animate"
          exit="exit"
        >
          <Suspense fallback={<div className="min-h-screen bg-[#f8fafd]" />}>
            <Routes location={location}>
              {/* Main Corporate Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/travel-crm" element={<Navigate to="/products/travel-crm" replace />} />
              <Route path="/products/travel-crm" element={<TravelCRM />} />
              <Route path="/projects/invoice-builder" element={<Navigate to="/products/invoice-builder" replace />} />
              <Route path="/products/invoice-builder" element={<InvoiceBuilder />} />
              <Route path="/projects/:id" element={<CaseStudyDetail />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/travel-crm" element={<Navigate to="/products/travel-crm" replace />} />
              <Route path="/case-studies/invoice-builder" element={<Navigate to="/products/invoice-builder" replace />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/case-studies/srushti" element={<Navigate to="/case-studies/srushti-publications" replace />} />
              <Route path="/srushti-publications" element={<Navigate to="/case-studies/srushti-publications" replace />} />
              <Route path="/srushti" element={<Navigate to="/case-studies/srushti-publications" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/team/:slug" element={<TeamMember />} />
              <Route path="/pavan-kumar" element={<Navigate to="/team/pavan-kumar" replace />} />
              <Route path="/pavan" element={<Navigate to="/team/pavan-kumar" replace />} />
              <Route path="/pavan%20kumar" element={<Navigate to="/team/pavan-kumar" replace />} />
              <Route path="/pavan kumar" element={<Navigate to="/team/pavan-kumar" replace />} />
              <Route path="/team/pavan-kumar-s" element={<Navigate to="/team/pavan-kumar" replace />} />
              <Route path="/sathvik" element={<Navigate to="/team/sathvik-nagesh" replace />} />
              <Route path="/sathvik-nagesh" element={<Navigate to="/team/sathvik-nagesh" replace />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogs" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/blogs/:id" element={<BlogPostPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing-and-plans" element={<Navigate to="/pricing" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/cancellation-and-refund" element={<RefundPolicy />} />

              {/* Education Sub-Portal Routes */}
              <Route path="/education" element={<EducationHome />} />
              <Route path="/education/workshops" element={<EducationWorkshops />} />
              <Route path="/workshops" element={<EducationWorkshops />} />
              <Route path="/education/campus-ambassador" element={<CampusAmbassador />} />
              <Route path="/campus-ambassador" element={<CampusAmbassador />} />
              <Route path="/education/explore" element={<CurriculumExplorer />} />
              <Route path="/education/explore/:classId" element={<ClassDetailPage />} />
              <Route path="/education/explore/:classId/:subjectSlug" element={<SubjectChaptersPage />} />
              <Route path="/education/class/:classId" element={<ClassDetailPage />} />
              <Route path="/education/class/:classId/:subjectSlug" element={<SubjectChaptersPage />} />
              <Route path="/education/classroom" element={<ClassroomPlayer />} />
              <Route path="/education/studio/:classId/:subjectSlug" element={<SubjectStudioPage />} />
              <Route path="/education/lesson/:slug" element={<LessonPage />} />
              <Route path="/education/login" element={<EducatorLoginPage />} />
              <Route path="/education/admin" element={<EducatorAdminPage />} />
              <Route path="/explore" element={<CurriculumExplorer />} />
              <Route path="/explore/:classId" element={<ClassDetailPage />} />
              <Route path="/explore/:classId/:subjectSlug" element={<SubjectChaptersPage />} />
              <Route path="/classroom" element={<ClassroomPlayer />} />
              <Route path="/studio/:classId/:subjectSlug" element={<SubjectStudioPage />} />
              <Route path="/lesson/:slug" element={<LessonPage />} />
              <Route path="/login" element={<EducatorLoginPage />} />
              <Route path="/admin" element={<EducatorAdminPage />} />

              {/* Community Sub-Portal Routes */}
              <Route path="/community" element={<CommunityHome />} />
              <Route path="/community/events" element={<Navigate to="/events" replace />} />
              <Route path="/community/events/:slug" element={<EventDetailPage />} />
              <Route path="/community/training" element={<Navigate to="/training" replace />} />
              <Route path="/community/training/:slug" element={<TrainingDetailPage />} />
              <Route path="/community/stories" element={<Navigate to="/stories" replace />} />
              <Route path="/community/stories/:slug" element={<StoryDetailPage />} />
              <Route path="/community/ambassador" element={<BrandAmbassadorPage />} />
              <Route path="/community/status" element={<ApplicationStatusPage />} />
              <Route path="/community/projects" element={<ProjectsPage />} />
              <Route path="/community/careers" element={<CareersPage />} />
              <Route path="/community/media" element={<MediaPage />} />
              <Route path="/community/search" element={<SearchPage />} />
              <Route path="/community/brandex" element={<BrandexHQPage />} />
              <Route path="/community/guidelines" element={<CommunityGuidelinesPage />} />
              <Route path="/community/work-with-us" element={<WorkWithBrandexPage />} />
              <Route path="/community/overview" element={<CommunityPage />} />
              <Route path="/community/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/community/terms" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="/community/college-partnership" element={<CommunityEducationPage />} />
              <Route path="/community/education-pathways" element={<CommunityEducationPage />} />

              {/* Primary Community Shortcuts */}
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/training/:slug" element={<TrainingDetailPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/stories/:slug" element={<StoryDetailPage />} />

              {/* Legacy & Convenience Redirects */}
              <Route path="/crm" element={<CRMBridgePage />} />
              <Route path="/crm-bridge" element={<CRMBridgePage />} />
              <Route path="/application-status" element={<Navigate to="/community/status" replace />} />
              <Route path="/work-with-us" element={<Navigate to="/community/work-with-us" replace />} />
              <Route path="/ambassador" element={<Navigate to="/community/ambassador" replace />} />
              <Route path="/status" element={<Navigate to="/community/status" replace />} />
              <Route path="/media" element={<Navigate to="/community/media" replace />} />
              <Route path="/search" element={<Navigate to="/community/search" replace />} />
              <Route path="/brandex" element={<Navigate to="/community/brandex" replace />} />
              <Route path="/ecosystem" element={<Navigate to="/community/brandex" replace />} />
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RegistrationProvider>
            <Routes>
              <Route path="/*" element={<AnimatedRoutes />} />
            </Routes>
            {/* Global Community Modals driven by RegistrationContext */}
            <RegistrationModal />
            <InstitutionPartnershipModal />
          </RegistrationProvider>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
