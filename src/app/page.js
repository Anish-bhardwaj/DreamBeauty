import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import ListContainer from "@/app/_containers/list-container";

const jsonLd = generateJsonLd({
  title: "Premium Skincare, Makeup & Beauty Products",
  description:
    "DreamBeauty - Your destination for premium skincare, makeup, haircare, and fragrance products. Clean beauty, cruelty-free formulas that deliver real results.",
  path: "",
  breadcrumbs: [],
});

export const metadata = genMeta({
  title: "Premium Skincare, Makeup & Beauty Products",
  description:
    "DreamBeauty offers premium skincare, makeup, haircare, and fragrance products. Clean beauty, cruelty-free formulas developed by dermatologists.",
  keywords: [
    "skincare",
    "makeup",
    "beauty products",
    "cruelty-free",
    "clean beauty",
    "haircare",
    "fragrance",
    "serums",
    "DreamBeauty",
    "premium cosmetics",
  ],
  path: "",
});

export default function Home() {
  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <ListContainer />
      </main>
    </>
  );
}
