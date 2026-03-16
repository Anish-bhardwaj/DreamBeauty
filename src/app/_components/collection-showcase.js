"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

function CollectionShowcase({ data }) {
  const { title, description, buttonText, buttonLink, images, layout } = data;
  const isContentLeft = layout === "content-left";

  return (
    <section className="collection-showcase">
      <Container>
        <Row className={`collection-row ${isContentLeft ? "" : "flex-row-reverse"}`}>
          {/* Content Side */}
          <Col lg={4} md={5} className="collection-content-col">
            <div className="collection-content">
              <h2 className="collection-title">{title}</h2>
              <p className="collection-description">{description}</p>
              <Link href={buttonLink} className="collection-btn">
                {buttonText}
              </Link>
            </div>
          </Col>

          {/* Images Side */}
          <Col lg={8} md={7} className="collection-images-col">
            <div className={`collection-images collection-images-${images.length}`}>
              {images.map((img, index) => (
                <div key={index} className="collection-image-wrapper">
                  <Image
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CollectionShowcase;
