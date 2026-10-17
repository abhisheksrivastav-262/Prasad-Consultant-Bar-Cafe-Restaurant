import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block bg-white border border-espresso/10 overflow-hidden hover:shadow-soft transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={service.image} alt={service.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
      </div>
      <div className="p-6">
        <p className="eyebrow mb-2">{service.eyebrow}</p>
        <h3 className="heading-md mb-2">{service.title}</h3>
        <p className="body-sm text-espresso/70">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold group-hover:gap-2 transition">
          Learn more <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
