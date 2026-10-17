export type GalleryItem = {
  src: string;
  alt: string;
  category: "Kitchen" | "Chefs" | "Staff" | "Cafe" | "Restaurant" | "Consulting";
  type: "image" | "video";
  poster?: string;
};

export const GALLERY: GalleryItem[] = [
  // ── Consulting ─────────────────────────────────────────────────────────────
  { src: "/assets/a.jpeg",               alt: "Prasad Bar Cafe Restaurant Consultant – Featured Image",       category: "Consulting", type: "image" },
  { src: "/assets/poster-open-planning.jpeg", alt: "Cafe and restaurant open planning promotional artwork",   category: "Consulting", type: "image" },
  { src: "/assets/poster-staff-setup.jpeg",   alt: "Staff setup and menu planning promotional artwork",       category: "Consulting", type: "image" },
  { src: "/assets/poster-brand.jpeg",    alt: "Prasad Consultant brand artwork",                              category: "Consulting", type: "image" },
  { src: "/assets/brand-mark.jpeg",      alt: "Prasad Bar Cafe Restaurant Consultant brand mark",             category: "Consulting", type: "image" },
  { src: "/assets/justdial-listing.jpeg", alt: "Prasad Consultant listing on Justdial Ahmedabad",            category: "Consulting", type: "image" },

  // ── Staff ──────────────────────────────────────────────────────────────────
  { src: "/assets/staff-ad.jpeg",        alt: "Hospitality staffing – Chef, CDP, Commis, Steward, Captain, Helper, Barista", category: "Staff", type: "image" },

  // ── Kitchen ────────────────────────────────────────────────────────────────
  { src: "/assets/kitchen-professional.jpeg", alt: "Professional restaurant kitchen setup with stainless steel equipment", category: "Kitchen", type: "image" },

  // ── Chefs ──────────────────────────────────────────────────────────────────
  { src: "/assets/chef-cooking.jpeg",    alt: "Chef cooking in a professional Indian restaurant kitchen",    category: "Chefs",   type: "image" },

  // ── Cafe ───────────────────────────────────────────────────────────────────
  { src: "/assets/cafe-restaurant-bar.jpeg", alt: "Modern cafe and restaurant bar interior setup",          category: "Cafe",    type: "image" },

  // ── Videos ─────────────────────────────────────────────────────────────────
  { src: "/assets/a.mp4",               alt: "Prasad Consultant – Promotional Video 1",                      category: "Consulting", type: "video", poster: "/assets/a.jpeg" },
  { src: "/assets/a1.mp4",              alt: "Bar Cafe Restaurant Consulting – Promotional Video 2",         category: "Consulting", type: "video", poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-1.mp4",   alt: "Cafe & restaurant open planning promotional video",            category: "Cafe",       type: "video", poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-2.mp4",   alt: "Restaurant setup and consulting promotional video",            category: "Restaurant", type: "video", poster: "/assets/poster-staff-setup.jpeg" },
];
