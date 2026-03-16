import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import AboutUsContainer from "@/app/about-us/_containers/about-us-container";

const jsonLd = generateJsonLd({
  title: "About Us",
  description: "Discover the story of DreamBeauty - founded by dermatologists to create clean, effective beauty products that deliver real results.",
  path: "/about-us",
  breadcrumbs: [{ name: "About Us", path: "/about-us" }],
});

export const metadata = genMeta({
  title: "About Us",
  description: "Discover the story of DreamBeauty - founded by dermatologists to create clean, effective beauty products that deliver real results.",
  keywords: [
    "about DreamBeauty",
    "clean beauty brand",
    "cruelty-free cosmetics",
    "dermatologist formulated",
    "beauty company",
    "sustainable beauty",
  ],
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <Script
        id="about-us-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <AboutUsContainer />
      </main>
    </>
  );
}
