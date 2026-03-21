import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import BlogDetailContainer from "./_containers/blog-detail-container";

const blogsData = [
  {
    id: 1,
    title: "The Ultimate Guide to Building a Skincare Routine for Every Skin Type",
    slug: "ultimate-guide-skincare-routine-every-skin-type",
    excerpt: "Whether you have oily, dry, combination, or sensitive skin, discover how to build a personalized skincare routine that delivers real results with clean ingredients.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    date: "2026-03-10",
    category: "Skincare Tips",
    content: [
      { type: "paragraph", text: "Building the perfect skincare routine doesn't have to be complicated. Whether you're a skincare beginner or looking to refine your existing regimen, understanding your skin type is the first step toward achieving that coveted healthy glow." },
      { type: "heading", text: "Know Your Skin Type" },
      { type: "paragraph", text: "The four main skin types are oily, dry, combination, and sensitive. Oily skin tends to produce excess sebum and is prone to breakouts. Dry skin often feels tight and may show flaking. Combination skin has oily areas (usually the T-zone) and dry patches. Sensitive skin reacts easily to products and environmental factors." },
      { type: "heading", text: "The Essential Steps" },
      { type: "paragraph", text: "Every good routine starts with three basics: cleanser, moisturizer, and sunscreen. From there, you can add targeted treatments like serums, exfoliants, and eye creams based on your specific concerns." },
      { type: "paragraph", text: "For morning routines, focus on protection — a gentle cleanser, antioxidant serum (like vitamin C), moisturizer, and SPF 30+. Evening routines should focus on repair — double cleanse, treatment serums (retinol, niacinamide), and a nourishing night cream." },
      { type: "heading", text: "Choosing Clean Ingredients" },
      { type: "paragraph", text: "At DreamBeauty, we believe in transparency. Look for products free from parabens, sulfates, phthalates, and synthetic fragrances. Our formulas use plant-based actives backed by clinical research to deliver visible results without compromising your skin's health." },
    ],
  },
  {
    id: 2,
    title: "Why Clean Beauty Matters: Understanding Ingredients in Your Products",
    slug: "why-clean-beauty-matters-understanding-ingredients",
    excerpt: "Not all beauty products are created equal. Learn how to read labels, identify harmful chemicals, and make informed choices for healthier skin and a healthier planet.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    date: "2026-02-25",
    category: "Clean Beauty",
    content: [
      { type: "paragraph", text: "The clean beauty movement has transformed how we think about the products we put on our skin. But what does 'clean beauty' actually mean, and why should you care?" },
      { type: "heading", text: "What Is Clean Beauty?" },
      { type: "paragraph", text: "Clean beauty refers to products made without ingredients that are known or suspected to be harmful to human health. This includes parabens, sulfates, phthalates, formaldehyde, and synthetic fragrances — chemicals that have been linked to hormonal disruption, skin irritation, and other health concerns." },
      { type: "heading", text: "Reading Labels Like a Pro" },
      { type: "paragraph", text: "The ingredient list on your products is ordered by concentration — the first ingredients make up the bulk of the formula. Look for recognizable, plant-derived ingredients near the top. Be wary of long chemical names you can't pronounce, though not all synthetic ingredients are harmful." },
      { type: "heading", text: "The DreamBeauty Standard" },
      { type: "paragraph", text: "Every DreamBeauty product undergoes rigorous testing and is formulated with at least 95% natural ingredients. We're transparent about every ingredient we use and why. Our commitment to clean beauty isn't just a marketing promise — it's the foundation of everything we create." },
    ],
  },
  {
    id: 3,
    title: "5 Makeup Trends You Need to Try This Season",
    slug: "5-makeup-trends-you-need-to-try-this-season",
    excerpt: "From glass skin to bold lip colors, these trending looks are taking over social media.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    date: "2026-02-15",
    category: "Makeup Trends",
    content: [
      { type: "paragraph", text: "This season's makeup trends are all about expressing your individuality while embracing a fresh, radiant aesthetic. Here are five must-try looks." },
      { type: "heading", text: "1. Glass Skin" },
      { type: "paragraph", text: "The Korean beauty trend that continues to captivate. Glass skin is all about achieving a dewy, luminous, almost translucent complexion. Start with well-hydrated skin, use a light-coverage foundation, and finish with a highlighting mist." },
      { type: "heading", text: "2. Bold Berry Lips" },
      { type: "paragraph", text: "Rich berry and plum tones are making a major comeback. These universally flattering shades work for day and night. Our Velvet Matte Lipstick in 'Midnight Berry' is perfect for nailing this look." },
      { type: "heading", text: "3. Soft Glam Eyes" },
      { type: "paragraph", text: "Think warm neutrals blended to perfection with a subtle shimmer on the lid. This wearable, everyday glam look is perfect for those who want sophistication without going overboard." },
    ],
  },
  {
    id: 4,
    title: "How to Repair Damaged Hair: Expert Tips and Product Recommendations",
    slug: "how-to-repair-damaged-hair-expert-tips",
    excerpt: "Heat styling, coloring, and environmental stress can wreak havoc on your hair.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    date: "2026-02-05",
    category: "Haircare",
    content: [
      { type: "paragraph", text: "Damaged hair doesn't have to be a permanent problem. With the right approach and products, you can restore your hair's health, shine, and strength." },
      { type: "heading", text: "Signs of Hair Damage" },
      { type: "paragraph", text: "Split ends, breakage, dullness, excessive frizz, and difficulty holding styles are all signs of damaged hair. Chemical treatments, heat styling, and UV exposure are the most common culprits." },
      { type: "heading", text: "The Repair Protocol" },
      { type: "paragraph", text: "Start by reducing heat styling frequency and always use a heat protectant. Switch to a sulfate-free shampoo to prevent further stripping of natural oils. Use a deep conditioning mask (like our Silk Repair Hair Mask) at least once a week." },
      { type: "heading", text: "Key Ingredients for Hair Repair" },
      { type: "paragraph", text: "Look for products containing keratin (rebuilds protein structure), argan oil (deep moisturizing), silk proteins (adds smoothness), and biotin (strengthens from within). Our haircare line is formulated with all of these powerhouse ingredients." },
    ],
  },
  {
    id: 5,
    title: "The Science Behind Hyaluronic Acid: Why Your Skin Needs It",
    slug: "science-behind-hyaluronic-acid-why-your-skin-needs-it",
    excerpt: "Hyaluronic acid is one of the most talked-about skincare ingredients.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
    date: "2026-01-20",
    category: "Ingredients",
    content: [
      { type: "paragraph", text: "Hyaluronic acid (HA) has become the darling of the skincare world — and for good reason. This naturally occurring molecule has remarkable hydrating properties that benefit every skin type." },
      { type: "heading", text: "What Is Hyaluronic Acid?" },
      { type: "paragraph", text: "Hyaluronic acid is a glycosaminoglycan — a naturally occurring substance in your skin that holds moisture. A single molecule of HA can hold up to 1,000 times its weight in water, making it one of the most effective hydrating ingredients available." },
      { type: "heading", text: "Choosing the Right HA Product" },
      { type: "paragraph", text: "Look for products with multiple molecular weights of HA for both surface and deep hydration. Our Hydrating Rose Facial Serum combines low and high molecular weight hyaluronic acid with organic rose water for maximum hydration and a natural glow." },
    ],
  },
  {
    id: 6,
    title: "Choosing the Perfect Fragrance: A Complete Buyer's Guide",
    slug: "choosing-perfect-fragrance-complete-buyers-guide",
    excerpt: "From understanding fragrance families to finding your signature scent.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    date: "2026-01-10",
    category: "Fragrance",
    content: [
      { type: "paragraph", text: "Finding your perfect fragrance is a deeply personal journey. A great scent becomes part of your identity — it's the invisible accessory that leaves a lasting impression." },
      { type: "heading", text: "Understanding Fragrance Families" },
      { type: "paragraph", text: "Fragrances are generally categorized into four families: floral (rose, jasmine, lily), oriental (vanilla, amber, spice), woody (sandalwood, cedar, vetiver), and fresh (citrus, green, aquatic). Understanding which family appeals to you narrows your search significantly." },
      { type: "heading", text: "Tips for Testing" },
      { type: "paragraph", text: "Test no more than three fragrances at a time. Apply to pulse points (wrists, behind ears) and live with the scent for a day before deciding. Our Midnight Bloom Eau de Parfum blends floral and oriental notes for an enchanting, long-lasting signature scent." },
    ],
  },
];

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return generateSeoMetadata({
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
      path: `/blogs/${slug}`,
      noIndex: true,
    });
  }

  return generateSeoMetadata({
    title: blog.title,
    description: blog.excerpt,
    keywords: [blog.category, "beauty blog", "DreamBeauty"],
    path: `/blogs/${slug}`,
    ogImage: blog.image,
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  const jsonLd = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        image: `${siteUrl}${blog.image}`,
        datePublished: blog.date,
        dateModified: blog.date,
        description: blog.excerpt,
        keywords: [blog.category, "beauty tips", "DreamBeauty", "clean beauty"],
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/blogs/${blog.slug}`,
        },
        author: {
          "@type": "Organization",
          name: "DreamBeauty",
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
        },
        publisher: {
          "@type": "Organization",
          name: "DreamBeauty",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`,
          },
        },
        articleSection: blog.category,
        wordCount: blog.content?.reduce((count, block) => count + (block.text?.split(/\s+/).length || 0), 0),
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
      <BlogDetailContainer blog={blog} />
    </>
  );
}
