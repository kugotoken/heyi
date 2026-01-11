import React from 'react';

const SplitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex overflow-hidden">
      {/* Left Side Background */}
      <div className="w-1/2 h-full relative bg-binance-black overflow-hidden border-r border-binance-dark/50">
        <div className="absolute inset-0 opacity-[0.03] select-none flex flex-wrap content-start transform -rotate-12 scale-110">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={`left-${i}`} className="text-4xl font-black text-white m-8 whitespace-nowrap">
              我踏马来了
            </span>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-binance-black/90 via-transparent to-binance-black/90" />
      </div>

      {/* Right Side Background */}
      <div className="w-1/2 h-full relative bg-binance-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] select-none flex flex-wrap content-start transform -rotate-12 scale-110">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={`right-${i}`} className="text-4xl font-black text-binance-yellow m-8 whitespace-nowrap">
              老子踏马来了
            </span>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-binance-dark/90 via-transparent to-binance-dark/90" />
      </div>
    </div>
  );
};

export default SplitBackground;