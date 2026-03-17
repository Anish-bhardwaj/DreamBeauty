"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./blog-card";

function BlogList({ title, subtitle, blogs = [] }) {
  return (
    <section className="blog-list-section">
      <Container>
        <div className="blog-list-header">
          <h1 className="blog-list-title">{title}</h1>
          <p className="blog-list-subtitle">{subtitle}</p>
        </div>

        <Row className="blog-list-grid">
          {blogs.map((blog) => (
            <Col key={blog.id} md={6} lg={4} className="blog-list-col">
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BlogList;
