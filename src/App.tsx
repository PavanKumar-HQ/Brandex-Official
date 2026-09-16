import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";

// Main Official Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
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
import ClassroomPlayer from "./pages/education/ClassroomPlayer";

// Community Sub-Portal Pages
import CommunityHome from "./pages/community/CommunityHome";
import EventsPage from "./pages/community/EventsPage";
import EventDetailPage from "./pages/community/EventDetailPage";
import TrainingPage from "./pages/community/TrainingPage";
import TrainingDetailPage from "./pages/community/TrainingDetailPage";
import StoriesPage from "./pages/community/StoriesPage";
import BrandAmbassadorPage from "./pages/community/BrandAmbassadorPage";
import CommunityGuidelinesPage from "./pages/community/CommunityGuidelinesPage";
import WorkWithBrandexPage from "./pages/community/WorkWithBrandexPage";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" as const } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            {/* Main Corporate Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            
            {/* Education Sub-Portal Routes */}
            <Route path="/education" element={<EducationHome />} />
            <Route path="/education/explore" element={<CurriculumExplorer />} />
            <Route path="/education/explore/:classId" element={<CurriculumExplorer />} />
            <Route path="/education/classroom" element={<ClassroomPlayer />} />
            <Route path="/explore" element={<CurriculumExplorer />} />
            <Route path="/explore/:classId" element={<CurriculumExplorer />} />
            <Route path="/classroom" element={<ClassroomPlayer />} />

            {/* Community Sub-Portal Routes */}
            <Route path="/community" element={<CommunityHome />} />
            <Route path="/community/events" element={<EventsPage />} />
            <Route path="/community/events/:slug" element={<EventDetailPage />} />
            <Route path="/community/training" element={<TrainingPage />} />
            <Route path="/community/training/:slug" element={<TrainingDetailPage />} />
            <Route path="/community/stories" element={<StoriesPage />} />
            <Route path="/community/ambassador" element={<BrandAmbassadorPage />} />
            <Route path="/community/guidelines" element={<CommunityGuidelinesPage />} />
            <Route path="/community/work-with-us" element={<WorkWithBrandexPage />} />
            <Route path="/work-with-us" element={<WorkWithBrandexPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:slug" element={<TrainingDetailPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/ambassador" element={<BrandAmbassadorPage />} />
            
            {/* Founder Direct Slug Routes */}
            <Route path="/pavan-kumar" element={<FounderProfile founderKey="pavan" />} />
            <Route path="/pavan" element={<FounderProfile founderKey="pavan" />} />
            <Route path="/sathvik" element={<FounderProfile founderKey="sathvik" />} />
            <Route path="/sathvik-shetty" element={<FounderProfile founderKey="sathvik" />} />

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
        <Routes>
          <Route path="/*" element={<AnimatedRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
