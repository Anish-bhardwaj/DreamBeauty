"use client";

import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

function CtaBanner() {
  return (
    <section className="about-cta">
      <Container>
        <div className="about-cta-inner">
          <h2 className="about-cta-title">
            Ready to Discover Your Perfect Beauty Routine?
          </h2>
          <p className="about-cta-subtitle">
            Whether it&apos;s skincare, makeup, or haircare — our experts are ready to help you find exactly what your skin needs.
          </p>
          <div className="about-cta-buttons">
            <Link href="/products" className="about-cta-btn about-cta-btn-primary">
              Explore Products
            </Link>
            <Link href="/contact" className="about-cta-btn about-cta-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaBanner;
