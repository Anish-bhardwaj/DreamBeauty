"use client";

import React from "react";
import AboutHero from "@/app/about-us/_components/about-hero";
import OurStory from "@/app/about-us/_components/our-story";
import FounderSection from "@/app/about-us/_components/founder-section";
import OurValues from "@/app/about-us/_components/our-values";
import JourneyTimeline from "@/app/about-us/_components/journey-timeline";
import OurProcess from "@/app/about-us/_components/our-process";
import WorkshopGallery from "@/app/about-us/_components/workshop-gallery";
import CtaBanner from "@/app/about-us/_components/cta-banner";
import StatsSection from "@/app/_components/stats-section";
import FaqSection from "@/app/_components/faq-section";

const heroData = {
  slides: [
    { id: 1, type: "image", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&q=80" },
    { id: 2, type: "image", src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80" },
    { id: 3, type: "image", src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80" },
  ],
  title: "Our Commitment to Clean Beauty",
  subtitle: "Dermatologist-developed, cruelty-free beauty products that deliver real results",
};

const storyData = {
  title: "Our Story",
  paragraphs: [
    "DreamBeauty was born from a simple belief: everyone deserves access to safe, effective, and luxurious beauty products. Founded by Dr. Isabella Rose, a board-certified dermatologist with over 15 years of experience, our brand bridges the gap between clinical effectiveness and clean beauty.",
    "Frustrated by the lack of transparency in the beauty industry, Dr. Rose set out to create a line of products that would be honest about their ingredients, backed by science, and gentle enough for even the most sensitive skin.",
    "Today, DreamBeauty is trusted by over 50,000 customers worldwide, with a product line spanning skincare, makeup, haircare, and fragrance — all formulated with 95% natural ingredients and zero harmful chemicals.",
  ],
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
};

const founderData = {
  name: "Dr. Isabella Rose",
  title: "Founder & Chief Formulator — A dermatologist's vision for clean, effective beauty",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  description: "With over 15 years of experience in dermatology and cosmetic science, Dr. Rose founded DreamBeauty to create products that truly work — without compromising on safety or ethics. Every formula is developed in her lab using only the finest natural ingredients backed by clinical research.",
  mission: "Our mission is simple — to help you discover your most radiant, confident self through clean, science-backed beauty.",
  awards: "Recipient of the Clean Beauty Award 2022, Leaping Bunny Certified, and Vegan Society Approved.",
};

const valuesData = [
  { id: 1, icon: "clean", title: "Clean Ingredients", description: "Every product is free from parabens, sulfates, phthalates, and synthetic fragrances. Only what your skin needs." },
  { id: 2, icon: "cruelty", title: "Cruelty-Free", description: "Leaping Bunny certified. Never tested on animals at any stage of development. Compassion is in our DNA." },
  { id: 3, icon: "science", title: "Science-Backed", description: "Dermatologist-developed formulas with clinically proven ingredients. Visible results you can trust." },
  { id: 4, icon: "global", title: "Worldwide Shipping", description: "We deliver premium beauty products across the globe with eco-friendly packaging that ensures safe arrival." },
];

const timelineData = [
  { year: "2018", title: "The Idea", description: "Dr. Isabella Rose begins formulating clean beauty products in her dermatology practice, driven by her patients' need for safe, effective skincare." },
  { year: "2019", title: "DreamBeauty Founded", description: "The brand officially launches with a core line of 5 skincare products, earning immediate recognition for ingredient transparency." },
  { year: "2020", title: "Cruelty-Free Certified", description: "DreamBeauty receives Leaping Bunny certification, solidifying our commitment to never testing on animals." },
  { year: "2021", title: "Expanding the Range", description: "Launch of makeup and haircare lines, bringing the total to over 100 products. Vegan Society approval received." },
  { year: "2022", title: "Clean Beauty Award", description: "Winner of the Clean Beauty Award for innovation in formulation and commitment to ingredient safety." },
  { year: "2023", title: "Sustainability Milestone", description: "100% recyclable packaging achieved across all product lines. B Corp certification received for social and environmental performance." },
  { year: "Today", title: "50K+ Happy Customers", description: "DreamBeauty continues to grow, serving customers worldwide with premium, clean beauty products that deliver real results." },
];

const processData = [
  { step: 1, title: "Research", description: "Our dermatologists research the latest ingredients and clinical studies to identify what truly works for your skin." },
  { step: 2, title: "Formulation", description: "Each product is carefully formulated in our lab using 95% natural ingredients, tested for safety and efficacy." },
  { step: 3, title: "Testing", description: "Rigorous clinical testing and dermatologist reviews ensure every product meets our high standards before launch." },
  { step: 4, title: "Delivery", description: "Products are packaged in eco-friendly materials and shipped with care to your doorstep worldwide." },
];

const galleryData = [
  { id: 1, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80", alt: "Product formulation in the lab" },
  { id: 2, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", alt: "Skincare ingredients" },
  { id: 3, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80", alt: "Quality testing process" },
  { id: 4, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", alt: "Beauty product packaging" },
  { id: 5, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80", alt: "Team at work" },
  { id: 6, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80", alt: "Final products ready for shipping" },
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
  image: { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", alt: "Beauty Products" },
  faqs: [
    { id: 1, question: "Are your products cruelty-free?", answer: "Yes! All DreamBeauty products are 100% cruelty-free and Leaping Bunny certified." },
    { id: 2, question: "What ingredients do you avoid?", answer: "We never use parabens, sulfates, phthalates, formaldehyde, synthetic fragrances, or any ingredient known to be harmful." },
    { id: 3, question: "Are your products suitable for sensitive skin?", answer: "Many products are specifically formulated for sensitive skin. Look for the 'Sensitive Skin Approved' badge." },
    { id: 4, question: "Where are your products made?", answer: "All DreamBeauty products are formulated and manufactured in our certified lab in New York, USA." },
    { id: 5, question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with eco-friendly packaging. Free shipping on orders over $50 within India." },
  ],
};

function AboutUsContainer() {
  return (
    <div className="about-page">
      <AboutHero data={heroData} />
      <OurStory data={storyData} />
      <FounderSection data={founderData} />
      <OurValues values={valuesData} />
      <JourneyTimeline milestones={timelineData} />
      <OurProcess steps={processData} />
      <StatsSection data={statsData} />
      <WorkshopGallery images={galleryData} />
      <CtaBanner />
      <FaqSection data={faqData} />
    </div>
  );
}

export default AboutUsContainer;
