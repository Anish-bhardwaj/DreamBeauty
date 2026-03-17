"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

function ContactHeroSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const autoSlideRef = useRef(null);

  const currentSlideData = slides[currentSlide];
  const isVideo = currentSlideData?.type === "video";

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

  useEffect(() => {
    if (slides.length <= 1) return;
    if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
    if (isVideo) return;

    autoSlideRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
    };
  }, [currentSlide, isVideo, slides.length, nextSlide]);

  const handleVideoEnd = () => nextSlide();

  if (slides.length === 0) return null;

  return (
    <section className="contact-hero">
      <div
        className="contact-hero-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="contact-hero-slide">
            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="contact-hero-media"
                src={slide.src}
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            ) : (
              <div
                className="contact-hero-media"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
            )}
            <div className="contact-hero-overlay" />
          </div>
        ))}
      </div>

      <div className="contact-hero-content">
        <h1 className="contact-hero-title">Get In Touch With Us</h1>
      </div>

      {slides.length > 1 && (
        <>
          <button className="contact-hero-arrow contact-hero-arrow-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="contact-hero-arrow contact-hero-arrow-next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}
    </section>
  );
}

export default ContactHeroSlider;
