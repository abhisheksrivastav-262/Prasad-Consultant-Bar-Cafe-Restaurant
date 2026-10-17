"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const SLIDES = [
  { src: "/assets/a.mp4",           alt: "Prasad Consultant – Promotional Video",          poster: "/assets/a.jpeg" },
  { src: "/assets/a1.mp4",          alt: "Bar Cafe Restaurant Consulting – Video 2",        poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-1.mp4", alt: "Cafe & Restaurant Open Planning Video",         poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-2.mp4", alt: "Restaurant Setup Promotional Video",            poster: "/assets/poster-staff-setup.jpeg" },
];

export default function HomeSlider() {
  const [idx, setIdx] = useState(0);
  const [muted, setMuted] = useState(true); // starts muted for autoplay policy, user can unmute
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When slide changes — reload video and try to play
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.load();
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false)); // autoplay blocked — user must click play
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // Sync muted state to video element without reload
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
  }, [muted]);

  const go = (n: number) => setIdx((n + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[idx];

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative w-full bg-espresso overflow-hidden rounded-sm shadow-lg">
      {/* Video container — maintains 16:9 ratio, video fills without cropping */}
      <div className="relative aspect-video w-full bg-black">
        <video
          key={slide.src}
          ref={videoRef}
          src={slide.src}
          poster={slide.poster}
          className="w-full h-full object-contain"
          playsInline
          loop
          muted={muted}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Dark gradient for controls visibility */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Slide counter top-left */}
      <div className="absolute top-3 left-3 bg-espresso/80 text-cream text-[11px] font-semibold px-2.5 py-1 rounded-sm tracking-wide">
        {idx + 1} / {SLIDES.length}
      </div>

      {/* Video title top-right */}
      <div className="absolute top-3 right-3 bg-espresso/80 text-cream/80 text-[10px] px-2.5 py-1 rounded-sm tracking-wide max-w-[55%] truncate hidden sm:block">
        {slide.alt}
      </div>

      {/* LEFT arrow */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          onClick={() => go(idx - 1)}
          aria-label="Previous video"
          className="bg-cream/80 hover:bg-gold hover:text-espresso text-espresso p-2.5 border border-espresso/10 transition rounded-sm shadow"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* RIGHT arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button
          onClick={() => go(idx + 1)}
          aria-label="Next video"
          className="bg-cream/80 hover:bg-gold hover:text-espresso text-espresso p-2.5 border border-espresso/10 transition rounded-sm shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom controls: Play/Pause + Mute + Dots */}
      <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-3 sm:px-4">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="bg-cream/85 hover:bg-gold hover:text-espresso text-espresso p-2 border border-espresso/10 transition rounded-sm shadow flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide"
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
          <span className="hidden sm:inline">{playing ? "Pause" : "Play"}</span>
        </button>

        {/* Slide dots */}
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, di) => (
            <button
              key={di}
              onClick={() => go(di)}
              aria-label={`Video ${di + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${di === idx ? "bg-gold w-6" : "bg-cream/60 hover:bg-cream w-2"}`}
            />
          ))}
        </div>

        {/* Mute / Unmute */}
        <button
          onClick={() => setMuted(!muted)}
          aria-label={muted ? "Unmute audio" : "Mute audio"}
          className="bg-cream/85 hover:bg-gold hover:text-espresso text-espresso p-2 border border-espresso/10 transition rounded-sm shadow flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span className="hidden sm:inline">{muted ? "Unmute" : "Muted"}</span>
        </button>
      </div>
    </div>
  );
}
