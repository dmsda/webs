import React from 'react';
import { Layers, Palette, Landmark, Shield, Check, Globe } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solution" className="landing-section solutions-section" aria-labelledby="solutions-title">
      <div className="section-header">
        <span className="section-eyebrow">Solutions & Ecosystem</span>
        <h2 id="solutions-title" className="section-title">
          Infrastructure Built for the Next Creative Era
        </h2>
        <p className="section-subtitle">
          Whether you are an independent artist debuting a seasonal series or an institutional museum digitizing century-old archives, Pallet Ross provides end-to-end tooling.
        </p>
      </div>

      <div className="solutions-dual-grid">
        {/* Track 1: For Artists & Studios */}
        <div className="solution-track-card creator-track">
          <div className="track-header">
            <div className="track-icon-wrapper">
              <Palette size={24} color="var(--accent-turquoise)" />
            </div>
            <div>
              <span className="track-sub">For Visual Artists & Design Studios</span>
              <h3 className="track-title">Creative Liberation & Direct Patronage</h3>
            </div>
          </div>
          <p className="track-summary">
            Retain creative sovereignty while accessing decentralized collector treasuries and physical museum fulfillment networks.
          </p>

          <ul className="track-checklist">
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Zero-Gas Smart Edition Minting</strong>
                <p>Deploy limited ERC-721 and ERC-1155 editions without upfront transaction fees.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Continuous Treasury Yield (4.60% APY)</strong>
                <p>Earn passive compounding yield on vaulted primary sales revenue until withdrawal.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Automated Secondary Royalty Enforcement</strong>
                <p>Guaranteed 10–15% secondary royalties written directly into on-chain contract logic.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Integrated Physical Printmaking</strong>
                <p>Direct hookup to our Hahnemühle German etching paper print labs in Berlin and Tokyo.</p>
              </div>
            </li>
          </ul>

          <button
            className="secondary-action-btn track-cta"
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Submit Portfolio for Curation
          </button>
        </div>

        {/* Track 2: For Institutional Collectors & Foundations */}
        <div className="solution-track-card institution-track">
          <div className="track-header">
            <div className="track-icon-wrapper">
              <Landmark size={24} color="var(--accent-yellow)" />
            </div>
            <div>
              <span className="track-sub">For Museums, Foundations & Family Offices</span>
              <h3 className="track-title">Custodial Security & Provenance</h3>
            </div>
          </div>
          <p className="track-summary">
            Enterprise-grade infrastructure for managing, fractionalizing, and verifying contemporary fine art collections.
          </p>

          <ul className="track-checklist">
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Swiss Free-Port Vaulting</strong>
                <p>Fully insured, climate-controlled bonded storage in Zurich, Geneva, and Singapore.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Verifiable Microscopic Provenance</strong>
                <p>Physical NFC tamper-proof tags synchronized with cryptographic on-chain metadata.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Institutional Liquidity Pools</strong>
                <p>Borrow against vaulted art assets at competitive LTV rates without liquidating works.</p>
              </div>
            </li>
            <li>
              <Check size={18} className="check-icon" />
              <div>
                <strong>Custom White-Label Exhibition Portals</strong>
                <p>Host branded private viewings and auctions for high-net-worth collector circles.</p>
              </div>
            </li>
          </ul>

          <button
            className="secondary-action-btn track-cta"
            onClick={() => {
              const el = document.getElementById('pricing');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Institutional Tiers
          </button>
        </div>
      </div>

      {/* Global Security Metrics Banner */}
      <div className="solutions-metrics-banner">
        <div className="metric-col">
          <Globe size={20} color="var(--accent-turquoise)" />
          <span className="metric-val">120+</span>
          <span className="metric-desc">Countries Reached with Archival Delivery</span>
        </div>
        <div className="metric-col">
          <Shield size={20} color="var(--accent-green)" />
          <span className="metric-val">100%</span>
          <span className="metric-desc">Lloyd's of London Insured Physical Reserves</span>
        </div>
        <div className="metric-col">
          <Layers size={20} color="var(--accent-yellow)" />
          <span className="metric-val">4.60%</span>
          <span className="metric-desc">Real-Time Autonomous Yield on Protocol Staking</span>
        </div>
      </div>
    </section>
  );
};
