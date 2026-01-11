import React from 'react';
import { ExternalLink, Twitter } from 'lucide-react';

const Narrative: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-binance-black/80">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-20 uppercase tracking-wider drop-shadow-lg">
          双叙事解析
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          
          {/* Narrative A */}
          <div className="relative group p-6 md:p-10 border-l-8 border-gray-600 bg-binance-dark hover:bg-gray-900 transition-all duration-500 shadow-xl rounded-r-xl">
            {/* Image Placeholder A */}
            <div className="w-full aspect-video bg-gray-800 rounded-lg mb-8 overflow-hidden border border-gray-700 relative">
               {/* Replace src with your actual image path */}
               <img 
                 src="/images/02.jpg" 
                 alt="Narrative A Visual" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>

            <div className="mb-6">
              <span className="inline-block py-1 px-3 bg-gray-700 text-white text-sm font-black tracking-widest uppercase mb-3 rounded-sm">
                Narrative A
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">初觉醒</h3>
              <p className="text-2xl md:text-3xl font-black text-gray-300 italic">“我踏马来了”</p>
            </div>

            <p className="text-gray-200 leading-relaxed mb-8 text-xl font-medium">
              <strong className="text-white text-2xl block mb-2">态度、入场、打破寂静。</strong>
              这是第一声春雷，宣告一个时代的进场。不只是简单的到场，而是一种从无到有的宣示。
            </p>

            <a 
              href="https://x.com/i/status/2006602854971343163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-gray-700 text-white hover:bg-white hover:text-black transition-colors rounded-lg font-black text-lg w-full md:w-auto justify-center"
            >
              <Twitter size={24} />
              <span>查看觉醒时刻</span>
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Narrative B */}
          <div className="relative group p-6 md:p-10 border-l-8 border-binance-yellow bg-binance-dark hover:bg-gray-900 transition-all duration-500 shadow-xl rounded-r-xl mt-0 md:mt-24 md:-ml-8 z-20">
             {/* Image Placeholder B */}
             <div className="w-full aspect-video bg-gray-800 rounded-lg mb-8 overflow-hidden border border-binance-yellow/30 relative">
                {/* Replace src with your actual image path */}
                <img 
                  src="/images/03.jpg" 
                  alt="Narrative B Visual" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
             </div>

            <div className="mb-6">
               <span className="inline-block py-1 px-3 bg-binance-yellow text-black text-sm font-black tracking-widest uppercase mb-3 rounded-sm">
                Narrative B
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-binance-yellow mb-4">狂暴升级</h3>
              <p className="text-2xl md:text-3xl font-black text-white italic">“老子踏马来了”</p>
            </div>

            <p className="text-gray-200 leading-relaxed mb-8 text-xl font-medium">
              <strong className="text-binance-yellow text-2xl block mb-2">霸气、压制、重塑规则。</strong>
              这是叙事的升华，是绝对实力的再次降临。不再是参与者，而是主宰者。
            </p>

             <a 
              href="https://x.com/i/status/2009661769921577371" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-binance-yellow text-black hover:bg-white hover:text-black transition-colors rounded-lg font-black text-lg w-full md:w-auto justify-center"
            >
              <Twitter size={24} />
              <span>见证主宰降临</span>
              <ExternalLink size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Narrative;
