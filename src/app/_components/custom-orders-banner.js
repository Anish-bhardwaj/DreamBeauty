"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

function CustomOrdersBanner({ data }) {
  const { leftContent, rightContent, image } = data;

  return (
    <section className="custom-orders-banner">
      <Container>
        <div className="custom-orders-wrapper">
          {/* Left Content */}
          <div className="custom-orders-content custom-orders-left">
            <h2 className="custom-orders-title">{leftContent.title}</h2>
            <p className="custom-orders-description">{leftContent.description}</p>
            <Link href={leftContent.buttonLink} className="custom-orders-btn">
              {leftContent.buttonText}
            </Link>
          </div>

          {/* Center Image */}
          <div className="custom-orders-images">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 450}
              height={image.height || 250}
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>

          {/* Right Content */}
          <div className="custom-orders-content custom-orders-right">
            <h2 className="custom-orders-title">{rightContent.title}</h2>
            <p className="custom-orders-description">{rightContent.description}</p>
            <Link href={rightContent.buttonLink} className="custom-orders-btn">
              {rightContent.buttonText}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CustomOrdersBanner;
