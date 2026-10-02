import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Image as ImageIcon,
  BookOpen,
  Info,
  Store,
  Handshake,
} from 'lucide-react';
import { Logo } from './Logo';
import { Language, PageId } from '../types';

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
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);
  const [desktopMoreMenuOpen, setDesktopMoreMenuOpen] = useState(false);
  const mobileMoreMenuRef = useRef<HTMLDivElement>(null);
  const desktopMoreMenuRef = useRef<HTMLDivElement>(null);

  // Desktop primary visible links: Home, Events, Vendors, Partners, Contact
  const desktopPrimaryNavItems: { id: PageId; labelEn: string; labelBn: string }[] = [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
    { id: 'events', labelEn: 'Events', labelBn: 'ইভেন্টসমূহ' },
    { id: 'vendors', labelEn: 'Vendors', labelBn: 'ভেন্ডর' },
    { id: 'partners', labelEn: 'Partners', labelBn: 'পার্টনার্স' },
    { id: 'contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  // Desktop More links: Experience, Gallery, Stories, About (4 Pages)
  const desktopMoreNavItems: {
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

  // Mobile visible links in Header: Home, Events, Contact
  const mobileVisibleNavItems: { id: PageId; labelEn: string; labelBn: string }[] = [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম' },
    { id: 'events', labelEn: 'Events', labelBn: 'ইভেন্টসমূহ' },
    { id: 'contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  // Mobile More options: Vendors, Partners, Experience, Gallery, Stories, About (6 Pages)
  const mobileMoreNavItems: {
    id: PageId;
    labelEn: string;
    labelBn: string;
    descriptionEn: string;
    descriptionBn: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'vendors',
      labelEn: 'Vendors',
      labelBn: 'ভেন্ডর',
      descriptionEn: 'Apply for food & lifestyle stalls',
      descriptionBn: 'ফুড ও লাইফস্টাইল স্টল বুকিং',
      icon: Store,
    },
    {
      id: 'partners',
      labelEn: 'Partners',
      labelBn: 'পার্টনার্স',
      descriptionEn: 'Sponsorships & collaborations',
      descriptionBn: 'স্পনসরশিপ ও যৌথ উদ্যোগ',
      icon: Handshake,
    },
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

  const isDesktopMoreActive = desktopMoreNavItems.some((item) => item.id === currentPage);
  const isMobileMoreActive = mobileMoreNavItems.some((item) => item.id === currentPage);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopMoreMenuRef.current &&
        !desktopMoreMenuRef.current.contains(event.target as Node)
      ) {
        setDesktopMoreMenuOpen(false);
      }
      if (
        mobileMoreMenuRef.current &&
        !mobileMoreMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMoreMenuOpen(false);
      }
    };
    if (desktopMoreMenuOpen || mobileMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopMoreMenuOpen, mobileMoreMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMoreMenuOpen(false);
        setDesktopMoreMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMoreMenuOpen(false);
    setDesktopMoreMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070B19]/90 backdrop-blur-md border-b border-amber-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* Brand Wordmark / Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer shrink-0 py-1"
          >
            {/* Desktop / Tablet Logo */}
            <div className="hidden sm:block">
              <Logo size="md" showSubtitle={false} />
            </div>
            {/* Mobile Compact Emblem */}
            <div className="block sm:hidden">
              <Logo size="sm" showSubtitle={false} showText={false} />
            </div>
          </div>

          {/* Desktop Navigation (Home, Events, Vendors, Partners, Contact + More) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-medium">
            {desktopPrimaryNavItems.map((item) => {
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

            {/* Desktop More Button */}
            <div className="relative" ref={desktopMoreMenuRef}>
              <button
                onClick={() => setDesktopMoreMenuOpen((prev) => !prev)}
                className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  isDesktopMoreActive
                    ? 'text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/40 shadow-sm'
                    : desktopMoreMenuOpen
                    ? 'text-white bg-slate-800/90 border border-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
                title={lang === 'en' ? 'More pages' : 'আরও পৃষ্ঠা'}
                aria-label={lang === 'en' ? 'More pages' : 'আরও পৃষ্ঠা'}
                aria-expanded={desktopMoreMenuOpen}
                aria-haspopup="true"
              >
                {desktopMoreMenuOpen ? (
                  <X className="w-5 h-5 text-amber-400" />
                ) : (
                  <Menu className="w-5 h-5 text-amber-400" />
                )}
                <span className="text-xs hidden lg:inline font-medium">
                  {lang === 'en' ? 'More' : 'আরও'}
                </span>
                {isDesktopMoreActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                )}
              </button>

              {/* Desktop Dropdown Panel */}
              {desktopMoreMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#0B132B]/98 backdrop-blur-xl border border-amber-500/30 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[10px] uppercase tracking-widest text-amber-400/90 font-mono font-semibold">
                    <span>{lang === 'en' ? 'More Sections' : 'আরও বিভাগসমূহ'}</span>
                    <span className="text-slate-500">4 Pages</span>
                  </div>

                  <div className="py-1.5 space-y-1">
                    {desktopMoreNavItems.map((item) => {
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

          {/* Mobile Header Menu: Home, Events, Contact + More Button */}
          <div className="flex md:hidden items-center gap-1 sm:gap-1.5">
            {mobileVisibleNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 font-bold bg-amber-500/20 border border-amber-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
                  }`}
                >
                  {lang === 'en' ? item.labelEn : item.labelBn}
                </button>
              );
            })}

            {/* Mobile More Button with Dropdown Card */}
            <div className="relative" ref={mobileMoreMenuRef}>
              <button
                onClick={() => setMobileMoreMenuOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ml-0.5 ${
                  isMobileMoreActive
                    ? 'text-amber-300 font-bold bg-amber-500/20 border border-amber-500/40 shadow-sm'
                    : mobileMoreMenuOpen
                    ? 'text-white bg-slate-800/90 border border-slate-700'
                    : 'text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60'
                }`}
                aria-label="Open More Options"
                aria-expanded={mobileMoreMenuOpen}
              >
                <span>{lang === 'en' ? 'More' : 'আরও'}</span>
                {mobileMoreMenuOpen ? (
                  <X className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Menu className="w-3.5 h-3.5 text-amber-400" />
                )}
                {isMobileMoreActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                )}
              </button>

              {/* Mobile Dropdown Card - Matching User's Screenshot with 6 Buttons */}
              {mobileMoreMenuOpen && (
                <>
                  {/* Invisible Backdrop to close on tap outside */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMobileMoreMenuOpen(false)}
                    aria-hidden="true"
                  />

                  <div
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-w-[calc(100vw-24px)] rounded-2xl bg-[#0B132B]/98 backdrop-blur-xl border border-amber-500/30 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {/* Header: MORE SECTIONS      6 PAGES */}
                    <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[10px] uppercase tracking-widest text-amber-400/90 font-mono font-semibold">
                      <span>{lang === 'en' ? 'More Sections' : 'আরও বিভাগসমূহ'}</span>
                      <span className="text-slate-400">6 Pages</span>
                    </div>

                    {/* The 6 Buttons: Vendors, Partners, Experience, Gallery, Stories, About */}
                    <div className="py-1.5 space-y-1">
                      {mobileMoreNavItems.map((item) => {
                        const isActive = currentPage === item.id;
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                              isActive
                                ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold shadow-sm'
                                : 'text-slate-200 hover:bg-slate-800/80 hover:text-white border border-transparent'
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
                              <p className="text-xs font-semibold truncate leading-tight text-white">
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
