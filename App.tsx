import React from 'react';
import SplitBackground from './components/SplitBackground';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Vision from './components/Vision';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-binance-black text-white selection:bg-binance-yellow selection:text-black font-sans relative">
      <SplitBackground />
      
      <main className="relative w-full">
        <Hero />
        <Narrative />
        <Vision />
        <Tokenomics />
        <Community />
      </main>
    </div>
  );
}

export default App;