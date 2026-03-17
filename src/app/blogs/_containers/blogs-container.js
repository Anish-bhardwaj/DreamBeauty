"use client";

import React from "react";
import BlogList from "@/app/blogs/_components/blog-list";

const blogsData = [
  {
    id: 1,
    title: "The Ultimate Guide to Building a Skincare Routine for Every Skin Type",
    slug: "ultimate-guide-skincare-routine-every-skin-type",
    excerpt: "Whether you have oily, dry, combination, or sensitive skin, discover how to build a personalized skincare routine that delivers real results with clean ingredients.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    date: "2026-03-10",
    category: "Skincare Tips",
  },
  {
    id: 2,
    title: "Why Clean Beauty Matters: Understanding Ingredients in Your Products",
    slug: "why-clean-beauty-matters-understanding-ingredients",
    excerpt: "Not all beauty products are created equal. Learn how to read labels, identify harmful chemicals, and make informed choices for healthier skin and a healthier planet.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    date: "2026-02-25",
    category: "Clean Beauty",
  },
  {
    id: 3,
    title: "5 Makeup Trends You Need to Try This Season",
    slug: "5-makeup-trends-you-need-to-try-this-season",
    excerpt: "From glass skin to bold lip colors, these trending looks are taking over social media. Here's how to recreate them using DreamBeauty products.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    date: "2026-02-15",
    category: "Makeup Trends",
  },
  {
    id: 4,
    title: "How to Repair Damaged Hair: Expert Tips and Product Recommendations",
    slug: "how-to-repair-damaged-hair-expert-tips",
    excerpt: "Heat styling, coloring, and environmental stress can wreak havoc on your hair. Our experts share the best strategies and products for restoring healthy, shiny locks.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    date: "2026-02-05",
    category: "Haircare",
  },
  {
    id: 5,
    title: "The Science Behind Hyaluronic Acid: Why Your Skin Needs It",
    slug: "science-behind-hyaluronic-acid-why-your-skin-needs-it",
    excerpt: "Hyaluronic acid is one of the most talked-about skincare ingredients. Discover what it does, how it works, and why dermatologists recommend it for every skin type.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
    date: "2026-01-20",
    category: "Ingredients",
  },
  {
    id: 6,
    title: "Choosing the Perfect Fragrance: A Complete Buyer's Guide",
    slug: "choosing-perfect-fragrance-complete-buyers-guide",
    excerpt: "From understanding fragrance families to finding your signature scent, this comprehensive guide helps you navigate the world of perfumes with confidence.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    date: "2026-01-10",
    category: "Fragrance",
  },
];

function BlogsContainer() {
  return (
    <BlogList
      title="Beauty Blog & Tips"
      subtitle="Expert advice on skincare routines, makeup trends, clean beauty, and everything you need to enhance your natural beauty."
      blogs={blogsData}
    />
  );
}

export default BlogsContainer;
