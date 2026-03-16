"use client";

import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="about-section">
      {/* Left Decorative Element */}
      <div className="about-tree about-tree-left">
        <Image
          src="/tree_left.png"
          alt="Decorative Element"
          width={223}
          height={641}
          className="tree-left-img"
        />
      </div>

      {/* Right Decorative Element */}
      <div className="about-tree about-tree-right">
        <Image
          src="/tree_right.png"
          alt="Decorative Element"
          width={136}
          height={428}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Header */}
      <div className="about-header">
        <h2 className="about-title">About DreamBeauty</h2>
        <p className="about-subtitle">
          At <span className="plps-bold">DreamBeauty</span>, we believe everyone deserves to feel confident and beautiful.
          Our clean, cruelty-free formulas are designed to enhance your natural beauty.
        </p>
      </div>

      {/* Founder Section */}
      <div className="about-founder-wrapper">
        <div className="about-founder-image">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
            alt="Dr. Isabella Rose - Founder of DreamBeauty"
            width={450}
            height={550}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="about-founder-content">
          <h3 className="founder-name">Dr. Isabella Rose</h3>
          <p className="founder-title">
            Founder & Chief Formulator — A dermatologist&apos;s vision for clean, effective beauty.
          </p>
          <p className="founder-description">
            With over 15 years of experience in dermatology and cosmetic science, Dr. Rose founded
            DreamBeauty to bridge the gap between clinical effectiveness and clean beauty.
            Every formula is developed with care, using only the finest natural ingredients.
          </p>
          <p className="founder-mission">
            Our mission is simple — to help you discover your most radiant, confident self.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
