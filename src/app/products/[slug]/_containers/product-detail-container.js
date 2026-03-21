"use client";

import React from "react";
import ProductDetail from "../_components/product-detail";
import ProductNotFound from "../_components/product-not-found";
import CustomerReviews from "../_components/customer-reviews";
import SimilarProducts from "../_components/similar-products";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";
import { getSimilarProducts } from "@/data/products";

// Dummy reviews - will be replaced with API data
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

  const filledProducts = getSimilarProducts(product.id, product.category, 5);

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
