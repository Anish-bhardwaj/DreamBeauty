import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import ContactContainer from "@/app/contact/_containers/contact-container";

const jsonLd = generateJsonLd({
  title: "Contact Us",
  description: "Contact DreamBeauty for product inquiries, skincare consultations, or customer support. We're here to help you find your perfect beauty routine.",
  path: "/contact",
  breadcrumbs: [{ name: "Contact", path: "/contact" }],
});

export const metadata = genMeta({
  title: "Contact Us",
  description: "Contact DreamBeauty for product inquiries, skincare consultations, or customer support. We're here to help you find your perfect beauty routine.",
  keywords: [
    "contact DreamBeauty",
    "beauty product inquiry",
    "skincare consultation",
    "customer support",
    "beauty advice",
    "product questions",
  ],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <ContactContainer />
      </main>
    </>
  );
}
