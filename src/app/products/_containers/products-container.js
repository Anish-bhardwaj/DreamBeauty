"use client";

import React from "react";
import ProductsListing from "@/app/products/_components/products-listing";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";

const productsByCategory = {
  Skincare: [
    { name: "Hydrating Rose Facial Serum 30ml", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
    { name: "Vitamin C Brightening Moisturizer 50ml", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Gentle Foaming Cleanser 150ml", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Retinol Night Repair Cream 50ml", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Niacinamide Pore Minimizer 30ml", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
    { name: "SPF 50 Daily Sunscreen 60ml", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "AHA BHA Exfoliating Toner 200ml", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
    { name: "Hyaluronic Acid Eye Cream 15ml", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
    { name: "Green Tea Face Mask 100ml", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
    { name: "Bakuchiol Anti-Aging Serum 30ml", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
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
    { name: "Silk Repair Hair Mask 250ml", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Argan Oil Shampoo 300ml", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Keratin Conditioner 300ml", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
    { name: "Heat Protectant Spray 200ml", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Biotin Hair Growth Serum 50ml", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
    { name: "Anti-Frizz Smoothing Oil 100ml", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
    { name: "Volumizing Dry Shampoo 150ml", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
    { name: "Scalp Detox Treatment 100ml", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
  ],
  Fragrance: [
    { name: "Midnight Bloom Eau de Parfum 50ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Fresh Citrus Body Mist 150ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Velvet Rose Perfume Oil 10ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Ocean Breeze Eau de Toilette 75ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Vanilla Dreams Body Spray 200ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
    { name: "Luxury Oud Eau de Parfum 50ml", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
  ],
};

const categories = ["Skincare", "Makeup", "Haircare", "Fragrance"];
const productTypes = ["Serum", "Cream", "Cleanser", "Lipstick", "Foundation", "Mask", "Oil", "Spray"];

const generateProducts = () => {
  const products = [];
  let id = 1;

  categories.forEach((category) => {
    const items = productsByCategory[category];
    items.forEach((item, index) => {
      const typeIndex = index % productTypes.length;
      const basePrice = 1500 + Math.floor(((id * 7) % 50) * 200);
      const salePrice = basePrice - Math.floor(basePrice * 0.15);

      products.push({
        id,
        name: item.name,
        slug: `${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}-${id}`,
        image: item.image,
        originalPrice: basePrice,
        salePrice,
        taxText: "Inclusive of all taxes",
        category,
        productType: productTypes[typeIndex],
      });
      id++;
    });
  });

  return products;
};

const productsData = generateProducts();

const filtersData = {
  categories: categories.map((cat) => ({
    name: cat,
    count: productsByCategory[cat].length,
  })),
  productTypes: [
    { name: "Serum", count: 5 },
    { name: "Cream", count: 5 },
    { name: "Cleanser", count: 4 },
    { name: "Lipstick", count: 4 },
    { name: "Foundation", count: 3 },
    { name: "Mask", count: 4 },
    { name: "Oil", count: 4 },
    { name: "Spray", count: 5 },
  ],
  priceRange: { min: 0, max: 15000 },
};

const sortOptions = [
  { label: "Sort by", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

const statsData = {
  stats: [
    { id: 1, icon: "clients", number: "50K+", label: "Happy Customers" },
    { id: 2, icon: "statues", number: "200+", label: "Premium Products" },
    { id: 3, icon: "experience", number: "4.9", label: "Average Rating" },
  ],
};

const faqData = {
  title: "Frequently Asked Questions",
  image: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    alt: "Beauty Products",
  },
  faqs: [
    { id: 1, question: "Are your products cruelty-free?", answer: "Yes! All DreamBeauty products are 100% cruelty-free and never tested on animals." },
    { id: 2, question: "What is your return policy?", answer: "We offer a 30-day satisfaction guarantee. Return unused products for a full refund." },
    { id: 3, question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express shipping is 1-2 days." },
    { id: 4, question: "Are products suitable for sensitive skin?", answer: "Many products are formulated for sensitive skin. Look for the 'Sensitive Skin Approved' badge." },
    { id: 5, question: "Do you offer samples?", answer: "Yes! Add complimentary samples at checkout. We also offer discovery sets." },
  ],
};

function ProductsContainer() {
  return (
    <React.Fragment>
      <ProductsListing
        title="Our Beauty Collection"
        products={productsData}
        filters={filtersData}
        sortOptions={sortOptions}
        productsPerPage={16}
      />
      <StatsSection data={statsData} />
      <FaqSection data={faqData} />
    </React.Fragment>
  );
}

export default ProductsContainer;
