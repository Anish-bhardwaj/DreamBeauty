"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discount = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <section className="product-detail-section">
      <Container>
        <Link href="/products" className="back-link">
          <FaArrowLeft /> Back to Products
        </Link>

        <Row className="product-detail-row">
          {/* Image Gallery */}
          <Col lg={6} md={6} className="product-gallery-col">
            <div className="product-gallery">
              <div className="main-image-wrapper">
                <Image
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                {discount > 0 && (
                  <span className="discount-badge">{discount}% OFF</span>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="thumbnail-row">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail-btn ${selectedImage === index ? "active" : ""}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - View ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Col>

          {/* Product Info */}
          <Col lg={6} md={6} className="product-info-col">
            <div className="product-detail-info">
              <span className="product-category">{product.category}</span>
              <h1 className="product-detail-name">{product.name}</h1>

              <div className="product-detail-pricing">
                <span className="detail-sale-price">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="detail-original-price">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="detail-discount">Save {discount}%</span>
              </div>
              <p className="detail-tax-text">{product.taxText}</p>

              <p className="product-description">{product.description}</p>

              {product.features && (
                <div className="product-features">
                  <h3>Features</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck className="feature-icon-product-detail" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="product-actions">
                <button className="btn-enquiry">Enquire Now</button>
                <Link href="/contact" className="btn-contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductDetail;
