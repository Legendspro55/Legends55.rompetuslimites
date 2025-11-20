import React from 'react';

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosistema" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <span className="text-legendsGold font-bold tracking-[0.5em] uppercase text-sm md:text-base animate-pulse">Nuestras Herramientas</span>
        <h2 className="font-hero text-6xl md:text-8xl text-white mt-4 uppercase tracking-tight">El Ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-700">Legends</span></h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="legend-card p-10 group">
          <div className="relative z-10">
              <i className="ph-fill ph-student text-7xl text-white/30 mb-8 group-hover:text-legendsGold group-hover:scale-110 transition-all duration-300 block"></i>
              <h3 className="font-heading text-4xl text-white mb-4 uppercase">Aprende</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Trading (Forex y Cripto), negocios digitales y tecnología. Educación práctica diseñada para la acción.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="legend-card p-10 group border-legendsGold/30">
          <div className="absolute top-0 right-0 bg-legendsGold text-black text-xs font-bold px-4 py-1 uppercase tracking-widest z-20">
            IA Powered
          </div>
          <div className="relative z-10">
              <i className="ph-fill ph-chart-bar text-7xl text-white/30 mb-8 group-hover:text-legendsGold group-hover:scale-110 transition-all duration-300 block"></i>
              <h3 className="font-heading text-4xl text-white mb-4 uppercase">Opera</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Apalancate de herramientas institucionales. Señales y automatización con <span className="text-white font-bold">Sistemas de Inteligencia Artificial</span>.</p>
          </div>
           <div className="absolute inset-0 bg-legendsGold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Card 3 */}
        <div className="legend-card p-10 group">
          <div className="relative z-10">
              <i className="ph-fill ph-trophy text-7xl text-white/30 mb-8 group-hover:text-legendsGold group-hover:scale-110 transition-all duration-300 block"></i>
              <h3 className="font-heading text-4xl text-white mb-4 uppercase">Crece</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Comparte victorias, conecta con socios de alto nivel y eleva tu estándar de vida en comunidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;