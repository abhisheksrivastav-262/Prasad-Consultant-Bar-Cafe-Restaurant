import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export default function AnnouncementBar() {
  return (
    <div className="bg-espresso text-cream text-[11px] sm:text-xs border-b border-cream/10">
      <div className="container flex items-center justify-between h-8 sm:h-9 gap-2">
        <p className="tracking-wide truncate text-cream/90 font-medium">
          <span className="text-gold mr-1.5">★</span>
          Restaurant &amp; cafe consulting in Ahmedabad
          <span className="hidden sm:inline"> — concept to kitchen operations</span>
        </p>
        <a
          href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gold hover:text-cream font-semibold transition whitespace-nowrap flex-shrink-0 text-[11px] sm:text-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={13} className="text-gold" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
