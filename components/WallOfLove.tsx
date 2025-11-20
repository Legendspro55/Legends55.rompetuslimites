import React from 'react';

const TESTIMONIALS = [
    {
        name: "Carlos M.",
        role: "Trader Fondeado",
        text: "Llevo 3 años intentando ser rentable. En 3 meses con Legends pasé mi primera prueba de fondeo.",
        image: "https://placehold.co/400x300/0a0a0a/F59E0B?text=Profit+%2B1,200+USD&font=oswald"
    },
    {
        name: "Andrea R.",
        role: "Miembro VIP",
        text: "La tecnología de IA es otro nivel. Literalmente se paga sola la membresía.",
        image: "https://placehold.co/400x300/0a0a0a/22c55e?text=TP+Hit+%2B4.5%25&font=oswald"
    },
    {
        name: "Javier T.",
        role: "Estudiante",
        text: "No solo es dinero, es la mentalidad. El entorno aquí te obliga a crecer.",
        image: null
    },
    {
        name: "Sofia L.",
        role: "Copy Trading",
        text: "100% automático. Configuré mi cuenta y me olvidé. Resultados consistentes mes a mes.",
        image: "https://placehold.co/400x300/0a0a0a/F59E0B?text=Auto+Trade+Win&font=oswald"
    },
    {
        name: "Miguel A.",
        role: "Trader Scalper",
        text: "Las sesiones en vivo de NY son una masterclass diaria. Gracias mentores.",
        image: null
    },
    {
        name: "David G.",
        role: "Emprendedor",
        text: "He estado en muchas comunidades, pero la vibra de Legends es única. Aquí todos suman.",
        image: "https://placehold.co/400x300/141414/EDEDED?text=Evento+Legends&font=oswald"
    },
];

const Card: React.FC<{ item: typeof TESTIMONIALS[0] }> = ({ item }) => (
    <div className="w-[350px] bg-[#111] border border-white/5 p-6 rounded-lg mx-4 shrink-0 hover:border-legendsGold/50 transition-colors group flex flex-col">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-legendsGold to-orange-700 flex items-center justify-center font-bold text-black">
                {item.name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm">{item.name}</h4>
                <span className="text-xs text-legendsGold uppercase tracking-wider">{item.role}</span>
            </div>
            <i className="ph-fill ph-twitter-logo text-gray-600 ml-auto text-xl group-hover:text-[#1DA1F2] transition-colors"></i>
        </div>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {item.text}
        </p>
        {item.image && (
            <div className="mt-auto rounded overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img src={item.image} alt="Testimonio" className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity hover:scale-105 duration-500 relative z-0" />
            </div>
        )}
    </div>
);

const WallOfLove: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        
        <div className="text-center mb-16 relative z-10 px-6">
            <h2 className="font-hero text-5xl md:text-7xl text-white uppercase mb-4">
                Wall of <span className="text-legendsGold">Legends</span>
            </h2>
            <p className="text-gray-400 text-lg">Lo que sucede cuando rompes tus límites.</p>
        </div>

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden mb-8 group">
            <div className="flex animate-marquee pause-on-hover">
                {TESTIMONIALS.map((item, idx) => <Card key={`r1-${idx}`} item={item} />)}
                {TESTIMONIALS.map((item, idx) => <Card key={`r1-dup-${idx}`} item={item} />)}
            </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse pause-on-hover">
                {[...TESTIMONIALS].reverse().map((item, idx) => <Card key={`r2-${idx}`} item={item} />)}
                {[...TESTIMONIALS].reverse().map((item, idx) => <Card key={`r2-dup-${idx}`} item={item} />)}
            </div>
        </div>
        
        {/* Side Fades */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

    </section>
  );
};

export default WallOfLove;