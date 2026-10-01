import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  UtensilsCrossed,
  Music,
  Users,
  Award,
  Gem,
  CheckCircle,
  Facebook,
  Instagram,
  Phone,
  Mail,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { OFFICIAL_INFO, UPCOMING_EVENTS, EXPERIENCE_CATEGORIES, GALLERY_ITEMS } from '../data/content';
import { CountdownTimer } from '../components/CountdownTimer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PlaceholderNotice } from '../components/PlaceholderNotice';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  const currentEvent = UPCOMING_EVENTS[0];

  const experienceIconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-amber-400" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-amber-400" />,
    Music: <Music className="w-5 h-5 text-amber-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Users: <Users className="w-5 h-5 text-amber-400" />,
    Award: <Award className="w-5 h-5 text-amber-400" />,
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-amber-500/20 bg-gradient-to-b from-[#0B132B] via-[#070B19] to-[#050814] px-4 sm:px-6 lg:px-8 py-16">
        {/* Ambient atmospheric lanterns & stars */}
        <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Introduction Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] font-display text-balance">
              <span className="text-white">Dhaka </span>
              <span className="gold-gradient-text">Night Market</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-amber-300/90 font-medium font-display tracking-widest uppercase">
              {lang === 'en' ? OFFICIAL_INFO.introPlain : OFFICIAL_INFO.introPlainBn}
            </p>
          </div>

          {/* Subtext description preserving facts */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {lang === 'en'
              ? 'Welcome to the official online destination for Dhaka Night Market. Curating world-class nocturnal exhibitions, designer lifestyle, jewelry, culinary delights, and vibrant cultural community gatherings in Dhaka.'
              : 'ঢাকা নাইট মার্কেটের অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম। ঢাকায় বিশ্বমানের সান্ধ্যকালীন প্রদর্শনী, ডিজাইনার লাইফস্টাইল, গহনা, রসনা বিলাস ও প্রাণবন্ত সাংস্কৃতিক উৎসবের মিলনমেলা।'}
          </p>

          {/* Action CTAs: Explore Events (Primary), Become a Vendor (Secondary), Become a Partner */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('events')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer transition-all transform active:scale-95"
            >
              <span>{lang === 'en' ? 'Explore Events' : 'ইভেন্টসমূহ দেখুন'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('vendors')}
              className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold uppercase tracking-wider text-xs sm:text-sm cursor-pointer transition-all"
            >
              <span>{lang === 'en' ? 'Become a Vendor' : 'ভেন্ডর হোন'}</span>
            </button>

            <button
              onClick={() => onNavigate('partners')}
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 font-semibold uppercase tracking-wider text-xs sm:text-sm cursor-pointer transition-all"
            >
              <span>{lang === 'en' ? 'Become a Partner' : 'পার্টনার হোন'}</span>
            </button>
          </div>

          {/* Reusable Countdown Timer Component: Days, Hours, and Minutes */}
          <div className="pt-8">
            <CountdownTimer
              targetDate="2026-10-09T12:00:00+06:00"
              eventName="Wedding & Lifestyle Exhibition featuring House of Bengal"
              eventNameBn="ওয়েডিং অ্যান্ড লাইফস্টাইল এক্সিবিশন ফিচারিং হাউস অফ বেঙ্গল"
              venue="Sheraton Banani (Grand Ballroom), Dhaka"
              venueBn="শেরাটন বনানী (গ্র্যান্ড বলরুম), ঢাকা"
              timeRange="12:00 PM – 12:00 AM"
              timeRangeBn="দুপুর ১২:০০ – রাত ১২:০০"
              lang={lang}
              variant="card"
              showSeconds={false}
              onExploreClick={() => onNavigate('events')}
            />
          </div>
        </div>
      </section>

      {/* 2. CURRENT / UPCOMING EVENT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#070B19] border border-amber-500/30 overflow-hidden shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Event Details Info */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-display flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {lang === 'en' ? 'Upcoming Featured Exhibition' : 'আসন্ন বিশেষ প্রদর্শনী'}
                </span>
              </p>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                  {lang === 'en' ? currentEvent.name : currentEvent.nameBn}
                </h2>
                <p className="text-sm sm:text-base text-amber-300/90 font-medium mt-1">
                  Theme: {lang === 'en' ? currentEvent.theme : currentEvent.themeBn}
                </p>
              </div>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Dates</span>
                    <strong className="text-slate-100 font-semibold">
                      {lang === 'en' ? currentEvent.dates : currentEvent.datesBn}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Hours</span>
                    <strong className="text-slate-100 font-semibold">
                      {lang === 'en' ? currentEvent.time : currentEvent.timeBn}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Location</span>
                    <strong className="text-slate-100 font-semibold">
                      {lang === 'en' ? currentEvent.location : currentEvent.locationBn}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Admission</span>
                    <strong className="text-emerald-400 font-semibold">
                      {lang === 'en' ? currentEvent.admission : currentEvent.admissionBn}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Offerings list */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-display">
                  {lang === 'en' ? 'Featured Offerings:' : 'প্রদর্শনীর বিশেষ আকর্ষণ:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {(lang === 'en' ? currentEvent.offerings.en : currentEvent.offerings.bn).map(
                    (offering, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="font-medium text-slate-200">{offering}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Event Note */}
              <p className="text-xs text-slate-400 leading-relaxed italic">
                {lang === 'en' ? currentEvent.notes : currentEvent.notesBn}
              </p>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('events')}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors shadow-md"
                >
                  {lang === 'en' ? 'Full Event Details' : 'ইভেন্টের সম্পূর্ণ তথ্য'}
                </button>
                <button
                  onClick={() => onNavigate('vendors')}
                  className="px-5 py-2.5 rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
                >
                  {lang === 'en' ? 'Apply to Exhibit' : 'স্টলের জন্য আবেদন'}
                </button>
              </div>
            </div>

            {/* Event Poster / Visual Showcase */}
            <div className="lg:col-span-5">
              {currentEvent.imageUrl ? (
                <div
                  onClick={() => onNavigate('events')}
                  className="group relative overflow-hidden rounded-2xl border border-amber-500/40 bg-slate-950/80 shadow-2xl shadow-black/60 cursor-pointer transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                    <img
                      src={currentEvent.imageUrl}
                      alt={lang === 'en' ? currentEvent.name : currentEvent.nameBn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B19]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[11px] font-semibold text-amber-300 tracking-wide uppercase shadow">
                      {lang === 'en' ? 'Official Poster' : 'অফিসিয়াল পোস্টার'}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                      <span className="font-mono text-[11px] text-amber-300/90 font-semibold drop-shadow">
                        Sheraton Dhaka • Oct 9–10, 2026
                      </span>
                      <span className="text-[11px] text-slate-300 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                        <span>{lang === 'en' ? 'View Details' : 'বিস্তারিত'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <ImagePlaceholder
                  label={currentEvent.name}
                  sublabel="[Official Event Poster / Artwork Placeholder]"
                  aspectRatio="4:3"
                  clickable
                  onClick={() => onNavigate('events')}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT VISITORS CAN EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
            {lang === 'en' ? 'Discover The Atmosphere' : 'অভিজ্ঞতার রূপরেখা'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
            {lang === 'en' ? 'What Visitors Can Experience' : 'দর্শনার্থীরা যা উপভোগ করবেন'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Dhaka Night Market brings together six premier pillars of nocturnal celebration, culture, and retail.'
              : 'ঢাকা নাইট মার্কেট সান্ধ্যকালীন বিনোদন, সংস্কৃতি ও কেনাকাটার ছয়টি মূল ভিত্তি নিয়ে একত্রিত করেছে।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('experience')}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/20 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {experienceIconMap[cat.iconName]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                    {lang === 'en' ? cat.title : cat.titleBn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {lang === 'en' ? cat.shortDescription : cat.shortDescriptionBn}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Explore Experience' : 'অভিজ্ঞতা দেখুন'}
                </span>
                <span className="text-xs text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREVIOUS EVENT PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
              {lang === 'en' ? 'Visual Archive' : 'আর্কাইভ'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {lang === 'en' ? 'Previous Event Moments' : 'পূর্ববর্তী ইভেন্টের মুহূর্তসমূহ'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>{lang === 'en' ? 'View Full Gallery' : 'সম্পূর্ণ গ্যালারি দেখুন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-amber-400 transition-colors shadow-md"
            >
              {item.imageUrl ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={lang === 'en' ? item.title : item.titleBn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-slate-200 truncate">
                    {lang === 'en' ? item.title : item.titleBn}
                  </div>
                </div>
              ) : (
                <ImagePlaceholder
                  label={lang === 'en' ? item.title : item.titleBn}
                  sublabel={item.placeholderLabel}
                  aspectRatio={item.aspectRatio}
                  clickable
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED BRANDS / VENDORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
            {lang === 'en' ? 'Entrepreneurs & Creatives' : 'উদ্যোক্তা ও ব্র্যান্ড'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {lang === 'en' ? 'Featured Brands & Vendors' : 'ফিচার্ড ব্র্যান্ড ও ভেন্ডর'}
          </h2>
        </div>

        <PlaceholderNotice
          label="[Add Previous Participating Brands]"
          subtext={
            lang === 'en'
              ? 'Official brand roster and participating vendor directory is currently being prepared for release. Prospective vendors may apply below.'
              : 'অফিসিয়াল ব্র্যান্ড তালিকা ও অংশগ্রহণকারী ভেন্ডর ডিরেক্টরি প্রস্তুত করা হচ্ছে। আগ্রহী ভেন্ডরগণ নিচে আবেদন করতে পারেন।'
          }
        />

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('vendors')}
            className="px-6 py-2.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            {lang === 'en' ? 'Learn How to Exhibit →' : 'প্রদর্শনীতে অংশগ্রহণের তথ্য →'}
          </button>
        </div>
      </section>

      {/* 6. SPONSORS & PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
            {lang === 'en' ? 'Collaborations' : 'পার্টনারশিপ'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {lang === 'en' ? 'Sponsors & Official Partners' : 'স্পন্সর ও পার্টনার্স'}
          </h2>
        </div>

        <PlaceholderNotice
          label="[Sponsor & Partner Logos Coming Soon]"
          subtext={
            lang === 'en'
              ? 'Partnership packages and brand collaboration channels are open for corporate, media, and hospitality sponsors.'
              : 'কর্পোরেট, মিডিয়া এবং হসপিটালিটি স্পন্সরদের জন্য পার্টনারশিপ প্যাকেজ ও যৌথ উদ্যোগের সুযোগ উন্মুক্ত।'
          }
        />

        {/* Previous Edition Featured Collaborators */}
        <div className="mt-6 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 text-center">
            {lang === 'en' ? 'Previous Edition Collaborators & Co-Sponsors' : 'পূর্ববর্তী আসরের কো-স্পন্সর ও পার্টনারবৃন্দ'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            {[
              'UCB',
              'Eastern Bank PLC.',
              "Domino's Pizza",
              'Wow! Momo',
              'Roohani',
              'Mojo',
              'Polar Ice Cream',
              'Pathao',
              'ICT Division',
              'Diamond World',
              'Sheraton Banani',
            ].map((name, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-medium text-xs hover:border-amber-500/40 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('partners')}
            className="px-6 py-2.5 rounded-lg border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
          >
            {lang === 'en' ? 'Partnership Opportunities →' : 'পার্টনারশিপের সুযোগসমূহ →'}
          </button>
        </div>
      </section>

      {/* 7. OFFICIAL SOCIAL MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-950/30 border border-amber-500/30 p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {lang === 'en' ? 'Connect on Social Media' : 'সোশ্যাল মিডিয়ায় যুক্ত থাকুন'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Stay updated on upcoming dates, behind-the-scenes previews, and vendor spotlights across our verified channels.'
              : 'আসন্ন তারিখ, আয়োজনের পেছনের গল্প এবং ভেন্ডর স্পটলাইট পেতে আমাদের ভেরিফাইড চ্যানেলে যুক্ত থাকুন।'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={OFFICIAL_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-900/30 cursor-pointer transition-all"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Facebook</span>
            </a>

            <a
              href={OFFICIAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-pink-900/30 cursor-pointer transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. STRONG FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#070B19] border border-amber-500/40 p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              {lang === 'en'
                ? 'Ready to Showcase at Dhaka Night Market?'
                : 'ঢাকা নাইট মার্কেটে আপনার ব্র্যান্ড প্রদর্শন করতে চান?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'en'
                ? 'Join high-growth lifestyle, bridal, culinary, and artisanal brands. Apply today to secure prime exhibition space for upcoming editions.'
                : 'ব্রাইডাল, জুয়েলারি, লাইফস্টাইল এবং ফুড ব্র্যান্ডের সাথে এক মঞ্চে যুক্ত হতে আজই আবেদন জমা দিন।'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('vendors')}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-amber-500/30 cursor-pointer transition-all"
            >
              {lang === 'en' ? 'Become a Vendor' : 'ভেন্ডর হোন'}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold uppercase tracking-wider text-xs sm:text-sm cursor-pointer transition-all"
            >
              {lang === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{OFFICIAL_INFO.phone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{OFFICIAL_INFO.email}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
