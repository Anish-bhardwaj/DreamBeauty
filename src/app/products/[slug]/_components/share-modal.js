"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaCheckCircle, FaRegCopy } from "react-icons/fa";

function ShareModal({ show, onClose, productName, productImage }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
    }
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(productName || "Check this out");
    const body = encodeURIComponent(shareUrl);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <Modal show={show} onHide={onClose} centered className="share-modal">
      <Modal.Header closeButton className="share-modal-header">
        <Modal.Title className="share-modal-title">Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {(productImage || productName) && (
          <div className="share-product-card">
            {productImage && (
              <div className="share-product-image">
                <Image src={productImage} alt={productName || "Product"} width={120} height={120} style={{ objectFit: "contain" }} />
              </div>
            )}
            {productName && <h4 className="share-product-name">{productName}</h4>}
          </div>
        )}

        <div className="share-icons-row">
          <span role="button" className="share-icon-btn" onClick={handleEmailShare}><EmailIcon size={40} round /></span>
          <FacebookShareButton url={shareUrl} className="share-icon-btn"><FacebookIcon size={40} round /></FacebookShareButton>
          <FacebookMessengerShareButton url={shareUrl} className="share-icon-btn"><FacebookMessengerIcon size={40} round /></FacebookMessengerShareButton>
          <LinkedinShareButton url={shareUrl} className="share-icon-btn"><LinkedinIcon size={40} round /></LinkedinShareButton>
          <TelegramShareButton url={shareUrl} className="share-icon-btn"><TelegramIcon size={40} round /></TelegramShareButton>
          <TwitterShareButton url={shareUrl} className="share-icon-btn"><XIcon size={40} round /></TwitterShareButton>
          <WhatsappShareButton url={shareUrl} className="share-icon-btn"><WhatsappIcon size={40} round /></WhatsappShareButton>
        </div>

        <div className="share-url-row">
          <span className="share-url-text">{shareUrl}</span>
          <button className="share-copy-btn" onClick={copyToClipboard}>
            {copied ? <FaCheckCircle color="green" /> : <FaRegCopy />}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ShareModal;
