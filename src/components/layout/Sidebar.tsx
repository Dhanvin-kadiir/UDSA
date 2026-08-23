import { Link, useLocation } from 'react-router-dom';
import { Home, Store, Library, BarChart2, Users, Star, Clock, Trophy, LifeBuoy, Activity } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Store', path: '/store', icon: Store, badge: 4 },
    { name: 'Library', path: '/library', icon: Library },
    { name: 'Stats', path: '/stats', icon: BarChart2 },
    { name: 'Analytics', path: '/analytics', icon: Activity },
    { name: 'Friends', path: '/friends', icon: Users },
    { name: 'Support', path: '/support', icon: LifeBuoy },
  ];

  const collections = [
    { name: 'Favourites', path: '/collections/favourites', icon: Star, color: 'text-yellow-400' },
    { name: 'Recent', path: '/collections/recent', icon: Clock, color: 'text-gray-400' },
    { name: 'Achievements', path: '/collections/achievements', icon: Trophy, color: 'text-yellow-500' },
  ];

  const platforms = [
    { name: 'Steam', path: '/platforms/steam', initial: 'S', bg: 'bg-blue-600' },
    { name: 'Epic Games', path: '/platforms/epic', initial: 'E', bg: 'bg-gray-700' },
    { name: 'Xbox', path: '/platforms/xbox', initial: 'X', bg: 'bg-green-600' },
    { name: 'Riot Games', path: '/platforms/riot', initial: 'R', bg: 'bg-red-600' },
    { name: 'EA App', path: '/platforms/ea', initial: 'EA', bg: 'bg-orange-600' },
  ];

  return (
    <aside className="w-[240px] bg-[#1e1e1e] border-r border-[#2a2a2a] flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-white">Nexus</span>
          <span className="text-brand">Play</span>
        </Link>
      </div>

      <div className="px-4 pb-4">
        <div className="text-xs font-semibold text-text-muted mb-3 tracking-wider uppercase">Menu</div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-white text-brand font-medium' : 'text-text-primary hover:bg-[#2a2a2a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={isActive ? 'text-brand' : 'text-text-muted'} />
                  {item.name}
                </div>
                {item.badge && (
                  <span className="bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-[#2a2a2a]">
        <div className="text-xs font-semibold text-text-muted mb-3 tracking-wider uppercase">Collections</div>
        <nav className="flex flex-col gap-1">
          {collections.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-primary hover:bg-[#2a2a2a] transition-colors"
            >
              <item.icon size={18} className={item.color} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-[#2a2a2a] mb-auto">
        <div className="text-xs font-semibold text-text-muted mb-3 tracking-wider uppercase">Platforms</div>
        <nav className="flex flex-col gap-1">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              to={platform.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-primary hover:bg-[#2a2a2a] transition-colors"
            >
              <div className={`w-5 h-5 rounded ${platform.bg} flex items-center justify-center text-[10px] font-bold text-white`}>
                {platform.initial}
              </div>
              {platform.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
