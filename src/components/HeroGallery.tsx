import React from 'react';
import { Artwork, ARTWORKS_DATA } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';
import { FloatingInfoCard } from './FloatingInfoCard';
import { FloatingTag } from './FloatingTag';

interface HeroGalleryProps {
  onArtworkClick: (artwork: Artwork) => void;
  onInfoClick: () => void;
  onTagClick: (user: string) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  onArtworkClick,
  onInfoClick,
  onTagClick,
}) => {
  const p1 = ARTWORKS_DATA[0]; // Purple Editorial
  const p2 = ARTWORKS_DATA[1]; // Orange Staff Character
  const p3 = ARTWORKS_DATA[2]; // Green le Fleur
  const p4 = ARTWORKS_DATA[3]; // Golden Green Knight
  const p5 = ARTWORKS_DATA[4]; // Orange Glimmer 9
  const p6 = ARTWORKS_DATA[5]; // Blue Fluffy Worm

  return (
    <main className="hero-gallery-section" aria-label="Creative Editorial Gallery">
      {/* Desktop / Tablet Diagonal Composition Canvas */}
      <div className="diagonal-composition-canvas">
        {/* Poster 1: Purple Editorial */}
        <div className="pos-card card-p1">
          <ArtworkCard artwork={p1} onClick={onArtworkClick} priority />
        </div>

        {/* Floating Info Card */}
        <div className="pos-card card-info">
          <FloatingInfoCard onClick={onInfoClick} />
        </div>

        {/* Poster 2: Orange Character Sculpture */}
        <div className="pos-card card-p2">
          <ArtworkCard artwork={p2} onClick={onArtworkClick} />
        </div>

        {/* Poster 3: Green Outdoor Editorial */}
        <div className="pos-card card-p3">
          <ArtworkCard artwork={p3} onClick={onArtworkClick} />
        </div>

        {/* Poster 4: Golden Cinematic Poster */}
        <div className="pos-card card-p4">
          <ArtworkCard artwork={p4} onClick={onArtworkClick} />
        </div>

        {/* Floating Curator Tag */}
        <div className="pos-card card-tag">
          <FloatingTag onClick={() => onTagClick('@Johnson')} />
        </div>

        {/* Poster 5: Orange Music Editorial */}
        <div className="pos-card card-p5">
          <ArtworkCard artwork={p5} onClick={onArtworkClick} />
        </div>

        {/* Poster 6: Blue Abstract Sculpture */}
        <div className="pos-card card-p6">
          <ArtworkCard artwork={p6} onClick={onArtworkClick} />
        </div>
      </div>

      {/* Mobile Adaptive Layout (<768px) */}
      <div className="mobile-gallery-container">
        {/* Mobile Info Card Feature */}
        <div className="mobile-info-wrapper">
          <FloatingInfoCard onClick={onInfoClick} />
          <div className="mobile-tag-row">
            <FloatingTag onClick={() => onTagClick('@Johnson')} />
          </div>
        </div>

        {/* Horizontal Swipeable Rail */}
        <div className="mobile-artwork-rail" role="region" aria-label="Scrollable artworks gallery">
          {ARTWORKS_DATA.slice(0, 6).map((art, idx) => (
            <div key={art.id} className="mobile-rail-item">
              <ArtworkCard
                artwork={art}
                onClick={onArtworkClick}
                priority={idx < 2}
              />
              <span className="mobile-rail-title">{art.title}</span>
            </div>
          ))}
        </div>
        <p className="mobile-swipe-hint">Swipe horizontally to explore all editions →</p>
      </div>
    </main>
  );
};
