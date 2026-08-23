import { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Account');
  const tabs = ['Account', 'Linked Platforms', 'Downloads', 'Notifications', 'Appearance'];

  const AVATAR_URL = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80"; // Fiery gaming aesthetic

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 pb-20 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-white mb-8">Settings & Profile</h1>
      
      <div className="flex gap-12">
        <div className="w-64 shrink-0">
          <div className="flex flex-col gap-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-3 rounded-lg transition-colors font-medium text-sm ${
                  activeTab === tab ? 'bg-[#2a2a2a] text-white border-l-2 border-brand rounded-l-none' : 'text-[#888] hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] min-h-[500px]">
          {activeTab === 'Account' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex items-center gap-6 pb-8 border-b border-[#2a2a2a]">
                <div className="relative">
                  <img src={AVATAR_URL} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-[#2a2a2a]" />
                  <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-[#1a1a1a] rounded-full"></span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                    game4purpose
                    <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">YOUTUBER</span>
                  </h2>
                  <p className="text-[#888] text-sm mb-3">Content Creator • 1.2M Subscribers</p>
                  <button className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#333] transition-colors border border-[#444]">
                    Change Avatar
                  </button>
                </div>
              </div>
              
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-[#888] mb-1.5">Display Name</label>
                  <input type="text" defaultValue="game4purpose" className="w-full bg-[#0d0f14] border border-[#333] rounded px-3 py-2 text-white focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#888] mb-1.5">Bio</label>
                  <textarea rows={3} defaultValue="Creating gaming content daily! Catch my streams on YouTube and Twitch." className="w-full bg-[#0d0f14] border border-[#333] rounded px-3 py-2 text-white focus:border-brand focus:outline-none resize-none"></textarea>
                </div>
                <div className="pt-4">
                  <button className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brand-dim transition-colors">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Linked Platforms' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-white mb-4">Connections</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Steam', connected: true, id: 'game4purpose_ttv', icon: '🎮', color: 'text-blue-400' },
                  { name: 'Epic Games', connected: true, id: 'G4P_Official', icon: 'E', color: 'text-white' },
                  { name: 'Riot Games', connected: true, id: 'game4purpose#NA1', icon: '👊', color: 'text-red-500' },
                  { name: 'Blizzard', connected: true, id: 'game4purpose#1992', icon: '❄️', color: 'text-blue-500' },
                  { name: 'YouTube', connected: true, id: 'game4purpose', icon: '▶️', color: 'text-red-600' },
                  { name: 'Twitch', connected: false, id: '', icon: '🟪', color: 'text-purple-500' },
                ].map(platform => (
                  <div key={platform.name} className="bg-[#222] border border-[#333] rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-xl ${platform.color}`}>{platform.icon}</div>
                      <div>
                        <div className="font-bold text-white text-sm">{platform.name}</div>
                        {platform.connected ? (
                          <div className="text-xs text-[#888]">{platform.id}</div>
                        ) : (
                          <div className="text-xs text-[#555]">Not connected</div>
                        )}
                      </div>
                    </div>
                    <button className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${platform.connected ? 'bg-[#1a1a1a] text-[#888] hover:text-white border border-[#333]' : 'bg-brand text-white hover:bg-brand-dim'}`}>
                      {platform.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Downloads' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Active Downloads</h2>
                <span className="text-sm font-medium text-brand">34.2 MB/s</span>
              </div>
              
              <div className="bg-[#222] border border-[#333] rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg" alt="Elden Ring" className="w-16 h-24 object-cover rounded shadow-md" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-white text-lg">Elden Ring</h3>
                        <p className="text-[#888] text-sm">Downloading from Steam...</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded bg-[#1a1a1a] hover:bg-[#333] flex items-center justify-center text-white border border-[#444]">⏸</button>
                        <button className="w-8 h-8 rounded bg-[#1a1a1a] hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center text-white border border-[#444]">✕</button>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-[#111] rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-brand rounded-full w-[65%]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium">
                      <span className="text-white">65%</span>
                      <span className="text-[#888]">42.1 GB / 64.8 GB</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#2a2a2a]">
                <h3 className="font-bold text-[#888] mb-4 text-sm uppercase tracking-wider">Download Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">Auto-update games</div>
                      <div className="text-xs text-[#888]">Keep games up to date automatically</div>
                    </div>
                    <div className="w-12 h-6 bg-brand rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">Limit download bandwidth</div>
                      <div className="text-xs text-[#888]">Currently set to No Limit</div>
                    </div>
                    <div className="w-12 h-6 bg-[#333] rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-[#888] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { title: 'Game Updates Available', desc: 'Notify when a game has finished updating', enabled: true },
                  { title: 'Friend Comes Online', desc: 'Show toast when a friend launches the app', enabled: false },
                  { title: 'Friend Achieves Milestone', desc: 'Notify when a friend unlocks a rare achievement', enabled: true },
                  { title: 'Sale on Wishlisted Game', desc: 'Email and push notification for wishlist sales', enabled: true },
                  { title: 'Weekly Free Game', desc: 'Remind me when new free games are available to claim', enabled: true },
                  { title: 'Stream Goes Live', desc: 'Notify subscribers when you start streaming', enabled: true },
                ].map(setting => (
                  <div key={setting.title} className="flex justify-between items-center p-4 bg-[#222] rounded-lg border border-[#333]">
                    <div>
                      <div className="text-white font-medium">{setting.title}</div>
                      <div className="text-xs text-[#888] mt-1">{setting.desc}</div>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${setting.enabled ? 'bg-brand' : 'bg-[#333]'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${setting.enabled ? 'right-1' : 'left-1 bg-[#888]'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Appearance' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Theme Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#888] uppercase tracking-wider mb-3">Color Scheme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-brand bg-[#111] p-4 rounded-xl cursor-pointer">
                      <div className="w-full h-20 bg-[#1a1b2d] rounded mb-3 border border-[#333]"></div>
                      <div className="text-white font-bold text-center text-sm">Dark Mode</div>
                    </div>
                    <div className="border-2 border-transparent bg-[#eee] p-4 rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                      <div className="w-full h-20 bg-white rounded mb-3 border border-[#ccc]"></div>
                      <div className="text-black font-bold text-center text-sm">Light Mode</div>
                    </div>
                    <div className="border-2 border-transparent bg-gradient-to-br from-[#111] to-[#333] p-4 rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                      <div className="w-full h-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded mb-3 border border-[#555]"></div>
                      <div className="text-white font-bold text-center text-sm">System Sync</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[#2a2a2a]">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-white font-medium">Reduce Animations</div>
                      <div className="text-xs text-[#888]">Disable non-essential UI animations for performance</div>
                    </div>
                    <div className="w-12 h-6 bg-[#333] rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-[#888] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
