// Centralized product data - will be replaced with API calls
// All product data across the app should import from this file.

const productsByCategory = {
  Skincare: [
    { name: "Hydrating Rose Facial Serum", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
    { name: "Vitamin C Brightening Moisturizer", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Gentle Foaming Cleanser", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Retinol Night Repair Cream", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Niacinamide Pore Minimizer", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
    { name: "SPF 50 Daily Sunscreen", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "AHA BHA Exfoliating Toner", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Hyaluronic Acid Eye Cream", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Green Tea Detox Face Mask", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Bakuchiol Anti-Aging Serum", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
    { name: "Ceramide Barrier Repair Cream", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Rosehip Oil Face Elixir", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
  ],
  Makeup: [
    { name: "Luminous Glow Foundation SPF25", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80" },
    { name: "Velvet Matte Lipstick Rose Petal", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80" },
    { name: "Long-Wear Concealer Stick", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
    { name: "Precision Liquid Eyeliner", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80" },
    { name: "Volumizing Mascara Jet Black", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80" },
    { name: "Cream Blush Duo Palette", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
    { name: "Setting Powder Translucent", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80" },
    { name: "Eyeshadow Palette Neutral Tones", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
    { name: "Lip Gloss Berry Shine", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80" },
    { name: "Brow Gel Soft Brown", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80" },
  ],
  Haircare: [
    { name: "Silk Repair Hair Mask", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Argan Oil Nourishing Shampoo", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Keratin Smoothing Conditioner", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
    { name: "Heat Protectant Spray", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Biotin Hair Growth Serum", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Anti-Frizz Smoothing Oil", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
    { name: "Volumizing Dry Shampoo", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Scalp Detox Treatment", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Color Protect Shampoo", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
    { name: "Leave-In Conditioning Cream", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
  ],
  Fragrance: [
    { name: "Midnight Bloom Eau de Parfum", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Fresh Citrus Body Mist", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Velvet Rose Perfume Oil", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Ocean Breeze Eau de Toilette", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Vanilla Dreams Body Spray", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Luxury Oud Eau de Parfum", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Jasmine Garden Mist", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Amber Noir Eau de Parfum", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
  ],
  "Body Care": [
    { name: "Shea Butter Body Lotion", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Exfoliating Body Scrub", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Hydrating Hand Cream", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Coconut Milk Bath Soak", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Vitamin E Body Oil", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Lavender Body Butter", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Gentle Body Wash Rose", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Foot Repair Balm", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
  ],
  "Gift Sets": [
    { name: "Ultimate Glow Skincare Set", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
    { name: "Makeup Essentials Bundle", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
    { name: "Haircare Rescue Kit", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Fragrance Discovery Set", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Self-Care Spa Box", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Bridal Beauty Collection", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
    { name: "Mini Bestsellers Set", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Holiday Glam Gift Box", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
  ],
};

export const CATEGORIES = ["Skincare", "Makeup", "Haircare", "Fragrance", "Body Care", "Gift Sets"];

export const PRODUCT_TYPES = ["Serum", "Cream", "Cleanser", "Lipstick", "Foundation", "Mask", "Oil", "Spray"];

function generateSlug(name, id) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}-${id}`;
}

const allImages = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
];

function getProductImages(primaryImage, id) {
  const others = allImages.filter((img) => img !== primaryImage);
  const startIdx = id % others.length;
  const picked = [
    others[startIdx % others.length],
    others[(startIdx + 1) % others.length],
    others[(startIdx + 2) % others.length],
  ];
  return [primaryImage, ...picked];
}

function buildAllProducts() {
  const products = [];
  let id = 1;

  CATEGORIES.forEach((category) => {
    const items = productsByCategory[category];
    items.forEach((item, index) => {
      const typeIndex = index % PRODUCT_TYPES.length;
      const basePrice = 1500 + Math.floor(((id * 7) % 50) * 200);
      const salePrice = basePrice - Math.floor(basePrice * 0.15);

      products.push({
        id,
        name: item.name,
        slug: generateSlug(item.name, id),
        image: item.image,
        images: getProductImages(item.image, id),
        originalPrice: basePrice,
        salePrice,
        taxText: "Inclusive of all taxes",
        category,
        productType: PRODUCT_TYPES[typeIndex],
        specifications: [
          { label: "Size", value: `${30 + (id % 50)}ml` },
          { label: "Type", value: PRODUCT_TYPES[typeIndex] },
          { label: "Skin Type", value: ["All Skin Types", "Dry Skin", "Oily Skin", "Sensitive Skin"][id % 4] },
          { label: "Key Ingredient", value: ["Hyaluronic Acid", "Vitamin C", "Retinol", "Niacinamide", "Argan Oil", "Rose Extract"][id % 6] },
        ],
        description:
          "Formulated with clean, cruelty-free ingredients by our expert dermatologists. This product delivers visible results while being gentle on your skin. Suitable for daily use as part of your beauty routine.",
        highlights: [
          "Free Shipping on orders over ₹2,000 within India.",
          "30-day satisfaction guarantee — love it or return it.",
        ],
        note: "As our products use natural ingredients, slight variations in color or texture may occur between batches. This is normal and does not affect product performance.",
      });
      id++;
    });
  });

  return products;
}

export const allProducts = buildAllProducts();

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export function getProductsByCategory(category) {
  return allProducts.filter((p) => p.category === category);
}

export function getSimilarProducts(productId, category, limit = 5) {
  const sameCategory = allProducts.filter(
    (p) => p.category === category && p.id !== productId
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = allProducts.filter(
    (p) => p.id !== productId && !sameCategory.find((s) => s.id === p.id)
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getFiltersData() {
  return {
    categories: CATEGORIES.map((cat) => ({
      name: cat,
      count: productsByCategory[cat].length,
    })),
    productTypes: PRODUCT_TYPES.map((type) => ({
      name: type,
      count: allProducts.filter((p) => p.productType === type).length,
    })),
    priceRange: {
      min: 0,
      max: 15000,
    },
  };
}

export function getBestSellingProducts(limit = 4) {
  return getProductsByCategory("Skincare").slice(0, limit);
}
