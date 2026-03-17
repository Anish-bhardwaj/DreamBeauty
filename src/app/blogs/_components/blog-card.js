"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="blog-card">
      <div className="blog-card-image">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-card-category">{blog.category}</span>
          <span className="blog-card-date">{formatDate(blog.date)}</span>
        </div>
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        <span className="blog-card-cta">Continue reading &rarr;</span>
      </div>
    </Link>
  );
}

export default BlogCard;
