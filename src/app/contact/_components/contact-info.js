"use client";

import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

function ContactInfo({ data }) {
  return (
    <div className="contact-info">
      <h2 className="contact-info-title">{data.title}</h2>
      <p className="contact-info-description">{data.description}</p>

      <div className="contact-info-items">
        <div className="contact-info-item">
          <span className="contact-info-icon">
            <HiOutlinePhone />
          </span>
          <a href={`tel:${data.phone.replace(/-/g, "")}`}>{data.phone}</a>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-icon">
            <HiOutlineMail />
          </span>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-icon">
            <HiOutlineLocationMarker />
          </span>
          <span>{data.address}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
