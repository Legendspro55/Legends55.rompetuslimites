import React from 'react';

const TELEGRAM_LINK = "https://t.me/LegendsTradingFree";

const Contact: React.FC = () => {
  return (
    <section id="unete" className="py-24 relative overflow-hidden flex items-center justify-center bg-legendsCard border-t border-white/10">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-hero text-5xl md:text-8xl text-white mb-8 uppercase italic">
          ¿Cuál es tu <br /> <span className="text-legendsGold">Decisión?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
          Te ayudamos a elegir la opción que mejor se adapte a tu objetivo. <br />
          <span className="text-white font-bold">¿Cómo te gustaría iniciar tu camino en Legends?</span>
        </p>
        
        <a 
          href={TELEGRAM_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          className="epic-button text-black font-heading font-bold text-xl md:text-2xl px-8 md:px-12 py-6 uppercase tracking-widest skew-x-[-10deg] inline-block hover:scale-105 transition-transform"
        >
          <span className="skew-x-[10deg] inline-block flex items-center gap-3">
            Unirme GRATIS al Canal de Telegram <i className="ph-bold ph-telegram-logo"></i>
          </span>
        </a>
        
        <div className="mt-8">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 tracking-widest uppercase hover:text-legendsGold transition-colors">
              Powered by Wowi AI System
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;