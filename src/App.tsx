import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import { RegistrationProvider } from "@/community/contexts/RegistrationContext";
import { RegistrationModal } from "@/community/components/ui/RegistrationModal";
import { InstitutionPartnershipModal } from "@/community/components/ui/InstitutionPartnershipModal";

import { lazy, Suspense } from "react";

// Main Official Pages (Index is statically imported for instant zero-delay home render)
import Index from "./pages/Index";
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));
const FounderProfile = lazy(() => import("./pages/FounderProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

// Education Sub-Portal Pages
const EducationHome = lazy(() => import("./pages/education/EducationHome"));
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
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/case-studies/srushti" element={<CaseStudyDetail forcedId="srushti-publications" />} />
            <Route path="/srushti-publications" element={<CaseStudyDetail forcedId="srushti-publications" />} />
            <Route path="/srushti" element={<CaseStudyDetail forcedId="srushti-publications" />} />
            <Route path="/projects/srushti-publications" element={<CaseStudyDetail forcedId="srushti-publications" />} />
            <Route path="/vignan-public-school" element={<CaseStudyDetail forcedId="vignan-public-school" />} />
            <Route path="/vignan-tutorials" element={<CaseStudyDetail forcedId="vignan-tutorials" />} />
            <Route path="/geniusphere" element={<CaseStudyDetail forcedId="geniusphere" />} />
            <Route path="/propquant-ai" element={<CaseStudyDetail forcedId="propquant-ai" />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            
            {/* Education Sub-Portal Routes */}
            <Route path="/education" element={<EducationHome />} />
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
            <Route path="/community/events" element={<EventsPage />} />
            <Route path="/community/events/:slug" element={<EventDetailPage />} />
            <Route path="/community/training" element={<TrainingPage />} />
            <Route path="/community/training/:slug" element={<TrainingDetailPage />} />
            <Route path="/community/stories" element={<StoriesPage />} />
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
            <Route path="/community/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/community/terms" element={<TermsPage />} />
            <Route path="/community/college-partnership" element={<CommunityEducationPage />} />
            <Route path="/community/education-pathways" element={<CommunityEducationPage />} />
            <Route path="/work-with-us" element={<WorkWithBrandexPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:slug" element={<TrainingDetailPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:slug" element={<StoryDetailPage />} />
            <Route path="/ambassador" element={<BrandAmbassadorPage />} />
            <Route path="/status" element={<ApplicationStatusPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/media/photos" element={<MediaPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/brandex" element={<BrandexHQPage />} />
            <Route path="/ecosystem" element={<BrandexHQPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Founder Direct Slug Routes */}
            <Route path="/pavan-kumar" element={<FounderProfile founderKey="pavan" />} />
            <Route path="/pavan" element={<FounderProfile founderKey="pavan" />} />
            <Route path="/founders/pavan" element={<FounderProfile founderKey="pavan" />} />
            <Route path="/sathvik" element={<FounderProfile founderKey="sathvik" />} />
            <Route path="/sathvik-shetty" element={<FounderProfile founderKey="sathvik" />} />
            <Route path="/founders/sathvik" element={<FounderProfile founderKey="sathvik" />} />

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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RegistrationProvider>
          <Routes>
            <Route path="/*" element={<AnimatedRoutes />} />
          </Routes>
          {/* Global Community Modals — driven by RegistrationContext */}
          <RegistrationModal />
          <InstitutionPartnershipModal />
        </RegistrationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
