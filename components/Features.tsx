
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Target, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "專業金標籤賽事",
      desc: "榮獲 World Athletics 金標籤認證，賽事規格與菁英選手實力均達國際頂尖水準。",
      accent: "from-yellow-500/20 to-yellow-500/0"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "挑戰城市最速賽道",
      desc: "精心設計的平緩路線穿越台北核心，助你刷新個人 PB，成就馬拉松夢想。",
      accent: "from-blue-500/20 to-blue-500/0"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "永續跑者體驗",
      desc: "首創綠色賽事標準，從環保補給到數位證書，共同為地球健康而跑。",
      accent: "from-green-500/20 to-green-500/0"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="space-y-4">
          <div className="h-1 w-20 bg-yellow-500"></div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">賽事亮點</h2>
        </div>
        <p className="text-slate-400 max-w-md leading-relaxed">
          不僅僅是一場路跑，更是一場關於速度、韌性與永續發展的城市革命。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`feature-card opacity-0 translate-y-20 transition-all duration-1000 ease-out group p-1 bg-gradient-to-b ${f.accent} rounded-[2rem]`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <div className="h-full bg-slate-900 border border-white/5 p-10 rounded-[2rem] hover:bg-slate-800 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-yellow-500 transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-yellow-500 transition-colors">{f.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
