"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

function OurStory({ data }) {
  return (
    <section className="about-story">
      <Container>
        <Row className="about-story-row">
          <Col lg={7} className="about-story-text-col">
            <h2 className="about-story-title">{data.title}</h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className="about-story-paragraph">{p}</p>
            ))}
          </Col>
          <Col lg={5} className="about-story-image-col">
            <div className="about-story-image">
              <Image src={data.image} alt="DreamBeauty Lab" fill style={{ objectFit: "cover" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurStory;
