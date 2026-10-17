import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = { title: "Food Recipe Development", description: "Recipe development, standardization, ingredient specifications, portion control, preparation procedures, consistency across service and menu-specific recipe planning." };

const ITEMS = ["Recipe development", "Recipe standardization", "Ingredient specifications", "Portion control", "Preparation procedures", "Consistency across service", "Menu-specific recipe planning"];

export default function Page() {
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Food Recipes" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Food Recipe Development</p>
              <h1 className="heading-xl">Recipes that stay consistent.</h1>
              <p className="body-lg mt-6 text-espresso/70">We develop and standardise recipes so dishes are reproduced consistently across shifts and service teams.</p>
              <div className="mt-8"><WhatsAppButton href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss food recipe development. Please contact me.")} label="Discuss Recipes" /></div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/poster-open-planning.jpeg" alt="Food recipe development" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Recipe development scope." />
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
