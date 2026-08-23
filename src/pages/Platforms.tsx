import { useParams } from 'react-router-dom';

const PLATFORM_DATA: Record<string, any> = {
  steam: {
    name: 'Steam',
    color: '#1b2838',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
    games: [
      { title: 'Cyberpunk 2077', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg' },
      { title: 'Elden Ring', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg' },
      { title: "Baldur's Gate 3", cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg' },
    ]
  },
  epic: {
    name: 'Epic Games',
    color: '#2a2a2a',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg',
    games: [
      { title: 'Fortnite', cover: '/pics/fortnite.jpg' },
      { title: 'Dead Island 2', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/934700/library_600x900.jpg' }, // fallback steam cover for DI2
      { title: 'Rocket League', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900.jpg' },
    ]
  },
  xbox: {
    name: 'Xbox',
    color: '#107C10',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg',
    games: [
      { title: 'Halo Infinite', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1240440/library_600x900.jpg' },
      { title: 'Forza Horizon 5', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/library_600x900.jpg' },
    ]
  },
  riot: {
    name: 'Riot Games',
    color: '#D13639',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Riot_Games_logo.svg',
    games: [
      { title: 'Valorant', cover: '/pics/valorant.jpg' },
      { title: 'League of Legends', cover: '/pics/league-of-legends.jpg' },
    ]
  },
  ea: {
    name: 'EA App',
    color: '#FF4747',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg',
    games: [
      { title: 'Apex Legends', cover: 'https://image.api.playstation.com/vulcan/ap/rnd/202012/1518/qTq8gZtC213z8z8m29d84E25.png' },
      { title: 'EA SPORTS FC 24', cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/library_600x900.jpg' },
    ]
  }
};

export default function PlatformLauncher() {
  const { id } = useParams();
  const platform = PLATFORM_DATA[id as string] || PLATFORM_DATA['steam'];

  return (
    <div className="h-full w-full bg-[#121212] overflow-hidden flex flex-col relative animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ background: `linear-gradient(to bottom, ${platform.color}, #121212)` }}
      ></div>

      <div className="p-8 pb-4 relative z-10 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg shadow-black/50">
          <img src={platform.logo} alt={platform.name} className="max-w-full max-h-full object-contain" />
        </div>
        <h1 className="text-3xl font-black text-white tracking-wide uppercase">{platform.name} <span className="font-light">LAUNCHER</span></h1>
      </div>

      <div className="p-8 pt-4 flex-1 overflow-y-auto relative z-10">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 mb-8 flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Status: Online</h3>
            <p className="text-white/50 text-sm">Account: game4purpose</p>
          </div>
          <button 
            style={{ backgroundColor: platform.color }}
            className="text-white px-6 py-2 rounded font-bold hover:brightness-110 transition-all shadow-lg"
          >
            Launch Client
          </button>
        </div>

        <h2 className="text-xl font-bold text-white mb-6">Installed Games</h2>
        <div className="grid grid-cols-4 gap-6">
          {platform.games.map((game: any) => (
            <div key={game.title} className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden aspect-[2/3] mb-3 border border-white/10 hover:border-white/30 transition-colors shadow-xl">
                <img src={game.cover} alt={game.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center transition-opacity shadow-[0_0_20px_rgba(255,255,255,0.5)] transform scale-75 group-hover:scale-100 duration-300">
                    ▶
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-white/90 text-[15px] truncate text-center">{game.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
