"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

function AwardsSection({ data }) {
  const { title, ctaText, ctaLink, items } = data;

  // Get items by their grid position
  const getItem = (column, position) => {
    return items.find((item) => item.column === column && item.position === position);
  };

  const leftTextCard = getItem("left", "top");
  const leftLargeImage = getItem("left", "middle");
  const leftImagePair = getItem("left", "bottom");
  const centerFeaturedImage = getItem("center", "top");
  const centerTextCard = getItem("center", "bottom");
  const rightTextCard = getItem("right", "top");
  const rightLargeImage = getItem("right", "bottom");

  return (
    <section className="awards-section">
      <Container>
        <h2 className="awards-title">{title}</h2>

        <div className="awards-bento-grid">
          {/* Left Column - Row 1: Text Card */}
          {leftTextCard && (
            <div className="award-item award-left-text">
              <div className="award-text-card">
                <h3 className="award-card-title">{leftTextCard.title}</h3>
                <p className="award-card-description">{leftTextCard.description}</p>
              </div>
            </div>
          )}

          {/* Left Column - Row 2: Large Image */}
          {leftLargeImage && (
            <div className="award-item award-left-image">
              <div className="award-image-wrapper">
                <Image
                  src={leftLargeImage.image}
                  alt={leftLargeImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )}

          {/* Left Column - Row 3: Image Pair */}
          {leftImagePair && (
            <div className="award-item award-left-pair">
              <div className="award-image-pair">
                {leftImagePair.images.map((img, index) => (
                  <div key={index} className="award-image-small">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Center Column - Rows 1-2: Featured Image */}
          {centerFeaturedImage && (
            <div className="award-item award-center-image">
              <div className="award-featured-wrapper">
                <Image
                  src={centerFeaturedImage.image}
                  alt={centerFeaturedImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )}

          {/* Center Column - Row 3: Text Card */}
          {centerTextCard && (
            <div className="award-item award-center-text">
              <div className="award-text-card">
                <h3 className="award-card-title">{centerTextCard.title}</h3>
                <p className="award-card-description">{centerTextCard.description}</p>
              </div>
            </div>
          )}

          {/* Right Column - Row 1: Text Card */}
          {rightTextCard && (
            <div className="award-item award-right-text">
              <div className="award-text-card">
                <h3 className="award-card-title">{rightTextCard.title}</h3>
                <p className="award-card-description">{rightTextCard.description}</p>
              </div>
            </div>
          )}

          {/* Right Column - Rows 2-3: Large Image */}
          {rightLargeImage && (
            <div className="award-item award-right-image">
              <div className="award-image-wrapper award-image-tall">
                <Image
                  src={rightLargeImage.image}
                  alt={rightLargeImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="awards-cta">
          <Link href={ctaLink} className="awards-btn">
            {ctaText}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default AwardsSection;
