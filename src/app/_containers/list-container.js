"use client";

import React from "react";
import HeroSlider from "@/app/_components/hero-slider";
import FeaturesBar from "@/app/_components/features-bar";
import CategoriesSection from "@/app/_components/categories-section";
import AboutUsEnhanced from "@/app/_components/about-us-enhanced";
import CollectionShowcase from "@/app/_components/collection-showcase";
import VideoHighlights from "@/app/_components/video-highlights";
import BestSellingProducts from "@/app/_components/best-selling-products";
import AwardsSection from "@/app/_components/awards-section";
import CustomOrdersBanner from "@/app/_components/custom-orders-banner";
import CustomerFeedback from "@/app/_components/customer-feedback";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";
import { getBestSellingProducts } from "@/data/products";

// Beauty-themed hero slides
const heroSlides = [
  {
    id: 1,
    type: "video",
    src: "/banner_1.mp4",
    title: "Discover Your Natural Radiance",
    subtitle: "Premium Skincare Collection • Clinically Proven Results",
  },
  {
    id: 2,
    type: "image",
    src: "banner_2.webp",
    title: "Makeup That Moves With You",
    subtitle: "Long-Lasting • Cruelty-Free • Stunning Colors",
  },
  {
    id: 3,
    type: "image",
    src: "/banner_3.webp",
    title: "Luxurious Fragrances",
    subtitle: "Signature Scents • Lasting Impressions",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&q=80",
    title: "Healthy Hair, Beautiful You",
    subtitle: "Professional Haircare • Salon Quality at Home",
  },
];

// Beauty-themed features
const featuresData = [
  {
    icon: "leaf",
    title: "Clean Beauty",
    description: "100% natural ingredients, no harmful chemicals.",
  },
  {
    icon: "heart",
    title: "Cruelty-Free",
    description: "Never tested on animals, always ethical.",
  },
  {
    icon: "science",
    title: "Expert Formulas",
    description: "Developed by dermatologists and beauty experts.",
  },
  {
    icon: "shipping",
    title: "Free Shipping",
    description: "Complimentary delivery on orders over $50.",
  },
];

// Beauty categories
const categoriesData = {
  title: "Shop By Category",
  subtitle:
    "Explore our curated collections of premium beauty products designed to enhance your natural beauty.",
  items: [
    {
      name: "Skincare",
      slug: "skincare",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    },
    {
      name: "Makeup",
      slug: "makeup",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    },
    {
      name: "Haircare",
      slug: "haircare",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    },
    {
      name: "Fragrance",
      slug: "fragrance",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    },
  ],
};

// Skincare showcase
const showcaseData = [
  {
    id: 1,
    title: "Glow-Up Skincare Routine",
    description:
      "Transform your skin with our dermatologist-recommended skincare essentials. From cleansers to serums, achieve that coveted glass skin look.",
    buttonText: "Shop Skincare",
    buttonLink: "/products?category=skincare",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    ],
    layout: "content-left",
  },
  {
    id: 2,
    title: "Everyday Makeup Essentials",
    description:
      "Create stunning looks with our collection of high-performance makeup. Long-lasting formulas that feel as good as they look.",
    buttonText: "Explore Makeup",
    buttonLink: "/products?category=makeup",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    ],
    layout: "content-right",
  },
];

// Video highlights
const videoHighlightsData = {
  videoSrc: "/banner_1.mp4",
  heading:
    "Experience the DreamBeauty difference with our award-winning formulations.",
  features: [
    { icon: "certified", text: "Dermatologist Tested" },
    { icon: "natural", text: "95% Natural Ingredients" },
    { icon: "results", text: "Visible Results in 2 Weeks" },
    { icon: "awards", text: "Award-Winning Formulas" },
    { icon: "vegan", text: "100% Vegan & Cruelty-Free" },
    { icon: "sustainable", text: "Sustainable Packaging" },
  ],
};

// Best selling beauty products - from centralized data
const bestSellingData = {
  title: "Customer Favorites",
  subtitle:
    "Our most-loved products with thousands of 5-star reviews. See why customers keep coming back.",
  ctaText: "View All Products",
  ctaLink: "/products",
  products: getBestSellingProducts(4),
};

