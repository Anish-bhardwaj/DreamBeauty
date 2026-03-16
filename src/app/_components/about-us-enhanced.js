"use client";

import React, { useState } from "react";
import Image from "next/image";

function AboutUsEnhanced({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultData = {
    title: "About DreamBeauty",
    subtitle: "At <strong>DreamBeauty</strong>, we believe that everyone deserves to feel confident and beautiful. Our mission is to create premium, clean beauty products that deliver real results while being kind to your skin and the planet.",
    founder: {
      name: "Dr. Isabella Rose",
      title: "Founder & Chief Formulator — A dermatologist's vision for clean, effective beauty.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      description: "With over 15 years of experience in dermatology and cosmetic science, Dr. Rose founded DreamBeauty to bridge the gap between clinical effectiveness and clean beauty. Every formula is developed with care, using only the finest natural ingredients backed by science.",
      mission: "Our mission is simple — to help you discover your most radiant, confident self."
    }
  };

  const content = data || defaultData;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <section className="about-us-enhanced">
      {/* Large Decorative Pattern - Left Side */}
      <div
        className="about-us-enhanced__pattern about-us-enhanced__pattern--left"
        aria-hidden="true"
      >
        <Image
          src="/side-section-drawing-image.png"
          alt="side section image"
          height={200}
          width={200}
          className="about-us-enhanced__pattern-image"
        />
      </div>

      {/* Large Decorative Pattern - Right Side */}
      <div
        className="about-us-enhanced__pattern about-us-enhanced__pattern--right"
        aria-hidden="true"
      >
        <Image
          src="/side-section-drawing-image.png"
          alt="side section image"
          height={200}
          width={200}
          className="about-us-enhanced__pattern-image"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        className="about-us-enhanced__nav about-us-enhanced__nav--prev"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="about-us-enhanced__nav about-us-enhanced__nav--next"
        onClick={handleNext}
        aria-label="Next"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Header */}
      <div className="about-us-enhanced__header">
        <h2 className="about-us-enhanced__title">{content.title}</h2>
        <p
          className="about-us-enhanced__subtitle"
          dangerouslySetInnerHTML={{ __html: content.subtitle }}
        />
      </div>

      {/* Founder Section */}
      <div className="about-us-enhanced__founder">
        <div className="about-us-enhanced__founder-image-wrapper">
          {/* Photo behind the frame */}
          <div className="about-us-enhanced__founder-photo">
            <Image
              src={content.founder.image}
              alt={`${content.founder.name} - Founder of DreamBeauty`}
              fill
              className="about-us-enhanced__founder-image"
              priority
            />
          </div>
          {/* Frame border overlay */}
          <div className="about-us-enhanced__founder-frame">
            <Image
              src="/about-us-enhanced-border-image.png"
              alt="border-image"
              fill
              className="about-us-enhanced__founder-frame-image"
            />
          </div>
        </div>

        <div className="about-us-enhanced__founder-content">
          <h3 className="about-us-enhanced__founder-name">
            {content.founder.name}
          </h3>
          <p className="about-us-enhanced__founder-title">
            {content.founder.title}
          </p>
          <p className="about-us-enhanced__founder-description">
            {content.founder.description}
          </p>
          <p className="about-us-enhanced__founder-mission">
            {content.founder.mission}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsEnhanced;
