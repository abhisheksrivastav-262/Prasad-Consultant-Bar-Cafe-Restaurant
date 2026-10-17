"use client";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const SERVICES_LIST = [
  "Cafe Setup Consulting", "Restaurant Setup", "Bar Consulting", "Staff Setup",
  "Menu Planning", "Kitchen Design", "Food Recipes", "Management Consulting", "General Inquiry",
];

type Form = {
  name: string; phone: string; business: string; email: string;
  service: string; location: string; description: string;
};

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", phone: "", business: "", email: "", service: "", location: "", description: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.service) e.service = "Select a service.";
    if (!form.location.trim()) e.location = "Project location is required.";
    if (!form.description.trim() || form.description.trim().length < 10) e.description = "Please describe your project (min 10 chars).";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const summary =
      `Hello Prasad Bar Cafe Restaurant Consultant,\n\n` +
      `New inquiry:\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Business: ${form.business || "-"}\n` +
      `Email: ${form.email || "-"}\n` +
      `Service: ${form.service}\n` +
      `Location: ${form.location}\n` +
      `Project: ${form.description}\n\n` +
      `Please contact me.`;
    const url = waLink(summary);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const input = "w-full border border-espresso/20 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition";

  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-8 grid md:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h1 className="heading-xl">Let’s discuss your project.</h1>
              <p className="body-lg mt-6 text-espresso/70">
                Share your concept, budget and requirements. We respond via WhatsApp and call.
              </p>
              <ul className="mt-8 space-y-4 body-md">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-1" /> {SITE.address}</li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-gold" /> <a href={SITE.tel} className="hover:text-gold">{SITE.phone}</a></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-gold" /> <span className="text-espresso/60">Contact via WhatsApp or call</span></li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={SITE.tel} className="btn btn-primary"><Phone size={16} /> Call Now</a>
                <a href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project. Please contact me.")} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><MessageCircle size={16} /> WhatsApp Us</a>
              </div>
              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gold underline underline-offset-4"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="bg-white border border-espresso/10 p-7 md:p-9 space-y-5" noValidate>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Full Name *</label>
                <input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-burgundy mt-1">{errors.name}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2">Phone Number *</label>
                  <input className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  {errors.phone && <p className="text-xs text-burgundy mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2">Business Name</label>
                  <input className={input} value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Email (optional)</label>
                <input className={input} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-burgundy mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Service Interested In *</label>
                <select className={input} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service</option>
                  {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-burgundy mt-1">{errors.service}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Project Location *</label>
                <input className={input} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                {errors.location && <p className="text-xs text-burgundy mt-1">{errors.location}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Project Description *</label>
                <textarea className={input} rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                {errors.description && <p className="text-xs text-burgundy mt-1">{errors.description}</p>}
              </div>
              <button type="submit" className="btn btn-primary w-full">Send via WhatsApp</button>
              {submitted && (
                <p className="text-sm text-espresso/70 border border-gold/40 bg-paper p-4">
                  WhatsApp has been opened with your prepared message. Please review and press send in WhatsApp. This form does not store data on a server.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
