import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Bookmark,
  Newspaper,
  BookOpen,
} from 'lucide-react';
import { Language, StoryItem } from '../types';
import { STORIES } from '../data/content';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface StoriesPageProps {
  lang: Language;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ lang }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Updates', labelBn: 'সকল আপডেট' },
    { id: 'announcement', labelEn: 'Announcements', labelBn: 'ঘোষণা' },
    { id: 'highlights', labelEn: 'Highlights', labelBn: 'হাইলাইটস' },
    { id: 'vendor', labelEn: 'Vendor Stories', labelBn: 'উদ্যোক্তা কথা' },
    { id: 'behind-scenes', labelEn: 'Behind The Scenes', labelBn: 'পেছনের গল্প' },
    { id: 'media', labelEn: 'Media Coverage', labelBn: 'মিডিয়া' },
  ];

  const filteredStories =
    filter === 'all' ? STORIES : STORIES.filter((s) => s.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'Editorial & Bulletins' : 'নিউজ ও বুলেটিন'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'Stories & Updates' : 'স্টোরিজ ও আপডেট'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Official announcements, vendor narratives, behind-the-scenes glimpses, and cultural chronicles from Dhaka Night Market.'
            : 'ঢাকা নাইট মার্কেটের অফিসিয়াল ঘোষণা, উদ্যোক্তাদের গল্প এবং উৎসবের নেপথ্যের ঘটনা প্রবাহ।'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-slate-900 border border-amber-500/20 rounded-xl text-xs sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                filter === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories.map((story) => (
          <article
            key={story.id}
            className="rounded-2xl bg-[#0D152D] border border-amber-500/20 overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
          >
            <div>
              {/* Image slot */}
              <ImagePlaceholder
                label={lang === 'en' ? story.title : story.titleBn}
                sublabel="[Add Official Image]"
                aspectRatio="16:9"
              />

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded bg-slate-800 text-amber-300 font-mono uppercase tracking-wider text-[10px]">
                    {story.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? story.date : story.dateBn}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                  {lang === 'en' ? story.title : story.titleBn}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'en' ? story.summary : story.summaryBn}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
              {story.isOfficialAnnouncement ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Verified Bulletin' : 'যাচাইকৃত বুলেটিন'}</span>
                </span>
              ) : (
                <span className="text-[11px] font-mono text-amber-400/80">
                  [Add Official Story Content]
                </span>
              )}

              <span className="text-xs text-amber-400 font-medium">
                {lang === 'en' ? 'Official Release' : 'অফিসিয়াল প্রকাশনা'}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Contribution Note */}
      <div className="rounded-2xl border border-dashed border-amber-500/30 bg-slate-900/40 p-8 text-center space-y-3">
        <Newspaper className="w-8 h-8 text-amber-400 mx-auto" />
        <h3 className="text-lg font-bold text-white font-display">
          {lang === 'en' ? 'Media & Press Enquiries' : 'মিডিয়া ও প্রেস অনুসন্ধান'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'Accredited journalists and digital creators seeking official press releases, photo access, or executive commentary may contact our media relations desk at dhakanightmarket@gmail.com.'
            : 'অফিসিয়াল প্রেস বিজ্ঞপ্তি ও মিডিয়া কাভারেজের জন্য আমাদের মিডিয়া ডেস্কে যোগাযোগ করুন: dhakanightmarket@gmail.com'}
        </p>
      </div>
    </div>
  );
};
