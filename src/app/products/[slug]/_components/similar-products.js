"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import ProductCard from "@/app/products/_components/product-card";

function SimilarProducts({ title, subtitle, products = [], ctaText, ctaLink }) {
  if (products.length === 0) return null;

  return (
    <section className="similar-products-section">
      <Container>
        <div className="similar-products-header">
          <h2 className="similar-products-title">{title}</h2>
          <p className="similar-products-subtitle">{subtitle}</p>
        </div>

        <Row className="similar-products-grid">
          {products.map((product) => (
            <Col key={product.id} xs={6} sm={4} md={4} lg className="similar-products-col">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        {ctaText && ctaLink && (
          <div className="similar-products-cta">
            <Link href={ctaLink} className="similar-products-cta-link">
              {ctaText}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export default SimilarProducts;
