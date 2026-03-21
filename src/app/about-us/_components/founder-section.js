"use client";

import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function FounderSection({ data }) {
  return (
    <section className="about-founder">
      <div className="about-founder-pattern about-founder-pattern-left" aria-hidden="true">
        <Image src="/side-section-drawing-image.png" alt="Decorative pattern" height={200} width={200} className="about-founder-pattern-img" />
      </div>
      <div className="about-founder-pattern about-founder-pattern-right" aria-hidden="true">
        <Image src="/side-section-drawing-image.png" alt="Decorative pattern" height={200} width={200} className="about-founder-pattern-img" />
      </div>

      <Container>
        <div className="about-founder-inner">
          <div className="about-founder-image-wrap">
            <div className="about-founder-photo">
              <Image src={data.image} alt={data.name} fill style={{ objectFit: "cover" }} priority />
            </div>
            <div className="about-founder-frame">
              <Image src="/about-us-enhanced-border-image.png" alt="" fill className="about-founder-frame-img" />
            </div>
          </div>

          <div className="about-founder-content">
            <h2 className="about-founder-name">{data.name}</h2>
            <p className="about-founder-title">{data.title}</p>
            <p className="about-founder-desc">{data.description}</p>
            <p className="about-founder-mission">{data.mission}</p>
            {data.awards && <p className="about-founder-awards">{data.awards}</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FounderSection;
