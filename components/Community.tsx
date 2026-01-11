import React from 'react';
import { MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-binance-black text-center pb-32">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-wider">
          社区阵地
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          
          <div className="flex-1 w-full p-10 bg-binance-dark border border-gray-700 rounded-xl hover:border-binance-yellow transition-all hover:shadow-xl group">
            <MessageCircle size={56} className="text-binance-yellow mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black text-white mb-3">QQ交流 1 群</h3>
            <p className="text-4xl font-mono text-binance-yellow font-black select-all tracking-wider">1070480626</p>
          </div>

          <div className="flex-1 w-full p-10 bg-binance-dark border border-gray-700 rounded-xl hover:border-binance-yellow transition-all hover:shadow-xl group">
            <MessageCircle size={56} className="text-binance-yellow mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black text-white mb-3">QQ交流 2 群</h3>
            <p className="text-4xl font-mono text-binance-yellow font-black select-all tracking-wider">1080047686</p>
          </div>

        </div>

        <div className="mt-20 text-gray-400 text-base font-medium">
          <p>© 2026 He Yi Double Narrative. Powered by Pure Consensus.</p>
        </div>
      </div>
    </section>
  );
};

export default Community;