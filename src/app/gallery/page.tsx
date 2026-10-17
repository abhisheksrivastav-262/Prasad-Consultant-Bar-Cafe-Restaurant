"use client";
import { useState } from "react";
import Image from "next/image";
import { GALLERY, GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const CATS = ["All", "Kitchen", "Chefs", "Staff", "Cafe", "Restaurant", "Consulting"] as const;

export default function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);
  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + items.length) % items.length));
  const next = () => setActive((a) => (a === null ? null : (a + 1) % items.length));

  return (
    <>
      <section className="section bg-paper">
        <div className="container">
          <p className="eyebrow mb-4">Gallery</p>
          <h1 className="heading-xl">Business images and media.</h1>
          <p className="body-lg mt-5 text-espresso/70 max-w-2xl">
            A selection of supplied business photographs and promotional videos. No stock imagery or fabricated projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 text-xs uppercase tracking-widest border transition ${cat === c ? "bg-espresso text-cream border-espresso" : "border-espresso/20 text-espresso/70 hover:border-gold"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <p className="text-center text-espresso/60 py-20">No images in this category yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {items.map((g, i) => (
                <button key={g.src} onClick={() => open(i)} className="break-inside-avoid block w-full group relative overflow-hidden border border-espresso/10">
                  {g.type === "video" ? (
                    <div className="relative aspect-video">
                      <video src={g.src} poster={g.poster} className="w-full h-full object-cover" muted playsInline />
                      <div className="absolute inset-0 flex items-center justify-center bg-espresso/20 group-hover:bg-espresso/10 transition">
                        <Play className="text-cream" size={36} />
                      </div>
                    </div>
                  ) : (
                    <Image src={g.src} alt={g.alt} width={720} height={960} className="w-full h-auto group-hover:scale-105 transition duration-700" />
                  )}
                  <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest bg-cream/90 px-2 py-1">{g.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {active !== null && items[active] && (
        <div className="fixed inset-0 z-[80] bg-espresso/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <button className="absolute top-4 right-4 text-cream p-2.5 bg-espresso/80 border border-cream/20 hover:border-gold transition rounded-sm" onClick={close} aria-label="Close"><X size={24} /></button>
          <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-cream p-2.5 bg-espresso/80 border border-cream/20 hover:border-gold transition rounded-sm" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"><ChevronLeft size={24} /></button>
          <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-cream p-2.5 bg-espresso/80 border border-cream/20 hover:border-gold transition rounded-sm" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"><ChevronRight size={24} /></button>
          <div className="max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            {items[active].type === "video" ? (
              <video src={items[active].src} controls autoPlay className="w-full max-h-[85vh]" />
            ) : (
              <Image src={items[active].src} alt={items[active].alt} width={1200} height={1600} className="w-full h-auto max-h-[85vh] object-contain" />
            )}
            <p className="text-cream/80 text-sm mt-3 text-center">{items[active].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
