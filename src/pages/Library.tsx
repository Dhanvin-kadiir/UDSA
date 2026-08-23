const LIBRARY_GAMES = [
  { id: 1, title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg', platform: 'Steam', hours: 450 },
  { id: 2, title: 'Valorant', cover: '/pics/valorant.jpg', platform: 'Riot Games', hours: 1240 },
  { id: 3, title: 'Cyberpunk 2077', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg', platform: 'Steam', hours: 180 },
  { id: 4, title: "Baldur's Gate 3", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', platform: 'Steam', hours: 142 },
  { id: 5, title: 'Palworld', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/library_600x900.jpg', platform: 'Steam', hours: 56 },
  { id: 6, title: 'Dead Island 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/934700/library_600x900.jpg', platform: 'Epic Games', hours: 32 },
  { id: 7, title: 'Fortnite', cover: '/pics/fortnite.jpg', platform: 'Epic Games', hours: 89 },
  { id: 8, title: 'Hades II', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/library_600x900.jpg', platform: 'Steam', hours: 56 },
  { id: 9, title: 'EA SPORTS FC 24', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/library_600x900.jpg', platform: 'EA App', hours: 210 },
  { id: 10, title: 'League of Legends', cover: '/pics/league-of-legends.jpg', platform: 'Riot Games', hours: 800 },
];

export default function Library() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Library</h1>
          <p className="text-[#888]">147 Games owned</p>
        </div>
        <div className="flex gap-4">
          <input type="text" placeholder="Filter games..." className="bg-[#1a1a1a] border border-[#333] text-sm rounded-lg px-4 py-2 text-white placeholder-[#888] focus:border-[#555] outline-none" />
          <button className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#333] transition-colors border border-[#444]">
            Sort by: Recent
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {LIBRARY_GAMES.map(game => (
          <div key={game.id} className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors shadow-xl">
              <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-brand text-white w-14 h-14 rounded-full flex items-center justify-center transition-opacity shadow-[0_0_20px_rgba(124,111,247,0.5)] transform scale-75 group-hover:scale-100 duration-300 text-2xl">
                  ▶
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-[#111]/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">
                {game.platform}
              </div>
            </div>
            <h3 className="font-bold text-white text-[15px] truncate">{game.title}</h3>
            <p className="text-xs text-[#888] mt-1">{game.hours} hours played</p>
          </div>
        ))}
      </div>
    </div>
  );
}
