import React, { useState, useMemo } from 'react';
import {
  Camera,
  Film,
  Sparkles,
  Filter,
  Eye,
  Calendar,
  Layers,
} from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/content';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryPageProps {
  lang: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Media', labelBn: 'সকল মিডিয়া' },
    { id: 'bridal', labelEn: 'Bridal & Jewelry', labelBn: 'ব্রাইডাল ও জুয়েলারি' },
    { id: 'event', labelEn: 'Venue & Stalls', labelBn: 'ভেন্যু ও স্টল' },
    { id: 'food', labelEn: 'Food & Drinks', labelBn: 'খাবার ও পানীয়' },
    { id: 'crowd', labelEn: 'Crowd & Ambience', labelBn: 'আবহ ও দর্শনার্থী' },
    { id: 'video', labelEn: 'Official Videos', labelBn: 'ভিডিও' },
  ];

  const years = ['all', '2026', '2024'];

  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCat =
        selectedCategory === 'all'
          ? true
          : selectedCategory === 'video'
          ? item.isVideo
          : item.category === selectedCategory;
      const matchYear = selectedYear === 'all' ? true : item.year === selectedYear;
      return matchCat && matchYear;
    });
  }, [selectedCategory, selectedYear]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'Photo & Video Archive' : 'ফটো ও ভিডিও আর্কাইভ'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'Dhaka Night Market Gallery' : 'ঢাকা নাইট মার্কেট গ্যালারি'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Explore visual highlights, event posters, venue aesthetics, and video teasers from Dhaka Night Market exhibitions.'
            : 'ঢাকা নাইট মার্কেটের বিভিন্ন আসরের বিশেষ মুহূর্ত, পোস্টার, ভেন্যুর আবহ ও ভিডিও ঝলক দেখুন।'}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-amber-500/20">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2 text-xs text-slate-400 w-full md:w-auto justify-end">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{lang === 'en' ? 'Year:' : 'সাল:'}</span>
          <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-2.5 py-1 rounded text-xs cursor-pointer transition-all ${
                  selectedYear === y
                    ? 'bg-amber-500/20 text-amber-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {y === 'all' ? (lang === 'en' ? 'All' : 'সব') : y}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Media Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          {lang === 'en'
            ? 'No media items found matching the selected filters.'
            : 'নির্বাচিত ফিল্টারের সাথে মিলে এমন কোনো ছবি পাওয়া যায়নি।'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 overflow-hidden cursor-pointer shadow-md transition-all hover:shadow-xl hover:shadow-amber-950/20"
            >
              {item.imageUrl ? (
                <div
                  className={`relative w-full ${
                    item.aspectRatio === '16:9'
                      ? 'aspect-video'
                      : item.aspectRatio === '1:1'
                      ? 'aspect-square'
                      : item.aspectRatio === '3:4'
                      ? 'aspect-[3/4]'
                      : 'aspect-[4/3]'
                  } overflow-hidden bg-slate-950`}
                >
                  <img
                    src={item.imageUrl}
                    alt={lang === 'en' ? item.title : item.titleBn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>
              ) : (
                <ImagePlaceholder
                  label={lang === 'en' ? item.title : item.titleBn}
                  sublabel={item.placeholderLabel}
                  aspectRatio={item.aspectRatio}
                />
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  {item.isVideo ? <Film className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </div>
                <p className="text-xs font-semibold text-white mt-2">
                  {lang === 'en' ? 'Click to Enlarge' : 'বড় করে দেখুন'}
                </p>
                <span className="text-[10px] text-amber-300 font-mono mt-0.5">
                  {item.year} • {item.category}
                </span>
              </div>

              {/* Caption Bar below */}
              <div className="p-3 bg-slate-950/80 border-t border-slate-800/80">
                <p className="text-xs font-medium text-slate-200 truncate">
                  {lang === 'en' ? item.title : item.titleBn}
                </p>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Editor replacement note */}
      <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/50 p-6 text-center text-xs text-slate-400">
        <p className="font-mono text-amber-400/90 font-semibold mb-1">
          [Image & Video Replacement Protocol]
        </p>
        <p className="max-w-xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'Official high-resolution photography and video reels can be linked directly inside the content database (`src/data/content.ts`). Each placeholder contains predefined aspect ratios and event metadata.'
            : 'অফিসিয়াল হাই-রেজ্যুলিউশন ফটোগ্রাফি ও ভিডিও রিল সরাসরি কনটেন্ট ডেটাবেজে যুক্ত করা যাবে।'}
        </p>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
