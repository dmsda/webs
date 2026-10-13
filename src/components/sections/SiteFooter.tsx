import React, { useState } from 'react';
import { BrandLogo } from '../BrandLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/navigation';

export const SiteFooter: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top-grid">
        <div className="footer-brand-col">
          <BrandLogo name={BRAND_CONFIG.name} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <p className="footer-tagline">
            Where art meets market. A decentralized curation protocol providing self-sustaining liquidity and museum-grade physical fulfillment for visionary contemporary creators.
          </p>
          <div className="footer-status-indicator">
            <span className="status-dot-pulse" />
            <span className="status-label">Ethereum Mainnet L1 • 4.60% APY Staking Active</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Exhibitions</h4>
          <ul className="footer-links-list">
            <li><a href="#exhibition">Autumn 2024 Showcase</a></li>
            <li><a href="#exhibition">Editorial Cosmetics (P1)</a></li>
            <li><a href="#exhibition">Staff Toy Collective (P2)</a></li>
            <li><a href="#exhibition">a knit by le FLEUR* (P3)</a></li>
            <li><a href="#exhibition">The Green Knight (P4)</a></li>
            <li><a href="#exhibition">Glimmer 9 Periodical (P5)</a></li>
            <li><a href="#exhibition">Fluffy Worm Sculpture (P6)</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Protocol & Vaults</h4>
          <ul className="footer-links-list">
            <li><a href="#strategy">Strategy Architecture</a></li>
            <li><a href="#strategy">4.60% APY Vault</a></li>
            <li><a href="#solution">Bonding Curves</a></li>
            <li><a href="#pricing">Collector Tiers</a></li>
            <li><a href="#curators">Curatorial Board</a></li>
            <li><a href="#contact">Artist Submissions</a></li>
          </ul>
        </div>

        <div className="footer-newsletter-col">
          <h4 className="footer-col-title">The Pallet Journal</h4>
          <p className="newsletter-desc">
            Receive private exhibition invitations, curatorial essays by @Johnson, and early access to limited edition drops.
          </p>

          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={16} color="var(--accent-green)" />
              <span>Subscribed to private editorial dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="collector@domain.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe to newsletter">
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span className="footer-copyright">
          © 2024–2026 {BRAND_CONFIG.name} Decentralized Curation Protocol. All physical prints under Swiss Fine Art Guild registry.
        </span>
        <div className="footer-legal-links">
          <a href="#strategy">Smart Contracts</a>
          <a href="#pricing">Terms of Curation</a>
          <a href="#solution">Privacy & Provenance</a>
          <a href="#contact">Security Advisory</a>
        </div>
      </div>
    </footer>
  );
};
