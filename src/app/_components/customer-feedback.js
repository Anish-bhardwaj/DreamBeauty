"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function CustomerFeedback({ data }) {
  const { title, testimonials } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 992) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Reset activeIndex if needed
  useEffect(() => {
    if (activeIndex >= totalPages) {
      setActiveIndex(0);
    }
  }, [itemsPerPage, activeIndex, totalPages]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  // Get current page items
  const currentItems = testimonials.slice(
    activeIndex * itemsPerPage,
    activeIndex * itemsPerPage + itemsPerPage
  );

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    } else if (diff < -threshold) {
      setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  return (
    <section className="customer-feedback-section">
      <Container>
        <h2 className="customer-feedback-title">{title}</h2>

        <div
          className="customer-feedback-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div key={activeIndex} className={`customer-feedback-grid items-${itemsPerPage}`}>
            {currentItems.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="testimonial-author">
                  — {testimonial.name}, {testimonial.location}
                </p>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="customer-feedback-dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`feedback-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default CustomerFeedback;
