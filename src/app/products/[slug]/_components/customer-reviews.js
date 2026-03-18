"use client";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReactStars from "react-stars";
import ReviewModal from "./review-modal";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function CustomerReviews({ reviews = [] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="customer-reviews-section">
      <Container>
        <div className="customer-reviews-top">
          <h2 className="customer-reviews-title">Customer Reviews</h2>
          <button
            className="customer-reviews-write-btn"
            onClick={() => setShowModal(true)}
          >
            Write a Review
          </button>
        </div>

        <div className="customer-reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="customer-review-item">
              <div className="customer-review-header">
                <div className="customer-review-avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="customer-review-meta">
                  <div className="customer-review-name-stars">
                    <span className="customer-review-name">{review.name}</span>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={18}
                      color2="#E91E63"
                      color1="#ddd"
                      edit={false}
                    />
                  </div>
                  <span className="customer-review-date">
                    {formatDate(review.date)}
                  </span>
                </div>
              </div>
              <p className="customer-review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <ReviewModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default CustomerReviews;
