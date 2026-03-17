"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogDetail({ blog }) {
  return (
    <section className="blog-detail-section">
      <Container>
        <div className="blog-detail-wrapper">
          <Link href="/blogs" className="blog-detail-back">
            &larr; Back to Blogs
          </Link>

          <div className="blog-detail-meta">
            <span className="blog-detail-category">{blog.category}</span>
            <span className="blog-detail-date">{formatDate(blog.date)}</span>
          </div>

          <h1 className="blog-detail-title">{blog.title}</h1>

          <div className="blog-detail-hero">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="blog-detail-content">
            {blog.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="blog-detail-heading">
                    {block.text}
                  </h2>
                );
              }
              return (
                <p key={index} className="blog-detail-paragraph">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="blog-detail-footer">
            <Link href="/blogs" className="blog-detail-back-btn">
              &larr; Back to All Blogs
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogDetail;
