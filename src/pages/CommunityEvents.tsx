import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Flame,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface EventItem {
  id: string;
  title: string;
  type: "Meetup" | "Hackathon" | "Workshop" | "Teardown";
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  status: "Upcoming" | "Past" | "Registration Open";
  description: string;
  audience: string;
  topics: string[];
}

const communityEvents: EventItem[] = [
  {
    id: "blr-builder-meetup-1",
    title: "Bangalore Builder Teardown: Shipping Full-Stack AI Products",
    type: "Meetup",
    date: "Saturday, November 14, 2026",
    time: "10:30 AM – 1:30 PM IST",
    location: "Vijaynagar, Bangalore (In-Person)",
    isOnline: false,
    status: "Registration Open",
    description: "An intensive morning teardown analyzing how to build, deploy, and monetize custom AI workflows and modern SaaS platforms without infrastructure bloat.",
    audience: "Developers, indie hackers, product founders, engineering students",
    topics: ["Full-Stack Next.js", "AI Inference Pipelines", "Database Schemas", "Live Product Demo"],
  },
  {
    id: "brandex-48h-hackathon",
    title: "Brandex 48-Hour Open Build Weekend",
    type: "Hackathon",
    date: "December 5 – 7, 2026",
    time: "Kickoff 6:00 PM Friday",
    location: "Bangalore & Discord (Hybrid)",
    isOnline: true,
    status: "Upcoming",
    description: "Form teams or build solo. Build and deploy a working software product or automation workflow over a weekend with direct feedback from mentors.",
    audience: "Software developers, designers, automation builders",
    topics: ["Open Problem Statements", "Rapid Prototyping", "Peer Demos", "Prizes & Recognition"],
  },
  {
    id: "past-web-architecture",
    title: "Zero-Bloat Architecture & Edge CDN Optimization",
    type: "Teardown",
    date: "October 18, 2026",
    time: "Completed",
    location: "Bangalore (Studio Session)",
    isOnline: false,
    status: "Past",
    description: "A deep dive into sub-second web performance, static prerendering pipelines, and modern TypeScript architectures.",
    audience: "Senior web engineers & architects",
    topics: ["Lighthouse 100", "Edge SSR", "Prerendering", "Bundle Splitting"],
  },
];

export default function CommunityEventsPage() {
  useScrollReveal();
  const [filter, setFilter] = useState<string>("All");

  const filteredEvents = communityEvents.filter((e) => {
    if (filter === "All") return true;
    return e.type === filter;
  });

  return (
    <>
      <SEOTags
        title="Community Events & Meetups | Brandex Ecosystem Bangalore"
        description="Explore upcoming builder meetups, 48-hour hackathons, and technical teardowns organized by Brandex Community in Bangalore and online."
        keywords="brandex events, tech meetups bangalore, bangalore hackathons, developer events bangalore, tech teardown meetups"
        image="https://www.brandex.co.in/og/community-events.png"
        canonicalUrl="https://www.brandex.co.in/community/events"
        schema={{
          "@type": "ItemList",
          "@id": "https://www.brandex.co.in/community/events#list",
          "name": "Brandex Community Events",
          "itemListElement": communityEvents.map((e, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Event",
              "name": e.title,
              "description": e.description,
              "eventAttendanceMode": e.isOnline
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": e.location,
                "address": "Bangalore, India"
              }
            }
          }))
        }}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Community", href: "/community" },
              { label: "Events & Meetups" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
              <Calendar size={13} className="text-accent" />
              Community Calendar
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Meetups, Hackathons &amp; <span className="text-gradient">Build Sessions</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Connect with fellow developers, participate in rapid hackathons, and learn from deep technical teardowns.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Meetup", "Hackathon", "Teardown"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/15"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat === "All" ? "All Events" : `${cat}s`}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-card border border-border/70 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-accent/40 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent px-2.5 py-0.5 bg-accent/10 rounded-full">
                      {evt.type}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        evt.status === "Registration Open"
                          ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                          : evt.status === "Upcoming"
                          ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {evt.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-accent shrink-0" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {evt.topics.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 md:pt-0 shrink-0">
                  {evt.status === "Registration Open" ? (
                    <Button asChild className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-md font-semibold">
                      <a href="https://discord.gg/brandex" target="_blank" rel="noopener noreferrer">
                        RSVP on Discord <ExternalLink size={14} className="ml-1.5" />
                      </a>
                    </Button>
                  ) : evt.status === "Upcoming" ? (
                    <Button asChild variant="outline" className="w-full md:w-auto border-border">
                      <a href="https://discord.gg/brandex" target="_blank" rel="noopener noreferrer">
                        Get Notified
                      </a>
                    </Button>
                  ) : (
                    <span className="inline-block text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-xl">
                      Session Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
