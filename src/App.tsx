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

// Main Official Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import FounderProfile from "./pages/FounderProfile";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";

// Education Sub-Portal Pages
import EducationHome from "./pages/education/EducationHome";
import CurriculumExplorer from "./pages/education/CurriculumExplorer";
import ClassDetailPage from "./pages/education/ClassDetailPage";
import SubjectChaptersPage from "./pages/education/SubjectChaptersPage";
import ClassroomPlayer from "./pages/education/ClassroomPlayer";
import EducatorLoginPage from "./pages/education/EducatorLoginPage";
import EducatorAdminPage from "./pages/education/EducatorAdminPage";
import SubjectStudioPage from "./pages/education/SubjectStudioPage";
import LessonPage from "./pages/education/LessonPage";

// Community Sub-Portal Pages
import CommunityHome from "./pages/community/CommunityHome";
import CommunityPage from "./pages/community/CommunityPage";
import EventsPage from "./pages/community/EventsPage";
import EventDetailPage from "./pages/community/EventDetailPage";
import TrainingPage from "./pages/community/TrainingPage";
import TrainingDetailPage from "./pages/community/TrainingDetailPage";
import StoriesPage from "./pages/community/StoriesPage";
import StoryDetailPage from "./pages/community/StoryDetailPage";
import BrandAmbassadorPage from "./pages/community/BrandAmbassadorPage";
import CommunityGuidelinesPage from "./pages/community/CommunityGuidelinesPage";
import WorkWithBrandexPage from "./pages/community/WorkWithBrandexPage";
import ApplicationStatusPage from "./pages/community/ApplicationStatusPage";
import ProjectsPage from "./pages/community/ProjectsPage";
import CareersPage from "./pages/community/CareersPage";
import MediaPage from "./pages/community/MediaPage";
import SearchPage from "./pages/community/SearchPage";
import BrandexHQPage from "./pages/community/BrandexHQPage";
import PrivacyPolicyPage from "./pages/community/PrivacyPolicyPage";
import TermsPage from "./pages/community/TermsPage";
import CommunityEducationPage from "./pages/community/EducationPage";

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
