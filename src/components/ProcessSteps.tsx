const STEPS = [
  { k: "Discover", d: "Understand the concept, budget, location and operational goals." },
  { k: "Plan", d: "Define structure, scope and a practical roadmap." },
  { k: "Design", d: "Shape spaces, workflows and menu architecture." },
  { k: "Prepare", d: "Equipment, staffing, recipes and procedures." },
  { k: "Launch", d: "Opening readiness and launch coordination." },
  { k: "Improve", d: "Refine operations after opening." },
];

export default function ProcessSteps({ steps }: { steps?: { k: string; d: string }[] }) {
  const list = steps || STEPS.map((s) => ({ k: s.k, d: s.d }));
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <div key={s.k} className="border border-espresso/10 bg-white p-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span className="hairline flex-1" />
          </div>
          <h3 className="heading-md mb-2">{s.k}</h3>
          <p className="body-sm text-espresso/70">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
