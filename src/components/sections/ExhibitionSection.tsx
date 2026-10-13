import React, { useState } from 'react';
import { ARTWORKS_DATA, Artwork } from '../../data/artworks';
import { Eye, ArrowUpRight } from 'lucide-react';

interface ExhibitionSectionProps {
  onSelectArtwork: (artwork: Artwork) => void;
}

export const ExhibitionSection: React.FC<ExhibitionSectionProps> = ({ onSelectArtwork }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Editorial Design',
    'Collectible Art',
    'Campaign Photography',
    'Film Poster',
    'Music Periodical',
    '3D Digital Sculpture',
  ];

  const filteredArtworks = selectedCategory === 'All'
    ? ARTWORKS_DATA
    : ARTWORKS_DATA.filter((art) => art.category === selectedCategory);

  return (
    <section id="exhibition" className="landing-section exhibition-section" aria-labelledby="exhibition-title">
      <div className="section-header">
        <span className="section-eyebrow">Autumn 2024 Showcase</span>
        <h2 id="exhibition-title" className="section-title">
          Curated Physical & Digital Editions
        </h2>
        <p className="section-subtitle">
          Explore the limited-edition works featured in our diagonal hero gallery. Each piece includes an on-chain cryptographic certificate and museum-grade physical archival print.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-bar" role="tablist" aria-label="Artwork categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Exhibition Grid */}
      <div className="exhibition-artworks-grid">
        {filteredArtworks.map((art) => (
          <article
            key={art.id}
            className="exhibition-card"
            onClick={() => onSelectArtwork(art)}
            tabIndex={0}
            role="button"
            aria-label={`View ${art.title} details`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArtwork(art);
              }
            }}
          >
            <div className="exhibition-image-wrapper">
              <img
                src={art.imageSrc}
                alt={art.altText}
                className="exhibition-card-img"
                loading="lazy"
              />
              <div className="card-hover-overlay">
                <span className="overlay-inspect-btn">
                  <Eye size={16} />
                  <span>Inspect Piece</span>
                </span>
              </div>
              <span className="exhibition-edition-badge" style={{ backgroundColor: art.accentColor }}>
                {art.edition || 'Limited Edition'}
              </span>
            </div>

            <div className="exhibition-card-info">
              <div className="card-top-row">
                <span className="card-category-label">{art.category}</span>
                <span className="card-price-label">{art.price || 'Inquire'}</span>
              </div>
              <h3 className="card-piece-title">{art.title}</h3>
              <p className="card-creator-by">By {art.creator}</p>
              <div className="card-bottom-row">
                <span className="card-year-tag">{art.year} Release</span>
                <span className="card-action-link">
                  <span>View Details</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
