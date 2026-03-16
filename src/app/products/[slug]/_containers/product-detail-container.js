"use client";

import React from "react";
import ProductDetail from "../_components/product-detail";
import ProductNotFound from "../_components/product-not-found";

function ProductDetailContainer({ product }) {
  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductDetail product={product} />;
}

export default ProductDetailContainer;
