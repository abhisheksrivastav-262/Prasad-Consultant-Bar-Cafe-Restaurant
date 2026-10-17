export const SITE = {
  name: "Prasad Bar Cafe Restaurant Consultant",
  shortName: "Prasad Consultant",
  phone: "+91 84012 75734",
  phoneRaw: "918401275734",
  tel: "tel:+918401275734",
  address: "12 Box Park, S. G. Highway, Gota, Ahmedabad, Gujarat, India",
  city: "Ahmedabad",
  locality: "Gota",
  region: "Gujarat",
  country: "India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://prasadbccaferestaurantconsultant.com",
  instagram: "https://www.instagram.com/prasad_bar_cafe_consultant?dlrf=NnNoZGFqdGFjM3F3",
  facebook: "https://www.facebook.com/share/1DmQfJLLXe/",
  whatsapp: (msg: string) => `https://wa.me/918401275734?text=${encodeURIComponent(msg)}`,
};

export const WA_DEFAULT = "Hello Prasad Bar Cafe Restaurant Consultant, I would like to discuss a hospitality consulting project. Please contact me.";

export function waLink(message: string) {
  return `https://wa.me/918401275734?text=${encodeURIComponent(message)}`;
}
