import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jsonLd } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prasadbccaferestaurantconsultant.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#241713",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Prasad Bar Cafe Restaurant Consultant | Restaurant Consultant in Ahmedabad", template: "%s | Prasad Bar Cafe Restaurant Consultant" },
  description: "Premium cafe, bar and restaurant consulting in Ahmedabad — from concept planning and kitchen design to staffing, menu planning, recipes and operations.",
  openGraph: {
    type: "website", locale: "en_IN", siteName: "Prasad Bar Cafe Restaurant Consultant", url: SITE_URL,
    images: [{ url: "/assets/poster-open-planning.jpeg", width: 720, height: 1080, alt: "Prasad Bar Cafe Restaurant Consultant" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main className="pt-[88px] sm:pt-[96px] md:pt-[116px]">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
      </body>
    </html>
  );
}
