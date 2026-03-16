"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function CategoriesSection({ title, subtitle, categories = [] }) {
  if (categories.length === 0) return null;

  return (
    <section className="categories-section">
      <Container>
        <div className="categories-header">
          <h2 className="categories-title">{title}</h2>
          <p className="categories-subtitle">{subtitle}</p>
        </div>

        <Row className="categories-grid">
          {categories.map((category, index) => (
            <Col key={index} xs={6} md={3} className="category-col">
              <Link href={`/products?category=${category.slug}`} className="category-card">
                <div className="category-image-wrapper">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="category-label">
                    <span>{category.name}</span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CategoriesSection;
