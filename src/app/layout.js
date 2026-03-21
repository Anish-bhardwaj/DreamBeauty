import Script from "next/script";
import { Playfair_Display, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import ScrollToTop from "@/app/_components/scroll-to-top";
import WhatsappFloat from "@/app/_components/whatsapp-float";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": (process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com") + "/#organization",
  name: "DreamBeauty",
  description: "Premium skincare, makeup, haircare, and fragrance products. Clean beauty, cruelty-free formulas developed by dermatologists.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com") + "/logo.png",
  image: (process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com") + "/logo-enhanced.png",
  telephone: "+15551234567",
  email: "hello@dreambeauty.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Beauty Boulevard, Suite 100",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  priceRange: "$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Cash, Credit Card, UPI, PayPal",
  founder: {
    "@type": "Person",
    name: "Dr. Isabella Rose",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+15551234567",
      email: "hello@dreambeauty.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  award: ["Clean Beauty Award 2022", "Leaping Bunny Certified"],
  sameAs: [],
};

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"),
  title: {
    default: "DreamBeauty | Premium Skincare, Makeup & Beauty Products",
    template: "%s | DreamBeauty",
  },
  description: "DreamBeauty - Your destination for premium skincare, makeup, haircare, and fragrance products. Clean beauty, cruelty-free formulas.",
  keywords: ["DreamBeauty", "skincare", "makeup", "haircare", "fragrance", "beauty products", "clean beauty", "cruelty-free"],
  authors: [{ name: "DreamBeauty" }],
  creator: "DreamBeauty",
  publisher: "DreamBeauty",
  manifest: "/manifest.json",
  themeColor: "#E91E63",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DreamBeauty",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DreamBeauty",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${poppins.variable}`}>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
