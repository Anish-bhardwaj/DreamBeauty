import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import AwardsPageContainer from "./_containers/awards-page-container";

const jsonLd = generateJsonLd({
  title: "Certifications & Recognition",
  description:
    "Explore DreamBeauty's certifications and awards for clean beauty, cruelty-free practices, and sustainable packaging.",
  path: "/awards",
  breadcrumbs: [{ name: "Certifications", url: "/awards" }],
});

export const metadata = genMeta({
  title: "Certifications & Recognition",
  description:
    "DreamBeauty - Celebrating our commitment to clean beauty with prestigious certifications including Leaping Bunny, Vegan Society, and sustainability awards.",
  keywords: [
    "DreamBeauty certifications",
    "cruelty-free certification",
    "clean beauty awards",
    "Leaping Bunny certified",
    "vegan beauty",
    "sustainable packaging award",
  ],
  path: "/awards",
});

export default function AwardsPage() {
  return (
    <>
      <Script
        id="awards-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <AwardsPageContainer />
      </main>
    </>
  );
}
