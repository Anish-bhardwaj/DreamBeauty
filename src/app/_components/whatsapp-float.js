import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/15551234567?text=Hi%20DreamBeauty%2C%20I%20am%20interested%20in%20your%20beauty%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappFloat;
