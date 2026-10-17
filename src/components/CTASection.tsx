import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export default function CTASection({ title = "Planning Your Cafe or Restaurant?", subtitle = "Discuss your concept, budget and operational requirements with our consulting team.", waMessage }: { title?: string; subtitle?: string; waMessage?: string }) {
  const msg = waMessage || "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project. Please contact me.";
  return (
    <section className="bg-espresso text-cream section">
      <div className="container text-center">
        <p className="eyebrow text-gold mb-4">Let’s Talk</p>
        <h2 className="heading-lg text-cream">{title}</h2>
        <p className="body-lg text-cream/70 mt-5 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={SITE.tel} className="btn btn-gold"><Phone size={16} /> Call Now</a>
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MessageCircle size={16} /> WhatsApp Us</a>
          <Link href="/contact" className="btn btn-outline" style={{ color: "#F7F1E8", borderColor: "rgba(247,241,232,0.4)" }}>Contact Form</Link>
        </div>
      </div>
    </section>
  );
}
