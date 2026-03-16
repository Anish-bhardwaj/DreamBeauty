"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

function AwardModal({ show, onClose, award }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [show, onClose]);

  if (!show || !award) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="award-modal-backdrop" onClick={handleBackdropClick}>
      <div className="award-modal">
        {/* Close Button */}
        <button className="award-modal-close" onClick={onClose}>
          <IoClose />
        </button>

        {/* Modal Content */}
        <div className="award-modal-content">
          {/* Image Section */}
          <div className="award-modal-image">
            <Image
              src={award.image}
              alt={award.title}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Details Section */}
          <div className="award-modal-details">
            <span className="award-modal-category">{award.category}</span>
            <h2 className="award-modal-title">{award.title}</h2>
            <span className="award-modal-year">{award.year}</span>
            <p className="award-modal-description">{award.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardModal;
