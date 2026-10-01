import React from 'react';
import { Sparkles } from 'lucide-react';

interface PlaceholderNoticeProps {
  label: string;
  subtext?: string;
  className?: string;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label,
  subtext = 'Official information is being curated for the upcoming release. Directory updates will be published here.',
  className = '',
}) => {
  // Strip raw brackets if present for a clean editorial look
  const cleanLabel = label.replace(/^\[|\]$/g, '').trim();

  return (
    <div
      className={`rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#0D152D]/80 via-[#090E1F]/80 to-[#050814]/90 p-8 sm:p-10 text-center flex flex-col items-center justify-center gap-3 shadow-xl ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-1 shadow-inner">
        <Sparkles className="w-5 h-5 text-amber-300" />
      </div>
      <p className="text-base sm:text-lg font-semibold text-white font-display tracking-wide">
        {cleanLabel}
      </p>
      {subtext && (
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
          {subtext}
        </p>
      )}
      <div className="mt-2 text-[11px] font-mono uppercase tracking-wider text-amber-400/70">
        Official Curation in Progress
      </div>
    </div>
  );
};

