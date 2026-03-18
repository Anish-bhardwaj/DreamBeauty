"use client";

import React from "react";

function ProductPagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="products-pagination">
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="products-pagination-dots">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`products-pagination-btn ${
              page === currentPage ? "products-pagination-active" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}

export default ProductPagination;
