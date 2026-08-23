import { useParams } from 'react-router-dom';

const MOCK_COLLECTIONS: Record<string, any> = {
  favourites: {
    title: 'Favourites',
    games: [
      { id: 1, title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg', platform: 'Steam' },
      { id: 2, title: 'Pragmata', cover: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1202/6920f0f5b126589920b784a0c8b0e7045df5e263a233b860.jpg', platform: 'Steam' }, // Placeholder using pragmata steam ID
    ]
  },
  recent: {
    title: 'Recently Played',
    games: [
      { id: 1, title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg', platform: 'Steam', lastPlayed: '2 hours ago' },
      { id: 3, title: 'Dead Island 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/934700/library_600x900.jpg', platform: 'Epic Games', lastPlayed: 'Yesterday' },
    ]
  },
  achievements: {
    title: 'Recent Achievements',
    items: [
      { id: 101, title: 'Great Rune', desc: 'Restore the power of a Great Rune.', game: 'Elden Ring', icon: '🌟', date: 'Today', status: 'Unlocked' },
      { id: 102, title: 'Gore Horse', desc: 'Help a friend in need.', game: 'Dead Island 2', icon: '🧟', date: 'Yesterday', status: 'Unlocked' },
      { id: 103, title: 'Elden Lord', desc: 'Become the Elden Lord.', game: 'Elden Ring', icon: '👑', date: '-', status: 'In Progress (90%)' },
      { id: 104, title: 'First Blood', desc: 'Get your first kill.', game: 'Valorant', icon: '🎯', date: 'Last Week', status: 'Unlocked' },
    ]
  }
};

export default function Collections() {
  const { id } = useParams();
  const collection = MOCK_COLLECTIONS[id as string] || { title: 'Collection Not Found', games: [] };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-white mb-8">{collection.title}</h1>

      {id === 'achievements' ? (
        <div className="flex flex-col gap-4">
          {collection.items?.map((ach: any) => (
            <div key={ach.id} className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 rounded-xl flex items-center gap-6">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-inner ${ach.status.includes('Progress') ? 'bg-[#111] grayscale border border-[#333]' : 'bg-brand/20 border border-brand'}`}>
                {ach.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{ach.title}</h3>
                <p className="text-[#888] text-sm mb-1">{ach.desc}</p>
                <div className="text-xs font-medium text-brand">{ach.game}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${ach.status.includes('Progress') ? 'text-yellow-500' : 'text-green-500'}`}>{ach.status}</div>
                <div className="text-xs text-[#555] mt-1">{ach.date}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6">
          {collection.games?.map((game: any) => (
            <div key={game.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors shadow-xl">
                <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-brand text-white px-4 py-2 rounded font-bold transition-opacity shadow-[0_0_15px_rgba(124,111,247,0.5)] transform scale-90 group-hover:scale-100 duration-300">
                    Play
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-[#111]/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">
                  {game.platform}
                </div>
              </div>
              <h3 className="font-bold text-white text-[15px] truncate">{game.title}</h3>
              {game.lastPlayed && <p className="text-xs text-[#888] mt-1">Last played: {game.lastPlayed}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
