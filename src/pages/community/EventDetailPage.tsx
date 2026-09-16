import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  CheckCircle2,
  Share2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { getEventBySlug } from "@/data/community/repository";
import { Event } from "@/models/community";
import { Button } from "@/components/ui/button";

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (slug) {
        const data = await getEventBySlug(slug);
        setEvent(data || null);
      }
    }
    loadData();
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#f8fafd] flex items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <h2 className="font-display font-extrabold text-2xl text-slate-900">Event Not Found</h2>
          <p className="text-xs text-slate-500">The requested event could not be found or has concluded.</p>
          <Button asChild variant="brand" size="sm" className="rounded-xl">
            <Link to="/community/events">Browse All Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div>
          <Link
            to="/community/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Events</span>
          </Link>
        </div>

        {/* Main Event Card */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-mono font-bold text-[#4f47e6] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 uppercase tracking-wider">
                {event.category}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {event.rsvpCount} Registered
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {event.title}
            </h1>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2.5">
              <Calendar size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Date</div>
                <div className="text-xs text-slate-500">{event.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Time</div>
                <div className="text-xs text-slate-500">{event.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Location</div>
                <div className="text-xs text-slate-500 truncate">{event.location}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-slate-900">About this Summit / Meetup</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {event.description}
            </p>
          </div>

          {/* Registration Section */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-slate-900">Free Community RSVP</div>
              <p className="text-xs text-slate-500">Includes direct Slack / Telegram networking group access</p>
            </div>

            {registered ? (
              <div className="px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>You're on the RSVP list! Check email for pass.</span>
              </div>
            ) : (
              <Button
                onClick={() => setRegistered(true)}
                className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl px-8 h-12 text-sm shadow-md"
              >
                RSVP For This Event
              </Button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
