import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg width="65" height="32" viewBox="0 0 100 50" className="overflow-visible">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Outer Glow Path */}
        <path
          d="M50 25 C50 25 35 5 15 5 C5 5 0 12 0 25 C0 38 5 45 15 45 C35 45 50 25 50 25 C50 25 65 45 85 45 C95 45 100 38 100 25 C100 12 95 5 85 5 C65 5 50 25 50 25"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
          opacity="0.5"
        />
        {/* Main Path */}
        <path
          d="M50 25 C50 25 35 5 15 5 C5 5 0 12 0 25 C0 38 5 45 15 45 C35 45 50 25 50 25 C50 25 65 45 85 45 C95 45 100 38 100 25 C100 12 95 5 85 5 C65 5 50 25 50 25"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center leading-none mt-1">
        <h1 className="font-heading font-bold text-2xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-[#FCD34D] to-[#B45309]">
          LEGENDS
        </h1>
        <h2 className="font-sans font-bold text-[0.5rem] tracking-[0.5em] text-[#F59E0B] uppercase ml-0.5">
          CLUB
        </h2>
      </div>
    </div>
  );
};

export default Logo;