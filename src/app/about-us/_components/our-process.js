"use client";

import React from "react";
import { Container } from "react-bootstrap";

function OurProcess({ steps }) {
  return (
    <section className="about-process">
      <Container>
        <div className="about-process-header">
          <h2 className="about-process-title">Our Process</h2>
          <p className="about-process-subtitle">From concept to your doorstep — every step is crafted with care</p>
        </div>

        <div className="about-process-steps">
          <div className="about-process-line" />
          {steps.map((item) => (
            <div key={item.step} className="about-process-step">
              <div className="about-process-number">{item.step}</div>
              <h3 className="about-process-step-title">{item.title}</h3>
              <p className="about-process-step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OurProcess;
