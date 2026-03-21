import { getAllSlugs } from "@/data/products";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

async function getProductSlugs() {
  try {
    const res = await fetch(`${API_BASE_URL}/products?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const products = data.data || data;
      return products.map((p) => ({
        slug: p.slug,
        updatedAt: p.updatedAt || new Date().toISOString(),
      }));
    }
  } catch {
    // API not available, use static data
  }
  return getAllSlugs().map((item) => ({
    slug: item.slug,
    updatedAt: new Date().toISOString(),
  }));
}

async function getBlogSlugs() {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const blogs = data.data || data;
      return blogs.map((b) => ({
        slug: b.slug,
        updatedAt: b.updatedAt || b.date || new Date().toISOString(),
      }));
    }
  } catch {
    // API not available, use static data
  }
  return [
    "ultimate-guide-skincare-routine-every-skin-type",
    "why-clean-beauty-matters-understanding-ingredients",
    "5-makeup-trends-you-need-to-try-this-season",
    "how-to-repair-damaged-hair-expert-tips",
    "science-behind-hyaluronic-acid-why-your-skin-needs-it",
    "choosing-perfect-fragrance-complete-buyers-guide",
  ].map((slug) => ({ slug, updatedAt: new Date().toISOString() }));
}

export default async function sitemap() {
  const [productSlugs, blogSlugs] = await Promise.all([
    getProductSlugs(),
    getBlogSlugs(),
  ]);

  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/awards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const productPages = productSlugs.map((item) => ({
    url: `${SITE_URL}/products/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages = blogSlugs.map((item) => ({
    url: `${SITE_URL}/blogs/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
