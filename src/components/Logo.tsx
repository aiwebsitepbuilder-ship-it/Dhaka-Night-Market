import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  showText = true,
}) => {
  const badgeDimensions = {
    sm: 'h-8 w-14',
    md: 'h-10 w-18',
    lg: 'h-14 w-24',
    xl: 'h-20 w-36',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Marquee Emblem Badge */}
      <div
        className={`${badgeDimensions[size]} relative shrink-0 rounded-lg bg-gradient-to-b from-[#1b130e] via-[#120c08] to-[#0a0705] border-2 border-amber-500/80 p-0.5 shadow-lg shadow-amber-950/40 flex items-center justify-center overflow-hidden group`}
      >
        {/* Ambient Warm Neon Glow */}
        <div className="absolute inset-0 bg-amber-500/10 blur-sm pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

        <svg
          viewBox="0 0 160 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* Outer Marquee Border with Bulbs */}
          <rect
            x="4"
            y="4"
            width="152"
            height="82"
            rx="14"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="#140d07"
          />
          <rect
            x="8"
            y="8"
            width="144"
            height="74"
            rx="10"
            stroke="#d97706"
            strokeWidth="1"
            strokeDasharray="2 6"
            strokeLinecap="round"
          />

          {/* Glowing Perimeter Bulbs */}
          {[18, 38, 58, 78, 98, 118, 138].map((cx, i) => (
            <circle key={`t-${i}`} cx={cx} cy="6" r="2.2" fill="#fbbf24" />
          ))}
          {[18, 38, 58, 78, 98, 118, 138].map((cx, i) => (
            <circle key={`b-${i}`} cx={cx} cy="84" r="2.2" fill="#fbbf24" />
          ))}
          <circle cx="6" cy="28" r="2.2" fill="#fbbf24" />
          <circle cx="6" cy="48" r="2.2" fill="#fbbf24" />
          <circle cx="6" cy="68" r="2.2" fill="#fbbf24" />
          <circle cx="154" cy="28" r="2.2" fill="#fbbf24" />
          <circle cx="154" cy="48" r="2.2" fill="#fbbf24" />
          <circle cx="154" cy="68" r="2.2" fill="#fbbf24" />

          {/* D H A K A Circular Letter Dots */}
          {[
            { l: 'D', x: 32 },
            { l: 'H', x: 56 },
            { l: 'A', x: 80 },
            { l: 'K', x: 104 },
            { l: 'A', x: 128 },
          ].map((item, idx) => (
            <g key={idx}>
              <circle cx={item.x} cy="23" r="8.5" fill="#ea580c" stroke="#fef3c7" strokeWidth="1" />
              <text
                x={item.x}
                y="26.5"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="9"
                fontWeight="900"
                fontFamily="sans-serif"
              >
                {item.l}
              </text>
            </g>
          ))}

          {/* NIGHT */}
          <text
            x="80"
            y="49"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="18"
            fontWeight="900"
            letterSpacing="2"
            fontFamily="sans-serif"
          >
            NIGHT
          </text>

          {/* MARKET */}
          <text
            x="80"
            y="70"
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="15"
            fontWeight="800"
            letterSpacing="3"
            fontFamily="sans-serif"
          >
            MARKET
          </text>
        </svg>
      </div>

      {/* Brand Typographic Lockup (Desktop) */}
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight">
          <span
            className={`font-bold tracking-wide text-slate-100 uppercase ${textSizes[size]} font-display`}
          >
            Dhaka <span className="text-amber-400">Night Market</span>
          </span>
          {showSubtitle && (
            <span className="text-[10px] tracking-widest uppercase text-amber-300/80 font-medium">
              First-Ever Night Market Experience
            </span>
          )}
        </div>
      )}
    </div>
  );
};
