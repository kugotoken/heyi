import React from 'react';
import { Rocket, Gavel, Crown, Globe, ShoppingBag } from 'lucide-react';

const Vision: React.FC = () => {
  const points = [
    {
      title: "“踏马来了”发射台",
      subTitle: "(The Entrance Launchpad)",
      desc: "这不仅是一个代币，而是一个社区入场券。生态将建立一个专为“硬汉项目”服务的去中心化发射台。只有那些敢于公开代码、放弃权限、且审计过关的项目才能上线。持有“老子踏马来了”的用户拥有新项目优先认购权 (Whitelist)。",
      icon: <Rocket size={32} className="text-binance-yellow" />
    },
    {
      title: "“老子不服” DAO",
      subTitle: "(Governance & Veto)",
      desc: "打破常规的投票机制。在社区提议中，不仅有“赞成”和“反对”，还有一个独特的“踏马的滚蛋”一键否决权。持币大户可以作为“荣誉老子”，参与对生态发展方向的决策，重点资助那些具有颠覆性的草根开发者。",
      icon: <Gavel size={32} className="text-binance-yellow" />
    },
    {
      title: "“气场全开” NFT 勋章",
      subTitle: "(The Alpha Entrance NFT)",
      desc: "利用 BSC 链的低手续费，发行一套名为 \"The Alpha Entrance\" 的动态 NFT。NFT 的形象会随着你持币时间的增加而变得越来越霸气。从最初的“初来乍到”逐渐进化为“横扫千军”，象征持币者的信仰深度。",
      icon: <Crown size={32} className="text-binance-yellow" />
    },
    {
      title: "“硬核跨链” 桥接计划",
      subTitle: "(Hardcore Bridge)",
      desc: "虽然生在 BSC，但既然“老子来了”，就要去所有地方。通过跨链技术，将“老子踏马来了”引入 Solana 和 Base 链，在各个生态中建立“老子办事处”，实现多链共荣。",
      icon: <Globe size={32} className="text-binance-yellow" />
    },
    {
      title: "“真性情” 周边与支付",
      subTitle: "(Merch & Social Pay)",
      desc: "社交小费：与社交平台机器人对接，当你想表达极致的赞赏或不屑时，直接发送代币打赏。联名潮牌：推出带有“老子踏马来了”字样的实体卫衣、帽子，只接受代币支付，打造真正的街头文化。",
      icon: <ShoppingBag size={32} className="text-binance-yellow" />
    }
  ];

  return (
    <section className="relative z-10 py-24 px-4 bg-binance-dark border-t border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider">
            项目愿景生态
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            双叙事，双引擎。从“我”到“老子”，是从<span className="text-white font-black px-1">入场</span>到<span className="text-binance-yellow font-black px-1">主宰</span>的跨越。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-binance-black p-8 rounded-xl border border-gray-700 hover:border-binance-yellow transition-all duration-300 group hover:shadow-[0_0_20px_rgba(240,185,11,0.15)] flex flex-col h-full">
              <div className="mb-6 p-4 bg-gray-900 inline-block rounded-full w-fit group-hover:scale-110 transition-transform duration-300 border border-gray-800 group-hover:border-binance-yellow/50">
                {point.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{point.title}</h3>
              <p className="text-binance-yellow text-sm font-bold uppercase tracking-wider mb-4">{point.subTitle}</p>
              <p className="text-gray-300 text-base leading-relaxed font-medium flex-grow text-justify">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;