import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/navigation';
import { Check, ChevronDown, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 4.60% APY protocol yield function?',
      a: 'When collectors acquire pieces or deposit liquidity into Pallet Ross vault contracts, capital is algorithmically allocated to decentralized treasury bonds and audited staking protocols. Returns are distributed monthly directly in USDC or ETH.'
    },
    {
      q: 'Are the physical posters and artworks included with digital acquisition?',
      a: 'Yes. Every primary edition includes a physical museum-grade archival print produced on 310gsm Hahnemühle cotton rag paper with embossed tamper-proof seal and encrypted NFC certificate shipped globally.'
    },
    {
      q: 'How does an artist submit work for seasonal jury curation?',
      a: 'Artists can apply directly through our Contact & Submission portal below. Our curatorial board, led by @Johnson and Elena Rostova, reviews portfolios bi-weekly against our contemporary art direction criteria.'
    },
    {
      q: 'Can institutions vault existing physical collections with Pallet Ross?',
      a: 'Yes. Our institutional partners enjoy access to bonded free-port storage facilities in Zurich, Geneva, and Singapore with full Lloyd\'s of London underwriting and cryptographic provenance tagging.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="pricing" className="landing-section pricing-section" aria-labelledby="pricing-title">
      <div className="section-header">
        <span className="section-eyebrow">Transparent Structure</span>
        <h2 id="pricing-title" className="section-title">
          Fair, Predictable Economics
        </h2>
        <p className="section-subtitle">
          No hidden gas surprises, no exploitative marketplace cuts. Built on transparent smart contracts and sustainable creator splits.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-cards-grid">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`}
          >
            {plan.featured && (
              <div className="featured-ribbon">
                <Sparkles size={13} />
                <span>Curator's Choice</span>
              </div>
            )}

            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-tagline">{plan.tagline}</p>
              <div className="plan-price-row">
                <span className="plan-price">{plan.price}</span>
                <span className="plan-period">/ {plan.period}</span>
              </div>
            </div>

            <ul className="plan-features-list">
              {plan.features.map((feat, i) => (
                <li key={i}>
                  <Check size={16} className="feature-check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              className={`plan-cta-btn ${plan.featured ? 'primary-action-btn' : 'secondary-action-btn'}`}
              onClick={() => {
                const contactEl = document.getElementById('contact');
                contactEl?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {plan.ctaLabel}
            </button>
          </div>
        ))}
      </div>

      {/* Interactive FAQ Section */}
      <div className="faq-container">
        <h3 className="faq-headline">Frequently Asked Questions</h3>
        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openFaq === idx ? 'open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`faq-chevron ${openFaq === idx ? 'rotated' : ''}`}
                />
              </button>
              {openFaq === idx && (
                <div className="faq-answer-pane">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
