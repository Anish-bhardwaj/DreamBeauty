import { Playfair_Display, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import ScrollToTop from "@/app/_components/scroll-to-top";

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
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
