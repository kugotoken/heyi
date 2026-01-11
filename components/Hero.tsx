import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const address = "0x54e270a66133aa8a61e91d672c968c09d9f94444";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden z-10">
      
      {/* Main Title Area */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-binance-yellow text-2xl md:text-3xl tracking-[0.2em] uppercase font-black mb-8 drop-shadow-md"
        >
          何一顶级双叙事：双重降临
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight md:text-right drop-shadow-2xl"
          >
            我踏马
            <br />
            <span className="text-gray-200">来了</span>
          </motion.h1>

          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: 'spring', duration: 1.5, bounce: 0.5 }}
            className="relative z-10 p-2"
          >
             <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-32 md:h-32 drop-shadow-[0_0_30px_rgba(240,185,11,0.6)]">
                <path d="M16 0L21.3333 5.33333L16 10.6667L10.6667 5.33333L16 0ZM5.33333 10.6667L10.6667 16L5.33333 21.3333L0 16L5.33333 10.6667ZM26.6667 10.6667L32 16L26.6667 21.3333L21.3333 16L26.6667 10.6667ZM16 21.3333L21.3333 26.6667L16 32L10.6667 26.6667L16 21.3333ZM16 13.3333L18.6667 16L16 18.6667L13.3333 16L16 13.3333Z" fill="#F0B90B"/>
             </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-binance-yellow leading-tight md:text-left drop-shadow-[0_0_15px_rgba(240,185,11,0.3)]"
          >
            老子踏马
            <br />
            <span className="text-white">来了</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-100 text-xl md:text-3xl max-w-3xl mx-auto mt-10 font-bold italic tracking-wide"
        >
          只有最纯粹的狂热，才能造就最顶级的共识。
        </motion.p>

        {/* Contract Address Section (Moved to Hero) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 max-w-2xl mx-auto w-full"
        >
            <div className="text-binance-yellow font-black uppercase tracking-widest mb-2 text-sm md:text-base">
                唯一官方认证合约 (CA)
            </div>
            <div 
            onClick={handleCopy}
            className="bg-binance-dark/80 backdrop-blur-md border-2 border-binance-yellow text-white p-4 md:p-5 rounded-xl font-mono text-sm md:text-xl break-all cursor-pointer flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-binance-dark transition-all shadow-[0_0_20px_rgba(240,185,11,0.2)] group"
            >
            <span className="font-bold tracking-tight">{address}</span>
            <div className="flex items-center gap-2 text-binance-yellow shrink-0 bg-binance-black/50 px-3 py-1 rounded-md">
                {copied ? <Check size={20} className="stroke-[3]" /> : <Copy size={20} className="stroke-[3]" />}
                <span className="text-xs md:text-sm font-black uppercase">{copied ? "已复制" : "复制"}</span>
            </div>
            </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-6 animate-bounce text-binance-yellow opacity-80"
      >
        <ArrowDown size={32} strokeWidth={3} />
      </motion.div>
    </section>
  );
};

export default Hero;