export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-lg">{title}</h2>
      {subtitle && <p className="body-lg mt-5 text-espresso/70 max-w-2xl" style={{ marginInline: align === "center" ? "auto" : undefined }}>{subtitle}</p>}
    </div>
  );
}
