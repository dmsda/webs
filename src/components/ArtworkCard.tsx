import React from 'react';
import { Artwork } from '../data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (artwork: Artwork) => void;
  priority?: boolean;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  className = '',
  style = {},
  onClick,
  priority = false,
}) => {
  return (
    <article
      className={`artwork-card ${className}`}
      style={style}
      onClick={() => onClick && onClick(artwork)}
      role="button"
      tabIndex={0}
      aria-label={`View ${artwork.title} by ${artwork.creator}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick(artwork);
        }
      }}
    >
      <div className="artwork-card-inner">
        <img
          src={artwork.imageSrc}
          alt={artwork.altText}
          className="artwork-image"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="artwork-card-glow" style={{ '--glow-color': artwork.accentColor } as React.CSSProperties} />
      </div>
    </article>
  );
};
