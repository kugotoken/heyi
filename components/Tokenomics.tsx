import React from 'react';
import { Database, ShieldCheck, Globe, Zap, PieChart } from 'lucide-react';

const Tokenomics: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-binance-black border-t border-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-binance-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider">
            代币经济模型
          </h2>
          <p className="text-xl text-gray-400 font-bold">
            透明、公正、纯粹的 MEME 力量
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Token Parameters */}
          <div className="bg-binance-dark border border-gray-700 rounded-2xl p-8 hover:border-binance-yellow transition-all duration-300 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <Database className="text-binance-yellow" />
              代币参数 (Token Specs)
            </h3>
            
            <div className="space-y-6">
              {/* Parameter Items */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-400 font-bold text-lg mb-1 md:mb-0">代币符号 (Symbol)</span>
                <span className="text-2xl font-black text-binance-yellow tracking-wide">老子踏马来了</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-400 font-bold text-lg mb-1 md:mb-0">发行总量 (Supply)</span>
                <span className="text-xl md:text-2xl font-black text-white font-mono">1,000,000,000 <span className="text-sm text-gray-500">(10亿枚)</span></span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-400 font-bold text-lg mb-1 md:mb-0">交易手续费 (Tax)</span>
                <span className="text-xl md:text-2xl font-black text-green-400 flex items-center gap-2">
                  <ShieldCheck size={20} />
                  0% <span className="text-sm text-gray-500">(买入/卖出)</span>
                </span>
              </div>

               <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-400 font-bold text-lg mb-1 md:mb-0">区块链网络 (Network)</span>
                <span className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                  <Globe size={20} className="text-binance-yellow" />
                  BSC <span className="text-sm text-gray-500">(BEP-20)</span>
                </span>
              </div>

              <div className="pt-2">
                <span className="text-gray-400 font-bold text-lg block mb-2">合约地址 (CA)</span>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-700 font-mono text-sm break-all text-gray-300 font-bold">
                  0x54E270A66133aa8A61e91d672c968C09D9F94444
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Allocation Chart */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square">
               {/* Custom SVG Pie Chart to match the user image style */}
               <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                  {/* Large segment (Blue) - Four.meme: Token Manager approx 40% */}
                  <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#3b82f6" strokeWidth="50"
                          strokeDasharray="40 60"
                          className="hover:opacity-90 transition-opacity" />
                  
                  {/* Other segment (Light Blue) - Other Accounts approx 50% */}
                  <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#7dd3fc" strokeWidth="50"
                          strokeDasharray="50 50"
                          strokeDashoffset="-40" 
                          className="hover:opacity-90 transition-opacity" />

                  {/* Small slivers (Multi-color) - Top Holders approx 10% */}
                   <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#f0b90b" strokeWidth="50"
                          strokeDasharray="2 98"
                          strokeDashoffset="-90" />
                   <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#ef4444" strokeWidth="50"
                          strokeDasharray="2 98"
                          strokeDashoffset="-92" />
                   <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#10b981" strokeWidth="50"
                          strokeDasharray="2 98"
                          strokeDashoffset="-94" />
                   <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#a855f7" strokeWidth="50"
                          strokeDasharray="2 98"
                          strokeDashoffset="-96" />
                   <circle r="25" cx="50" cy="50" fill="transparent"
                          stroke="#f97316" strokeWidth="50"
                          strokeDasharray="2 98"
                          strokeDashoffset="-98" />
                   
                  {/* Inner hole for Donut effect */}
                  <circle r="15" cx="50" cy="50" fill="#0B0E11" />
               </svg>
               
               {/* Center Label */}
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <PieChart size={48} className="text-white mb-2" />
                  <span className="text-binance-yellow font-black text-xl">分布概览</span>
               </div>
            </div>

            {/* Legend */}
            <div className="mt-8 w-full max-w-md space-y-3 bg-binance-dark/50 p-6 rounded-xl border border-gray-800">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                     <span className="text-gray-300 font-bold">Four.meme: Token Manager</span>
                  </div>
                  <span className="text-white font-black">~40%</span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 bg-sky-300 rounded-sm"></div>
                     <span className="text-gray-300 font-bold">其他持币账户 (Other Accounts)</span>
                  </div>
                  <span className="text-white font-black">~50%</span>
               </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="flex w-4 h-4 overflow-hidden rounded-sm">
                        <div className="w-1/3 bg-red-500"></div>
                        <div className="w-1/3 bg-green-500"></div>
                        <div className="w-1/3 bg-yellow-500"></div>
                     </div>
                     <span className="text-gray-300 font-bold">早期持有者 (Top Holders)</span>
                  </div>
                  <span className="text-white font-black">~10%</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;