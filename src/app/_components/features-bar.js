"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLeaf, FaHeart, FaSpa, FaShippingFast } from "react-icons/fa";
import { GiLipstick, GiPerfumeBottle, GiMirrorMirror, GiDroplets } from "react-icons/gi";
import { MdScience } from "react-icons/md";

const iconMap = {
  leaf: FaLeaf,
  heart: FaHeart,
  spa: FaSpa,
  shipping: FaShippingFast,
  lipstick: GiLipstick,
  perfume: GiPerfumeBottle,
  mirror: GiMirrorMirror,
  drops: GiDroplets,
  science: MdScience,
};

function FeaturesBar({ features = [] }) {
  if (features.length === 0) return null;

  return (
    <div className="features-bar-wrapper">
      <div className="features-bar">
        <Row className="g-0">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || FaLeaf;
            return (
              <Col key={index} xs={6} md={3} className="feature-item">
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default FeaturesBar;
