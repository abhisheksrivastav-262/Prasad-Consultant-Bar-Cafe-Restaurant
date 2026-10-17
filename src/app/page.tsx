import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { SITE, waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomeSlider from "@/components/HomeSlider";

const ROLES = ["Chef", "CDP", "Commis", "Steward", "Captain", "Helper", "Barista"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container grid md:grid-cols-12 gap-10 items-center py-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Hospitality Consulting · Ahmedabad</p>
            <h1 className="heading-xl">Build a Restaurant That Runs Beautifully.</h1>
            <p className="heading-md mt-4 text-espresso/70">Expert Cafe, Bar &amp; Restaurant Consulting — From Concept to Kitchen Operations.</p>
            <p className="body-lg mt-6 text-espresso/70 max-w-xl">
              We support new cafe and restaurant setup, staffing, menu planning, kitchen design, recipes and management — practical planning for businesses that want smooth operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
              <Link href="/services" className="btn btn-outline">Explore Our Services</Link>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-widest uppercase text-espresso/60 font-medium">
              <span>Cafe</span><span className="text-gold">·</span><span>Bar</span><span className="text-gold">·</span><span>Restaurant</span><span className="text-gold">·</span><span>Kitchen</span>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-open-planning.jpeg" alt="Cafe and restaurant consulting promotional artwork" fill priority sizes="(max-width:768px) 100vw, 40vw" className="object-contain" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-40 aspect-[4/5] border-4 border-cream overflow-hidden shadow-card">
              <Image src="/assets/poster-brand.jpeg" alt="Prasad consultant brand artwork" fill sizes="160px" className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Home slider */}
      <section className="section bg-paper">
        <div className="container">
          <SectionHeading eyebrow="Showcase" title="Watch our consulting work." subtitle="Promotional videos played with audio. Use controls to play, pause or adjust volume." />
          <div className="mt-8"><HomeSlider /></div>
        </div>
      </section>

      {/* Trust & expertise */}
      <section className="section bg-paper">
        <div className="container">
          <SectionHeading eyebrow="Service Areas" title="Consulting across the full hospitality journey." subtitle="We work across concept, space, kitchen, menu, staffing and day-to-day operations — tailored to each project's concept, budget and requirements." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Concept & Positioning", d: "Clarify what the business is, who it serves and how it stands out." },
              { t: "Space & Workflow", d: "Plan layouts that move people, food and service efficiently." },
              { t: "Kitchen & Menu", d: "Align equipment, recipes and menu structure with real capacity." },
              { t: "Staffing Structure", d: "Define roles, responsibilities and training outlines." },
              { t: "Operational Discipline", d: "Checklists, procedures and opening/closing routines." },
              { t: "Launch Readiness", d: "Pre-launch reviews so opening day runs smoothly." },
            ].map((x) => (
              <div key={x.t} className="bg-white border border-espresso/10 p-7">
                <div className="hairline mb-5" />
                <h3 className="heading-md mb-2">{x.t}</h3>
                <p className="body-sm text-espresso/70">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading eyebrow="Services" title="What we help you build." />
            <Link href="/services" className="btn btn-outline self-start md:self-end">All Services</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-paper">
        <div className="container">
          <SectionHeading eyebrow="Our Process" title="A proposed consulting workflow." subtitle="A structured approach from first conversation to opening day and beyond — described as a proposed workflow, not a guaranteed timeline." />
          <div className="mt-12"><ProcessSteps /></div>
        </div>
      </section>

      {/* Staffing */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Hospitality Staffing</p>
            <h2 className="heading-lg">Staffing requirements, discussed per project.</h2>
            <p className="body-lg mt-5 text-espresso/70">
              We help define staffing needs across common hospitality roles. Requirements depend on location, experience and project needs — we do not guarantee availability of every role.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <span key={r} className="px-4 py-2 border border-espresso/15 text-sm tracking-wide">{r}</span>
              ))}
            </div>
            <div className="mt-8">
              <WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss hospitality staffing requirements. Please contact me.")} label="Discuss Staffing" />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-espresso/10 shadow-soft">
            <Image src="/assets/staff-ad.jpeg" alt="Hospitality staffing advertisement" fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain" />
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="section bg-paper">
        <div className="container grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-staff-setup.jpeg" alt="Prasad consultant promotional photograph" fill sizes="(max-width:768px) 100vw, 40vw" className="object-contain" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Why Prasad</p>
            <h2 className="heading-lg">Practical planning. Smooth operations.</h2>
            <p className="body-lg mt-5 text-espresso/70 max-w-xl">
              We focus on what makes a hospitality business work day to day — clear workflows, defined roles, consistent recipes and a service rhythm your team can actually follow.
            </p>
            <ul className="mt-6 space-y-3 body-md text-espresso/80">
              {["Concept clarity before capital spend.", "Kitchen and service planned together.", "Menus built around real capacity.", "Operations documented, not assumed."].map((x) => (
                <li key={x} className="flex items-start gap-3"><span className="text-gold mt-1">—</span>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Planning Your Cafe or Restaurant?" subtitle="Call or WhatsApp to discuss your project in Ahmedabad, Gota or anywhere along S. G. Highway." />
    </>
  );
}
