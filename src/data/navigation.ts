export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasBadge?: boolean;
  badgeType?: 'strategy' | 'new';
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'get-started', label: 'Get Started', href: '#exhibition', description: 'Begin your journey as an artist or collector on Pallet Ross.' },
  { id: 'create-strategy', label: 'Create strategy', href: '#strategy', hasBadge: true, badgeType: 'strategy', description: 'Design automated curation strategies and portfolio algorithms.' },
  { id: 'pricing', label: 'Pricing', href: '#pricing', description: 'Transparent fee structures: 1.5% curator split, 0% gas for creators.' },
  { id: 'contact', label: 'Contact', href: '#contact', description: 'Reach our editorial curation board and institutional advisory team.' },
  { id: 'solution', label: 'Solution', href: '#solution', description: 'Enterprise infrastructure for digital galleries, museums, and private archives.' },
  { id: 'e-commerce', label: 'E-Commerce', href: '#exhibition', description: 'Direct checkout integration with global physical fine art fulfillment.' }
];

export const BRAND_CONFIG = {
  name: 'Pallet Ross',
  headline: 'Where Art Meets Market',
  apy: '4.60%',
  description: 'Allowing artists to showcase their work and buyers to find unique, inspiring pieces.',
  tagUser: '@Johnson',
  curatorNote: 'Curated by senior editorial jury — Autumn Showcase 2024',
  tvl: '$18,420,000 USD',
  verifiedArtists: '1,240 Creators',
  circulatingEditions: '8,920 Editions',
  activeCurators: '42 Editorial Jurors'
};

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'collector',
    name: 'Collector Pass',
    tagline: 'For discerning creative patrons and private collections',
    price: '$0',
    period: 'forever',
    features: [
      'Access to all public seasonal exhibitions',
      'Instant secondary market liquidity',
      '0.5% protocol transaction fee',
      'Physical provenance certificate verification',
      'Standard digital vaulting'
    ],
    ctaLabel: 'Start Collecting'
  },
  {
    id: 'curated-creator',
    name: 'Curated Artist',
    tagline: 'For visual artists, sculptors, and creative directors',
    price: '1.5%',
    period: 'per primary sale',
    featured: true,
    features: [
      '100% zero gas fees on edition minting',
      'Automated secondary royalty smart contracts (up to 15%)',
      'Seasonal jury showcase consideration',
      'Museum-grade physical print fulfillment pipeline',
      'Real-time APY yield compounding on vaulted treasury'
    ],
    ctaLabel: 'Apply for Curation'
  },
  {
    id: 'institution',
    name: 'Institutional Gallery',
    tagline: 'For museums, auction houses, and premier art foundations',
    price: '$490',
    period: 'per month',
    features: [
      'Dedicated branded gallery domain & white-label portal',
      'Physical vaulting in Zurich, Geneva & Singapore',
      'High-throughput custom smart contract deployments',
      'Direct API access for automated institutional bids',
      'Dedicated 24/7 senior art advisory partner'
    ],
    ctaLabel: 'Contact Advisory'
  }
];

export interface CuratorProfile {
  id: string;
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatar: string;
  focus: string[];
}

export const CURATOR_PROFILES: CuratorProfile[] = [
  {
    id: 'johnson',
    name: 'Alexander Johnson',
    handle: '@Johnson',
    role: 'Lead Visual Curator & Art Director',
    bio: 'Former senior creative director at Frieze and A24 editorial. Champions cross-disciplinary intersections between indie cinema, 3D tactile generative textures, and Swiss constructivist posters.',
    avatar: 'AJ',
    focus: ['Cinematic Posters', '3D Tactile Sculptures', 'Editorial Prints']
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    handle: '@ElenaR',
    role: 'Head of Contemporary Acquisitions',
    bio: 'Zurich-based architectural visualizer and design critic. Overseeing modern typography revivals, brutalist editorial grids, and fine cosmetics creative packaging.',
    avatar: 'ER',
    focus: ['Swiss Typography', 'Packaging Design', 'Grid Systems']
  },
  {
    id: 'marcus',
    name: 'Marcus Chen',
    handle: '@MarcusC',
    role: 'DeFi & Creative Yield Architect',
    bio: 'Cryptographic liquidity researcher bridging art patronage with self-sustaining decentralized bond curves, achieving a steady 4.60% protocol yield.',
    avatar: 'MC',
    focus: ['Yield Architecture', 'Bond Curves', 'Fractional Liquidity']
  }
];
