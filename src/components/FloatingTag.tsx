import React from 'react';
import { BRAND_CONFIG } from '../data/navigation';

interface FloatingTagProps {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const FloatingTag: React.FC<FloatingTagProps> = ({
  label = BRAND_CONFIG.tagUser,
  onClick,
  style = {},
}) => {
  return (
    <div
      className="floating-tag-container"
      style={style}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Curated by ${label}`}
      title={`Curated by ${label}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick();
        }
      }}
    >
      <div className="floating-tag-pill">
        <span className="floating-tag-text">{label}</span>
      </div>
      {/* Downward pointer triangle */}
      <div className="floating-tag-pointer" aria-hidden="true" />
    </div>
  );
};
