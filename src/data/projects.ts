export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  result: string;
  challenge: string;
  mockup: "ordering" | "dashboard" | "learning" | "mobile" | "booking" | "automation";
  url?: string;
  logo?: string;
  duration?: string;
  services?: string[];
  features?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "vignan-public-school",
    title: "Vignan Public School",
    category: "Web",
    description: "Modern educational institution website with comprehensive information architecture for students and parents.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Digital Presence",
    challenge: "Needed a digital front door that reflects their academic excellence and engages parents effectively.",
    mockup: "learning",
    url: "https://www.vignanschool.com",
    logo: "/Clients/Vigan Public School.png",
    duration: "4 Weeks",
    services: ["Web Development", "UI/UX Design"],
    features: ["Responsive Design", "Information Architecture"],
  },
  {
    id: "vignan-tutorials",
    title: "Vignan Tutorials",
    category: "Web",
    description: "Interactive learning platform for student tutorials, featuring streamlined navigation and dynamic content.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Learning Platform",
    challenge: "Required an accessible online presence to complement their physical tutoring services.",
    mockup: "learning",
    url: "https://www.vignantutorials.in",
    logo: "/Clients/Vignan Tutorials.png",
    duration: "4 Weeks",
    services: ["Web Development", "UI/UX Design"],
    features: ["Dynamic Content", "Mobile Optimized"],
  },
  {
    id: "srushti-publications",
    title: "Srushti Publications",
    category: "Web",
    description: "Complete E-commerce platform for Kannada books featuring advanced searching, guest checkout, Razorpay payment processing, and an admin dashboard.",
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "Razorpay"],
    result: "Complete E-Commerce",
    challenge: "Needed a modern, high-performance platform to sell regional books efficiently with instant transactions.",
    mockup: "ordering",
    url: "https://srushtipublications.com/",
    logo: "/Clients/Srushti Logo-2 (1).jpg",
    duration: "6 Weeks",
    services: ["UI/UX Design", "Custom Web Development", "Payment Integration", "Admin Dashboard"],
    features: ["Guest Checkout", "Grid/List Catalog views", "Razorpay UPI/Cards", "Automated Invoicing"],
  },
  {
    id: "geniusphere",
    title: "GeniuSphere",
    category: "Application",
    description: "Robust Learning Management System featuring real-time 3D lab simulations, an integrated CMS, and a granular student progress tracking module.",
    tech: ["Next.js", "React Three Fiber", "Node.js", "MongoDB"],
    result: "Interactive 3D Labs",
    challenge: "Standard LMS solutions lacked immersive engagement and interactive simulations necessary for modern learning.",
    mockup: "learning",
    url: "https://www.geniusphere.tech",
    logo: "/Clients/Geniusphere.jpg",
    duration: "12 Weeks",
    services: ["Custom LMS Development", "3D WebGL Experiences", "Backend CMS"],
    features: ["Interactive 3D WebGL", "Student Progress Tracking", "Course Management"],
  },
  {
    id: "propquant-ai",
    title: "PropQuant.ai",
    category: "Automation",
    description: "Automated AI-driven trading platform integrated with MT5. Executing high-precision, emotion-free trading strategies focused on scaling funded accounts.",
    tech: ["Python", "MT5 APIs", "Next.js", "AI Architecture"],
    result: "Precision Trading",
    challenge: "Human emotion caused inconsistent trading results; needed a highly reliable, completely automated AI solution.",
    mockup: "dashboard",
    url: "https://www.propquant.ai",
    logo: "/Clients/PropQuant.ai_logo.png",
    duration: "10 Weeks",
    services: ["Algorithmic Trading System", "API Integration", "Web Dashboard"],
    features: ["Real-time execution", "Emotion-free scaling", "MT5 direct sync"],
  },
];
