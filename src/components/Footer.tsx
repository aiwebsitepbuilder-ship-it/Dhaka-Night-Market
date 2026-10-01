import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { Language, PageId } from '../types';
import { OFFICIAL_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const quickLinks: { id: PageId; labelEn: string; labelBn: string }[] = [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
    { id: 'events', labelEn: 'Upcoming & Past Events', labelBn: 'ইভেন্ট ক্যালেন্ডার' },
    { id: 'experience', labelEn: 'Night Market Experience', labelBn: 'মার্কেট অভিজ্ঞতা' },
    { id: 'gallery', labelEn: 'Photo & Video Gallery', labelBn: 'ফটো ও ভিডিও গ্যালারি' },
    { id: 'vendors', labelEn: 'Vendor Application', labelBn: 'ভেন্ডর আবেদন' },
    { id: 'partners', labelEn: 'Partners & Sponsors', labelBn: 'পার্টনার্স ও স্পন্সর' },
    { id: 'stories', labelEn: 'Stories & News', labelBn: 'স্টোরিজ ও আপডেট' },
    { id: 'about', labelEn: 'About Dhaka Night Market', labelBn: 'আমাদের সম্পর্কে' },
    { id: 'contact', labelEn: 'Contact & Location', labelBn: 'যোগাযোগ ও ঠিকানা' },
  ];

  return (
    <footer className="w-full bg-[#050814] border-t border-amber-500/20 text-slate-300">
      {/* Top Banner / Callout */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-lg md:text-xl font-bold text-white font-display">
              {lang === 'en'
                ? 'Join Bangladesh’s Premier Night Market Movement'
                : 'বাংলাদেশের প্রথম নাইট মার্কেট প্ল্যাটফর্মে যোগ দিন'}
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              {OFFICIAL_INFO.introPlain}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('vendors')}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-colors"
            >
              {lang === 'en' ? 'Become a Vendor' : 'ভেন্ডর হোন'}
            </button>
            <button
              onClick={() => onNavigate('partners')}
              className="px-5 py-2.5 rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
            >
              {lang === 'en' ? 'Become a Partner' : 'পার্টনার হোন'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-amber-300/90 font-medium tracking-wide">
              {OFFICIAL_INFO.intro}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'Dhaka Night Market curates premier nocturnal lifestyle, bridal couture, jewelry exhibitions, artisan crafts, and culinary celebrations in Dhaka, Bangladesh.'
                : 'ঢাকা নাইট মার্কেট বাংলাদেশের রাজধানী ঢাকায় কিউরেটেড সান্ধ্যকালীন লাইফস্টাইল, ব্রাইডাল উৎসব, অলঙ্কার প্রদর্শনী এবং কারুশিল্পের উন্মুক্ত মেলবন্ধন।'}
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICIAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-500/20 hover:border-amber-400 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors shadow-sm"
                aria-label="Dhaka Night Market Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={OFFICIAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-500/20 hover:border-amber-400 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors shadow-sm"
                aria-label="Dhaka Night Market Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-display">
              {lang === 'en' ? 'Explore Website' : 'ওয়েবসাইট নেভিগেশন'}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-amber-300 text-slate-400 transition-colors cursor-pointer text-left py-1"
                  >
                    {lang === 'en' ? link.labelEn : link.labelBn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-display">
              {lang === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{OFFICIAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${OFFICIAL_INFO.phone}`}
                  className="hover:text-amber-300 font-mono"
                >
                  {OFFICIAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${OFFICIAL_INFO.email}`}
                  className="hover:text-amber-300 font-mono break-all"
                >
                  {OFFICIAL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-5 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Dhaka Night Market. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
