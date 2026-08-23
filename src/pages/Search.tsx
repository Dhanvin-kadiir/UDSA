import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Reusing some mock data for search results
const ALL_GAMES = [
  { id: 1, title: 'Helldivers 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2539820/library_600x900.jpg', price: '$39.99', genre: 'Action' },
  { id: 2, title: "Baldur's Gate 3", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', price: '$59.99', genre: 'RPG' },
  { id: 3, title: 'Palworld', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/library_600x900.jpg', price: '$29.99', genre: 'Survival' },
  { id: 4, title: 'Cyberpunk 2077', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg', price: '$29.99', genre: 'RPG' },
  { id: 5, title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg', price: '$39.99', genre: 'Action RPG' },
  { id: 6, title: 'Valorant', cover: 'https://cdn2.unrealengine.com/valorant-1920x1080-6927d6d1b28d.jpg', price: 'Free to Play', genre: 'FPS' },
  { id: 7, title: 'Grand Theft Auto V', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg', price: '$14.99', genre: 'Action' },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  
  const [results, setResults] = useState(ALL_GAMES);

  useEffect(() => {
    if (query) {
      setResults(ALL_GAMES.filter(g => g.title.toLowerCase().includes(query.toLowerCase()) || g.genre.toLowerCase().includes(query.toLowerCase())));
    } else {
      setResults(ALL_GAMES);
    }
  }, [query]);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 pb-20 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Search Results</h1>
          <p className="text-[#888]">Showing results for <span className="text-white font-medium">"{query}"</span></p>
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {results.map(game => (
            <div key={game.id} onClick={() => navigate('/store')} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors">
                <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <h3 className="font-bold text-white text-[15px] truncate mb-1 group-hover:text-brand transition-colors">{game.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#888]">{game.genre}</span>
                <span className="text-sm font-bold text-white">{game.price}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-6 opacity-20">🔍</div>
          <h2 className="text-2xl font-bold text-white mb-2">No results found</h2>
          <p className="text-[#888] max-w-md">We couldn't find anything matching "{query}". Try adjusting your search terms or browsing the store.</p>
        </div>
      )}
    </div>
  );
}
