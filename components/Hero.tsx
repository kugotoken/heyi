import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden z-10">
      
      {/* Main Title Area */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-binance-yellow text-xl md:text-2xl tracking-[0.2em] uppercase font-bold mb-4"
        >
          何一顶级双叙事：双重降临
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 my-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight md:text-right"
          >
            我踏马
            <br />
            <span className="text-gray-400">来了</span>
          </motion.h1>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="w-1 h-16 md:w-32 md:h-1 bg-binance-yellow rounded-full md:rotate-90"
          />

          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-binance-yellow leading-tight md:text-left shadow-yellow-glow"
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
          className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mt-8 font-light italic"
        >
          只有最纯粹的狂热，才能造就最顶级的共识。
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-binance-yellow"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;