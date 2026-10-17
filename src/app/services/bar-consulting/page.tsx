import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Bar Consulting", description: "Bar concept planning, counter and workflow planning, beverage menu structure, equipment and storage, staffing and service workflows, operational planning." };

const ITEMS = ["Bar concept planning", "Counter and workflow planning", "Beverage menu structure", "Equipment and storage requirements", "Staffing and service workflows", "Operational planning"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Bar Consulting" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Bar Consulting</p>
              <h1 className="heading-xl">Plan a bar that serves smoothly.</h1>
              <p className="body-lg mt-6 text-espresso/70">Bar concepts, counter workflows and beverage structures that are efficient to run and consistent to serve.</p>
              <p className="body-sm mt-4 text-espresso/60">We do not claim legal or licensing services unless explicitly confirmed by the business owner.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a bar setup consulting project. Please contact me.")} label="Discuss Bar Consulting" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/brand-mark.jpeg" alt="Bar consulting" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Bar consulting scope." />
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
