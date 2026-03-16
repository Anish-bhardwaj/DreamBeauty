"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

function BestSellingProducts({ data }) {
  const { title, subtitle, products, ctaText, ctaLink } = data;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <section className="best-selling-section">
      <Container>
        <div className="best-selling-header">
          <h2 className="best-selling-title">{title}</h2>
          <p className="best-selling-subtitle">{subtitle}</p>
        </div>

        <Row className="best-selling-grid">
          {products.map((product) => (
            <Col key={product.id} xl={true} lg={4} md={4} sm={6} xs={6} className="best-selling-col">
              <Link href={`/products/${product.slug}`} className="product-card">
                <div className="product-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-pricing">
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    <span className="sale-price">{formatPrice(product.salePrice)}</span>
                  </div>
                  <p className="product-tax">{product.taxText}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <div className="best-selling-cta">
          <Link href={ctaLink} className="best-selling-btn">
            {ctaText}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default BestSellingProducts;
