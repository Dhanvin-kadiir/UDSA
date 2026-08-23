import type { Game, GameStatus } from '../../types/game';

const gameNames = [
  "Baldur's Gate 3", "Cyberpunk 2077", "Elden Ring", "Hades II", "CS2",
  "Hollow Knight", "Stardew Valley", "Fortnite", "Rocket League", "Control",
  "Death Stranding", "Alan Wake 2", "Lies of P", "Armored Core VI",
  "Starfield", "Palworld", "Helldivers 2", "Dave the Diver", "Sea of Stars",
  "Cocoon", "Tunic", "Disco Elysium", "Into the Breach", "Slay the Spire",
  "Return of the Obra Dinn", "Subnautica", "Factorio", "RimWorld",
  "Crusader Kings III", "Victoria 3", "Total War Warhammer 3",
  "Warhammer 40k Darktide", "Vermintide 2", "Deep Rock Galactic",
  "Valheim", "7 Days to Die", "No Man's Sky", "Satisfactory", "Vampire Survivors",
  "Brotato", "Peglin", "Against the Storm", "Dredge"
];

const statuses: GameStatus[] = ['installed', 'not_installed', 'cloud_only'];

export const games: Game[] = gameNames.map((name, i) => {
  const id = `game-${i}`;
  const platform = i < 15 ? 'steam' : i < 25 ? 'epic' : i < 33 ? 'xbox' : i < 38 ? 'gog' : 'nexus';
  const status = statuses[i % 3];
  return {
    id,
    title: name,
    coverUrl: `https://picsum.photos/seed/${id}/300/400`,
    heroUrl: `https://picsum.photos/seed/${id}-hero/1280/720`,
    iconUrl: `https://picsum.photos/seed/${id}-icon/64/64`,
    platform,
    genre: ['Action', 'RPG', 'Adventure'].slice(0, (i % 3) + 1),
    developer: `Developer ${i}`,
    publisher: `Publisher ${i}`,
    releaseDate: '2023-10-15T00:00:00Z',
    description: `Detailed description for ${name}. This is a fantastic game with amazing graphics and story.`,
    shortDescription: `A great game called ${name}.`,
    tags: ['Singleplayer', 'Atmospheric', 'Great Soundtrack'],
    status,
    playtimeMinutes: (i * 1234) % 18000,
    lastPlayedAt: status !== 'not_installed' ? new Date(Date.now() - i * 86400000).toISOString() : null,
    installSizeGB: 0.4 + (i * 2.5),
    achievements: {
      total: 50,
      unlocked: i % 50
    },
    rating: 70 + (i % 30),
    reviewSummary: i % 2 === 0 ? "Overwhelmingly Positive" : "Very Positive",
    reviewCount: 1000 + i * 50,
    price: platform === 'nexus' ? null : 29.99 + (i % 40),
    originalPrice: platform === 'nexus' ? null : 49.99 + (i % 20),
    isOnWishlist: i % 10 === 0,
    isFavourite: i % 5 === 0,
    supportsCloud: i % 4 === 0,
    cloudProvider: i % 4 === 0 ? 'geforcenow' : undefined,
    screenshots: [
      `https://picsum.photos/seed/${id}-s1/1280/720`,
      `https://picsum.photos/seed/${id}-s2/1280/720`,
      `https://picsum.photos/seed/${id}-s3/1280/720`
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        cpu: 'Intel Core i5',
        ram: '8 GB',
        gpu: 'GTX 1060',
        storage: '50 GB'
      },
      recommended: {
        os: 'Windows 10',
        cpu: 'Intel Core i7',
        ram: '16 GB',
        gpu: 'RTX 3060',
        storage: '50 GB'
      }
    }
  };
});
