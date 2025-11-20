import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 opacity-90 scale-90 origin-left">
                <Logo />
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
                &copy; 2025 Legends Community. <br className="md:hidden"/>Powered by Wowi AI System.
            </div>
        </div>

        {/* Legal Notice */}
        <div className="border-t border-white/5 pt-8">
            <p className="text-justify text-neutral-600 text-[10px] md:text-xs leading-relaxed max-w-5xl mx-auto">
                <span className="font-bold text-neutral-500">Aviso Legal:</span> El trading de Forex y Criptomonedas implica un alto nivel de riesgo y puede no ser adecuado para todos los inversores. El rendimiento pasado no garantiza resultados futuros. Antes de operar, considere cuidadosamente sus objetivos de inversión, nivel de experiencia y tolerancia al riesgo. Solo debe invertir dinero que pueda permitirse perder.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;