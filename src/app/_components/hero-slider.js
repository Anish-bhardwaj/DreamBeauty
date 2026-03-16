"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

function HeroSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const autoSlideRef = useRef(null);

  const currentSlideData = slides[currentSlide];
  const isVideo = currentSlideData?.type === "video";

  // Play/pause videos based on current slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide logic - only for images
  useEffect(() => {
    if (slides.length <= 1) return;

    // Clear any existing timeout
    if (autoSlideRef.current) {
      clearTimeout(autoSlideRef.current);
    }

    // If it's a video, don't auto-slide - wait for video to end
    if (isVideo) {
      return;
    }

    // Auto-slide for images (every 5 seconds)
    autoSlideRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearTimeout(autoSlideRef.current);
      }
    };
  }, [currentSlide, isVideo, slides.length, nextSlide]);

  // Handle video end - move to next slide
  const handleVideoEnd = () => {
    nextSlide();
  };

  if (slides.length === 0) return null;

  return (
    <section className="hero-slider">
      <div className="hero-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="hero-slide">
            {/* Background */}
            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="hero-media"
                src={slide.src}
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            ) : (
              <div
                className="hero-media"
                style={{
                  backgroundImage: `url(${slide.src})`,
                }}
              />
            )}

            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
              {index === 0 ? (
                <h1 className="hero-title">{slide.title}</h1>
              ) : (
                <h2 className="hero-title">{slide.title}</h2>
              )}
              <p className="hero-subtitle">{slide.subtitle}</p>
              <Link href="/products" className="hero-cta">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button className="hero-arrow hero-arrow-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="hero-arrow hero-arrow-next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="hero-dots d-none">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSlider;
