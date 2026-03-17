import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import CategoriesPageContainer from "@/app/categories/_containers/categories-page-container";

const jsonLd = generateJsonLd({
  title: "Shop By Category",
  description:
    "Browse premium beauty products by category - Skincare, Makeup, Haircare, Fragrance, and more at DreamBeauty.",
  path: "/categories",
  breadcrumbs: [{ name: "Categories", path: "/categories" }],
});

export const metadata = genMeta({
  title: "Shop By Category",
  description:
    "Browse premium beauty products by category - Skincare, Makeup, Haircare, Fragrance, and more at DreamBeauty.",
  keywords: [
    "beauty categories",
    "skincare products",
    "makeup collection",
    "haircare products",
    "fragrance",
    "clean beauty",
    "DreamBeauty categories",
  ],
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <Script
        id="categories-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <CategoriesPageContainer />
      </main>
    </>
  );
}
