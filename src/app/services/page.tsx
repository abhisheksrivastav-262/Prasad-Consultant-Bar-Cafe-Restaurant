import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = { title: "Services", description: "Cafe consulting, restaurant consulting, bar consulting, staff setup, menu planning, kitchen design, recipes and management consulting in Ahmedabad." };

export default function Services() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4">Services</p>
            <h1 className="heading-xl">Consulting services for hospitality projects.</h1>
            <p className="body-lg mt-6 text-espresso/70">
              From a new cafe concept to a fully operational restaurant, we offer structured consulting across setup, staffing, menu, kitchen design, recipes and management.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group grid sm:grid-cols-2 gap-0 bg-white border border-espresso/10 overflow-hidden hover:shadow-soft transition">
              <div className="relative aspect-square sm:aspect-auto min-h-[220px] overflow-hidden">
                <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-7 flex flex-col justify-between">
                <div>
                  <p className="eyebrow mb-2">{s.eyebrow}</p>
                  <h2 className="heading-md mb-3">{s.title}</h2>
                  <p className="body-sm text-espresso/70">{s.description}</p>
                </div>
                <span className="mt-5 text-xs uppercase tracking-widest text-gold">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
