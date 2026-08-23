export default function Stats() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-white mb-8">Your Stats</h1>
      
      <div className="grid grid-cols-4 gap-6 mb-12">
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
          <h3 className="text-[#888] font-medium mb-1">Total Games</h3>
          <div className="text-4xl font-bold text-white">147</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
          <h3 className="text-[#888] font-medium mb-1">Hours Played</h3>
          <div className="text-4xl font-bold text-white">4,842</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
          <h3 className="text-[#888] font-medium mb-1">Achievements</h3>
          <div className="text-4xl font-bold text-white">1,204</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]">
          <h3 className="text-[#888] font-medium mb-1">Completion</h3>
          <div className="text-4xl font-bold text-brand">63%</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Most Played</h2>
          <div className="space-y-4">
            {[
              { title: 'Elden Ring', hours: 450, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg' },
              { title: 'Valorant', hours: 1240, cover: '/pics/valorant.jpg' },
              { title: 'Cyberpunk 2077', hours: 180, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg' },
            ].map((game, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a]">
                <div className="text-2xl font-bold text-[#444] w-6">{i + 1}</div>
                <img src={game.cover} alt={game.title} className="w-12 h-16 object-cover rounded shadow-md" />
                <div className="flex-1">
                  <h3 className="font-bold text-white">{game.title}</h3>
                  <div className="w-full bg-[#111] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-brand h-full" style={{ width: `${(game.hours / 1240) * 100}%` }}></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">{game.hours}h</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Genre Breakdown</h2>
          <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] flex items-center justify-center h-[312px]">
            <div className="w-48 h-48 rounded-full border-[16px] border-[#333] border-t-brand border-r-purple-500 border-b-blue-500 relative flex items-center justify-center shadow-[0_0_30px_rgba(124,111,247,0.1)]">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">RPG</div>
                <div className="text-sm text-[#888]">42%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
