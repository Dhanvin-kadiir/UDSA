export default function Home() {
  const continuePlaying = [
    { id: 1, title: "Baldur's Gate 3", hours: '142h', genre: 'RPG', platform: 'Steam', bg: 'bg-[#181a25]', icon: '🗡️' },
    { id: 2, title: "Fortnite", hours: '89h', genre: 'Battle Royale', platform: 'Epic', bg: 'bg-[#181a25]', icon: '🚀' },
    { id: 3, title: "Hades II", hours: '56h', genre: 'Roguelike', platform: 'Owned', bg: 'bg-[#222842]', icon: '⚔️' },
    { id: 4, title: "CS2", hours: '310h', genre: 'FPS', platform: 'Steam', bg: 'bg-[#181a25]', icon: '🎯' },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 pb-20">
      
      {/* Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-[#1a1b2d] h-[280px] flex flex-col justify-end group cursor-pointer border border-[#2a2d48]">
        <img 
          src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg" 
          alt="Elden Ring" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/80 to-transparent"></div>
        
        <div className="relative z-10 p-8 max-w-2xl">
          <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded mb-3">
            Currently Downloading
          </span>
          <h1 className="text-4xl font-bold text-white mb-2">Elden Ring</h1>
          <p className="text-[#a0a5b8] text-sm mb-6">Open world • Action RPG • FromSoftware</p>
          <button className="bg-white text-black px-8 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            Manage
          </button>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-3 gap-6">
        <div className="bg-[#1a1b2d] border border-[#2a2d48] rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">147</div>
          <div className="text-[#a0a5b8] text-sm font-medium">Games owned</div>
        </div>
        <div className="bg-[#1a1b2d] border border-[#2a2d48] rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">4,842</div>
          <div className="text-[#a0a5b8] text-sm font-medium">Hours played</div>
        </div>
        <div className="bg-[#1a1b2d] border border-[#2a2d48] rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="text-4xl font-black text-brand mb-1 group-hover:scale-110 transition-transform">63%</div>
          <div className="text-[#a0a5b8] text-sm font-medium">Achievements</div>
        </div>
      </section>

      {/* Continue Playing */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Continue playing</h2>
          <a href="#" className="text-brand hover:underline text-sm font-medium">See all</a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {continuePlaying.map((game) => (
            <div key={game.id} className={`${game.bg} rounded-xl p-4 flex flex-col relative group cursor-pointer border border-[#333] hover:border-[#555] transition-colors`}>
              <div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                {game.platform}
              </div>
              <div className="h-28 flex items-center justify-center text-4xl mb-3 drop-shadow-lg transform group-hover:scale-110 transition-transform">
                {game.icon}
              </div>
              <div className="mt-auto">
                <h3 className="font-bold text-white text-[15px] truncate">{game.title}</h3>
                <div className="flex items-center text-xs text-[#888] mt-1 gap-2">
                  <span>{game.hours} played</span>
                  <span className="text-[#666] uppercase tracking-wider text-[10px]">{game.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deals & Free games */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Deals & Free games
            <span className="w-5 h-5 rounded-full border border-[#555] flex items-center justify-center text-[#888]">↓</span>
          </h2>
          <a href="/store" className="text-brand hover:underline text-sm font-medium">See all</a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors shadow-lg">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg" alt="Cyberpunk 2077" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-2 left-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
                -50%
              </div>
            </div>
            <h3 className="font-bold text-white text-[15px] truncate">Cyberpunk 2077</h3>
            <p className="text-xs text-[#888] mt-1">$29.99 <span className="line-through opacity-50 ml-1">$59.99</span></p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors shadow-lg">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/359550/capsule_616x353.jpg" alt="Rainbow Six Siege" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                FREE TO PLAY
              </div>
            </div>
            <h3 className="font-bold text-white text-[15px] truncate">Tom Clancy's Rainbow Six Siege</h3>
            <p className="text-xs text-[#888] mt-1">Tactical FPS</p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3 border border-[#2a2a2a] hover:border-[#555] transition-colors shadow-lg">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg" alt="Apex Legends" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                FREE TO PLAY
              </div>
            </div>
            <h3 className="font-bold text-white text-[15px] truncate">Apex Legends</h3>
            <p className="text-xs text-[#888] mt-1">Battle Royale</p>
          </div>
        </div>
      </section>

    </div>
  );
}
