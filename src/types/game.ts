export type Platform = 'steam' | 'epic' | 'xbox' | 'gog' | 'nexus';

export type GameStatus =
  | 'installed'
  | 'not_installed'
  | 'downloading'
  | 'updating'
  | 'cloud_only';

export interface Game {
  id: string;
  title: string;
  coverUrl: string;        // 300×400 portrait art URL
  heroUrl: string;         // 1280×720 hero/banner art URL
  iconUrl: string;         // 64×64 icon
  platform: Platform;
  genre: string[];
  developer: string;
  publisher: string;
  releaseDate: string;     // ISO 8601
  description: string;
  shortDescription: string;
  tags: string[];
  status: GameStatus;
  playtimeMinutes: number;
  lastPlayedAt: string | null;
  installSizeGB: number;
  downloadProgress?: number; // 0-100 if downloading
  achievements: {
    total: number;
    unlocked: number;
  };
  rating: number;          // 0-100 Metacritic-style
  reviewSummary: string;   // "Overwhelmingly Positive"
  reviewCount: number;
  price: number | null;    // null = free
  originalPrice: number | null;
  isOnWishlist: boolean;
  isFavourite: boolean;
  supportsCloud: boolean;  // can stream via GeForce NOW or xCloud
  cloudProvider?: 'geforcenow' | 'xcloud' | 'luna';
  screenshots: string[];
  trailerUrl?: string;
  systemRequirements: {
    minimum: RequirementsSpec;
    recommended: RequirementsSpec;
  };
}

export interface RequirementsSpec {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}

export interface Deal {
  game: Game;
  discountPercent: number;
  saleEndDate: string;
  platform: Platform;
  dealPrice: number;
  originalPrice: number;
  isFreeThisWeek: boolean;
}
