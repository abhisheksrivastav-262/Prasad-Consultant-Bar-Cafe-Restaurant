export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Prasad Bar Cafe Restaurant Consultant",
    telephone: "+918401275734",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Box Park, S. G. Highway, Gota",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: "Ahmedabad",
    description: "Cafe, bar and restaurant consulting — concept to kitchen operations.",
  };
}
