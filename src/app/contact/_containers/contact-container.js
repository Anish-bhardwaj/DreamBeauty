"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactHeroSlider from "@/app/contact/_components/contact-hero-slider";
import ContactInfo from "@/app/contact/_components/contact-info";
import ContactForm from "@/app/contact/_components/contact-form";

const heroSlides = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&q=80",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80",
  },
];

const contactInfoData = {
  title: "Keep in touch",
  description:
    "Have a question about our products or need skincare advice? Reach out to us and our beauty experts will get back to you as soon as possible.",
  address: "123 Beauty Boulevard, Suite 100, New York, NY 10001",
  email: "hello@dreambeauty.com",
  phone: "+1-555-123-4567",
};

const formData = {
  heading: "Get In Touch With Us",
};

function ContactContainer() {
  return (
    <div className="contact-page">
      <ContactHeroSlider slides={heroSlides} />

      <Container>
        <div className="contact-card">
          <Row>
            <Col lg={5}>
              <ContactInfo data={contactInfoData} />
            </Col>
            <Col lg={7}>
              <ContactForm heading={formData.heading} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContactContainer;
