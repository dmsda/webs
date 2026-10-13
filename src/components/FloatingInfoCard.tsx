import React from 'react';
import { BRAND_CONFIG } from '../data/navigation';

interface FloatingInfoCardProps {
  headline?: string;
  apy?: string;
  description?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const FloatingInfoCard: React.FC<FloatingInfoCardProps> = ({
  headline = BRAND_CONFIG.headline,
  apy = BRAND_CONFIG.apy,
  description = BRAND_CONFIG.description,
  onClick,
  style = {},
}) => {
  return (
    <div
      className="floating-info-card"
      style={style}
      onClick={onClick}
      role="region"
      aria-label="Marketplace summary"
    >
      <div className="info-card-header">
        <h2 className="info-card-title">{headline}</h2>
        <div className="info-card-badge" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#171717" />
            {/* Minimalist spark / waveform icon */}
            <path
              d="M14 7v14M8 14h12M10 10l8 8M18 10l-8 8"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <div className="info-card-meta">
        <span className="info-meta-bullet">•</span>
        <span className="info-meta-text">APY: {apy}</span>
      </div>

      <p className="info-card-description">{description}</p>
    </div>
  );
};
