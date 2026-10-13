import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Artwork } from '../data/artworks';
import { NavItem } from '../data/navigation';

export type ModalType =
  | { type: 'artwork'; artwork: Artwork }
  | { type: 'nav'; navItem: NavItem }
  | { type: 'profile' }
  | { type: 'tag'; user: string }
  | { type: 'info' }
  | null;

interface ModalPreviewProps {
  modal: ModalType;
  onClose: () => void;
}

export const ModalPreview: React.FC<ModalPreviewProps> = ({ modal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal dialog"
        >
          <X size={20} />
        </button>

        {modal.type === 'artwork' && (
          <div className="modal-artwork-content">
            <div className="modal-artwork-image-wrapper">
              <img
                src={modal.artwork.imageSrc}
                alt={modal.artwork.altText}
                className="modal-artwork-image"
              />
            </div>
            <div className="modal-artwork-details">
              <span className="modal-category-badge" style={{ color: modal.artwork.accentColor }}>
                {modal.artwork.category} • {modal.artwork.year}
              </span>
              <h2 className="modal-artwork-title">{modal.artwork.title}</h2>
              <p className="modal-artwork-creator">By {modal.artwork.creator}</p>
              <p className="modal-artwork-description">{modal.artwork.description}</p>

              <div className="modal-artwork-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Edition</span>
                  <span className="meta-val">{modal.artwork.edition || '1 of 1'}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Curator Price</span>
                  <span className="meta-val highlight">{modal.artwork.price || 'Inquire'}</span>
                </div>
              </div>

              <div className="modal-actions">
                <button className="primary-action-btn" onClick={() => alert(`Inquiry submitted for "${modal.artwork.title}". Our curation director will reach out.`)}>
                  Acquire Piece
                </button>
                <button className="secondary-action-btn" onClick={onClose}>
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        )}

        {modal.type === 'nav' && (
          <div className="modal-nav-content">
            <div className="modal-icon-badge">
              <Sparkles size={28} color="var(--accent-turquoise)" />
            </div>
            <h2 className="modal-nav-title">{modal.navItem.label}</h2>
            <p className="modal-nav-description">{modal.navItem.description}</p>
            <div className="modal-nav-card">
              <h3>Live Service Status</h3>
              <ul>
                <li><CheckCircle2 size={16} color="var(--accent-green)" /> Operational across primary L1 nodes</li>
                <li><CheckCircle2 size={16} color="var(--accent-green)" /> Smart contract audited by ConsenSys Diligence</li>
                <li><CheckCircle2 size={16} color="var(--accent-green)" /> 4.60% protocol APY currently compounding</li>
              </ul>
            </div>
            <button className="primary-action-btn" onClick={onClose}>
              Proceed with {modal.navItem.label}
            </button>
          </div>
        )}

        {modal.type === 'profile' && (
          <div className="modal-profile-content">
            <div className="profile-avatar">
              <span>PR</span>
            </div>
            <h2 className="modal-profile-title">Guest Collector Profile</h2>
            <p className="modal-profile-email">collector@palletross.art</p>
            <div className="profile-stats-grid">
              <div className="stat-card">
                <span className="stat-num">14</span>
                <span className="stat-label">Saved Artworks</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">4.60%</span>
                <span className="stat-label">Yield APY</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">3</span>
                <span className="stat-label">Strategies</span>
              </div>
            </div>
            <button className="primary-action-btn" onClick={onClose}>
              Manage Portfolio
            </button>
          </div>
        )}

        {modal.type === 'tag' && (
          <div className="modal-tag-content">
            <div className="tag-avatar-badge">
              <span>@</span>
            </div>
            <h2 className="modal-tag-title">{modal.user}</h2>
            <p className="modal-tag-subtitle">Lead Visual Curator • Pallet Ross Board</p>
            <p className="modal-tag-bio">
              Focusing on modern cinematic minimalism, Swiss typography revivals, and 3D tactile generative textures. Responsible for the Autumn 2024 Showcase curation.
            </p>
            <button className="primary-action-btn" onClick={onClose}>
              Follow Curator
            </button>
          </div>
        )}

        {modal.type === 'info' && (
          <div className="modal-info-content">
            <h2>Where Art Meets Market</h2>
            <p className="lead-text">
              Pallet Ross bridges high-calibre physical and digital creative editions with decentralized yield liquidity.
            </p>
            <div className="info-breakdown">
              <div className="breakdown-row">
                <span>Protocol APY</span>
                <strong>4.60% Net</strong>
              </div>
              <div className="breakdown-row">
                <span>Total Value Locked</span>
                <strong>$18,420,000 USD</strong>
              </div>
              <div className="breakdown-row">
                <span>Verified Artists</span>
                <strong>1,240 Creators</strong>
              </div>
            </div>
            <button className="primary-action-btn" onClick={onClose}>
              Explore Liquidity
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
