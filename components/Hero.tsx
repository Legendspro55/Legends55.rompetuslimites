import React from 'react';
import BackgroundChart from './BackgroundChart';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive Background Chart */}
      <div className="absolute inset-0 z-0">
        <BackgroundChart />
      </div>
      
      {/* Radial Gradient Overlays for Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="inline-block mb-6 animate-fade-in-down">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-legendsGold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-legendsGold"></span>
                </span>
                <span className="text-legendsGold font-heading font-bold tracking-widest uppercase text-xs md:text-sm">
                    Entrenamiento Mental & Financiero
                </span>
            </div>
        </div>

        <h1 className="font-hero text-7xl md:text-9xl lg:text-[11rem] text-white leading-[0.85] mb-8 uppercase italic tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          Rompe Tus <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 py-2 pr-6 md:pr-8 z-10">
            Límites
            <div className="absolute -inset-4 bg-legendsGold/20 blur-3xl -z-10 rounded-full opacity-30"></div>
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-14 font-light leading-relaxed drop-shadow-lg">
          Legends no es solo un grupo. Es un ecosistema diseñado para quienes tienen hambre de más. <br className="hidden md:block" />
          <strong className="text-white font-medium border-b-2 border-legendsGold">Trading. IA Avanzada. Comunidad Elite.</strong>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full md:w-auto">
          <a 
            href="#planes"
            className="epic-button group relative text-black font-heading font-bold text-2xl px-12 py-5 uppercase tracking-wide skew-x-[-10deg] inline-block hover:text-black overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative skew-x-[10deg] inline-block">Ver Planes</span>
          </a>
          <a 
            href="#ecosistema"
            className="group border-2 border-white/20 bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white text-white font-heading font-bold text-2xl px-12 py-5 uppercase tracking-wide skew-x-[-10deg] inline-block transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <span className="relative skew-x-[10deg] inline-block">Ecosistema</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;