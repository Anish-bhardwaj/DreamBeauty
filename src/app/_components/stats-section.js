"use client";

import React from "react";
import { Container } from "react-bootstrap";

// Custom icons to match Figma design
const ClientsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stars */}
    <path d="M14 8L15.5 11L19 11.5L16.5 14L17 17.5L14 16L11 17.5L11.5 14L9 11.5L12.5 11L14 8Z" fill="currentColor"/>
    <path d="M24 4L25.5 7L29 7.5L26.5 10L27 13.5L24 12L21 13.5L21.5 10L19 7.5L22.5 7L24 4Z" fill="currentColor"/>
    <path d="M34 8L35.5 11L39 11.5L36.5 14L37 17.5L34 16L31 17.5L31.5 14L29 11.5L32.5 11L34 8Z" fill="currentColor"/>
    {/* People */}
    <circle cx="24" cy="26" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 42C16 37.5817 19.5817 34 24 34C28.4183 34 32 37.5817 32 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="12" cy="28" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M4 42C4 38.6863 6.68629 36 10 36H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="36" cy="28" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M44 42C44 38.6863 41.3137 36 38 36H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const StatuesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bust/statue on pedestal */}
    <ellipse cx="24" cy="12" rx="8" ry="9" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M18 20C18 20 16 24 16 28H32C32 24 30 20 30 20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="14" y="28" width="20" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 32H36V36H12V32Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="10" y="36" width="28" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="8" y="40" width="32" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Certificate */}
    <rect x="8" y="4" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="14" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="2"/>
    <line x1="14" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="2"/>
    <line x1="14" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
    {/* Badge/ribbon */}
    <circle cx="36" cy="34" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M36 30L37.5 33L41 33.5L38.5 36L39 39.5L36 38L33 39.5L33.5 36L31 33.5L34.5 33L36 30Z" fill="currentColor"/>
    <path d="M32 40L30 46L33 44L36 46L34 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 40L42 46L39 44L36 46L38 40" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const iconMap = {
  clients: ClientsIcon,
  statues: StatuesIcon,
  experience: ExperienceIcon,
};

function StatsSection({ data }) {
  const { stats } = data;

  return (
    <section className="stats-section">
      <div className="stats-top-border"></div>
      <Container>
        <div className="stats-grid">
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={stat.id} className="stat-item">
                <div className="stat-icon">
                  {IconComponent && <IconComponent />}
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;
