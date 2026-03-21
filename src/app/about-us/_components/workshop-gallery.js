"use client";

import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function WorkshopGallery({ images }) {
  return (
    <section className="about-gallery">
      <Container>
        <div className="about-gallery-header">
          <h2 className="about-gallery-title">Behind the Scenes</h2>
          <p className="about-gallery-subtitle">A glimpse into our labs and the people who make DreamBeauty possible</p>
        </div>
        <div className="about-gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="about-gallery-item">
              <div className="about-gallery-item-bg">
                <Image src={img.image} alt={img.alt} fill style={{ objectFit: "cover" }} aria-hidden="true" />
              </div>
              <Image src={img.image} alt={img.alt} fill style={{ objectFit: "contain" }} className="about-gallery-item-img" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WorkshopGallery;
