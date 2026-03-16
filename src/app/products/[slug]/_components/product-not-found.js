"use client";

import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

function ProductNotFound() {
  return (
    <section className="product-not-found">
      <Container>
        <div className="not-found-content">
          <h1>Product Not Found</h1>
          <p>The product you are looking for does not exist or has been removed.</p>
          <Link href="/products" className="back-to-products">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ProductNotFound;
