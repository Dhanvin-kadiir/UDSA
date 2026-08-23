import { useState } from 'react';

const FEATURED_GAMES = [
  { id: 1, title: 'Helldivers 2', image: 'https://cdn.akamai.steamstatic.com/steam/apps/2539820/header.jpg', price: '$39.99', desc: 'Squad up and breach in to a hostile galaxy.', platform: 'Steam', badge: 'Top Seller' },
];

const TRENDING_GAMES = [
  { id: 3, title: 'Palworld', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/library_600x900.jpg', price: '$29.99', originalPrice: null },
  { id: 4, title: "Baldur's Gate 3", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', price: '$59.99', originalPrice: null },
  { id: 5, title: 'Cyberpunk 2077', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg', price: '$29.99', originalPrice: '$59.99' },
  { id: 6, title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg', price: '$39.99', originalPrice: '$59.99' },
  { id: 7, title: 'Lethal Company', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/library_600x900.jpg', price: '$9.99', originalPrice: null },
];

const WEEKLY_FREE_GAMES = [
  { id: 8, title: 'Ghostrunner', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1139900/library_600x900.jpg', status: 'Free Now', end: 'Ends Apr 18 at 8:30 PM' },
  { id: 9, title: 'The Big Con', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1139280/library_600x900.jpg', status: 'Coming Soon', end: 'Apr 18 - Apr 25' },
];

// DEALS TAB
const DEALS_GAMES = [
  { id: 10, title: 'The Witcher 3: Wild Hunt', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg', price: '$9.99', originalPrice: '$39.99' },
  { id: 11, title: 'Grand Theft Auto V', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg', price: '$14.99', originalPrice: '$29.99' },
  { id: 12, title: 'The Elder Scrolls V: Skyrim', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/library_600x900.jpg', price: '$9.99', originalPrice: '$39.99' },
  { id: 13, title: 'Mass Effect Legendary Edition', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1328670/library_600x900.jpg', price: '$8.99', originalPrice: '$59.99' },
  { id: 14, title: 'Fallout: New Vegas', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/22380/library_600x900.jpg', price: '$2.49', originalPrice: '$9.99' },
  { id: 15, title: 'Borderlands 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/49520/library_600x900.jpg', price: '$4.99', originalPrice: '$19.99' },
  { id: 16, title: 'Red Dead Redemption 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900.jpg', price: '$19.79', originalPrice: '$59.99' },
  { id: 17, title: 'Portal 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg', price: '$0.99', originalPrice: '$9.99' },
  { id: 18, title: 'Tomb Raider', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/203160/library_600x900.jpg', price: '$2.99', originalPrice: '$14.99' },
  { id: 19, title: 'Batman: Arkham Knight', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/208650/library_600x900.jpg', price: '$3.99', originalPrice: '$19.99' },
];

// FREE GAMES TAB
const MULTIPLAYER_FREE = [
  { id: 20, title: 'Valorant', cover: '/pics/valorant.jpg', price: 'Free to Play' },
  { id: 21, title: 'League of Legends', cover: '/pics/league-of-legends.jpg', price: 'Free to Play' },
  { id: 22, title: 'Apex Legends', cover: 'https://image.api.playstation.com/vulcan/ap/rnd/202012/1518/qTq8gZtC213z8z8m29d84E25.png', price: 'Free to Play' },
  { id: 23, title: 'Warframe', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/library_600x900.jpg', price: 'Free to Play' },
  { id: 24, title: 'Overwatch 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2356550/library_600x900.jpg', price: 'Free to Play' },
  { id: 25, title: 'Destiny 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1085660/library_600x900.jpg', price: 'Free to Play' },
];

// NEW RELEASES
const NEW_RELEASES = [
  { id: 26, title: 'Pragmata', cover: '/pics/pragmata.jpg', price: '$59.99', desc: 'A breathtaking new sci-fi action adventure set on the Moon.', badge: 'Just Released' },
  { id: 27, title: "Dragon's Dogma 2", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg', price: '$69.99', desc: 'Set forth on your grand adventure, Arisen.', badge: 'New Release' },
  { id: 28, title: 'Tekken 8', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg', price: '$69.99', desc: 'Get ready for the next battle!', badge: 'New Release' },
];

// TOP SELLERS
const TOP_SELLERS = [
  { id: 29, title: 'Helldivers 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2539820/library_600x900.jpg', price: '$39.99', genre: 'Action' },
  { id: 30, title: "Baldur's Gate 3", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', price: '$59.99', genre: 'RPG' },
  { id: 31, title: 'Palworld', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/library_600x900.jpg', price: '$29.99', genre: 'Survival' },
  { id: 32, title: 'EA SPORTS FC 24', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/library_600x900.jpg', price: '$69.99', genre: 'Sports' },
  { id: 33, title: 'Call of Duty', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1938090/library_600x900.jpg', price: '$69.99', genre: 'Shooter' },
  { id: 34, title: 'Dead by Daylight', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/381210/library_600x900.jpg', price: '$19.99', genre: 'Horror' },
];

export default function Store() {
  const [activeTab, setActiveTab] = useState('Featured');
  const tabs = ['Featured', 'Deals', 'Free Games', 'New Releases', 'Top Sellers', 'Wishlist'];

  const GameCard = ({ game }: { game: any }) => (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors">
        <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
      </div>
      <h3 className="font-bold text-white text-[15px] truncate mb-1">{game.title}</h3>
      <div className="flex items-center gap-2">
        {game.originalPrice && (
          <span className="bg-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{Math.round((1 - parseFloat(game.price.slice(1))/parseFloat(game.originalPrice.slice(1))) * 100)}%
          </span>
        )}
        {game.originalPrice && <span className="text-sm font-medium text-[#aaa] line-through">{game.originalPrice}</span>}
        <span className="text-sm font-bold text-white">{game.price}</span>
      </div>
    </div>
  );

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 pb-20">
      
      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#2a2a2a] pb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium transition-colors relative ${
              activeTab === tab ? 'text-white' : 'text-[#888] hover:text-[#ccc]'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-brand rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'Featured' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          {/* Hero Banner */}
          <section className="relative rounded-2xl overflow-hidden bg-[#1a1b2d] h-[360px] flex flex-col justify-end group cursor-pointer border border-[#2a2a2a]">
            <img 
              src={FEATURED_GAMES[0].image} 
              alt={FEATURED_GAMES[0].title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/60 to-transparent"></div>
            
            <div className="relative z-10 p-10 max-w-2xl">
              <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded mb-4">
                {FEATURED_GAMES[0].badge}
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">{FEATURED_GAMES[0].title}</h1>
              <p className="text-[#a0a5b8] text-base mb-6 max-w-md">{FEATURED_GAMES[0].desc}</p>
              
              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  Buy Now - {FEATURED_GAMES[0].price}
                </button>
                <button className="bg-[#2a2a2a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#333] transition-colors flex items-center gap-2">
                  <span>+</span> Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Banner navigation dots */}
            <div className="absolute bottom-6 right-8 flex gap-2">
              <div className="w-8 h-1.5 bg-white rounded-full"></div>
              <div className="w-3 h-1.5 bg-white/30 rounded-full"></div>
            </div>
          </section>

          {/* Trending Now */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Trending Now</h2>
              <button className="text-[#888] hover:text-white text-sm font-medium transition-colors">View all</button>
            </div>
            
            <div className="grid grid-cols-5 gap-5">
              {TRENDING_GAMES.map(game => <GameCard key={game.id} game={game} />)}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'Deals' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Special Offers</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#1a1a1a] rounded text-sm text-white border border-[#333]">All Deals</button>
              <button className="px-4 py-2 bg-transparent rounded text-sm text-[#888] hover:text-white border border-transparent">Under $10</button>
              <button className="px-4 py-2 bg-transparent rounded text-sm text-[#888] hover:text-white border border-transparent">Under $20</button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5">
            {DEALS_GAMES.map(game => <GameCard key={game.id} game={game} />)}
          </div>
        </div>
      )}

      {activeTab === 'Free Games' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          {/* Epic Style Weekly Free */}
          <section className="bg-[#1a1b2d] rounded-2xl p-8 border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-yellow-400">🎁</span> Weekly Free Games
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {WEEKLY_FREE_GAMES.map((game, i) => (
                <div key={game.id} className="bg-[#0d0f14] rounded-xl overflow-hidden flex group cursor-pointer border border-[#2a2a2a] hover:border-[#444] transition-colors relative">
                  <img src={game.cover} alt={game.title} className={`w-32 h-[160px] object-cover ${i !== 0 ? 'blur-sm' : ''}`} />
                  {i !== 0 && <div className="absolute left-0 top-0 w-32 h-[160px] bg-black/40 flex items-center justify-center">
                    <span className="text-3xl">🔒</span>
                  </div>}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${i === 0 ? 'text-brand' : 'text-[#888]'}`}>
                        {game.status}
                      </div>
                      <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">{game.title}</h3>
                      <p className="text-[#888] text-sm">{game.end}</p>
                    </div>
                    {i === 0 ? (
                      <button className="bg-brand text-white w-full py-2 rounded font-bold text-sm hover:bg-brand-dim transition-colors">
                        Claim Now
                      </button>
                    ) : (
                      <button className="bg-[#2a2a2a] text-[#888] w-full py-2 rounded font-bold text-sm cursor-not-allowed border border-[#333]">
                        Unlocks in 3 Days
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Online Multiplayer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Top Free-to-Play</h2>
            <div className="grid grid-cols-3 gap-6">
              {MULTIPLAYER_FREE.map(game => (
                <div key={game.id} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden aspect-video mb-3 border border-[#2a2a2a] hover:border-[#555]">
                    <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <h3 className="font-bold text-white text-[15px] truncate mb-1">{game.title}</h3>
                  <span className="text-sm font-bold text-[#888]">{game.price}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'New Releases' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <h2 className="text-2xl font-bold text-white mb-6">Just Released</h2>
          <div className="flex flex-col gap-6">
            {NEW_RELEASES.map(game => (
              <div key={game.id} className="flex bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#444] transition-colors group cursor-pointer h-[200px]">
                <div className="w-[350px] relative shrink-0">
                  <img src={game.cover} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <span className="inline-block bg-[#333] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 w-max">
                    {game.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-[#888] mb-4 max-w-lg">{game.desc}</p>
                  <div className="text-xl font-bold text-white">{game.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Top Sellers' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Global Top Sellers</h2>
          </div>
          <div className="flex flex-col gap-2">
            {TOP_SELLERS.map((game, index) => (
              <div key={game.id} className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-transparent hover:border-[#333] hover:bg-[#222] transition-colors cursor-pointer group">
                <div className="w-8 text-center text-xl font-bold text-[#555] group-hover:text-white transition-colors">{index + 1}</div>
                <img src={game.cover} alt={game.title} className="w-12 h-16 object-cover rounded shadow-sm" />
                <div className="flex-1">
                  <h3 className="font-bold text-white text-[15px]">{game.title}</h3>
                  <span className="text-xs text-[#888]">{game.genre}</span>
                </div>
                <div className="font-bold text-white px-4">{game.price}</div>
                <button className="px-4 py-2 bg-[#2a2a2a] group-hover:bg-brand text-white rounded font-medium transition-colors text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'Wishlist' && (
        <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
          <div className="text-6xl mb-4 opacity-20">🤍</div>
          <h2 className="text-2xl font-bold text-white mb-2">{activeTab}</h2>
          <p className="text-[#888] max-w-md">Your wishlist is empty. Explore the store and add games you're interested in!</p>
        </div>
      )}

    </div>
  );
}
