"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FiPlus, FiMinus } from "react-icons/fi";

function FaqSection({ data }) {
  const { title, image, faqs } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <Row className="faq-row">
          <Col lg={5} md={12}>
            <div className="faq-image-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col lg={7} md={12}>
            <div className="faq-content">
              <h2 className="faq-title">{title}</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span>{faq.question}</span>
                      {activeIndex === index ? <FiMinus /> : <FiPlus />}
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FaqSection;
