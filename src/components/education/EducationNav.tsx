import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Tv,
  Layers,
  ShieldCheck,
  Award,
} from "lucide-react";

const educationLinks = [
  { label: "Overview", href: "/education", icon: GraduationCap },
  { label: "Classes 6–10 Syllabus", href: "/education/explore", icon: BookOpen },
  { label: "Live Classroom Player", href: "/education/classroom", icon: Tv },
  { label: "Subject Studio", href: "/education/studio/class-10/science", icon: Layers },
  { label: "Educator Login", href: "/education/login", icon: Award },
  { label: "Admin Console", href: "/education/admin", icon: ShieldCheck },
];

export default function EducationNav() {
  const { pathname } = useLocation();

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-16 z-30 shadow-2xs">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0 hidden sm:inline">
            Education Portals:
          </span>
          {educationLinks.map((tab) => {
            const isActive = pathname === tab.href || (tab.href !== "/education" && pathname.startsWith(tab.href));
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                to={tab.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? "bg-[#4f47e6] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                <Icon size={13} className={isActive ? "text-white" : "text-[#4f47e6]"} />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
