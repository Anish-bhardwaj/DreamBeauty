import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import ProductDetailContainer from "./_containers/product-detail-container";
import { getProductBySlug, getAllSlugs } from "@/data/products";

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return generateSeoMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return generateSeoMetadata({
    title: product.name,
    description: product.description,
    keywords: [product.name, product.category, "beauty", "skincare", "DreamBeauty"],
    path: `/products/${slug}`,
    ogImage: product.image,
  });
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.images,
        description: product.description,
        url: `${siteUrl}/products/${product.slug}`,
        brand: {
          "@type": "Organization",
          name: "DreamBeauty",
        },
        material: product.productType,
        category: product.category,
        offers: {
          "@type": "Offer",
          price: product.salePrice,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/products/${product.slug}`,
          priceValidUntil: "2027-12-31",
          seller: {
            "@type": "Organization",
            name: "DreamBeauty",
          },
        },
        additionalProperty: product.specifications?.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailContainer product={product} />
    </>
  );
}
