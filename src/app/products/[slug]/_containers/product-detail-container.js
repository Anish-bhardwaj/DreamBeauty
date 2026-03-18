"use client";

import React from "react";
import ProductDetail from "../_components/product-detail";
import ProductNotFound from "../_components/product-not-found";
import CustomerReviews from "../_components/customer-reviews";
import SimilarProducts from "../_components/similar-products";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";

const allProducts = [
  { id: 101, name: "Hydrating Rose Facial Serum 30ml", slug: "hydrating-rose-facial-serum-30ml-101", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80", originalPrice: 6500, salePrice: 4999, taxText: "Inclusive of all taxes", category: "Skincare" },
  { id: 102, name: "Luminous Glow Foundation SPF25", slug: "luminous-glow-foundation-spf25-102", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80", originalPrice: 4500, salePrice: 3599, taxText: "Inclusive of all taxes", category: "Makeup" },
  { id: 103, name: "Velvet Matte Lipstick Set", slug: "velvet-matte-lipstick-set-103", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", originalPrice: 3200, salePrice: 2499, taxText: "Inclusive of all taxes", category: "Makeup" },
  { id: 104, name: "Silk Repair Hair Mask 250ml", slug: "silk-repair-hair-mask-250ml-104", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80", originalPrice: 2800, salePrice: 2199, taxText: "Inclusive of all taxes", category: "Haircare" },
  { id: 105, name: "Midnight Bloom Eau de Parfum 50ml", slug: "midnight-bloom-eau-de-parfum-50ml-105", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", originalPrice: 8500, salePrice: 6999, taxText: "Inclusive of all taxes", category: "Fragrance" },
  { id: 106, name: "Vitamin C Brightening Moisturizer", slug: "vitamin-c-brightening-moisturizer-106", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", originalPrice: 3500, salePrice: 2799, taxText: "Inclusive of all taxes", category: "Skincare" },
  { id: 107, name: "Argan Oil Shampoo 300ml", slug: "argan-oil-shampoo-300ml-107", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", originalPrice: 1800, salePrice: 1499, taxText: "Inclusive of all taxes", category: "Haircare" },
  { id: 108, name: "Precision Liquid Eyeliner", slug: "precision-liquid-eyeliner-108", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80", originalPrice: 1200, salePrice: 999, taxText: "Inclusive of all taxes", category: "Makeup" },
  { id: 109, name: "Retinol Night Repair Cream", slug: "retinol-night-repair-cream-109", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80", originalPrice: 4200, salePrice: 3499, taxText: "Inclusive of all taxes", category: "Skincare" },
  { id: 110, name: "Fresh Citrus Body Mist 150ml", slug: "fresh-citrus-body-mist-150ml-110", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", originalPrice: 2200, salePrice: 1799, taxText: "Inclusive of all taxes", category: "Fragrance" },
];

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80",
    rating: 5,
    date: "2025-12-25",
    text: "Absolutely love this product! My skin has never felt so hydrated and smooth. The results were visible within just a week of use. Highly recommend DreamBeauty!",
  },
  {
    id: 2,
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 4,
    date: "2025-12-20",
    text: "Great quality and beautiful packaging. The product performs exactly as described. I love that it's cruelty-free and made with natural ingredients.",
  },
  {
    id: 3,
    name: "Maria Garcia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    rating: 5,
    date: "2025-12-15",
    text: "This has become my holy grail product! The texture is luxurious and it absorbs quickly. Customer service was also exceptional when I had questions.",
  },
];

function ProductDetailContainer({ product }) {
  if (!product) {
    return <ProductNotFound />;
  }

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

  const similarProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  const filledProducts =
    similarProducts.length >= 5
      ? similarProducts
      : [
          ...similarProducts,
          ...allProducts
            .filter((p) => p.id !== product.id && !similarProducts.find((sp) => sp.id === p.id))
            .slice(0, 5 - similarProducts.length),
        ];

  return (
    <React.Fragment>
      <ProductDetail product={product} />
      <CustomerReviews reviews={reviewsData} />
      <SimilarProducts
        title="You May Also Like"
        subtitle="Explore our most loved collections, designed to match every beauty routine."
        products={filledProducts}
        ctaText="View All"
        ctaLink="/products"
      />
      <StatsSection data={statsData} />
      <FaqSection data={faqData} />
    </React.Fragment>
  );
}

export default ProductDetailContainer;
