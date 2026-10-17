import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Commercial Kitchen Design", description: "Kitchen workflow, preparation cooking and plating zones, equipment placement, storage planning, hygiene-conscious layouts, staff movement, space utilization and service efficiency." };

const ITEMS = ["Kitchen workflow", "Preparation, cooking and plating zones", "Equipment placement", "Storage planning", "Hygiene-conscious layouts", "Staff movement", "Space utilization", "Service efficiency"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Kitchen Design" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Commercial Kitchen Design</p>
              <h1 className="heading-xl">Kitchens planned around workflow.</h1>
              <p className="body-lg mt-6 text-espresso/70">Commercial kitchen layouts around workflow, hygiene and service efficiency. We do not claim architectural approvals or engineering certifications.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss commercial kitchen design planning. Please contact me.")} label="Discuss Kitchen Design" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-staff-setup.jpeg" alt="Kitchen design consulting" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Kitchen design scope." />
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
