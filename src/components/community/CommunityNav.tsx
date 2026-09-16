import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Code2,
  Calendar,
  GraduationCap,
  MessageSquare,
  Zap,
  Share2,
  Award,
  ShieldCheck,
  Search,
  BookOpen,
  Building2,
} from "lucide-react";

const communityLinks = [
  { label: "Overview", href: "/community", icon: Users },
  { label: "Projects", href: "/community/projects", icon: Code2 },
  { label: "Events", href: "/community/events", icon: Calendar },
  { label: "Training", href: "/community/training", icon: GraduationCap },
  { label: "College Partnership", href: "/community/college-partnership", icon: Building2 },
  { label: "Stories", href: "/community/stories", icon: MessageSquare },
  { label: "Careers", href: "/community/careers", icon: Zap },
  { label: "Media", href: "/community/media", icon: Share2 },
  { label: "Ambassador", href: "/community/ambassador", icon: Award },
  { label: "Status", href: "/community/status", icon: ShieldCheck },
  { label: "Guidelines", href: "/community/guidelines", icon: BookOpen },
  { label: "Search", href: "/community/search", icon: Search },
];

export default function CommunityNav() {
  const { pathname } = useLocation();

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-16 z-30 shadow-2xs">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0 hidden sm:inline">
            Community Portals:
          </span>
          {communityLinks.map((tab) => {
            const isActive = pathname === tab.href || (tab.href !== "/community" && pathname.startsWith(tab.href));
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
