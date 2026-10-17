import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE, waLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso text-cream border-t border-espresso/20">
      <div className="container py-12 md:py-20 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand column */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/assets/logo.png" alt="Prasad logo" width={48} height={64} className="h-12 w-auto object-contain" />
            <div>
              <p className="font-serif text-lg font-semibold text-cream leading-tight">{SITE.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-gold">Ahmedabad, Gujarat</p>
            </div>
          </div>
          <p className="body-sm text-cream/70 max-w-sm">
            Premium hospitality consulting for cafe, bar and restaurant projects — from concept planning through kitchen, staffing, menu and operations.
          </p>
        </div>

        {/* Services column */}
        <div>
          <p className="eyebrow text-gold mb-3 sm:mb-4">Services</p>
          <ul className="space-y-2 body-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-cream/70 hover:text-gold transition inline-block py-0.5">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <p className="eyebrow text-gold mb-3 sm:mb-4">Company</p>
          <ul className="space-y-2 body-sm">
            <li><Link href="/" className="text-cream/70 hover:text-gold transition inline-block py-0.5">Home</Link></li>
            <li><Link href="/about" className="text-cream/70 hover:text-gold transition inline-block py-0.5">About Us</Link></li>
            <li><Link href="/services" className="text-cream/70 hover:text-gold transition inline-block py-0.5">All Services</Link></li>
            <li><Link href="/gallery" className="text-cream/70 hover:text-gold transition inline-block py-0.5">Gallery</Link></li>
            <li><Link href="/contact" className="text-cream/70 hover:text-gold transition inline-block py-0.5">Contact</Link></li>
            <li><Link href="/privacy" className="text-cream/70 hover:text-gold transition inline-block py-0.5">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-cream/70 hover:text-gold transition inline-block py-0.5">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="eyebrow text-gold mb-3 sm:mb-4">Contact</p>
          <ul className="space-y-3 body-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <a href={SITE.tel} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-gold flex-shrink-0" />
              <a href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp Chat
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-2.5">
            <a href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full text-center">
              WhatsApp Us
            </a>
            <a href={SITE.tel} className="btn btn-outline text-cream border-cream/30 hover:border-cream w-full text-center">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-cream/50 text-center sm:text-left">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Restaurant &amp; cafe consulting · Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
