export type GalleryItem = {
  src: string;
  alt: string;
  category: "Kitchen" | "Chefs" | "Staff" | "Cafe" | "Restaurant" | "Consulting";
  type: "image" | "video";
  poster?: string;
};

export const GALLERY: GalleryItem[] = [
  { src: "/assets/poster-open-planning.jpeg", alt: "Cafe and restaurant open planning promotional artwork", category: "Consulting", type: "image" },
  { src: "/assets/poster-staff-setup.jpeg", alt: "Prasad consultant staff setup and menu planning artwork", category: "Consulting", type: "image" },
  { src: "/assets/poster-brand.jpeg", alt: "Prasad consultant brand artwork", category: "Consulting", type: "image" },
  { src: "/assets/brand-mark.jpeg", alt: "Prasad Bar Cafe Restaurant Consultant brand mark", category: "Consulting", type: "image" },
  { src: "/assets/staff-ad.jpeg", alt: "Hospitality staffing advertisement listing Chef, CDP, Commis, Steward, Captain, Helper, Barista", category: "Staff", type: "image" },
  { src: "/assets/justdial-listing.jpeg", alt: "Prasad Bar Cafe Restaurant Consultant listing on Justdial, Ahmedabad", category: "Consulting", type: "image" },
  { src: "/assets/promo-video-1.mp4", alt: "Promotional video showing cafe, bar and restaurant consulting", category: "Cafe", type: "video", poster: "/assets/poster-open-planning.jpeg" },
  { src: "/assets/promo-video-2.mp4", alt: "Restaurant setup promotional video", category: "Restaurant", type: "video", poster: "/assets/poster-staff-setup.jpeg" },
];
