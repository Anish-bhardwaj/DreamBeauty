"use client";

import React, { useState } from "react";

function FilterSection({ title, defaultOpen = true, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="filter-section">
      <button
        className="filter-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="filter-section-title">{title}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`filter-chevron ${isOpen ? "filter-chevron-open" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && <div className="filter-section-body">{children}</div>}
    </div>
  );
}

function ProductFilters({
  filters,
  priceRange,
  onCategoryChange,
  onProductTypeChange,
  onPriceChange,
  onClose,
  isCategorySelected,
  isProductTypeSelected,
}) {
  const handleMinChange = (e) => {
    const val = Number(e.target.value) || 0;
    onPriceChange([val, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const val = Number(e.target.value) || 0;
    onPriceChange([priceRange[0], val]);
  };

  const handleSliderChange = (e) => {
    onPriceChange([priceRange[0], Number(e.target.value)]);
  };

  return (
    <div className="product-filters">
      <div className="product-filters-header">
        <span className="product-filters-label">Filter</span>
        <button className="product-filters-close" onClick={onClose}>
          &times;
        </button>
        <svg
          className="product-filters-icon"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="1" y1="3" x2="19" y2="3" />
          <line x1="3" y1="9" x2="17" y2="9" />
          <line x1="6" y1="15" x2="14" y2="15" />
        </svg>
      </div>

      <FilterSection title="Product Categories">
        <div className="filter-checkbox-list">
          {filters.categories.map((cat) => (
            <label key={cat.name} className="filter-checkbox-item">
              <input
                type="checkbox"
                checked={isCategorySelected(cat.name)}
                onChange={() => onCategoryChange(cat.name)}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-label">
                {cat.name} ({cat.count})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Product Type">
        <div className="filter-checkbox-list">
          {filters.productTypes.map((type) => (
            <label key={type.name} className="filter-checkbox-item">
              <input
                type="checkbox"
                checked={isProductTypeSelected(type.name)}
                onChange={() => onProductTypeChange(type.name)}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-label">
                {type.name} ({type.count})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price">
        <div className="filter-price">
          <input
            type="range"
            min={filters.priceRange.min}
            max={filters.priceRange.max}
            value={priceRange[1]}
            onChange={handleSliderChange}
            className="filter-price-slider"
          />
          <div className="filter-price-inputs">
            <div className="filter-price-field">
              <span className="filter-price-currency">₹</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={handleMinChange}
                className="filter-price-input"
                placeholder="00"
              />
            </div>
            <span className="filter-price-separator">-</span>
            <div className="filter-price-field">
              <span className="filter-price-currency">₹</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={handleMaxChange}
                className="filter-price-input"
                placeholder="00"
              />
            </div>
          </div>
        </div>
      </FilterSection>
    </div>
  );
}

export default ProductFilters;
