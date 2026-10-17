"use client";
import { useState } from "react";
import Image from "next/image";
import { waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MessageCircle } from "lucide-react";

const ROLES = ["Chef", "CDP (Chef de Partie)", "Commis Chef", "Steward", "Captain", "Helper", "Barista"];

export default function StaffSetup() {
  const [form, setForm] = useState({
    name: "", phone: "", business: "", city: "", positions: [] as string[],
    count: "", joining: "", requirements: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (r: string) => setForm((f) => ({
    ...f, positions: f.positions.includes(r) ? f.positions.filter((x) => x !== r) : [...f.positions, r],
  }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.city.trim()) e.city = "City is required.";
    if (!form.positions.length) e.positions = "Select at least one position.";
    if (!form.count.trim()) e.count = "Number of staff is required.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const summary =
      `Hello Prasad Bar Cafe Restaurant Consultant,\n\n` +
      `Staffing inquiry:\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.business || "-"}\nCity: ${form.city}\n` +
      `Positions: ${form.positions.join(", ")}\nNumber of staff: ${form.count}\nExpected joining: ${form.joining || "-"}\n` +
      `Additional requirements: ${form.requirements || "-"}\n\nPlease contact me.`;
    setSubmitted(true);
    window.open(waLink(summary), "_blank", "noopener,noreferrer");
  };

  const input = "w-full border border-espresso/20 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition";

  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Staff Setup" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Staff Setup</p>
              <h1 className="heading-xl">Hospitality staffing, discussed per project.</h1>
              <p className="body-lg mt-6 text-espresso/70">
                We help define staffing structure and role requirements. Requirements depend on location, experience and project needs — we do not promise guaranteed recruitment or employment.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-espresso/10 shadow-soft">
              <Image src="/assets/staff-ad.jpeg" alt="Hospitality staffing advertisement" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Roles" title="Common hospitality roles." subtitle="Chef, CDP, Commis, Steward, Captain, Helper and Barista — requirements discussed according to the client's project." />
          <div className="mt-8 flex flex-wrap gap-3">
            {ROLES.map((r) => (
              <span key={r} className="px-4 py-2 border border-espresso/15 text-sm">{r}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Inquiry" title="Staffing inquiry form." />
          <form onSubmit={onSubmit} className="mt-8 bg-white border border-espresso/10 p-7 md:p-9 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Full Name *</label>
                <input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-burgundy mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Phone Number *</label>
                <input className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <p className="text-xs text-burgundy mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Business Name</label>
                <input className={input} value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">City *</label>
                <input className={input} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                {errors.city && <p className="text-xs text-burgundy mt-1">{errors.city}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Required Staff Positions *</label>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <button type="button" key={r} onClick={() => toggle(r)}
                    className={`px-3 py-2 text-xs border transition ${form.positions.includes(r) ? "bg-espresso text-cream border-espresso" : "border-espresso/20 text-espresso/70 hover:border-gold"}`}>
                    {r}
                  </button>
                ))}
              </div>
              {errors.positions && <p className="text-xs text-burgundy mt-1">{errors.positions}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Number of Staff Required *</label>
                <input className={input} value={form.count} onChange={(e) => setForm({ ...form, count: e.target.value })} />
                {errors.count && <p className="text-xs text-burgundy mt-1">{errors.count}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Expected Joining Date</label>
                <input className={input} type="date" value={form.joining} onChange={(e) => setForm({ ...form, joining: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Additional Requirements</label>
              <textarea className={input} rows={3} value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit via WhatsApp</button>
            {submitted && (
              <p className="text-sm text-espresso/70 border border-gold/40 bg-paper p-4">
                WhatsApp has been opened with your prepared message. Please review and press send. This form does not store data on a server.
              </p>
            )}
            <a href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss hospitality staffing requirements. Please contact me.")} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
              <MessageCircle size={16} /> Quick WhatsApp Inquiry
            </a>
          </form>
        </div>
      </section>
    </>
  );
}
