"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import ProductFilters from "./product-filters";
import ProductCard from "./product-card";
import ProductPagination from "./product-pagination";

function ProductsListing({
  title,
  products = [],
  filters,
  sortOptions = [],
  productsPerPage = 16,
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sort") || "default";

  const selectedCategories = searchParams.get("category")
    ? searchParams.get("category").split(",").filter(Boolean)
    : [];

  const selectedProductTypes = searchParams.get("type")
    ? searchParams.get("type").split(",").filter(Boolean)
    : [];

  const priceRange = [
    Number(searchParams.get("minPrice")) || filters.priceRange.min,
    Number(searchParams.get("maxPrice")) || filters.priceRange.max,
  ];

  const updateParams = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (
          value === null ||
          value === undefined ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
        ) {
          params.delete(key);
        } else if (Array.isArray(value)) {
          params.set(key, value.join(","));
        } else {
          params.set(key, String(value));
        }
      });

      if (params.get("page") === "1") params.delete("page");
      if (params.get("sort") === "default") params.delete("sort");
      if (Number(params.get("minPrice")) === filters.priceRange.min) params.delete("minPrice");
      if (Number(params.get("maxPrice")) === filters.priceRange.max) params.delete("maxPrice");

      const queryString = params.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [searchParams, router, pathname, filters.priceRange]
  );

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => {
        const categorySlug = p.category.toLowerCase().replace(/\s+/g, "-");
        return selectedCategories.some(
          (c) => c === categorySlug || c === p.category || p.category.toLowerCase().includes(c.toLowerCase())
        );
      });
    }

    if (selectedProductTypes.length > 0) {
      result = result.filter((p) => {
        const typeSlug = p.productType.toLowerCase().replace(/\s+/g, "-");
        return selectedProductTypes.some(
          (t) => t === typeSlug || t === p.productType || p.productType.toLowerCase().includes(t.toLowerCase())
        );
      });
    }

    result = result.filter(
      (p) => p.salePrice >= priceRange[0] && p.salePrice <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-desc":
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, selectedCategories, selectedProductTypes, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredAndSorted.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    const updated = selectedCategories.includes(slug)
      ? selectedCategories.filter((c) => c !== slug)
      : [...selectedCategories, slug];
    updateParams({ category: updated, page: 1 });
  };

  const handleProductTypeChange = (type) => {
    const slug = type.toLowerCase().replace(/\s+/g, "-");
    const updated = selectedProductTypes.includes(slug)
      ? selectedProductTypes.filter((t) => t !== slug)
      : [...selectedProductTypes, slug];
    updateParams({ type: updated, page: 1 });
  };

  const handlePriceChange = (range) => {
    updateParams({ minPrice: range[0], maxPrice: range[1], page: 1 });
  };

  const handleSortChange = (e) => {
    updateParams({ sort: e.target.value, page: 1 });
  };

  const handlePageChange = (page) => {
    updateParams({ page });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isCategorySelected = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return selectedCategories.some(
      (c) => c === slug || c === name || name.toLowerCase().includes(c.toLowerCase())
    );
  };

  const isProductTypeSelected = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return selectedProductTypes.some(
      (t) => t === slug || t === name || name.toLowerCase().includes(t.toLowerCase())
    );
  };

  return (
    <section className="products-listing-section">
      <Container>
        <div className="products-listing-top">
          <h1 className="products-listing-title">{title}</h1>
          <div className="products-listing-sort">
            <label className="products-sort-label">Sort by</label>
            <select className="products-sort-select" value={sortBy} onChange={handleSortChange}>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="products-filter-toggle" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          Filter
        </button>

        <Row>
          <Col lg={3}>
            <div className={`products-sidebar ${mobileFiltersOpen ? "products-sidebar-open" : ""}`}>
              <ProductFilters
                filters={filters}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onProductTypeChange={handleProductTypeChange}
                onPriceChange={handlePriceChange}
                onClose={() => setMobileFiltersOpen(false)}
                isCategorySelected={isCategorySelected}
                isProductTypeSelected={isProductTypeSelected}
              />
            </div>
            {mobileFiltersOpen && (
              <div className="products-sidebar-overlay" onClick={() => setMobileFiltersOpen(false)} />
            )}
          </Col>

          <Col lg={9}>
            {paginatedProducts.length > 0 ? (
              <>
                <Row className="products-grid">
                  {paginatedProducts.map((product) => (
                    <Col key={product.id} xs={6} md={4} lg={3} className="products-grid-col">
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>

                {totalPages > 1 && (
                  <ProductPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="products-empty">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductsListing;
