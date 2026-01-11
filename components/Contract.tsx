import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Contract: React.FC = () => {
  const address = "0x54e270a66133aa8a61e91d672c968c09d9f94444";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 py-20 px-4 bg-binance-yellow text-binance-black clip-diagonal">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter">
          唯一官方认证合约 (CA)
        </h2>
        
        <div className="relative group max-w-2xl mx-auto">
          <div 
            onClick={handleCopy}
            className="bg-binance-black text-white p-4 md:p-6 rounded-lg font-mono text-sm md:text-xl break-all cursor-pointer flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-transparent hover:border-white transition-all shadow-xl"
          >
            <span>{address}</span>
            <div className="flex items-center gap-2 text-binance-yellow shrink-0">
              {copied ? <Check size={24} /> : <Copy size={24} />}
              <span className="text-sm font-bold uppercase">{copied ? "已复制" : "点击复制"}</span>
            </div>
          </div>
          <div className="absolute -inset-1 bg-black opacity-20 blur group-hover:opacity-40 transition-opacity -z-10 rounded-lg"></div>
        </div>

        <p className="mt-6 font-bold text-binance-dark/80 italic">
          （提示：此地址为项目唯一合约，请勿相信任何其他地址）
        </p>
      </div>
    </section>
  );
};

export default Contract;