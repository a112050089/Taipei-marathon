
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-slate-900">TM</div>
              <span className="text-2xl font-black tracking-tighter">2025 TAIPEI MARATHON</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              台北馬拉松不僅是一場比賽，更是這座城市的慶典。我們致力於提供跑者最極致的參賽體驗，同時推動環境永續。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6">相關連結</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">最新消息</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">報名須知</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">志工招募</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">常見問題</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">主辦單位</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>臺北市政府</li>
              <li>中華民國田徑協會</li>
              <li>中華民國路跑協會</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Taipei Marathon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
