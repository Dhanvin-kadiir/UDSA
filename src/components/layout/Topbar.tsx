import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Settings } from 'lucide-react';
import NotificationPanel from './NotificationPanel';

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="h-[72px] bg-[#222222] border-b border-[#2a2a2a] flex items-center justify-between px-8 shrink-0">
        <div className="relative w-full max-w-[480px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-[#888888]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search games, genres, publishers... (Press Enter)"
            className="w-full bg-[#1a1a1a] border border-[#333333] text-sm rounded-lg pl-10 pr-4 py-2 text-white placeholder-[#888888] focus:outline-none focus:border-[#555555] transition-colors"
          />
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsNotifOpen(true)}
            className="w-10 h-10 relative rounded-full bg-[#1a1a1a] hover:bg-[#333333] flex items-center justify-center transition-colors border border-[#333333]"
          >
            <Bell size={18} className="text-yellow-500" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#222] rounded-full"></span>
          </button>
          <button 
            onClick={() => navigate('/settings')}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#333333] flex items-center justify-center transition-colors border border-[#333333]"
          >
            <Settings size={18} className="text-[#cccccc]" />
          </button>
          <div 
            onClick={() => navigate('/settings')}
            className="w-10 h-10 rounded-full flex items-center justify-center ml-2 cursor-pointer hover:ring-2 hover:ring-brand transition-all overflow-hidden border border-[#333]"
          >
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <NotificationPanel isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
    </>
  );
}
