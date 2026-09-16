import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Link } from "react-router-dom";

interface LivePreviewProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function LivePreview({ url, children, className }: LivePreviewProps) {
  // Use a free API like Thum.io or Microlink to generate the snapshot.
  // Microlink provides a free tier for screenshots.
  const encodedUrl = encodeURIComponent(url);
  const screenshotUrl = `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false`;

  return (
    <HoverCard.Root openDelay={200} closeDelay={100}>
      <HoverCard.Trigger asChild>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="z-50 w-80 rounded-xl border border-border/50 bg-card p-2 shadow-xl shadow-black/20 outline-none animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={5}
        >
          <div className="flex flex-col space-y-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              {/* Note: The src points to microlink's image proxy or thum.io. For a purely client-side approach, Thum.io is simpler as it returns the image directly. */}
              <img
                src={`https://image.thum.io/get/width/1200/crop/800/${url}`}
                alt={`Preview of ${url}`}
                className="object-cover w-full h-full transition-all duration-300"
                loading="lazy"
              />
            </div>
            <div className="px-1 text-xs text-muted-foreground break-all">
              {url}
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
