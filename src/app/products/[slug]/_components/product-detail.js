"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FiShare2 } from "react-icons/fi";
import Breadcrumb from "@/app/_components/breadcrumb";
import ShareModal from "./share-modal";
import EnquiryModal from "./enquiry-modal";

function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [imageRect, setImageRect] = useState(null);
  const mainImageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
    setImageRect(rect);
  };

  const handleMouseEnter = () => {
    setZoomActive(true);
    if (mainImageRef.current) setImageRect(mainImageRef.current.getBoundingClientRect());
  };
  const handleMouseLeave = () => setZoomActive(false);

  const currentImageSrc = product.images?.[selectedImage] || product.image;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <section className="pd-section">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.category, href: `/products?category=${product.category.toLowerCase().replace(/\s+/g, "-")}` },
            { label: product.name },
          ]}
        />
        <Row className="pd-row">
          {/* Image Gallery */}
          <Col lg={6} md={6} className="pd-gallery-col">
            <div className="pd-gallery">
              <div className="pd-thumbnails">
                {product.images &&
                  product.images.map((img, index) => (
                    <button
                      key={index}
                      className={`pd-thumb ${selectedImage === index ? "pd-thumb-active" : ""}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image src={img} alt={`${product.name} - View ${index + 1}`} fill style={{ objectFit: "cover" }} />
                    </button>
                  ))}
              </div>
              <div
                className="pd-main-image"
                ref={mainImageRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={currentImageSrc} alt={product.name} fill style={{ objectFit: "cover" }} priority />
                {zoomActive && <div className="pd-zoom-lens" style={{ left: `${zoomPosition.x}%`, top: `${zoomPosition.y}%` }} />}
              </div>
            </div>

            {/* Zoom Preview */}
            {zoomActive && imageRect && (
              <div
                className="pd-zoom-result"
                style={{
                  position: "fixed",
                  top: `${imageRect.top}px`,
                  left: `${imageRect.right + 16}px`,
                  height: `${imageRect.height}px`,
                }}
              >
                <div
                  className="pd-zoom-image"
                  style={{
                    backgroundImage: `url(${currentImageSrc})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>
            )}
          </Col>

          {/* Product Info */}
          <Col lg={6} md={6} className="pd-info-col">
            <div className="pd-info">
              <h1 className="pd-name">{product.name}</h1>

              <div className="pd-pricing">
                <span className="pd-original-price">{formatPrice(product.originalPrice)}</span>
                <span className="pd-sale-price">{formatPrice(product.salePrice)}</span>
                <span className="pd-tax">{product.taxText}</span>
              </div>

              {/* Specifications Table */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="pd-specs">
                  <h3 className="pd-specs-title">Specifications</h3>
                  <table className="pd-specs-table">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index}>
                          <td className="pd-specs-label">{spec.label}</td>
                          <td className="pd-specs-value">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Description */}
              <div className="pd-description">
                <p>{product.description}</p>
                {product.highlights && product.highlights.length > 0 && (
                  <ul className="pd-highlights">
                    {product.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {product.note && <p className="pd-note">{product.note}</p>}
              </div>

              {/* Actions */}
              <div className="pd-actions">
                <button className="pd-enquiry-btn" onClick={() => setShowEnquiryModal(true)}>
                  Enquire Now
                </button>
                <button className="pd-icon-btn" title="Share" onClick={() => setShowShareModal(true)}>
                  <FiShare2 />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <ShareModal show={showShareModal} onClose={() => setShowShareModal(false)} productName={product.name} productImage={product.image} />
      <EnquiryModal show={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} productName={product.name} productSlug={product.slug} />
    </section>
  );
}

export default ProductDetail;
