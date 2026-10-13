import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroGallery } from './components/HeroGallery';
import { StrategySection } from './components/sections/StrategySection';
import { ExhibitionSection } from './components/sections/ExhibitionSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { PricingSection } from './components/sections/PricingSection';
import { CuratorsSection } from './components/sections/CuratorsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiteFooter } from './components/sections/SiteFooter';
import { ModalPreview, ModalType } from './components/ModalPreview';
import { Artwork } from './data/artworks';
import { NavItem } from './data/navigation';
import './styles/global.css';
import './styles/hero-gallery.css';
import './styles/landing-sections.css';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Synchronize data-theme on root HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleArtworkClick = (artwork: Artwork) => {
    setActiveModal({ type: 'artwork', artwork });
  };

  const handleNavSelect = (navItem: NavItem) => {
    // Nav items now smoothly scroll to sections.
    // If it's a specific modal trigger without target element, open modal.
    if (!navItem.href || !document.getElementById(navItem.href.replace('#', ''))) {
      setActiveModal({ type: 'nav', navItem });
    }
  };

  const handleProfileClick = () => {
    setActiveModal({ type: 'profile' });
  };

  const handleTagClick = (user: string) => {
    // Scroll to Curators section and highlight @Johnson
    const curatorsEl = document.getElementById('curators');
    if (curatorsEl) {
      curatorsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveModal({ type: 'tag', user });
    }
  };

  const handleInfoClick = () => {
    // Scroll to Strategy section where APY & Liquidity are explored
    const strategyEl = document.getElementById('strategy');
    if (strategyEl) {
      strategyEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveModal({ type: 'info' });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="landing-page-wrapper">
      {/* 1. Hero Artboard Panel (The Visual Masterpiece) */}
      <section id="hero" className="page-shell">
        <div className="artboard-panel">
          <SiteHeader
            theme={theme}
            onToggleTheme={toggleTheme}
            onSelectNav={handleNavSelect}
            onOpenProfile={handleProfileClick}
            onHomeClick={handleHomeClick}
          />

          <HeroGallery
            onArtworkClick={handleArtworkClick}
            onInfoClick={handleInfoClick}
            onTagClick={handleTagClick}
          />
        </div>
      </section>

      {/* 2. Strategy & Protocol Yield Section (Where Art Meets Market, 4.60% APY) */}
      <StrategySection />

      {/* 3. Autumn 2024 Showcase Exhibition (Full 7 Artworks Grid with Category Filters) */}
      <ExhibitionSection onSelectArtwork={handleArtworkClick} />

      {/* 4. Creator & Institutional Solutions (Zero-gas minting, Swiss vaulting) */}
      <SolutionsSection />

      {/* 5. Transparent Pricing & Economics (Collector Pass, Curated Artist, Institutional Gallery) */}
      <PricingSection />

      {/* 6. Editorial Curators Board (@Johnson and Lead Jurors) */}
      <CuratorsSection onSelectCurator={(handle) => setActiveModal({ type: 'tag', user: handle })} />

      {/* 7. Artist & Collector Submission Portal (Apply for next showcase) */}
      <ContactSection />

      {/* 8. Multi-Column Editorial Footer */}
      <SiteFooter />

      {/* Interactive Modal System (Artwork Lightbox, Profile, Details) */}
      <ModalPreview
        modal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
};

export default App;
