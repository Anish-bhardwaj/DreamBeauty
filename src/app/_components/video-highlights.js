"use client";

import React from "react";
import {
  FaLandmark,
  FaUsers,
  FaPaintBrush,
  FaFingerprint,
  FaMedal,
  FaFlag
} from "react-icons/fa";
import { GiIndianPalace, GiStoneCrafting, GiLion } from "react-icons/gi";
import { MdDiversity3 } from "react-icons/md";
import { BsAward } from "react-icons/bs";

const iconMap = {
  century: FaLandmark,
  handcrafted: FaUsers,
  crafted: GiStoneCrafting,
  diversity: MdDiversity3,
  honored: BsAward,
  india: GiLion,
};

function VideoHighlights({ data }) {
  const { videoSrc, heading, features } = data;

  return (
    <section className="video-highlights">
      {/* Background Video */}
      <video
        className="video-highlights-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay for better contrast */}
      <div className="video-highlights-overlay" />

      {/* Content Card */}
      <div className="video-highlights-card">
        <h2 className="video-highlights-heading">{heading}</h2>

        <div className="video-highlights-features">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || FaLandmark;
            return (
              <div key={index} className="video-highlight-item">
                <div className="video-highlight-icon">
                  <IconComponent />
                </div>
                <p className="video-highlight-text">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VideoHighlights;
