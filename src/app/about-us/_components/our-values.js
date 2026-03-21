"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiAward, FiDroplet, FiEdit3, FiGlobe, FiHeart, FiShield } from "react-icons/fi";

const iconMap = {
  clean: FiShield,
  cruelty: FiHeart,
  science: FiDroplet,
  global: FiGlobe,
  custom: FiEdit3,
  heritage: FiAward,
};

function OurValues({ values }) {
  return (
    <section className="about-values">
      <Container>
        <div className="about-values-header">
          <h2 className="about-values-title">Why Choose Us</h2>
          <p className="about-values-subtitle">What sets DreamBeauty apart from the rest</p>
        </div>
        <Row className="about-values-grid">
          {values.map((item) => {
            const Icon = iconMap[item.icon] || FiAward;
            return (
              <Col key={item.id} lg={3} md={6} sm={6} className="about-values-col">
                <div className="about-value-card">
                  <div className="about-value-icon"><Icon /></div>
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-desc">{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default OurValues;
