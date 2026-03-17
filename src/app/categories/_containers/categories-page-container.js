"use client";

import React from "react";
import CategoriesGrid from "@/app/categories/_components/categories-grid";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";

const categoriesData = [
  { id: 1, name: "Serums", slug: "serums", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
  { id: 2, name: "Moisturizers", slug: "moisturizers", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { id: 3, name: "Cleansers", slug: "cleansers", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" },
  { id: 4, name: "Foundations", slug: "foundations", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80" },
  { id: 5, name: "Lipsticks", slug: "lipsticks", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80" },
  { id: 6, name: "Eye Makeup", slug: "eye-makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80" },
  { id: 7, name: "Hair Masks", slug: "hair-masks", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" },
  { id: 8, name: "Shampoos", slug: "shampoos", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
  { id: 9, name: "Perfumes", slug: "perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
  { id: 10, name: "Sunscreen", slug: "sunscreen", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
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
    { id: 1, question: "Are your products cruelty-free?", answer: "Yes! All DreamBeauty products are 100% cruelty-free and never tested on animals. We're proud to be Leaping Bunny certified." },
    { id: 2, question: "What is your return policy?", answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, return it for a full refund or exchange." },
    { id: 3, question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout. Orders over $50 qualify for free shipping." },
    { id: 4, question: "Are your products suitable for sensitive skin?", answer: "Many of our products are formulated for sensitive skin. Look for the 'Sensitive Skin Approved' badge on product pages, or contact us for personalized recommendations." },
    { id: 5, question: "Do you offer samples?", answer: "Yes! Add complimentary samples to your cart at checkout. We also offer discovery sets so you can try multiple products before committing." },
  ],
};

function CategoriesPageContainer() {
  return (
    <React.Fragment>
      <CategoriesGrid
        title="Shop By Category"
        subtitle="Explore our curated collections of premium beauty products designed to enhance your natural beauty."
        categories={categoriesData}
      />
      <StatsSection data={statsData} />
      <FaqSection data={faqData} />
    </React.Fragment>
  );
}

export default CategoriesPageContainer;
