import { useState } from 'react';
import { BarChart3, TrendingUp, Users, Download, ArrowRight, DollarSign, Activity } from 'lucide-react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');

  const revenueData = [
    { label: 'Game Sales', value: 50000, height: 'h-32', color: 'bg-brand' },
    { label: 'Microtransactions', value: 80000, height: 'h-48', color: 'bg-indigo-500' },
    { label: 'Subscriptions', value: 30000, height: 'h-20', color: 'bg-purple-500' },
    { label: 'Ads', value: 20000, height: 'h-14', color: 'bg-pink-500' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
      <div className="max-w-5xl mx-auto space-y-8 pb-20">
        
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-[#a0a5b8] max-w-2xl">
              A real-time overview of Nexus Play's business performance and ecosystem activity.
              Monitor revenue streams, user engagement, and platform growth.
            </p>
          </div>
          
          {/* Toggle */}
          <div className="flex bg-[#2a2a2a] rounded-lg p-1">
            <button
              onClick={() => setTimeRange('weekly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeRange === 'weekly' ? 'bg-brand text-white shadow-md' : 'text-[#a0a5b8] hover:text-white'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeRange('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeRange === 'monthly' ? 'bg-brand text-white shadow-md' : 'text-[#a0a5b8] hover:text-white'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* AI Insight Line */}
        <div className="bg-gradient-to-r from-brand/20 to-indigo-500/20 border border-brand/30 rounded-xl p-4 flex items-center gap-4 shadow-lg shadow-brand/5">
          <div className="bg-brand/20 p-2 rounded-full">
            <TrendingUp className="text-brand w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Revenue increased by 25% compared to last week</h3>
            <p className="text-[#a0a5b8] text-sm">Microtransactions grew by 18% and user engagement rose by 30%.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Graph Section */}
          <div className="col-span-2 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="text-brand" />
                This {timeRange === 'weekly' ? 'Week' : 'Month'}
              </h2>
            </div>
            
            <div className="flex items-end justify-around h-56 mt-4 pt-4 border-b border-[#2a2a2a] pb-4">
              {revenueData.map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer">
                  <div className="relative flex justify-center w-full">
                    {/* Tooltip */}
                    <div className="absolute -top-10 bg-[#2a2a2a] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                      ₹{data.value.toLocaleString()}
                    </div>
                    {/* Bar */}
                    <div className={`w-12 rounded-t-md ${data.color} ${data.height} transition-all duration-500 group-hover:opacity-80`}></div>
                  </div>
                  <span className="text-xs font-medium text-[#a0a5b8] text-center leading-tight">
                    {data.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <DollarSign className="text-green-500 w-5 h-5" />
                </div>
                <h3 className="text-[#a0a5b8] font-medium text-sm">Total Revenue</h3>
              </div>
              <p className="text-3xl font-bold text-white">₹3,20,000</p>
            </div>

            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Activity className="text-blue-500 w-5 h-5" />
                </div>
                <h3 className="text-[#a0a5b8] font-medium text-sm">Operational Budget Left</h3>
              </div>
              <p className="text-3xl font-bold text-white">₹1,80,000</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-4 flex flex-col justify-between">
                <Users className="text-purple-400 w-5 h-5 mb-2" />
                <div>
                  <div className="text-xs text-[#a0a5b8] mb-1">Active Users</div>
                  <div className="text-xl font-bold text-white">12,500</div>
                </div>
              </div>
              
              <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-4 flex flex-col justify-between">
                <Download className="text-pink-400 w-5 h-5 mb-2" />
                <div>
                  <div className="text-xs text-[#a0a5b8] mb-1">New Downloads</div>
                  <div className="text-xl font-bold text-white">2,300</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-white/20 active:scale-95 group">
            NEXT 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
