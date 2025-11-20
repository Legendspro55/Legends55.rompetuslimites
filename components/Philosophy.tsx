import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-legendsGold/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="font-heading text-6xl md:text-8xl text-white mb-8 uppercase leading-[0.9]">
            Gente que <br/> piensa <br /> <span className="gold-text text-glow-gold">Diferente</span>
          </h2>
          <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-light">
            <p>
              En Legends nos reunimos personas que trabajan, estudian, construyen negocios y aprenden inversiones. Pero todos compartimos un mismo ADN.
            </p>
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-legendsGold to-transparent"></div>
                <p className="text-white font-bold text-2xl pl-6 italic">
                  "Somos disciplinados, ambiciosos y tenemos hambre de convertirnos en nuestra mejor versión."
                </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="legend-card p-8 flex flex-col justify-between h-64 group">
            <div className="w-14 h-14 rounded-full bg-legendsGold/10 flex items-center justify-center mb-4 group-hover:bg-legendsGold/20 transition-colors">
                <i className="ph-fill ph-brain text-4xl text-legendsGold"></i>
            </div>
            <div>
                <span className="block font-hero text-4xl text-white/20 group-hover:text-white/10 transition-colors mb-2">01</span>
                <span className="font-heading text-3xl uppercase text-white group-hover:text-legendsGold transition-colors">Mentalidad <br />de Acero</span>
            </div>
          </div>
          <div className="legend-card p-8 flex flex-col justify-between h-64 group sm:mt-12">
             <div className="w-14 h-14 rounded-full bg-legendsGold/10 flex items-center justify-center mb-4 group-hover:bg-legendsGold/20 transition-colors">
                <i className="ph-fill ph-trend-up text-4xl text-legendsGold"></i>
            </div>
            <div>
                <span className="block font-hero text-4xl text-white/20 group-hover:text-white/10 transition-colors mb-2">02</span>
                <span className="font-heading text-3xl uppercase text-white group-hover:text-legendsGold transition-colors">Resultados <br />Reales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;