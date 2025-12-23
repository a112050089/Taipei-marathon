
import React from 'react';
import { Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop" 
          alt="Athlete" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Main Content */}
        <div className="flex-[1.2] space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-yellow-500 text-xs font-black tracking-[0.2em] uppercase">World Athletics Gold Label</span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white/60 font-mont tracking-tighter">THE 2025 EDITION</h2>
            <h1 className="text-6xl md:text-8xl font-black text-white font-mont tracking-tighter leading-none">
              TAIPEI <br />
              <span className="text-gradient">MARATHON</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
            在城市的脈動中挑戰極限，在 101 的映襯下刷新紀錄。全球矚目的金標籤認證賽事，等待每一位熱愛奔跑的靈魂。
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">活動日期</p>
                <p className="font-bold text-white">2025.12.20 - 21</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">起點地點</p>
                <p className="font-bold text-white">台北市民廣場</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Countdown targetDate="2025-12-20T06:00:00" />
          </div>
        </div>

        {/* Floating Form */}
        <div className="flex-1 w-full max-w-md animate-float">
          <div className="glass p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl transition-all group-hover:bg-yellow-500/20"></div>
            
            <div className="relative space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black font-mont tracking-tight">FAST TRACK</h3>
                <p className="text-sm text-slate-400">填寫基本資訊，我們將優先發送報名提醒</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">姓名 / Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all placeholder:text-slate-600" placeholder="王小明" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">組別 / Category</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none transition-all">
                      <option className="bg-slate-900">全程馬拉松</option>
                      <option className="bg-slate-900">半程馬拉松</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">年齡 / Age</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all placeholder:text-slate-600" placeholder="25" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">電子郵件 / Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all placeholder:text-slate-600" placeholder="runner@example.com" />
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 shadow-xl shadow-yellow-500/10 mt-4">
                  立即索取簡章
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 opacity-50">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
