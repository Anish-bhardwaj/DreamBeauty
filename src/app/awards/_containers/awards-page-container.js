"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import AwardModal from "../_components/award-modal";

// DreamBeauty certifications and awards data
const awardsListData = {
  title: "Certifications & Recognition",
  subtitle:
    "Celebrating our commitment to clean, ethical beauty with prestigious certifications and industry recognition.",
  awards: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      title: "Leaping Bunny Certified",
      description:
        "Certified cruelty-free by Leaping Bunny, the gold standard for cruelty-free cosmetics. No animal testing at any stage of product development.",
      year: "2020",
      category: "Cruelty-Free",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      title: "Clean Beauty Award",
      description:
        "Recognized for our commitment to using only safe, non-toxic ingredients in all formulations. No parabens, sulfates, or harmful chemicals.",
      year: "2022",
      category: "Clean Beauty",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
      title: "Vegan Society Approved",
      description:
        "All DreamBeauty products are certified vegan by The Vegan Society. No animal-derived ingredients used in any formulations.",
      year: "2021",
      category: "Vegan Certified",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      title: "Sustainable Packaging Award",
      description:
        "Awarded for innovative eco-friendly packaging solutions. 100% recyclable materials and reduced plastic footprint.",
      year: "2023",
      category: "Sustainability",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      title: "Dermatologist Recommended",
      description:
        "Endorsed by leading dermatologists for safety and efficacy. All products undergo rigorous clinical testing.",
      year: "2021",
      category: "Clinical",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      title: "Best New Beauty Brand",
      description:
        "Winner of Beauty Industry Awards for Best New Beauty Brand, recognized for innovation and quality.",
      year: "2022",
      category: "Industry Award",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      title: "Women-Owned Business",
      description:
        "Certified Women-Owned Business, committed to empowering women in the beauty industry.",
      year: "2019",
      category: "Business",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80",
      title: "B Corp Certification",
      description:
        "B Corp certified for meeting the highest standards of social and environmental performance.",
      year: "2023",
      category: "Sustainability",
    },
  ],
};

function AwardsPageContainer() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAwardClick = (award) => {
    setSelectedAward(award);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAward(null);
  };

  return (
    <section className="awards-page">
      <Container>
        {/* Page Header */}
        <div className="awards-page-header">
          <h1 className="awards-page-title">{awardsListData.title}</h1>
          <p className="awards-page-subtitle">{awardsListData.subtitle}</p>
        </div>

        {/* Awards Grid */}
        <Row className="awards-grid-list">
          {awardsListData.awards.map((award) => (
            <Col key={award.id} lg={3} md={4} sm={6} xs={6} className="award-grid-col">
              <div
                className="award-grid-card"
                onClick={() => handleAwardClick(award)}
              >
                <div className="award-grid-image">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="award-grid-overlay">
                    <span className="award-grid-year">{award.year}</span>
                  </div>
                </div>
                <div className="award-grid-info">
                  <span className="award-grid-category">{award.category}</span>
                  <h3 className="award-grid-title">{award.title}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Award Detail Modal */}
      <AwardModal
        show={showModal}
        onClose={handleCloseModal}
        award={selectedAward}
      />
    </section>
  );
}

export default AwardsPageContainer;
