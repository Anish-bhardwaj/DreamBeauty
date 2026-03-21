"use client";

import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function JourneyTimeline({ milestones }) {
  return (
    <section className="about-timeline">
      <Container>
        <div className="about-timeline-header">
          <h2 className="about-timeline-title">Our Journey</h2>
          <p className="about-timeline-subtitle">Building a clean beauty brand, one milestone at a time</p>
        </div>

        <div className="about-timeline-track">
          <div className="about-timeline-line" />
          {milestones.map((item, index) => (
            <div key={index} className={`about-timeline-item ${index % 2 === 0 ? "about-timeline-left" : "about-timeline-right"}`}>
              <div className="about-timeline-dot">
                <span className="about-timeline-year">{item.year}</span>
              </div>
              <div className="about-timeline-card">
                <h3 className="about-timeline-card-title">{item.title}</h3>
                <p className="about-timeline-card-desc">{item.description}</p>
                {item.image && (
                  <div className="about-timeline-card-image">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default JourneyTimeline;
