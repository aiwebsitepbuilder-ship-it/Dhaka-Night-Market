import React, { useEffect } from 'react';
import { X, Camera, Film, Sparkles, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            {item.isVideo ? (
              <Film className="w-5 h-5 text-amber-400" />
            ) : (
              <Camera className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#060A16] via-[#0F172A] to-[#0A0E1A] flex items-center justify-center overflow-hidden">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black/90"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg">
                {item.isVideo ? (
                  <Film className="w-8 h-8" />
                ) : (
                  <Camera className="w-8 h-8" />
                )}
              </div>
              <p className="text-lg font-semibold text-slate-200 max-w-md">
                {item.placeholderLabel}
              </p>
              <p className="text-xs text-amber-400 font-mono mt-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Dhaka Night Market Asset Slot</span>
              </p>
              <div className="mt-4 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 max-w-sm">
                Event: {item.event} • Year: {item.year}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span>Category: <strong className="text-slate-200 uppercase">{item.category}</strong></span>
            <span className="mx-2 text-slate-700">|</span>
            <span>Ratio: {item.aspectRatio}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-amber-400/80 font-mono">
              [Editable Image / Video Slot]
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
