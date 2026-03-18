"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price);
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-listing-card">
      <div className="product-listing-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="product-listing-info">
        <h3 className="product-listing-name">{product.name}</h3>
        <div className="product-listing-price">
          <span className="product-listing-original">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="product-listing-sale">
            {formatPrice(product.salePrice)}
          </span>
        </div>
        <p className="product-listing-tax">{product.taxText}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
