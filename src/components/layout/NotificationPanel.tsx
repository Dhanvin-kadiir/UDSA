

export default function NotificationPanel({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-[380px] bg-[#1a1a1a] border-l border-[#2a2a2a] z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-[#2a2a2a] flex items-center justify-between shrink-0">
          <h2 className="text-xl font-bold text-white">Notifications</h2>
          <button onClick={onClose} className="text-[#888] hover:text-white transition-colors">
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          <div className="p-4 bg-[#222] rounded-xl border border-[#333] hover:border-[#555] transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-brand/20 flex items-center justify-center shrink-0">
                🎉
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Sale on your Wishlist!</h4>
                <p className="text-xs text-[#888] mb-2">Cyberpunk 2077 is now 50% off.</p>
                <span className="text-[10px] text-[#555] font-medium">2 hours ago</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#222] rounded-xl border border-[#333] hover:border-[#555] transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center shrink-0">
                ⬇️
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Download Complete</h4>
                <p className="text-xs text-[#888] mb-2">Helldivers 2 has finished installing and is ready to play.</p>
                <span className="text-[10px] text-[#555] font-medium">5 hours ago</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#222] rounded-xl border border-[#333] hover:border-[#555] transition-colors cursor-pointer opacity-70">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center shrink-0">
                👥
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Friend Request</h4>
                <p className="text-xs text-[#888] mb-2">xX_Slayer_Xx wants to be your friend.</p>
                <span className="text-[10px] text-[#555] font-medium">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-[#2a2a2a] shrink-0">
          <button className="w-full py-2 text-sm text-[#888] hover:text-white transition-colors">Mark all as read</button>
        </div>
      </div>
    </>
  );
}
