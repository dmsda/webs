import React from 'react';
import { CURATOR_PROFILES } from '../../data/navigation';
import { Award, Sparkles } from 'lucide-react';

interface CuratorsSectionProps {
  onSelectCurator: (handle: string) => void;
}

export const CuratorsSection: React.FC<CuratorsSectionProps> = ({ onSelectCurator }) => {
  return (
    <section id="curators" className="landing-section curators-section" aria-labelledby="curators-title">
      <div className="section-header">
        <span className="section-eyebrow">Editorial Jury</span>
        <h2 id="curators-title" className="section-title">
          Guiding Art Direction & Curatorial Standards
        </h2>
        <p className="section-subtitle">
          Our independent jury of museum curators, design critics, and DeFi liquidity architects evaluates every piece to ensure cultural resonance and long-term patron value.
        </p>
      </div>

      <div className="curators-grid">
        {CURATOR_PROFILES.map((curator) => (
          <div
            key={curator.id}
            className={`curator-card ${curator.id === 'johnson' ? 'featured-curator' : ''}`}
            onClick={() => onSelectCurator(curator.handle)}
            role="button"
            tabIndex={0}
            aria-label={`View ${curator.name} profile`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectCurator(curator.handle);
              }
            }}
          >
            {curator.id === 'johnson' && (
              <span className="curator-hero-tag">
                <Sparkles size={12} />
                <span>Featured in Hero Gallery</span>
              </span>
            )}
            <div className="curator-avatar-row">
              <div className="curator-initials-badge">
                <span>{curator.avatar}</span>
              </div>
              <div>
                <h3 className="curator-name">{curator.name}</h3>
                <span className="curator-handle">{curator.handle}</span>
              </div>
            </div>

            <p className="curator-role">
              <Award size={14} className="role-icon" />
              <span>{curator.role}</span>
            </p>

            <p className="curator-bio">{curator.bio}</p>

            <div className="curator-focus-tags">
              {curator.focus.map((f, idx) => (
                <span key={idx} className="focus-pill">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
