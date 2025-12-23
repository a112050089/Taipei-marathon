
import React, { useEffect, useRef } from 'react';
import { Award, History, Map } from 'lucide-react';

const Intro: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = cardsRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4" ref={cardsRef}>
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 reveal opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase">Event Introduction</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          邁向頂尖，奔向國際
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-4">
          台北馬拉松（TAIPEI MARATHON）是台北市每年12月舉辦的國際性城市馬拉松賽事，現為世界田徑總會金標籤認證的賽事，賽道設計融入台北市區多個著名地標。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <img 
            src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=800&auto=format&fit=crop" 
            alt="Marathon Runners" 
            className="rounded-3xl shadow-2xl"
            loading="lazy"
          />
        </div>
        
        <div className="space-y-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">世界田徑總會金標籤認證</h4>
              <p className="text-slate-600">榮獲最高規格的國際認證，賽事軟硬體、醫療防護、賽道規劃皆符合國際專業標準，為全台最具代表性的路跑活動。</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center">
              <History className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">自 1986 年創立至今</h4>
              <p className="text-slate-600">深耕台北近 40 年，見證這座城市的轉變與運動風氣的崛起，吸引國內外眾多跑者參與，強調永續環保與跑者體驗。</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
              <Map className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">城市探索，地標巡禮</h4>
              <p className="text-slate-600">提供全馬與半馬項目，路線穿越城市核心地帶，包含台北 101、市民廣場等知名地標，感受台北獨特的城市氣息。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
