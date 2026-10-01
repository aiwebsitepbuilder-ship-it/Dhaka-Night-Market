import React from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  Target,
  Compass,
  Users,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { OFFICIAL_INFO } from '../data/content';
import { PlaceholderNotice } from '../components/PlaceholderNotice';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'About Dhaka Night Market' : 'আমাদের পরিচিতি'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {OFFICIAL_INFO.intro}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Bridging culture, modern lifestyle, bridal craftsmanship, and nighttime festivities in Bangladesh’s capital city.'
            : 'বাংলাদেশের রাজধানীতে সংস্কৃতি, সমকালীন লাইফস্টাইল, ব্রাইডাল নান্দনিকতা ও সান্ধ্যকালীন উদযাপনের মেলবন্ধন।'}
        </p>
      </div>

      {/* 1. What is Dhaka Night Market? */}
      <div className="rounded-2xl bg-[#0D152D] border border-amber-500/25 p-8 sm:p-10 space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Core Identity' : 'মূল পরিচয়'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
          {lang === 'en' ? 'What is Dhaka Night Market?' : 'ঢাকা নাইট মার্কেট কী?'}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Dhaka Night Market is Bangladesh’s first-ever Night Market experience — an experiential celebration designed to transform how Dhaka celebrates evening commerce, creativity, and leisure. By bringing together curated lifestyle brands, bridal designers, gold and diamond jewelry ateliers, culinary artisans, and cultural activities, Dhaka Night Market creates a vibrant urban gathering space in premier convention centers and five-star ballroom destinations across Dhaka.'
            : 'ঢাকা নাইট মার্কেট হলো বাংলাদেশের সর্বপ্রথম নাইট মার্কেট অভিজ্ঞতা — রাজধানী ঢাকার সান্ধ্যকালীন বিনোদন, সৃজনশীল উদ্যোক্তা ও কেনাকাটার সংস্কৃতিকে একটি প্রিমিয়াম রূপ দেওয়ার প্ল্যাটফর্ম। শেরাটন বনানীর মতো পাঁচতারকা ভেন্যুতে জুয়েলারি, ব্রাইডাল ফ্যাশন ও খাদ্যরসিকদের জন্য এটি এক অনন্য আয়োজন।'}
        </p>
      </div>

      {/* 2. Structured Narrative Pillars with Explicit Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Story */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {lang === 'en' ? 'Our Story' : 'আমাদের গল্প'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Conceived to bring an authentic, international-grade night market culture to Bangladesh while providing women-led enterprises and independent designers an elevated stage.'
                : 'বাংলাদেশে আন্তর্জাতিক মানের সান্ধ্যকালীন মার্কেট সংস্কৃতি তৈরি ও দেশীয় উদ্যোক্তাদের এক অনন্য বাণিজ্যিক প্ল্যাটফর্ম উপহার দেওয়ার লক্ষ্যে এই উদ্যোগ।'}
            </p>
          </div>
          <PlaceholderNotice
            label="[Add Official Story Details]"
            subtext={
              lang === 'en'
                ? 'Chronological milestones, official founding genesis, and historical archives will be documented here.'
                : 'প্রতিষ্ঠার ইতিহাস ও গুরুত্বপূর্ণ মাইলফলক সংক্রান্ত তথ্য এখানে সংযুক্ত হবে।'
            }
          />
        </div>

        {/* Our Vision */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {lang === 'en' ? 'Our Vision' : 'আমাদের লক্ষ্য ও ভিশন'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'To establish Bangladesh’s preeminent seasonal night festival brand — synonymous with curated quality, family enjoyment, and economic empowerment for homegrown creators.'
                : 'বাংলাদেশের শীর্ষ সান্ধ্যকালীন উৎসব ব্র্যান্ড হিসেবে প্রতিষ্ঠা লাভ করা এবং দেশীয় উদ্ভাবনী ব্র্যান্ডসমূহের সমৃদ্ধি নিশ্চিত করা।'}
            </p>
          </div>
          <PlaceholderNotice
            label="[Add Official Vision Information]"
            subtext={
              lang === 'en'
                ? 'Official mission statement and strategic expansion roadmap will be released by the governing board.'
                : 'কমিটি কর্তৃক আনুষ্ঠানিক রূপরেখা ও ভবিষ্যৎ পরিকল্পনা এখানে যুক্ত হবে।'
            }
          />
        </div>

        {/* What Makes It Different */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {lang === 'en' ? 'What Makes It Different' : 'ব্যতিক্রমী বৈশিষ্ট্যসমূহ'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Unlike traditional daylight fairs, Dhaka Night Market takes place during comfortable evening hours in five-star ballrooms and premium convention spaces, creating a celebratory night out for families and lifestyle shoppers.'
                : 'প্রথাগত মেলার বদলে সান্ধ্যকালীন মনোরম পরিবেশে পাঁচতারকা ভেন্যুতে পরিবারসহ ঘুরে দেখার মতো মার্জিত আয়োজন।'}
            </p>
          </div>
          <PlaceholderNotice
            label="[Add Official Differentiation Information]"
            subtext={
              lang === 'en'
                ? 'Detailed curation criteria and competitive distinctions will be updated.'
                : 'কিউরেটেড বৈশিষ্ট্যের পূর্ণাঙ্গ বিবরণ প্রকাশের অপেক্ষায় রয়েছে।'
            }
          />
        </div>

        {/* The Organization Behind It */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {lang === 'en' ? 'The Organization Behind It' : 'আয়োজক ও ব্যবস্থাপনা'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Managed and curated by a dedicated event steering committee committed to upholding safety, aesthetic presentation, and seamless guest experiences.'
                : 'নিবেদিতপ্রাণ ইভেন্ট স্টিয়ারিং কমিটি কর্তৃক পরিচালিত, যা নিরাপত্তা, নান্দনিক উপস্থাপনা ও উন্নত অতিথি সেবায় প্রতিশ্রুতিবদ্ধ।'}
            </p>
          </div>
          <PlaceholderNotice
            label="[Add Official Organization Information]"
            subtext={
              lang === 'en'
                ? 'Executive advisory board, organizing committee names, and verified credentials will appear here.'
                : 'অফিসিয়াল পরিচালনা পর্ষদ ও আয়োজক তথ্য এখানে সংযুক্ত হবে।'
            }
          />
        </div>
      </div>

      {/* Official Business Directory Card */}
      <div className="rounded-2xl bg-[#090F20] border border-amber-500/30 p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>{lang === 'en' ? 'Official Business Entity Records' : 'অফিসিয়াল ব্যবসায়িক তথ্য'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-1">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] block">Official Address</span>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <strong className="text-white font-medium">{OFFICIAL_INFO.address}</strong>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] block">Telephone</span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${OFFICIAL_INFO.phone}`} className="text-white hover:text-amber-300 font-mono font-medium">
                {OFFICIAL_INFO.phone}
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] block">Direct Email</span>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${OFFICIAL_INFO.email}`} className="text-white hover:text-amber-300 font-mono font-medium break-all">
                {OFFICIAL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
