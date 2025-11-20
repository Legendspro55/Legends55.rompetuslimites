import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="block hover:opacity-90 transition-opacity">
            <Logo />
        </a>
        <div className="flex gap-6 items-center">
          <a 
            href="#planes" 
            className="hidden md:block text-sm font-bold uppercase hover:text-legendsGold transition-colors"
          >
            Planes
          </a>
          <a 
            href="https://t.me/LegendsTradingFree" 
            className="border-2 border-white/30 hover:border-legendsGold hover:text-legendsGold text-white px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_10px_rgba(245,158,11,0.3)]"
          >
            Acceso Miembros
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;