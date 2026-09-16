import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Calendar,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Share2,
  Zap,
} from "lucide-react";
import { getCommunities, getDiscussions, getOpportunities } from "@/data/community/repository";
import { Community, Discussion, Opportunity } from "@/models/community";
import { Button } from "@/components/ui/button";

export default function CommunityHome() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
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
                  Global Telegram Club
                </span>
                <span className="text-xs font-mono font-bold text-[#4f47e6]">
                  500+ Active Builders
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Brandex Telegram Community
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deep architectural teardowns, peer founder feedback circles, and direct access to Bangalore engineering meetups.
              </p>
            </div>

            <div>
              <a
                href="https://t.me/brandexcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs shadow-md transition-all hover:scale-102"
              >
                <span>Join Telegram Community</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. SPECIALIZED TECHNOLOGY CIRCLES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Technology Domain Circles
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Collaborate on real open-source architectures in specialized guilds.
              </p>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto">
              {["All", "AI & ML", "Cybersecurity", "Cloud & DevOps", "Design Systems"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
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
                      {circle.membersCount} Members
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
                      <span>{circle.activeProjectCount} Active Repos & Builds</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Weekly Syncs</span>
                  <a
                    href="https://t.me/brandexcommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-[#4f47e6] text-[#4f47e6] hover:text-white font-bold text-xs flex items-center gap-1 transition-all"
                  >
                    <span>Join Circle</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. QUICK SUB-BRANCH PORTALS */}
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <Link
            to="/community/events"
            className="liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <Calendar size={28} className="text-[#4f47e6] mb-3" />
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Meetups & Sprints</h3>
            <p className="text-xs text-slate-500 mb-3">Explore in-person Bangalore meetups, hack sprints, and live system teardowns.</p>
            <span className="text-xs font-bold text-[#4f47e6] flex items-center gap-1">Browse Events &rarr;</span>
          </Link>

          <Link
            to="/community/training"
            className="liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <GraduationCap size={28} className="text-[#4f47e6] mb-3" />
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Training Bootcamps</h3>
            <p className="text-xs text-slate-500 mb-3">Hands-on master modules in sub-second web performance, databases & webhook architecture.</p>
            <span className="text-xs font-bold text-[#4f47e6] flex items-center gap-1">View Curriculum &rarr;</span>
          </Link>

          <Link
            to="/community/ambassador"
            className="liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <Sparkles size={28} className="text-[#4f47e6] mb-3" />
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Brand Ambassador</h3>
            <p className="text-xs text-slate-500 mb-3">Lead campus chapters, organize local tech circles, and gain exclusive fellowship grants.</p>
            <span className="text-xs font-bold text-[#4f47e6] flex items-center gap-1">Apply as Ambassador &rarr;</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
