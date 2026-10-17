import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs tracking-[0.18em] uppercase text-espresso/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? <Link href={it.href} className="hover:text-gold transition">{it.label}</Link> : <span className="text-espresso">{it.label}</span>}
            {i < items.length - 1 && <span aria-hidden>·</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
