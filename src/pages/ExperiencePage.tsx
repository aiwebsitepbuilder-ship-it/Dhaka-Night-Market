import React from 'react';
import {
  UtensilsCrossed,
  ShoppingBag,
  Music,
  Sparkles,
  Users,
  Award,
  Info,
  ArrowRight,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { EXPERIENCE_CATEGORIES } from '../data/content';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate, lang }) => {
  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-amber-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-400" />,
    Music: <Music className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    Users: <Users className="w-6 h-6 text-amber-400" />,
    Award: <Award className="w-6 h-6 text-amber-400" />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'The Atmosphere' : 'অভিজ্ঞতার স্বরূপ'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'What Visitors Can Experience' : 'দর্শনার্থীদের জন্য বিশেষ অভিজ্ঞতা'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Dhaka Night Market is structured around six official experience dimensions that bring community, cuisine, fashion, and culture alive under illuminated Dhaka nights.'
            : 'ঢাকা নাইট মার্কেট ছয়টি নির্ধারিত ক্যাটাগরিতে সাজানো, যা রাতের আলোয় ফ্যাশন, সংস্কৃতি, রসনাবিলাস এবং আনন্দময় অভিজ্ঞতা নিশ্চিত করে।'}
        </p>
      </div>

      {/* 6 Experience Sections */}
      <div className="space-y-12">
        {EXPERIENCE_CATEGORIES.map((category, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={category.id}
              className="rounded-2xl bg-[#0C1429] border border-amber-500/20 overflow-hidden shadow-xl p-6 sm:p-8 transition-all hover:border-amber-500/40"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Placeholder Slot */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <ImagePlaceholder
                    label={lang === 'en' ? category.title : category.titleBn}
                    sublabel={`[${category.title} Experience Visual Placeholder]`}
                    aspectRatio="16:9"
                  />
                </div>

                {/* Content description */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                      {iconMap[category.iconName]}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                        Category 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {lang === 'en' ? category.title : category.titleBn}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {lang === 'en' ? category.shortDescription : category.shortDescriptionBn}
                  </p>

                  {/* Required Placeholder Box */}
                  <div className="rounded-xl border border-dashed border-amber-500/30 bg-slate-900/60 p-4 flex items-center gap-3">
                    <Info className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-amber-300 font-mono">
                        {lang === 'en' ? category.statusText : category.statusTextBn}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {lang === 'en'
                          ? 'Specific vendors, menus, and scheduled activities for this category will be updated prior to each event.'
                          : 'নির্দিষ্ট ভেন্ডর তালিকা, মেনু ও কার্যক্রম প্রতিটি ইভেন্টের পূর্বে অফিশিয়ালি প্রকাশ করা হবে।'}
                      </p>
                    </div>
                  </div>

                  {/* Quick CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onNavigate('vendors')}
                      className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      {lang === 'en' ? 'Participate as a Vendor' : 'ভেন্ডর হিসেবে যোগ দিন'}
                    </button>
                    <button
                      onClick={() => onNavigate('events')}
                      className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-medium uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      {lang === 'en' ? 'Check Event Dates' : 'ইভেন্ট ক্যালেন্ডার'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Conversion Area */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-950/40 border border-amber-500/30 p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          {lang === 'en'
            ? 'Want to Offer an Experience at Dhaka Night Market?'
            : 'ঢাকা নাইট মার্কেটে আপনার পণ্য বা অভিজ্ঞতা উপস্থাপন করতে চান?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          {lang === 'en'
            ? 'We invite food artisans, lifestyle creators, musicians, and cultural brands to participate in upcoming seasons.'
            : 'আমরা কারুশিল্পি, খাদ্য উদ্যোক্তা, ডিজাইনার ও সাংস্কৃতিক পারফর্মারদের আসন্ন আসরগুলোতে অংশগ্রহণের আমন্ত্রণ জানাচ্ছি।'}
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('vendors')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer transition-all"
          >
            {lang === 'en' ? 'Submit Vendor Application' : 'ভেন্ডর আবেদন জমা দিন'}
          </button>
        </div>
      </div>
    </div>
  );
};
