
import React, { useState, useEffect } from 'react';
import { Cloud, Wind, Droplets, MapPin, Navigation, Info } from 'lucide-react';
import { WeatherData } from '../types';

const LiveInfo: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setWeather({
        temperature: 22,
        condition: "微風多雲",
        rainProbability: "5%",
        location: "信義區"
      });
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-4 py-1 bg-blue-500/10 rounded-full text-blue-500 text-xs font-black tracking-widest uppercase mb-4">Live Dashboard</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">賽事大數據</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Weather Dash */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Cloud className="w-32 h-32" />
          </div>
          
          <div className="space-y-8 relative">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                即時氣象
              </h4>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Updated: 2 mins ago</span>
            </div>

            <div className="flex items-end gap-2">
              <span className="text-8xl font-black font-mont leading-none tracking-tighter">{weather?.temperature || '--'}</span>
              <span className="text-4xl font-bold text-blue-400 mb-2">°C</span>
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-bold text-slate-100">{weather?.condition}</p>
              <p className="text-slate-500 text-sm">信義區起點氣象狀況，利於跑者發揮。</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12 relative">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3">
              <Droplets className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500">濕度</p>
                <p className="font-bold">{weather?.rainProbability}</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3">
              <Wind className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500">風速</p>
                <p className="font-bold">2.4 m/s</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Dash */}
        <div className="lg:col-span-2 bg-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden relative min-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3614.896684724683!2d121.56230827606772!3d25.037583677817477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da10a119%3A0x9330109968a35639!2z6Ie65YyX5biC5rCR5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1714545000000!5m2!1szh-TW!2stw" 
            width="100%" height="100%" style={{ border: 0 }} loading="lazy" 
            className="grayscale"
          ></iframe>
          
          <div className="absolute top-6 left-6 right-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[1.5rem] shadow-2xl border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 leading-tight">台北市民廣場</h5>
                  <p className="text-slate-500 text-xs font-medium">110 台北市信義區市府路 1 號</p>
                </div>
              </div>
              <button className="bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                <Navigation className="w-4 h-4" />
                規劃導航路線
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveInfo;
