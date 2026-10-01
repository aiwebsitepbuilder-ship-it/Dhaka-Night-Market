import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  Instagram,
  ChevronRight,
  Image as ImageIcon,
  BookOpen,
  Info,
} from 'lucide-react';
import { Logo } from './Logo';
import { Language, PageId } from '../types';
import { OFFICIAL_INFO } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang?: Language;
  onToggleLang?: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  lang = 'en',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Primary visible links in navbar: Home, Events, Vendors, Partners, Contact
  const primaryNavItems: { id: PageId; labelEn: string; labelBn: string }[] = [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
    { id: 'events', labelEn: 'Events', labelBn: 'ইভেন্টসমূহ' },
    { id: 'vendors', labelEn: 'Vendors', labelBn: 'ভেন্ডর' },
    { id: 'partners', labelEn: 'Partners', labelBn: 'পার্টনার্স' },
    { id: 'contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  // Secondary links nested inside the more button: Experience, Gallery, Stories, About
  const moreNavItems: {
    id: PageId;
    labelEn: string;
    labelBn: string;
    descriptionEn: string;
    descriptionBn: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'experience',
      labelEn: 'Experience',
      labelBn: 'অভিজ্ঞতা',
      descriptionEn: '6 signature festival pillars',
      descriptionBn: 'উৎসবের ৬টি বিশেষ স্তম্ভ',
      icon: Sparkles,
    },
    {
      id: 'gallery',
      labelEn: 'Gallery',
      labelBn: 'গ্যালারি',
      descriptionEn: 'Photos, videos & edition posters',
      descriptionBn: 'ছবি, ভিডিও ও পোস্টার আর্কাইভ',
      icon: ImageIcon,
    },
    {
      id: 'stories',
      labelEn: 'Stories',
      labelBn: 'স্টোরিজ',
      descriptionEn: 'Official event news & announcements',
      descriptionBn: 'অফিসিয়াল ঘোষণা ও সংবাদ',
      icon: BookOpen,
    },
    {
      id: 'about',
      labelEn: 'About',
      labelBn: 'আমাদের সম্পর্কে',
      descriptionEn: 'Vision, founders & organization',
      descriptionBn: 'লক্ষ্য, প্রতিষ্ঠাতা ও আয়োজক',
      icon: Info,
    },
  ];

  const isMoreActive = moreNavItems.some((item) => item.id === currentPage);

  // Close more menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    if (moreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070B19]/90 backdrop-blur-md border-b border-amber-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer shrink-0 py-1"
          >
            <Logo size="md" showSubtitle={false} />
          </div>

          {/* Zone 2: Navigation (Visible Links + 3-Dot Dropdown for Experience, Gallery, Partners, Stories, About) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-medium">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{lang === 'en' ? item.labelEn : item.labelBn}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  )}
                </button>
              );
            })}

            {/* Hamburger Button containing Experience, Gallery, Partners, Stories, About */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setMoreMenuOpen((prev) => !prev)}
                className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  isMoreActive
                    ? 'text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/40 shadow-sm'
                    : moreMenuOpen
                    ? 'text-white bg-slate-800/90 border border-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
                title={lang === 'en' ? 'Menu (Experience, Gallery, Partners, Stories, About)' : 'মেনু (আরও বিভাগসমূহ)'}
                aria-label={lang === 'en' ? 'More pages' : 'আরও পৃষ্ঠা'}
                aria-expanded={moreMenuOpen}
                aria-haspopup="true"
              >
                {moreMenuOpen ? (
                  <X className="w-5 h-5 text-amber-400" />
                ) : (
                  <Menu className="w-5 h-5 text-amber-400" />
                )}
                <span className="text-xs hidden lg:inline font-medium">
                  {lang === 'en' ? 'More' : 'আরও'}
                </span>
                {isMoreActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                )}
              </button>

              {/* 3-Dot Dropdown Panel */}
              {moreMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#0B132B]/98 backdrop-blur-xl border border-amber-500/30 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[10px] uppercase tracking-widest text-amber-400/80 font-mono font-semibold">
                    <span>{lang === 'en' ? 'More Sections' : 'আরও বিভাগসমূহ'}</span>
                    <span className="text-slate-500">4 Pages</span>
                  </div>

                  <div className="py-1.5 space-y-1">
                    {moreNavItems.map((item) => {
                      const isActive = currentPage === item.id;
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                            isActive
                              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold shadow-sm'
                              : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                          }`}
                          role="menuitem"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isActive
                                ? 'bg-amber-500 text-slate-950 font-bold'
                                : 'bg-slate-900 border border-slate-800 text-amber-400'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate leading-tight">
                              {lang === 'en' ? item.labelEn : item.labelBn}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate leading-tight mt-0.5">
                              {lang === 'en' ? item.descriptionEn : item.descriptionBn}
                            </p>
                          </div>
                          {isActive && (
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Mobile Hamburger Button (Desktop links are in Zone 2) */}
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-In Mobile Navigation Drawer with Overlay Backdrop */}
      {/* 1. Backdrop Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-In Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[310px] sm:w-[360px] max-w-[85vw] bg-[#070B19] border-l border-amber-500/30 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-amber-500/20 bg-slate-950/80">
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <Logo size="sm" showSubtitle={false} />
          </div>

          <div className="flex items-center gap-2">
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Nav Items (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          <div>
            <p className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
              {lang === 'en' ? 'Main Navigation' : 'মূল মেনু'}
            </p>
            <div className="space-y-1">
              {primaryNavItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer min-h-[44px] ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{lang === 'en' ? item.labelEn : item.labelBn}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-amber-400/80 font-semibold flex items-center gap-1.5">
              <Menu className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'More Sections' : 'আরও বিভাগসমূহ'}</span>
            </p>
            <div className="space-y-1">
              {moreNavItems.map((item) => {
                const isActive = currentPage === item.id;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer min-h-[44px] ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{lang === 'en' ? item.labelEn : item.labelBn}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons inside Drawer */}
          <div className="pt-4 space-y-2.5 border-t border-slate-800/80 mt-4">
            <button
              onClick={() => handleNavClick('vendors')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 cursor-pointer min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>{lang === 'en' ? 'Become a Vendor' : 'ভেন্ডর হোন'}</span>
            </button>

            <button
              onClick={() => handleNavClick('partners')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold uppercase tracking-wider cursor-pointer min-h-[44px]"
            >
              <span>{lang === 'en' ? 'Become a Partner' : 'পার্টনার হোন'}</span>
            </button>
          </div>
        </div>

        {/* Drawer Footer: Verified Contact & Social links */}
        <div className="p-4 border-t border-amber-500/20 bg-slate-950/90 space-y-3">
          <div className="space-y-1.5 text-xs text-slate-400 font-mono">
            <a
              href={`tel:${OFFICIAL_INFO.phone}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{OFFICIAL_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${OFFICIAL_INFO.email}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors break-all"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{OFFICIAL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
            <a
              href={OFFICIAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-xs text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
