import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck,
  Calendar,
  User,
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  Lock,
  ExternalLink,
  MessageSquare,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DisplayStatusRecord {
  id: string;
  typeCategory: "application" | "booking" | "partnership";
  title: string;
  subtitle: string;
  handleOrName: string;
  status: "Under Review" | "Accepted" | "Scheduled" | "Waitlisted" | "Scheduled for Interview" | "Dispatched";
  metaLabel1: string;
  metaValue1: string;
  metaLabel2: string;
  metaValue2: string;
  notes: string;
  submittedAt: string;
  privateCircleLink?: string;
}

const MOCK_RECORDS: Record<string, DisplayStatusRecord> = {
  "BX-2026-8812": {
    id: "BX-2026-8812",
    typeCategory: "application",
    title: "Brandex Campus Ambassador Fellowship",
    subtitle: "Cohort 2026 - Bangalore Tech Chapter",
    handleOrName: "Candidate Lead",
    status: "Accepted",
    metaLabel1: "Assigned Mentor",
    metaValue1: "Pavan Kumar S (Chief Systems Architect)",
    metaLabel2: "Grant Allocation",
    metaValue2: "INR 25,000 Event Sponsorship + Tech Swag",
    notes: "Your chapter charter has been ratified. Welcome to the Brandex Builder Guild!",
    submittedAt: "Sep 02, 2026",
    privateCircleLink: "https://t.me/brandexguild",
  },
  "BX-2026-9041": {
    id: "BX-2026-9041",
    typeCategory: "booking",
    title: "Full-Stack System Architecture Sprint",
    subtitle: "Enterprise Scoping & Code Review",
    handleOrName: "Enterprise Client Lead",
    status: "Scheduled for Interview",
    metaLabel1: "Technical Lead",
    metaValue1: "Technical Architecture Board",
    metaLabel2: "Scheduled Slot",
    metaValue2: "Thursday, 3:30 PM IST via Google Meet",
    notes: "Initial scope document reviewed. Meeting link dispatched to verified email.",
    submittedAt: "Sep 12, 2026",
  },
};

export default function ApplicationStatusPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("id") || "";
  const [searchId, setSearchId] = useState(initialQuery);
  const [result, setResult] = useState<DisplayStatusRecord | null>(null);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (idToQuery: string) => {
    const trimmed = idToQuery.trim().toUpperCase();
    if (!trimmed) return;
    setIsLoading(true);
    setSearched(true);
    setSearchParams({ id: trimmed });

    setTimeout(() => {
      const match = MOCK_RECORDS[trimmed];
      if (match) {
        setResult(match);
      } else {
        setResult({
          id: trimmed,
          typeCategory: "application",
          title: "Application / Enquiry In Review",
          subtitle: "Brandex Engineering Verification",
          handleOrName: "Applicant",
          status: "Under Review",
          metaLabel1: "Review Pipeline",
          metaValue1: "Technical Scoping Queue",
          metaLabel2: "Estimated Turnaround",
          metaValue2: "Within 24-48 Hours",
          notes: "Your inquiry is currently in technical evaluation by our engineering team.",
          submittedAt: "Recent",
        });
      }
      setIsLoading(false);
    }, 450);
  };

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <span>Main Website</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6]">
            Application & Proposal Ledger
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Application Status Tracker
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Enter your Brandex reference ID (e.g. <code className="bg-slate-200 px-1.5 py-0.5 rounded text-xs font-mono font-bold">BX-2026-8812</code>) to check admission, proposal review, or cohort fellowship progress.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchId);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Reference ID (e.g., BX-2026-8812)"
                className="pl-10 h-12 bg-white rounded-xl border-slate-200 text-sm font-mono"
              />
            </div>
            <Button
              type="submit"
              variant="brand"
              size="default"
              disabled={isLoading || !searchId.trim()}
              className="h-12 px-6 rounded-xl font-bold flex items-center gap-2"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              <span>Track Status</span>
            </Button>
          </form>

          {/* Sample quick tokens */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-500">
            <span>Quick test IDs:</span>
            {["BX-2026-8812", "BX-2026-9041"].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  setSearchId(sample);
                  handleSearch(sample);
                }}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-mono text-slate-700 hover:text-[#4f47e6] hover:border-[#4f47e6] transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Status Result Card */}
        {searched && result && (
          <div className="liquid-glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-in fade-in-50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">{result.id}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">{result.title}</h3>
                <p className="text-xs text-slate-500">{result.subtitle}</p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
                ✓ {result.status}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">{result.metaLabel1}</span>
                <p className="font-bold text-slate-900 text-sm">{result.metaValue1}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">{result.metaLabel2}</span>
                <p className="font-bold text-slate-900 text-sm">{result.metaValue2}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Leadership Notes</span>
              <p className="text-sm text-slate-700 leading-relaxed">{result.notes}</p>
            </div>

            {result.privateCircleLink && (
              <div className="pt-2">
                <Button asChild variant="brand" size="default" className="rounded-xl">
                  <a href={result.privateCircleLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>Access Private Fellowship Circle</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
