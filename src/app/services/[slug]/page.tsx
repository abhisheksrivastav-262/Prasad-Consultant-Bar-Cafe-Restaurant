import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, getService } from "@/data/services";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.description };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.title }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">{s.eyebrow}</p>
              <h1 className="heading-xl">{s.title}</h1>
              <p className="body-lg mt-6 text-espresso/70">{s.description}</p>
              <div className="mt-8">
                <WhatsAppButton href={waLink(s.waMessage)} label="Discuss This Service" />
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src={s.image} alt={s.title} fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What We Cover" title="Scope of consulting." />
            <ul className="mt-8 space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 body-md">
                  <span className="text-gold mt-1">—</span>{b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Workflow" title="Proposed process." />
            <div className="mt-8"><ProcessSteps steps={s.process.map((k) => ({ k, d: "Proposed consulting step." }))} /></div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Note" title="Honest scope." subtitle="We do not guarantee financial results, profits or revenue increases, and we do not claim legal, licensing, architectural or engineering services unless explicitly confirmed. Requirements are discussed per project." />
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton href={waLink(s.waMessage)} label="WhatsApp Us" />
            <Link href="/contact" className="btn btn-outline">Contact Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
