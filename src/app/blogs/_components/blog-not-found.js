"use client";

import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

function BlogNotFound() {
  return (
    <section className="blog-not-found">
      <Container>
        <div className="blog-not-found-content">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you are looking for does not exist or has been removed.</p>
          <Link href="/blogs" className="blog-not-found-btn">
            Back to Blogs
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default BlogNotFound;
