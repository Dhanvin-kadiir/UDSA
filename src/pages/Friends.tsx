const FRIENDS = [
  { id: 1, name: 'xX_Slayer_Xx', status: 'Online', game: 'Valorant', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'PixelNinja', status: 'In Game', game: 'Elden Ring', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'CosmicRay', status: 'Away', game: '', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'LootGoblin', status: 'Online', game: 'League of Legends', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'GamerGirl99', status: 'Offline', game: 'Last seen 2 days ago', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'NoobMaster69', status: 'In Game', game: 'Fortnite', avatar: 'https://i.pravatar.cc/150?u=6' },
  { id: 7, name: 'DrDisrespect', status: 'Streaming', game: 'Call of Duty: Warzone', avatar: 'https://i.pravatar.cc/150?u=7' },
  { id: 8, name: 'Tarik', status: 'Online', game: 'Valorant', avatar: 'https://i.pravatar.cc/150?u=8' },
  { id: 9, name: 'ShrimpBoii', status: 'In Game', game: 'Palworld', avatar: 'https://i.pravatar.cc/150?u=9' },
  { id: 10, name: 'MageMaster', status: 'Offline', game: 'Last seen 1 hour ago', avatar: 'https://i.pravatar.cc/150?u=10' },
  { id: 11, name: 'Sneaky', status: 'In Game', game: 'Baldur\'s Gate 3', avatar: 'https://i.pravatar.cc/150?u=11' },
  { id: 12, name: 'xQc', status: 'Streaming', game: 'Just Chatting', avatar: 'https://i.pravatar.cc/150?u=12' },
];

export default function Friends() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Friends</h1>
        <button className="bg-brand text-white px-4 py-2 rounded font-bold hover:bg-brand-dim transition-colors text-sm">
          Add Friend
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {FRIENDS.sort((a, b) => {
          if (a.status === 'Offline') return 1;
          if (b.status === 'Offline') return -1;
          return 0;
        }).map(friend => (
          <div key={friend.id} className="bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a] flex items-center gap-4 hover:border-[#444] transition-colors cursor-pointer group">
            <div className="relative">
              <img src={friend.avatar} alt={friend.name} className={`w-12 h-12 rounded-full border-2 ${friend.status === 'Offline' ? 'border-[#333] grayscale' : 'border-[#1a1a1a]'}`} />
              {friend.status !== 'Offline' && (
                <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#1a1a1a] ${
                  friend.status === 'In Game' ? 'bg-green-500' : 
                  friend.status === 'Streaming' ? 'bg-purple-500' : 
                  friend.status === 'Away' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></span>
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <h3 className="font-bold text-white text-[15px] truncate group-hover:text-brand transition-colors">{friend.name}</h3>
              <p className={`text-xs truncate ${
                friend.status === 'In Game' ? 'text-green-500 font-medium' : 
                friend.status === 'Streaming' ? 'text-purple-500 font-medium' : 'text-[#888]'
              }`}>
                {friend.game || friend.status}
              </p>
            </div>
            <button className="text-[#555] hover:text-white transition-colors">💬</button>
          </div>
        ))}
      </div>
    </div>
  );
}
