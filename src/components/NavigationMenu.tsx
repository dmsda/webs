import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { NavItem, NAV_ITEMS } from '../data/navigation';
import { ThemeToggle } from './ThemeToggle';

interface NavigationMenuProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectNav: (item: NavItem) => void;
  onOpenProfile: () => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  theme,
  onToggleTheme,
  onSelectNav,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (item: NavItem) => {
    if (item.href && item.href.startsWith('#')) {
      const targetId = item.href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onSelectNav(item);
  };

  return (
    <nav className="site-nav" aria-label="Main Navigation">
      {/* Desktop Navigation Links */}
      <ul className="desktop-nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="nav-item-wrapper">
            <button
              className={`nav-link ${item.hasBadge ? 'has-badge' : ''}`}
              onClick={() => handleClick(item)}
            >
              {item.hasBadge && (
                <span className="nav-badge-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="7.5" fill="currentColor" />
                    <path
                      d="M8 4.5v7M4.5 8h7"
                      stroke="var(--bg-panel)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              )}
              <span className="nav-label-text">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Action Utilities (Profile & Theme) */}
      <div className="nav-actions">
        <button
          className="nav-action-btn profile-btn"
          onClick={onOpenProfile}
          aria-label="User Profile & Settings"
          title="Account Overview"
        >
          <User size={18} strokeWidth={1.8} />
        </button>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="mobile-nav-link"
                  onClick={() => {
                    handleClick(item);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.hasBadge && (
                    <span className="nav-badge-icon">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="8" r="7.5" fill="currentColor" />
                        <path
                          d="M8 4.5v7M4.5 8h7"
                          stroke="var(--bg-panel)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
