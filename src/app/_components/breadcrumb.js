"use client";

import React from "react";

function Breadcrumb({ items }) {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={`breadcrumb-item ${isLast ? "breadcrumb-item-active" : ""}`}>
                {isLast ? (
                  <span className="breadcrumb-current">{item.label}</span>
                ) : (
                  <>
                    <a href={item.href} className="breadcrumb-link">
                      {item.label}
                    </a>
                    <span className="breadcrumb-separator" aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
