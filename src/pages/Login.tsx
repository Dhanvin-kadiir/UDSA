import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0f14] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_hero.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 bg-[#1a1b2d]/80 backdrop-blur-xl border border-[#2a2d48] rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-brand rounded-full"></div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Nexus<span className="text-brand">Play</span></h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#a0a5b8] mb-1.5">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0d0f14]/50 border border-[#2a2d48] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
              placeholder="player@nexus.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#a0a5b8] mb-1.5 flex justify-between">
              Password
              <a href="#" className="text-brand text-xs hover:underline">Forgot?</a>
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0d0f14]/50 border border-[#2a2d48] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand hover:bg-brand-dim text-white font-bold py-3 rounded-lg transition-colors mt-4 shadow-[0_0_15px_rgba(124,111,247,0.3)] hover:shadow-[0_0_25px_rgba(124,111,247,0.5)]"
          >
            Sign In to NexusPlay
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#888]">
          Don't have an account? <a href="#" className="text-white font-medium hover:underline">Create one for free</a>
        </div>
      </div>
    </div>
  );
}
