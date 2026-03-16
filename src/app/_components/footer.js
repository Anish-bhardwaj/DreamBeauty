"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const footerData = {
  logo: "/logo.png",
  title: "DreamBeauty",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Skincare", href: "/products?category=skincare" },
    { label: "Makeup", href: "/products?category=makeup" },
    { label: "Haircare", href: "/products?category=haircare" },
    { label: "Contact Us", href: "/contact" },
  ],
  contact: {
    address:
      "123 Beauty Boulevard, Suite 100, New York, NY 10001",
    email: "hello@dreambeauty.com",
    phone: "+1-555-123-4567",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890",
};

function Footer() {
  return (
    <footer className="footer">
      {/* Google Map Section */}
      <div className="footer-map">
        <iframe
          src={footerData.mapEmbedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DreamBeauty Location"
        />
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Logo Section */}
        <Container>
          <div className="footer-logo-section">
            <div className="footer-logo">
              <Image
                src={footerData.logo}
                alt="DreamBeauty"
                width={132}
                height={162}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="footer-title">{footerData.title}</h2>
          </div>
        </Container>

        {/* Navigation Links - Full Width */}
        <nav className="footer-nav">
          {footerData.navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <Container>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <HiOutlineLocationMarker />
              <span>{footerData.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <HiOutlineEnvelope />
              <a href={`mailto:${footerData.contact.email}`}>
                {footerData.contact.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <HiOutlinePhone />
              <a href={`tel:${footerData.contact.phone.replace(/-/g, "")}`}>
                {footerData.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content">
            <div className="footer-legal-links">
              <Link href="/privacy">Privacy</Link>
              <span className="footer-divider">|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div className="footer-gst">
              <span>&copy; 2024 DreamBeauty. All rights reserved.</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
