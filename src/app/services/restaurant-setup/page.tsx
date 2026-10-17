import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Restaurant Setup Consulting", description: "Concept and positioning, operational planning, space and workflow planning, kitchen coordination, equipment, staff structure, menu planning and opening preparation." };

const ITEMS = ["Concept and positioning", "Operational planning", "Space and workflow planning", "Kitchen and service coordination", "Equipment requirements", "Staff structure", "Menu planning", "Opening preparation"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Restaurant Setup" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Restaurant Setup Consulting</p>
              <h1 className="heading-xl">Open a restaurant with clarity.</h1>
              <p className="body-lg mt-6 text-espresso/70">We structure new restaurant projects across concept, operations, kitchen and service.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a new restaurant setup project. Please contact me.")} label="Discuss Restaurant Setup" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-staff-setup.jpeg" alt="Restaurant setup consulting" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Restaurant setup scope." />
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
