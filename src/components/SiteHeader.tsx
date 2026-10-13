import React from 'react';
import { BrandLogo } from './BrandLogo';
import { NavigationMenu } from './NavigationMenu';
import { NavItem, BRAND_CONFIG } from '../data/navigation';

interface SiteHeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectNav: (item: NavItem) => void;
  onOpenProfile: () => void;
  onHomeClick: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  theme,
  onToggleTheme,
  onSelectNav,
  onOpenProfile,
  onHomeClick,
}) => {
  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <BrandLogo name={BRAND_CONFIG.name} onClick={onHomeClick} />
        <NavigationMenu
          theme={theme}
          onToggleTheme={onToggleTheme}
          onSelectNav={onSelectNav}
          onOpenProfile={onOpenProfile}
        />
      </div>
    </header>
  );
};
