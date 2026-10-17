import Image from "next/image";
import { SITE } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = { title: "About Us", description: "Prasad Bar Cafe Restaurant Consultant — hospitality consulting philosophy focused on practical planning and smooth operations." };

export default function About() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">About Us</p>
              <h1 className="heading-xl">Hospitality consulting with a practical eye.</h1>
              <p className="body-lg mt-6 text-espresso/70">
                {SITE.name} works with founders, owners and operators planning new cafe, bar and restaurant projects. Our focus is practical planning and smooth operations — from understanding the concept to preparing the business to open.
              </p>
              <p className="body-md mt-5 text-espresso/70">
                Every project is different. We start by understanding the customer’s concept, budget and operational requirements, then shape a plan that fits the reality of the space, the team and the market.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-brand.jpeg" alt="Prasad consultant brand artwork" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { t: "Concept First", d: "We clarify the idea before money is spent — positioning, audience and offer." },
            { t: "Operations Aware", d: "Plans are tested against real service capacity and staffing." },
            { t: "Budget Conscious", d: "Recommendations are shaped to the project's actual budget." },
          ].map((x) => (
            <div key={x.t} className="bg-white border border-espresso/10 p-8">
              <div className="hairline mb-5" />
              <h3 className="heading-md mb-3">{x.t}</h3>
              <p className="body-sm text-espresso/70">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <SectionHeading eyebrow="Approach" title="From planning through setup." subtitle="A consulting approach that moves from understanding to design to preparation, described as a proposed workflow rather than a guaranteed delivery timeline." />
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-video overflow-hidden border border-espresso/10">
              <Image src="/assets/justdial-listing.jpeg" alt="Prasad consultant listing" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <p className="body-lg text-espresso/70">
              We do not invent founder biographies, years of experience or certifications. What we offer is a structured, honest consulting engagement shaped around your project’s needs.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