// Awards & certifications
const awardsData = {
  title: "Awards & Certifications",
  ctaText: "Learn More",
  ctaLink: "/about-us",
  items: [
    {
      id: 1,
      column: "left",
      position: "top",
      title: "Clean Beauty Certified",
      description:
        "Recognized for our commitment to using only safe, non-toxic ingredients in all formulations.",
    },
    {
      id: 2,
      column: "left",
      position: "middle",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      alt: "Beauty products display",
    },
    {
      id: 3,
      column: "left",
      position: "bottom",
      images: [
        { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80", alt: "Makeup collection" },
        { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80", alt: "Skincare products" },
      ],
    },
    {
      id: 4,
      column: "center",
      position: "top",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      alt: "Award winning products",
    },
    {
      id: 5,
      column: "center",
      position: "bottom",
      title: "Cruelty-Free Certified",
      description:
        "Leaping Bunny certified. Never tested on animals, committed to ethical beauty.",
    },
    {
      id: 6,
      column: "right",
      position: "top",
      title: "Sustainability Award",
      description:
        "Recognized for eco-friendly packaging and sustainable sourcing practices.",
    },
    {
      id: 7,
      column: "right",
      position: "bottom",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
      alt: "Eco-friendly beauty products",
    },
  ],
};

// Custom orders / Gift sets banner
const customOrdersData = {
  leftContent: {
    title: "Personalized Beauty",
    description:
      "Get custom-formulated products tailored to your unique skin type and concerns.",
    buttonText: "Start Your Journey",
    buttonLink: "/contact",
  },
  rightContent: {
    title: "Gift Sets & Bundles",
    description:
      "Curated collections perfect for gifting or treating yourself to a complete routine.",
    buttonText: "Shop Gift Sets",
    buttonLink: "/products?category=gift-sets",
  },
  image: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
    alt: "Beauty Gift Set",
    width: 500,
    height: 300,
  },
};

// Haircare showcase
const haircareShowcaseData = [
  {
    id: 3,
    title: "Salon-Quality Haircare",
    description:
      "Professional-grade treatments for all hair types. Repair, nourish, and transform your hair at home.",
    buttonText: "Shop Haircare",
    buttonLink: "/products?category=haircare",
    images: [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80",
    ],
    layout: "content-left",
  },
];

// Customer testimonials
const customerFeedbackData = {
  title: "What Our Customers Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      avatar: "/testimonial-1.jpg",
      text: "The Rose Serum transformed my skin! I've tried countless products, but nothing compares to the glow I get from DreamBeauty. My skin has never looked better.",
    },
    {
      id: 2,
      name: "Emily Chen",
      location: "Los Angeles",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      text: "Finally found a makeup brand that's both high-performance and cruelty-free. The foundation lasts all day without feeling heavy. Absolutely love it!",
    },
    {
      id: 3,
      name: "Maria Garcia",
      location: "Miami",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
      text: "The haircare products are amazing! My hair has never been this healthy and shiny. Plus, I love that everything is sustainably packaged.",
    },
    {
      id: 4,
      name: "Jessica Williams",
      location: "Chicago",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80",
      text: "I've been using the night cream for 3 months and the results are incredible. Fine lines are visibly reduced. Worth every penny!",
    },
    {
      id: 5,
      name: "Amanda Brown",
      location: "Seattle",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
      text: "The lipstick collection is gorgeous! The colors are stunning and the formula is so hydrating. My new go-to makeup brand.",
    },
    {
      id: 6,
      name: "Rachel Kim",
      location: "San Francisco",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
      text: "Customer service is exceptional and the products exceeded my expectations. The fragrance I bought gets me compliments everywhere I go!",
    },
  ],
};

// Stats section
const statsData = {
  stats: [
    {
      id: 1,
      icon: "clients",
      number: "50K+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: "statues",
      number: "200+",
      label: "Premium Products",
    },
    {
      id: 3,
      icon: "experience",
      number: "4.9",
      label: "Average Rating",
    },
  ],
};

// FAQ section
const faqData = {
  title: "Frequently Asked Questions",
  image: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    alt: "Beauty Products",
  },
  faqs: [
    {
      id: 1,
      question: "Are your products cruelty-free?",
      answer:
        "Yes! All DreamBeauty products are 100% cruelty-free and never tested on animals. We're proud to be Leaping Bunny certified.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, return it for a full refund or exchange.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout. Orders over $50 qualify for free shipping.",
    },
    {
      id: 4,
      question: "Are your products suitable for sensitive skin?",
      answer:
        "Many of our products are formulated for sensitive skin. Look for the 'Sensitive Skin Approved' badge on product pages, or contact us for personalized recommendations.",
    },
    {
      id: 5,
      question: "Do you offer samples?",
      answer:
        "Yes! Add complimentary samples to your cart at checkout. We also offer discovery sets so you can try multiple products before committing.",
    },
  ],
};

function ListContainer() {
  return (
    <div className="home-page">
      <HeroSlider slides={heroSlides} />
      <FeaturesBar features={featuresData} />
      <CategoriesSection
        title={categoriesData.title}
        subtitle={categoriesData.subtitle}
        categories={categoriesData.items}
        ctaText="View All Categories"
        ctaLink="/categories"
      />
      <AboutUsEnhanced />
      {showcaseData.map((showcase) => (
        <CollectionShowcase key={showcase.id} data={showcase} />
      ))}
      <VideoHighlights data={videoHighlightsData} />
      <BestSellingProducts data={bestSellingData} />
      <AwardsSection data={awardsData} />
      <CustomOrdersBanner data={customOrdersData} />
      {haircareShowcaseData.map((showcase) => (
        <CollectionShowcase key={showcase.id} data={showcase} />
      ))}
      <CustomerFeedback data={customerFeedbackData} />
      <StatsSection data={statsData} />
      <FaqSection data={faqData} />
    </div>
  );
}

export default ListContainer;
