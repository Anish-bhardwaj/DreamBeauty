import Script from "next/script";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";
import BlogsContainer from "@/app/blogs/_containers/blogs-container";

const jsonLd = generateJsonLd({
  title: "Beauty Blog & Tips",
  description: "Explore skincare tips, makeup tutorials, beauty trends, and expert advice from DreamBeauty. Learn how to enhance your natural beauty.",
  path: "/blogs",
  breadcrumbs: [{ name: "Blog", path: "/blogs" }],
});

export const metadata = genMeta({
  title: "Beauty Blog & Tips",
  description: "Explore skincare tips, makeup tutorials, beauty trends, and expert advice from DreamBeauty. Learn how to enhance your natural beauty.",
  keywords: [
    "beauty blog",
    "skincare tips",
    "makeup tutorials",
    "beauty trends",
    "clean beauty advice",
    "skincare routine",
  ],
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <>
      <Script
        id="blogs-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main>
        <BlogsContainer />
      </main>
    </>
  );
}
