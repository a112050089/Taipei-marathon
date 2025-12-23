
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'opacity-100 bg-slate-900/90 backdrop-blur-md shadow-2xl' : 'opacity-0'}`}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-slate-900 text-xl transform group-hover:rotate-12 transition-transform">TM</div>
          <div className="flex flex-col">
            <span className="font-mont font-black text-lg tracking-tighter leading-none">TAIPEI</span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-yellow-500 leading-none">MARATHON</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['活動簡介', '特色亮點', '即時資訊'].map((item, idx) => (
            <a 
              key={idx} 
              href={`#${['intro', 'features', 'live'][idx]}`}
              className="text-sm font-bold tracking-widest text-slate-300 hover:text-yellow-500 transition-colors uppercase"
            >
              {item}
            </a>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-yellow-500 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-95">
              立即報名
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950 z-[-1] transition-all duration-500 flex flex-col justify-center items-center px-10 gap-8 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {['活動簡介', '特色亮點', '即時資訊'].map((item, idx) => (
          <a 
            key={idx} 
            href={`#${['intro', 'features', 'live'][idx]}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-bold tracking-tighter"
          >
            {item}
          </a>
        ))}
        <button className="w-full bg-yellow-500 text-slate-900 py-4 rounded-2xl font-black text-xl mt-4">
          立即報名
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
