import React from 'react';

const TELEGRAM_LINK = "https://t.me/LegendsTradingFree";

const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-32 relative border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-legendsGold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-hero text-6xl md:text-8xl text-white mb-6 uppercase drop-shadow-xl">Niveles de Acceso</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Elige la opción que se adapte a tu objetivo. <br/>
            <span className="text-legendsGold font-bold border-b border-legendsGold/50 pb-1">Tu capital siempre en tu control.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
          {/* Standard Subscription */}
          <div className="legend-card p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-8">
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4 border border-white/10 rounded-sm">Modelo Educativo</span>
              <h3 className="font-heading text-4xl text-white mt-2 uppercase">Suscripción</h3>
              <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                <span className="text-5xl font-hero text-white">$160</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">/Mes</span>
              </div>
              <p className="text-xs text-legendsGold mt-3 font-bold tracking-wide">
                + Opción Upgrade: $250 (Mes 1) con Escáner Avanzado
              </p>
            </div>
            <ul className="space-y-5 text-gray-400 text-sm flex-grow mb-10">
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> 5+ Canales de Señales</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Educación Completa</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Escaneo con IA</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Seguimiento detallado</li>
            </ul>
            <a 
                href={TELEGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full border border-white/30 hover:bg-white hover:text-black text-white text-center py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Elegir Suscripción
            </a>
          </div>

          {/* Free Signals (Recommended) */}
          <div className="relative bg-[#1a1a1a] border border-legendsGold p-1 flex flex-col shadow-[0_0_50px_rgba(245,158,11,0.15)] transform md:-translate-y-8 z-20">
            <div className="bg-legendsGold text-black text-center py-2 font-bold uppercase tracking-widest text-sm">
                Recomendado para Iniciar
            </div>
            <div className="p-8 flex flex-col h-full bg-gradient-to-b from-[#1a1a1a] to-black">
                <div className="mb-8">
                <h3 className="font-heading text-5xl text-white mt-2 uppercase text-glow-gold">Señales Gratis</h3>
                <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                    <span className="text-6xl font-hero text-legendsGold">GRATIS</span>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                    *Requiere depósito desde $500 USD en broker aliado (Tu Capital).
                </p>
                </div>
                <ul className="space-y-5 text-gray-300 text-sm flex-grow mb-10">
                <li className="flex gap-4 items-start"><i className="ph-fill ph-star text-legendsGold text-xl mt-1"></i> <span className="text-white"><strong>2 Señales Súper Efectivas</strong> al día</span></li>
                <li className="flex gap-4 items-start"><i className="ph-bold ph-clock text-legendsGold text-xl mt-1"></i> 
                    <span><strong>Horarios Específicos:</strong><br/>
                    <span className="text-gray-500">AM:</span> 8:20 – 8:40 <br/>
                    <span className="text-gray-500">PM:</span> 7:40 – 8:00
                    </span>
                </li>
                <li className="flex gap-4 items-center"><i className="ph-bold ph-shield-check text-legendsGold text-xl"></i> Control total de tu dinero</li>
                </ul>
                <a 
                    href={TELEGRAM_LINK}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="epic-button w-full text-black text-center py-5 font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform text-lg"
                >
                Quiero mis Señales
                </a>
            </div>
          </div>

          {/* Copy Trading */}
          <div className="legend-card p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-8">
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4 border border-white/10 rounded-sm">100% Pasivo</span>
              <h3 className="font-heading text-4xl text-white mt-2 uppercase">Copy Trading</h3>
              <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                <span className="text-5xl font-hero text-white">AUTO</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *Requiere depósito desde $1,000 USD en broker aliado (Tu Capital).
              </p>
            </div>
            <ul className="space-y-5 text-gray-400 text-sm flex-grow mb-10">
              <li className="flex gap-4 items-center"><i className="ph-bold ph-robot text-legendsGold text-xl"></i> IA Totalmente Automática</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Sin operaciones manuales</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Ideal para inversores</li>
              <li className="flex gap-4 items-center"><i className="ph-bold ph-check text-legendsGold text-xl"></i> Cero membresías mensuales</li>
            </ul>
            <a 
                href={TELEGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full border border-white/30 hover:bg-white hover:text-black text-white text-center py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Activar Automático
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;