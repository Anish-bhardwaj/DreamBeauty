import { Suspense } from "react";
import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import ProductsContainer from "@/app/products/_containers/products-container";

const jsonLd = generateJsonLd({
  title: "Shop Beauty Products",
  description: "Shop premium skincare, makeup, haircare, and fragrance products. Cruelty-free, clean beauty formulas for all skin types.",
  path: "/products",
  breadcrumbs: [{ name: "Products", path: "/products" }],
});

export const metadata = genMeta({
  title: "Shop Beauty Products",
  description: "Shop premium skincare, makeup, haircare, and fragrance products. Cruelty-free, clean beauty formulas for all skin types.",
  keywords: [
    "buy skincare",
    "shop makeup online",
    "clean beauty products",
    "haircare products",
    "fragrance collection",
    "cruelty-free cosmetics",
    "premium beauty",
    "skincare serums",
  ],
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <Suspense fallback={null}>
          <ProductsContainer />
        </Suspense>
      </main>
    </>
  );
}
