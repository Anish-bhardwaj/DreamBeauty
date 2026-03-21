"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

function AboutHero({ data }) {
  const { slides, title, subtitle } = data;
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
    autoSlideRef.current = setTimeout(nextSlide, 5000);
    return () => { if (autoSlideRef.current) clearTimeout(autoSlideRef.current); };
  }, [currentSlide, isVideo, slides.length, nextSlide]);

  return (
    <section className="about-hero">
      <div className="about-hero-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="about-hero-slide">
            {slide.type === "video" ? (
              <video ref={(el) => (videoRefs.current[index] = el)} className="about-hero-media" src={slide.src} muted playsInline onEnded={nextSlide} />
            ) : (
              <div className="about-hero-media" style={{ backgroundImage: `url(${slide.src})` }} />
            )}
            <div className="about-hero-overlay" />
          </div>
        ))}
      </div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">{title}</h1>
        <p className="about-hero-subtitle">{subtitle}</p>
      </div>
      {slides.length > 1 && (
        <>
          <button className="about-hero-arrow about-hero-arrow-prev" onClick={prevSlide}>&#10094;</button>
          <button className="about-hero-arrow about-hero-arrow-next" onClick={nextSlide}>&#10095;</button>
        </>
      )}
    </section>
  );
}

export default AboutHero;
