import React from 'react';
import { MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-binance-black text-center pb-32">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 uppercase tracking-wider">
          社区阵地
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          
          <div className="flex-1 w-full p-8 bg-binance-dark border border-gray-800 rounded-sm hover:border-binance-yellow transition-all">
            <MessageCircle size={48} className="text-binance-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">QQ交流 1 群</h3>
            <p className="text-3xl font-mono text-binance-yellow font-bold select-all">1070480626</p>
          </div>

          <div className="flex-1 w-full p-8 bg-binance-dark border border-gray-800 rounded-sm hover:border-binance-yellow transition-all">
            <MessageCircle size={48} className="text-binance-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">QQ交流 2 群</h3>
            <p className="text-3xl font-mono text-binance-yellow font-bold select-all">1080047686</p>
          </div>

        </div>

        <div className="mt-16 text-gray-500 text-sm">
          <p>© 2026 He Yi Double Narrative. Powered by Pure Consensus.</p>
        </div>
      </div>
    </section>
  );
};

export default Community;