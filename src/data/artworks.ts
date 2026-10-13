export interface Artwork {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  accentColor: string;
  year: string;
  creator: string;
  description: string;
  category: string;
  price?: string;
  edition?: string;
}

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'poster-1',
    title: 'ALL GOOD THINGS TO AN END',
    subtitle: 'Editorial Cosmetics & Graphic Design',
    imageSrc: '/assets/artworks/poster-purple-editorial.webp',
    altText: 'Editorial art poster featuring a transparent glass bottle with neon purple glow titled that good stuff and bold typography reading ALL GOOD THINGS TO AN END.',
    accentColor: '#9D38D4',
    year: '2024',
    creator: 'Pallet Ross Studios',
    description: 'An avant-garde exploration of commercial product photography fused with brutalist Swiss editorial grid layout, barcode markings, and vibrant violet chromatic refraction.',
    category: 'Editorial Design',
    edition: '1 of 50',
    price: '0.85 ETH'
  },
  {
    id: 'poster-2',
    title: 'STAFF — NO OR ONCE MORE',
    subtitle: 'Vinyl Collectible & Utilitarian Toy',
    imageSrc: '/assets/artworks/poster-orange-character.webp',
    altText: 'Editorial poster showing a modern stylized vinyl toy sculpture wearing a high-vis orange utility vest, chunky sneakers, and black cap with bold STAFF typography.',
    accentColor: '#F47724',
    year: '2024',
    creator: 'Staff Collective & Johnson',
    description: 'Limited edition sculpture bridging high fashion streetwear, utility workwear aesthetic, and 3D vinyl character design on a warm gallery plinth.',
    category: 'Collectible Art',
    edition: 'Edition of 500',
    price: '1.20 ETH'
  },
  {
    id: 'poster-3',
    title: 'a knit by le FLEUR*',
    subtitle: 'Lifestyle & Rural Fashion Campaign',
    imageSrc: '/assets/artworks/poster-green-outdoor.webp',
    altText: 'Outdoor fashion editorial poster of a cyclist standing with vintage bicycle in lush green meadow viewed from behind, typography reading a knit by le FLEUR*.',
    accentColor: '#2B7A4B',
    year: '2024',
    creator: 'Tyler & le FLEUR*',
    description: 'Pastoral elegance meets contemporary knitwear photography, captured on 35mm film among undulating rolling green hills and summer wildflowers.',
    category: 'Campaign Photography',
    edition: 'Open Series',
    price: '0.65 ETH'
  },
  {
    id: 'poster-4',
    title: 'THE GREEN KNIGHT',
    subtitle: 'A24 Indie Cinematic Film Poster',
    imageSrc: '/assets/artworks/poster-golden-cinematic.webp',
    altText: 'Cinematic indie film poster on vibrant golden amber background featuring the silhouette of a hooded traveler warrior with battle axe and green cloak.',
    accentColor: '#F5A900',
    year: '2024',
    creator: 'David Lowery & J. Johnston',
    description: 'A striking minimalist interpretation of medieval Arthurian lore rendered in rich saturated goldenrod yellow and dark hunter green silhouette.',
    category: 'Film Poster',
    edition: 'Archive Release',
    price: '1.45 ETH'
  },
  {
    id: 'poster-5',
    title: 'GLIMMER 9',
    subtitle: 'Underground Music & Culture',
    imageSrc: '/assets/artworks/poster-orange-music.webp',
    altText: 'Music magazine editorial poster with fiery orange-red rounded border, bold typography reading GLIMMER 9, and photo of two young musicians on a sofa.',
    accentColor: '#F47724',
    year: '2024',
    creator: 'Glimmer Periodical',
    description: 'High-contrast monochrome photography framed in an ultra-saturated vermilion capsule with giant block typography celebrating new wave guitar culture.',
    category: 'Music Periodical',
    edition: 'Issue 09',
    price: '0.40 ETH'
  },
  {
    id: 'poster-6',
    title: 'FLUFFY WORM',
    subtitle: '3D Tactile Organic Sculpture',
    imageSrc: '/assets/artworks/poster-blue-abstract.webp',
    altText: 'Contemporary 3D abstract poster on electric cobalt blue background featuring a tactile white furry coiled organism titled FLUFFY WORM.',
    accentColor: '#1760F5',
    year: '2024',
    creator: 'Studio Fur & Motion',
    description: 'An ethereal celebration of tactile digital material simulation, rendering billions of microscopic white mohair fibers against vivid royal blue canvas.',
    category: '3D Digital Sculpture',
    edition: 'Edition of 100',
    price: '0.95 ETH'
  },
  {
    id: 'poster-7',
    title: 'VISUAL DIALOGUE',
    subtitle: 'Swiss Constructivist Typography',
    imageSrc: '/assets/artworks/poster-neutral-typography.webp',
    altText: 'Minimalist Swiss typography poster with clean white background, architectural crosshair coordinates, and an abstract violet glass prism.',
    accentColor: '#8E51DA',
    year: '2024',
    creator: 'Internationalism Zurich',
    description: 'Theoretical frameworks and visual formulas investigating modern geometric harmony, modular grids, and spectral optics.',
    category: 'Archival Typography',
    edition: 'Research Edition',
    price: '0.50 ETH'
  }
];
