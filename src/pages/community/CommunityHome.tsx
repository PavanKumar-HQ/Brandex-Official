import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Calendar,
  GraduationCap,
  Award,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Share2,
  Zap,
  Building2,
} from "lucide-react";
import { getCommunities, getDiscussions, getOpportunities } from "@/community/repositories/repository";
import type { Community, Discussion, Opportunity } from "@/community/models/types";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/community/contexts/RegistrationContext";

export default function CommunityHome() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { openModal } = useRegistration();

  useEffect(() => {
    async function loadData() {
      const [comms, disc, opps] = await Promise.all([
        getCommunities(selectedCategory),
        getDiscussions(),
        getOpportunities(),
      ]);
      setCommunities(comms);
      setDiscussions(disc);
      setOpportunities(opps);
    }
    loadData();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Hero */}
        <div className="border-b border-slate-200/90 pb-10 space-y-4">
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#4f47e6] uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Brandex Builders & Founders Club
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                An ecosystem for <span className="text-[#4f47e6]">builders, founders & creators</span>.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Connect with 500+ software engineers, product architects, and startup founders in Bangalore and worldwide. Real peer reviews, live meetups, and open-source sprints.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button asChild variant="brand" size="lg" className="rounded-xl font-bold shadow-md">
                <Link to="/community/events" className="flex items-center gap-2">
                  <Calendar size={15} />
                  <span>Upcoming Meetups</span>
                </Link>
              </Button>
              <Button asChild variant="liquidGlass" size="lg" className="rounded-xl font-bold border border-slate-300">
                <Link to="/community/training">
                  <span>Explore Sprints</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 1. WHATSAPP & TELEGRAM JOIN CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="liquid-glass-card hover:bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Official WhatsApp Channel
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  1,400+ Members
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Brandex Builders WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive instant summit alerts, weekly circle reminders, workshop links, and direct community announcements on WhatsApp.
              </p>
            </div>

            <div>
              <a
                href="https://chat.whatsapp.com/JYJokicBTSE4suaJ2pKvgI?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all hover:scale-102"
              >
                <span>Join WhatsApp Group</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="liquid-glass-card hover:bg-white rounded-3xl p-8 border border-indigo-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f47e6] bg-indigo-100/80 px-2.5 py-0.5 rounded-full">
                  Developer Server
                </span>
                <span className="text-xs font-mono font-bold text-[#4f47e6]">
                  2,850+ Online
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Brandex Discord Server
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Live voice channels for buildathons, pair programming rooms, cybersecurity wargame lobbies, and AI research channels.
              </p>
            </div>

            <div>
              <a
                href="https://discord.gg/6MVYPzBn9g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs shadow-md transition-all hover:scale-102"
              >
                <span>Enter Discord Server</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. SPECIALIZED TECHNOLOGY CIRCLES */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Technology Domain Circles
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Collaborate on real open-source architectures in specialized guilds.
              </p>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
              {["All", "AI & ML", "Cybersecurity", "Cloud & DevOps", "Design Systems"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? "bg-[#4f47e6] text-white shadow-2xs"
                      : "liquid-glass text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.slice(0, 6).map((circle) => (
              <div
                key={circle.id}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full">
                      {circle.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {circle.memberCount || 0} Members
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {circle.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {circle.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Code2 size={13} className="text-[#4f47e6]" />
                      <span>{circle.activeTopicsCount || 12} Active Repos & Builds</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Weekly Syncs</span>
                  <button
                    onClick={() => openModal('community')}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-[#4f47e6] text-[#4f47e6] hover:text-white font-bold text-xs flex items-center gap-1 transition-all"
                  >
                    <span>Join Circle</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. QUICK SUB-BRANCH PORTALS */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Community Hub & Portals
            </h2>
            <Link
              to="/community/search"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-[#4f47e6] text-[#4f47e6] hover:text-white border border-indigo-100/80 text-xs font-bold transition-all shadow-2xs group self-start sm:self-auto"
            >
              <span>Search All Portals</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/community/projects"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Code2 size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Open-Source Projects</h3>
                <p className="text-xs text-slate-500 mb-4">Explore active community repositories, core architectures, and contribute to production tools.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Browse Projects</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/events"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Calendar size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Meetups & Sprints</h3>
                <p className="text-xs text-slate-500 mb-4">Explore in-person Bangalore meetups, hack sprints, and live system teardowns.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Browse Events</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/training"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <GraduationCap size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Training Bootcamps</h3>
                <p className="text-xs text-slate-500 mb-4">Hands-on master modules in sub-second web performance, databases & webhook architecture.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>View Curriculum</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/careers"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Zap size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Careers & Roles</h3>
                <p className="text-xs text-slate-500 mb-4">Apply to engineering, design, and developer relations roles within the Brandex ecosystem.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>View Open Positions</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/stories"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <MessageSquare size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Builder Stories</h3>
                <p className="text-xs text-slate-500 mb-4">In-depth case journeys and interviews from engineers building high-scale applications.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Read Stories</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/status"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <ShieldCheck size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Application Tracker</h3>
                <p className="text-xs text-slate-500 mb-4">Check your live application status for ambassador, internship, and partner programs.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Check Status</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/college-partnership"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Building2 size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">College Partnership</h3>
                <p className="text-xs text-slate-500 mb-4">Partner with Brandex through school programs, university research mentorship, and campus innovation tracks.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Partner With Us</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/ambassador"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Award size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Brand Ambassador</h3>
                <p className="text-xs text-slate-500 mb-4">Lead campus chapters, organize local tech circles, and gain exclusive fellowship grants.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Apply as Ambassador</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/media"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <Share2 size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Media Vault & Gallery</h3>
                <p className="text-xs text-slate-500 mb-4">High-resolution summit captures, brand assets, and event documentation.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>View Media</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            <Link
              to="/community/guidelines"
              className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <CheckCircle2 size={26} className="text-[#4f47e6] mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Community Guidelines</h3>
                <p className="text-xs text-slate-500 mb-4">Our code of conduct, peer collaboration rules, and security guidelines.</p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50/80 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100/80 group-hover:border-[#4f47e6] text-xs font-bold transition-all shadow-2xs">
                  <span>Read Guidelines</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
