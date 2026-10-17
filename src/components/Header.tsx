"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  Home,
  Info,
  Briefcase,
  Image as ImageIcon,
  Mail,
  ShieldCheck,
  FileText,
  Clock,
  Sparkles,
  Instagram,
  Facebook,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE, waLink } from "@/lib/site";
import AnnouncementBar from "@/components/AnnouncementBar";

const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  {
    label: "Services",
    href: "/services",
    icon: Briefcase,
    children: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}`, short: s.short })),
  },
  { label: "Gallery", href: "/gallery", icon: ImageIcon, badge: "Photos & Videos" },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  // Support custom triggers from other components
  useEffect(() => {
    const handleOpenMenu = () => setOpen(true);
    const handleOpenServices = () => {
      setOpen(true);
      setServicesAccordionOpen(true);
    };
    window.addEventListener("open-mobile-sidebar", handleOpenMenu);
    window.addEventListener("open-services-sidebar", handleOpenServices);
    return () => {
      window.removeEventListener("open-mobile-sidebar", handleOpenMenu);
      window.removeEventListener("open-services-sidebar", handleOpenServices);
    };
  }, []);

  return (
    <>
      {/* 100% Fixed Top Bar Container (Never scrolls off screen) */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <AnnouncementBar />
        <header
          className={`w-full transition-all duration-300 ${
            scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-espresso/15" : "bg-cream/95 backdrop-blur-sm border-b border-espresso/10"
          }`}
        >
          <div className="container flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 group" aria-label="Prasad Consultant Home">
            <div className="relative h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Prasad Consultant Logo"
                fill
                sizes="44px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base sm:text-lg md:text-xl font-semibold leading-tight text-espresso tracking-tight truncate">
                Prasad <span className="text-gold font-normal">Consultant</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-espresso/60 font-medium truncate">
                Bar · Cafe · Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
            {NAV_LINKS.map((n) => {
              const isActive = pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href));
              return (
                <div key={n.href} className="relative group">
                  {n.children ? (
                    <>
                      <Link
                        href={n.href}
                        className={`text-sm tracking-wide transition inline-flex items-center gap-1 font-medium ${
                          isActive ? "text-gold" : "text-espresso/80 hover:text-gold"
                        }`}
                      >
                        {n.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                      </Link>
                      <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200">
                        <div className="bg-cream border border-espresso/10 shadow-soft min-w-[280px] py-2">
                          <div className="px-5 py-2 border-b border-espresso/10 text-[10px] tracking-wider uppercase text-espresso/50 font-semibold">
                            All Hospitality Services
                          </div>
                          {n.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block px-5 py-2.5 text-sm text-espresso/80 hover:text-gold hover:bg-paper transition"
                            >
                              {c.label}
                            </Link>
                          ))}
                          <div className="p-2 border-t border-espresso/10 bg-paper/50">
                            <Link
                              href="/services"
                              className="block text-center text-xs font-semibold uppercase tracking-wider text-gold hover:underline py-1"
                            >
                              Explore All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={n.href}
                      className={`text-sm tracking-wide transition font-medium ${
                        isActive ? "text-gold" : "text-espresso/80 hover:text-gold"
                      }`}
                    >
                      {n.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Right Controls: Only Menu Button */}
          <div className="flex md:hidden items-center flex-shrink-0">
            <button
              className="inline-flex items-center justify-center gap-1.5 px-3 h-9 bg-espresso text-cream hover:bg-gold hover:text-espresso transition rounded-sm font-semibold text-xs tracking-wider uppercase"
              aria-label="Open sidebar menu"
              onClick={() => setOpen(true)}
              id="mobile-menu-toggle-btn"
            >
              <Menu size={16} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>
    </div>

      {/* Full Screen Dim Backdrop (Placed OUTSIDE header for true fixed positioning) */}
      <div
        className={`fixed inset-0 z-[100] bg-espresso/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Slide-Out Sidebar Panel (Opens at HALF of the website width: w-1/2 or 55vw) */}
      <aside
        className={`fixed right-0 top-0 bottom-0 h-full w-[75vw] sm:w-1/2 md:w-1/2 lg:w-1/2 min-w-[280px] max-w-[560px] bg-[#FAF6F0] z-[110] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-label="Navigation Menu Sidebar"
        aria-modal="true"
      >
        {/* Drawer Header with Title and Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-espresso/15 bg-cream flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Image src="/assets/logo.png" alt="Logo" width={32} height={42} className="h-8 w-auto object-contain flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base font-bold text-espresso leading-tight truncate">
                Prasad <span className="text-gold font-normal">Consultant</span>
              </span>
              <span className="text-[10px] text-espresso/60 uppercase tracking-wider truncate">All Pages &amp; Services</span>
            </div>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="w-9 h-9 border border-espresso/20 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition rounded-sm"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Contact Alert Bar */}
        <div className="p-3 bg-espresso text-cream flex items-center justify-between gap-2 text-xs flex-shrink-0">
          <span className="text-cream/90 text-[11px] font-medium flex items-center gap-1.5 truncate">
            <Sparkles size={12} className="text-gold flex-shrink-0" /> Quick Consultation
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={SITE.tel} className="inline-flex items-center gap-1 text-gold hover:underline text-[11px] font-semibold">
              <Phone size={11} /> Call
            </a>
            <span className="text-cream/30">·</span>
            <a
              href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I want to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#25D366] hover:underline text-[11px] font-semibold"
            >
              <MessageCircle size={11} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Scrollable Navigation Options - SARA OPTION DIKHEGA NEXT PAGE ME JANE KE LIYE */}
        <div className="flex-1 overflow-y-auto drawer-scroll p-4 sm:p-5 space-y-6">
          {/* Main Website Pages */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mb-2">Main Pages</p>
            <div className="grid gap-1.5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm border transition text-sm font-medium ${
                  pathname === "/"
                    ? "bg-espresso text-cream border-espresso font-semibold"
                    : "border-espresso/10 bg-white/70 text-espresso hover:border-gold hover:text-gold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Home size={16} className={pathname === "/" ? "text-gold" : "text-espresso/70"} />
                  <span>Home Page</span>
                </div>
                <ChevronRight size={14} className={pathname === "/" ? "text-gold" : "text-espresso/30"} />
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm border transition text-sm font-medium ${
                  pathname === "/about"
                    ? "bg-espresso text-cream border-espresso font-semibold"
                    : "border-espresso/10 bg-white/70 text-espresso hover:border-gold hover:text-gold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Info size={16} className={pathname === "/about" ? "text-gold" : "text-espresso/70"} />
                  <span>About Us</span>
                </div>
                <ChevronRight size={14} className={pathname === "/about" ? "text-gold" : "text-espresso/30"} />
              </Link>

              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm border transition text-sm font-medium ${
                  pathname === "/gallery"
                    ? "bg-espresso text-cream border-espresso font-semibold"
                    : "border-espresso/10 bg-white/70 text-espresso hover:border-gold hover:text-gold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ImageIcon size={16} className={pathname === "/gallery" ? "text-gold" : "text-espresso/70"} />
                  <span>Gallery</span>
                </div>
                <span className="text-[10px] tracking-wide uppercase px-2 py-0.5 bg-gold/20 text-espresso rounded-sm font-semibold">
                  Photos &amp; Videos
                </span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm border transition text-sm font-medium ${
                  pathname === "/contact"
                    ? "bg-espresso text-cream border-espresso font-semibold"
                    : "border-espresso/10 bg-white/70 text-espresso hover:border-gold hover:text-gold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className={pathname === "/contact" ? "text-gold" : "text-espresso/70"} />
                  <span>Contact Us &amp; Booking</span>
                </div>
                <ChevronRight size={14} className={pathname === "/contact" ? "text-gold" : "text-espresso/30"} />
              </Link>
            </div>
          </div>

          {/* All 8 Consulting Services - Direct links to all service pages */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold">All Consulting Services (8)</p>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="text-[11px] font-bold text-gold hover:underline uppercase tracking-wider"
              >
                Overview →
              </Link>
            </div>

            <div className="border border-espresso/15 rounded-sm overflow-hidden bg-white/80 divide-y divide-espresso/10">
              {SERVICES.map((s, index) => {
                const sHref = `/services/${s.slug}`;
                const isCurrentService = pathname === sHref;
                return (
                  <Link
                    key={s.slug}
                    href={sHref}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 text-xs transition ${
                      isCurrentService
                        ? "bg-espresso text-cream font-semibold"
                        : "text-espresso/80 hover:bg-cream hover:text-gold"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                        isCurrentService ? "bg-gold text-espresso" : "bg-espresso/10 text-espresso/70"
                      }`}>
                        {index + 1}
                      </span>
                      <span className="truncate font-medium">{s.title}</span>
                    </div>
                    <ChevronRight size={12} className={`flex-shrink-0 ${isCurrentService ? "text-gold" : "text-espresso/30"}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Contact & Booking CTAs */}
          <div className="pt-2 space-y-2.5">
            <p className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold">Quick Actions</p>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full text-center justify-center py-3 text-xs tracking-widest"
            >
              Book a Consultation
            </Link>

            <a
              href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full text-center justify-center py-3 text-xs tracking-widest"
            >
              <MessageCircle size={15} /> WhatsApp Inquiry
            </a>

            <a
              href={SITE.tel}
              className="flex items-center gap-3 p-3 bg-white border border-espresso/10 rounded-sm hover:border-gold transition text-espresso"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                <Phone size={14} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-espresso/60 uppercase tracking-wide">Call Directly</span>
                <span className="text-xs sm:text-sm font-semibold truncate">{SITE.phone}</span>
              </div>
            </a>

            <div className="flex items-start gap-3 p-3 bg-white border border-espresso/10 rounded-sm text-espresso">
              <div className="w-8 h-8 rounded-full bg-espresso/10 text-espresso flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} />
              </div>
              <div className="flex flex-col min-w-0 text-xs">
                <span className="text-[10px] text-espresso/60 uppercase tracking-wide">Office Location</span>
                <span className="text-espresso/80 leading-snug mt-0.5 text-[11px] sm:text-xs">{SITE.address}</span>
              </div>
            </div>
            {/* Social Media Links in Drawer */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-sm bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-medium shadow-sm hover:opacity-90 transition"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-sm bg-[#1877F2] text-white text-xs font-medium shadow-sm hover:opacity-90 transition"
              >
                <Facebook size={14} /> Facebook
              </a>
            </div>
          </div>

          {/* Legal / Policy Links */}
          <div className="pt-2 border-t border-espresso/10 text-xs text-espresso/60 space-y-2">
            <div className="flex items-center justify-center gap-4 text-[11px]">
              <Link href="/privacy" onClick={() => setOpen(false)} className="hover:text-gold transition">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" onClick={() => setOpen(false)} className="hover:text-gold transition">
                Terms of Service
              </Link>
            </div>
            <p className="text-[10px] text-center text-espresso/40">
              © {new Date().getFullYear()} {SITE.shortName}. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      {/* Floating Action Buttons: Call, Facebook, Instagram, WhatsApp (Pinned to Bottom-Right) */}
      <div
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto"
        aria-label="Floating Social and Contact Options"
      >
        {/* Floating Call Button */}
        <a
          href={SITE.tel}
          className="group flex items-center gap-2.5 bg-espresso text-gold border border-gold/40 shadow-2xl hover:bg-gold hover:text-espresso p-3 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Call Directly"
          title="Call +91 84012 75734"
        >
          <Phone size={18} className="text-gold group-hover:text-espresso transition-colors" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase text-cream group-hover:text-espresso">
            Call Now
          </span>
        </a>

        {/* Floating Facebook Button */}
        <a
          href={SITE.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#1877F2] text-white shadow-2xl hover:brightness-110 p-3 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Visit Facebook Page"
          title="Follow us on Facebook"
        >
          <Facebook size={18} className="text-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase text-white">
            Facebook
          </span>
        </a>

        {/* Floating Instagram Button */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-2xl hover:brightness-110 p-3 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Visit Instagram Profile"
          title="Follow us on Instagram"
        >
          <Instagram size={18} className="text-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase text-white">
            Instagram
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={waLink("Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a project. Please contact me.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] text-white shadow-2xl hover:brightness-105 p-3 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={19} className="text-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase text-white">
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
