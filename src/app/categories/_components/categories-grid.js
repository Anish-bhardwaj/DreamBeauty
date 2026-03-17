"use client";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function CategoriesGrid({ title, subtitle, categories = [] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="categories-page-section">
      <Container>
        <div className="categories-page-header">
          <h1 className="categories-page-title">{title}</h1>
          <p className="categories-page-subtitle">{subtitle}</p>
        </div>

        <div className="categories-page-search">
          <div className="categories-search-wrapper">
            <span className="categories-search-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="categories-search-input"
            />
            <button className="categories-search-btn">Search</button>
          </div>
        </div>

        <div className="categories-page-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="categories-page-col">
              <Link
                href={`/products?category=${category.slug}`}
                className="categories-page-card"
              >
                <div className="categories-page-image-wrapper">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="categories-page-label">
                  <span>{category.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoriesGrid;
