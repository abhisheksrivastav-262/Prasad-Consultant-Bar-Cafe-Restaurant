import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Cafe Setup Consulting", description: "Cafe concept development, space planning, customer experience, menu structure, equipment planning, staffing and pre-launch checklist." };

const ITEMS = ["Cafe concept development", "Space planning", "Customer experience", "Menu structure", "Equipment planning", "Staffing requirements", "Operational preparation", "Pre-launch checklist"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Cafe Setup" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Cafe Setup Consulting</p>
              <h1 className="heading-xl">Build a cafe that runs beautifully.</h1>
              <p className="body-lg mt-6 text-espresso/70">From the first concept sketch to a ready-to-open cafe — structure the offer, space and daily operations.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a new cafe setup project in Ahmedabad. Please contact me.")} label="Discuss Cafe Setup" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-open-planning.jpeg" alt="Cafe setup consulting" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Cafe setup scope." />
            <ul className="mt-8 space-y-3">{ITEMS.map((b) => <li key={b} className="flex items-start gap-3 body-md"><span className="text-gold mt-1">—</span>{b}</li>)}</ul>
          </div>
          <div>
            <SectionHeading eyebrow="Workflow" title="Proposed process." />
            <div className="mt-8"><ProcessSteps /></div>
          </div>
        </div>
      </section>
    </>
  );
}
