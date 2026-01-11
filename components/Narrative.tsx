import React from 'react';
import { ExternalLink, Twitter } from 'lucide-react';

const Narrative: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-binance-black/80">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 uppercase tracking-wider">
          双叙事解析
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
          
          {/* Narrative A */}
          <div className="relative group p-6 md:p-12 border-l-4 border-gray-600 bg-binance-dark/50 hover:bg-binance-dark/80 transition-all duration-500 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-transparent md:hidden" />
            
            <div className="mb-6">
              <span className="inline-block py-1 px-3 bg-gray-700 text-white text-xs font-bold tracking-widest uppercase mb-2">
                Narrative A
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">初觉醒</h3>
              <p className="text-2xl md:text-3xl font-bold text-gray-400 italic">“我踏马来了”</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              <strong className="text-white">态度、入场、打破寂静。</strong> <br/>
              这是第一声春雷，宣告一个时代的进场。不只是简单的到场，而是一种从无到有的宣示。
            </p>

            <a 
              href="https://x.com/i/status/2006602854971343163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white hover:bg-white hover:text-black transition-colors rounded-sm font-bold"
            >
              <Twitter size={20} />
              <span>查看觉醒时刻</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Narrative B */}
          <div className="relative group p-6 md:p-12 border-l-4 border-binance-yellow bg-binance-dark/50 hover:bg-binance-yellow/10 transition-all duration-500 backdrop-blur-sm mt-8 md:mt-24 md:-ml-8 shadow-2xl z-20">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-binance-yellow to-transparent md:hidden" />

            <div className="mb-6">
               <span className="inline-block py-1 px-3 bg-binance-yellow text-black text-xs font-bold tracking-widest uppercase mb-2">
                Narrative B
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-binance-yellow mb-4">狂暴升级</h3>
              <p className="text-2xl md:text-3xl font-bold text-white italic">“老子踏马来了”</p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              <strong className="text-binance-yellow">霸气、压制、重塑规则。</strong> <br/>
              这是叙事的升华，是绝对实力的再次降临。不再是参与者，而是主宰者。
            </p>

             <a 
              href="https://x.com/i/status/2009661769921577371" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-binance-yellow text-black hover:bg-white hover:text-black transition-colors rounded-sm font-bold"
            >
              <Twitter size={20} />
              <span>见证主宰降临</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Narrative;