import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Restaurant Management Consulting", description: "Operational procedures, staff roles and responsibilities, service workflow, inventory processes, cost-awareness practices, quality consistency, daily checklists and opening/closing procedures." };

const ITEMS = ["Operational procedures", "Staff roles and responsibilities", "Service workflow", "Inventory processes", "Cost-awareness practices", "Quality consistency", "Daily operational checklists", "Opening and closing procedures"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Management Consulting" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Restaurant Management Consulting</p>
              <h1 className="heading-xl">Operations your team can follow.</h1>
              <p className="body-lg mt-6 text-espresso/70">We help hospitality businesses build clear operational procedures, defined roles and daily disciplines that protect quality. We do not guarantee financial results, profits or revenue increases.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss restaurant management consulting. Please contact me.")} label="Discuss Management" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-staff-setup.jpeg" alt="Management consulting" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Management consulting scope." />
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
