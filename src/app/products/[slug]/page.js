import { generateMetadata as generateSeoMetadata, generateJsonLd } from "@/lib/seo";
import ProductDetailContainer from "./_containers/product-detail-container";

// Beauty products data
const productsData = [
  {
    id: 1,
    name: "Hydrating Rose Facial Serum",
    slug: "hydrating-rose-facial-serum",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"],
    originalPrice: 6500,
    salePrice: 4999,
    taxText: "Inclusive of all taxes",
    description: "Our bestselling Hydrating Rose Facial Serum is formulated with organic rose water, hyaluronic acid, and vitamin E. This luxurious serum deeply hydrates and plumps skin, reducing the appearance of fine lines while providing a natural, dewy glow.",
    features: ["100% Organic Rose Water", "Hyaluronic Acid", "Vitamin E Complex", "30ml bottle"],
    category: "Skincare",
  },
  {
    id: 2,
    name: "Luminous Glow Foundation",
    slug: "luminous-glow-foundation",
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80"],
    originalPrice: 4500,
    salePrice: 3599,
    taxText: "Inclusive of all taxes",
    description: "Achieve flawless, radiant skin with our Luminous Glow Foundation. This buildable, medium-to-full coverage formula glides on smoothly and lasts all day. Infused with skincare ingredients to nourish while you wear.",
    features: ["Buildable Coverage", "SPF 25", "12-Hour Wear", "Available in 30 shades"],
    category: "Makeup",
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick Set",
    slug: "velvet-matte-lipstick-set",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80"],
    originalPrice: 3200,
    salePrice: 2499,
    taxText: "Inclusive of all taxes",
    description: "A curated collection of our most-loved velvet matte lipsticks. Each shade delivers rich, pigmented color with a comfortable, non-drying formula. Perfect for creating everyday looks or bold statements.",
    features: ["5 Bestselling Shades", "Hydrating Formula", "Long-Lasting Color", "Cruelty-Free"],
    category: "Makeup",
  },
  {
    id: 4,
    name: "Silk Repair Hair Mask",
    slug: "silk-repair-hair-mask",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80"],
    originalPrice: 2800,
    salePrice: 2199,
    taxText: "Inclusive of all taxes",
    description: "Transform damaged, dry hair with our intensive Silk Repair Hair Mask. Enriched with argan oil, keratin, and silk proteins, this treatment restores strength, shine, and manageability after just one use.",
    features: ["Argan Oil Infused", "Keratin Complex", "For All Hair Types", "250ml jar"],
    category: "Haircare",
  },
  {
    id: 5,
    name: "Midnight Bloom Eau de Parfum",
    slug: "midnight-bloom-eau-de-parfum",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"],
    originalPrice: 8500,
    salePrice: 6999,
    taxText: "Inclusive of all taxes",
    description: "An enchanting fragrance that captures the essence of a moonlit garden. Top notes of bergamot and jasmine blend with heart notes of rose and peony, settling into a warm base of sandalwood and vanilla.",
    features: ["Long-Lasting Scent", "50ml bottle", "Luxury Glass Bottle", "Gift-Ready Packaging"],
    category: "Fragrance",
  },
];

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

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
  const product = productsData.find((p) => p.slug === slug);

  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.images,
        description: product.description,
        offers: {
          "@type": "Offer",
          price: product.salePrice,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
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
