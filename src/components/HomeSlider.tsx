"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const SLIDES = [
  { src: "/assets/promo-video-1.mp4", alt: "Promotional video 1", poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-2.mp4", alt: "Promotional video 2", poster: "/assets/poster-staff-setup.jpeg" },
];

export default function HomeSlider() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [i, playing, muted]);

  const go = (n: number) => setI((n + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[i];

  return (
    <div className="relative w-full bg-espresso overflow-hidden border border-espresso/10">
      <div className="relative aspect-video w-full bg-black flex items-center justify-center">
        <video
          key={slide.src}
          ref={videoRef}
          src={slide.src}
          poster={slide.poster}
          className="w-full h-full object-contain"
          playsInline
          loop
          muted={muted}
          controls
        />
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button onClick={() => go(i - 1)} aria-label="Previous video" className="bg-cream/80 hover:bg-cream p-2 border border-espresso/10">
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button onClick={() => go(i + 1)} aria-label="Next video" className="bg-cream/80 hover:bg-cream p-2 border border-espresso/10">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-3 right-3 flex gap-2">
        <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Play"} className="bg-cream/80 hover:bg-cream p-2 border border-espresso/10">
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute" : "Mute"} className="bg-cream/80 hover:bg-cream p-2 border border-espresso/10">
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => go(idx)} aria-label={`Go to video ${idx + 1}`} className={`h-2 rounded-full transition ${idx === i ? "bg-gold w-6" : "bg-cream/70 w-2"}`} />
        ))}
      </div>
    </div>
  );
}
