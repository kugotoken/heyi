import React from 'react';
import { Flame, TrendingUp, Users } from 'lucide-react';

const Vision: React.FC = () => {
  const points = [
    {
      title: "极致情绪",
      desc: "捕捉市场最真实、最野性的声音。去伪存真，直击人心的呐喊。",
      icon: <Flame size={32} className="text-binance-yellow" />
    },
    {
      title: "顶级流量",
      desc: "依托何一视频推流，打造年度最强模因（Meme）。这不仅是币，是文化现象。",
      icon: <TrendingUp size={32} className="text-binance-yellow" />
    },
    {
      title: "社区至上",
      desc: "每一位持有者，都是这两句狂傲宣言的践行者。共识即力量。",
      icon: <Users size={32} className="text-binance-yellow" />
    }
  ];

  return (
    <section className="relative z-10 py-24 px-4 bg-binance-dark border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
            项目愿景
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            双叙事，双引擎。从“我”到“老子”，是从<span className="text-white font-bold">入场</span>到<span className="text-binance-yellow font-bold">主宰</span>的跨越。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-binance-black p-8 rounded-sm border border-gray-800 hover:border-binance-yellow transition-colors duration-300 group">
              <div className="mb-6 p-4 bg-binance-dark inline-block rounded-full group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;