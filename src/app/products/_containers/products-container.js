"use client";

import React from "react";
import ProductsListing from "@/app/products/_components/products-listing";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";
import { allProducts, getFiltersData } from "@/data/products";

const filtersData = getFiltersData();

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
        products={allProducts}
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
