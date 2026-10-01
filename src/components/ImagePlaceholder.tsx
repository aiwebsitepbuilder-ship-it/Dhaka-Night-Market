import React from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel = '[Official Photo Placeholder]',
  aspectRatio = '16:9',
  className = '',
  onClick,
  clickable = false,
}) => {
  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
  };

  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#070B19] flex flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 ${
        clickable ? 'cursor-pointer hover:border-amber-400/50 hover:shadow-amber-950/30' : ''
      } ${className}`}
    >
      {/* Background Decorative Mesh & Silhouettes */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Night Market Lantern Iconography */}
      <div className="relative z-10 w-12 h-12 mb-3 rounded-full bg-slate-900/80 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
        <Camera className="w-5 h-5 text-amber-400/90" />
      </div>

      <div className="relative z-10 max-w-sm px-2">
        <p className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-2">{label}</p>
        <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-amber-400/80 font-mono">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{sublabel}</span>
        </div>
      </div>

      {/* Helper Tag */}
      <div className="absolute bottom-2.5 right-3 text-[10px] text-slate-500 font-mono tracking-tight bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
        Ratio: {aspectRatio}
      </div>
    </div>
  );
};
