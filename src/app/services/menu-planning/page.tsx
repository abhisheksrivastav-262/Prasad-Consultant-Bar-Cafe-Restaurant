import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Menu Planning", description: "Menu structure and categorization, product selection, menu balance, recipe standardization, ingredient planning, portion consistency, menu engineering and operational suitability." };

const ITEMS = ["Menu structure and categorization", "Product selection", "Menu balance", "Recipe standardization", "Ingredient planning", "Portion consistency", "Menu engineering concepts", "Operational suitability"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Menu Planning" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Menu Planning</p>
              <h1 className="heading-xl">Menus that work in the kitchen.</h1>
              <p className="body-lg mt-6 text-espresso/70">Menus appealing to guests and practical for the kitchen to deliver consistently. Any example prices shown are illustrative only.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss menu planning for my cafe or restaurant. Please contact me.")} label="Discuss Menu Planning" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-open-planning.jpeg" alt="Menu planning" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Menu planning scope." />
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
