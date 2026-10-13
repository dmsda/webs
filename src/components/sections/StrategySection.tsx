import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/navigation';

export const StrategySection: React.FC = () => {
  const [allocation, setAllocation] = useState<number>(25000);
  const apyRate = 0.046; // 4.60%
  const annualYield = (allocation * apyRate).toFixed(2);
  const monthlyYield = ((allocation * apyRate) / 12).toFixed(2);

  return (
    <section id="strategy" className="landing-section strategy-section" aria-labelledby="strategy-title">
      <div className="section-header">
        <span className="section-eyebrow">Protocol & Strategy</span>
        <h2 id="strategy-title" className="section-title">
          Where Creative Vision Meets Financial Liquidity
        </h2>
        <p className="section-subtitle">
          Pallet Ross pioneers a self-sustaining yield protocol where collector deposits generate a dependable <strong>4.60% APY</strong> while funding museum-grade creative production.
        </p>
      </div>

      {/* APY Simulator Widget */}
      <div className="strategy-simulator-card">
        <div className="simulator-header">
          <div className="simulator-badge">
            <TrendingUp size={16} />
            <span>Interactive Strategy Simulator</span>
          </div>
          <span className="live-apy-tag">Protocol APY: <strong>{BRAND_CONFIG.apy}</strong></span>
        </div>

        <div className="simulator-body">
          <div className="simulator-input-group">
            <div className="input-labels">
              <label htmlFor="allocation-slider" className="input-label">Vault Allocation Amount</label>
              <span className="allocation-value">${allocation.toLocaleString()} USD</span>
            </div>
            <input
              id="allocation-slider"
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={allocation}
              onChange={(e) => setAllocation(Number(e.target.value))}
              className="allocation-slider"
            />
            <div className="slider-range-hints">
              <span>$1,000</span>
              <span>$50,000</span>
              <span>$100,000</span>
            </div>
          </div>

          <div className="simulator-results-grid">
            <div className="result-stat-box">
              <span className="result-label">Annual Projected Yield</span>
              <span className="result-val highlight">${Number(annualYield).toLocaleString()}</span>
              <span className="result-sub">+4.60% net compounding</span>
            </div>
            <div className="result-stat-box">
              <span className="result-label">Monthly Distribution</span>
              <span className="result-val">${Number(monthlyYield).toLocaleString()}</span>
              <span className="result-sub">Paid in treasury USDC / ETH</span>
            </div>
            <div className="result-stat-box">
              <span className="result-label">Curator Tier Access</span>
              <span className="result-val tier-label">
                {allocation >= 50000 ? 'Premier Jury Partner' : allocation >= 10000 ? 'Senior Patron' : 'Active Collector'}
              </span>
              <span className="result-sub">Guaranteed showcase whitelist</span>
            </div>
          </div>
        </div>

        <div className="simulator-footer">
          <button
            className="primary-action-btn simulator-cta"
            onClick={() => alert(`Strategy initiated with $${allocation.toLocaleString()} allocation at 4.60% APY. Connecting web3 vault...`)}
          >
            <span>Deploy Strategy Vault</span>
            <ArrowRight size={16} />
          </button>
          <span className="simulator-disclaimer">
            Smart contract audited by ConsenSys Diligence. Non-custodial treasury managed on Ethereum L1.
          </span>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="strategy-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-icon-box">
            <Zap size={22} color="var(--accent-turquoise)" />
          </div>
          <h3 className="pillar-title">Automated Royalty Splitting</h3>
          <p className="pillar-desc">
            Every edition secondary sale triggers automated, irrevocable smart contract splits directly to artist wallets and vault stakes in real-time.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon-box">
            <TrendingUp size={22} color="var(--accent-yellow)" />
          </div>
          <h3 className="pillar-title">Dynamic Bonding Curves</h3>
          <p className="pillar-desc">
            Early patrons and creative curators earn appreciation as editions enter institutional collections and high-profile exhibitions.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon-box">
            <ShieldCheck size={22} color="var(--accent-orange)" />
          </div>
          <h3 className="pillar-title">Fractional Physical Vaulting</h3>
          <p className="pillar-desc">
            High-value original physical works are vaulted in climate-controlled museum reserves in Zurich and Singapore with cryptographically verifiable provenance.
          </p>
        </div>
      </div>
    </section>
  );
};
