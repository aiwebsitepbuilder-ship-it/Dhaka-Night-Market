/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { VendorsPage } from './pages/VendorsPage';
import { PartnersPage } from './pages/PartnersPage';
import { StoriesPage } from './pages/StoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Determine initial page from URL hash or path
  const getPageFromUrl = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const validPages: PageId[] = [
      'home',
      'events',
      'experience',
      'gallery',
      'vendors',
      'partners',
      'stories',
      'about',
      'contact',
    ];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }

    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (validPages.includes(path as PageId)) {
      return path as PageId;
    }

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);
  const [lang, setLang] = useState<Language>('en');

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and SEO metadata on route change
  useEffect(() => {
    const pageTitles: Record<PageId, { en: string; bn: string }> = {
      home: {
        en: 'Dhaka Night Market – Bangladesh’s First-Ever Night Market Experience',
        bn: 'ঢাকা নাইট মার্কেট – বাংলাদেশের সর্বপ্রথম নাইট মার্কেট অভিজ্ঞতা',
      },
      events: {
        en: 'Events & Exhibitions – Dhaka Night Market',
        bn: 'ইভেন্ট ও প্রদর্শনী ক্যালেন্ডার – ঢাকা নাইট মার্কেট',
      },
      experience: {
        en: 'Night Market Experience – Dhaka Night Market',
        bn: 'মার্কেট অভিজ্ঞতা – ঢাকা নাইট মার্কেট',
      },
      gallery: {
        en: 'Photo & Video Gallery – Dhaka Night Market',
        bn: 'ফটো ও ভিডিও গ্যালারি – ঢাকা নাইট মার্কেট',
      },
      vendors: {
        en: 'Become a Vendor – Dhaka Night Market',
        bn: 'ভেন্ডর হোন – ঢাকা নাইট মার্কেট',
      },
      partners: {
        en: 'Partners & Sponsors – Dhaka Night Market',
        bn: 'পার্টনার্স ও স্পন্সর – ঢাকা নাইট মার্কেট',
      },
      stories: {
        en: 'Stories & Bulletins – Dhaka Night Market',
        bn: 'স্টোরিজ ও আপডেট – ঢাকা নাইট মার্কেট',
      },
      about: {
        en: 'About Us – Dhaka Night Market',
        bn: 'আমাদের সম্পর্কে – ঢাকা নাইট মার্কেট',
      },
      contact: {
        en: 'Contact & Location – Dhaka Night Market',
        bn: 'যোগাযোগ ও অবস্থান – ঢাকা নাইট মার্কেট',
      },
    };

    const currentTitle = pageTitles[currentPage]?.[lang] ?? pageTitles.home[lang];
    document.title = currentTitle;

    // Update OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentTitle);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', currentTitle);

    // Scroll to top upon navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, lang]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `/${page}`;
  };

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#070B19] text-slate-100 selection:bg-amber-500 selection:text-slate-950 ${
        lang === 'bn' ? 'font-bangla' : 'font-sans'
      }`}
    >
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Page View */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'events' && (
          <EventsPage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'experience' && (
          <ExperiencePage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'gallery' && <GalleryPage lang={lang} />}
        {currentPage === 'vendors' && <VendorsPage lang={lang} />}
        {currentPage === 'partners' && <PartnersPage lang={lang} />}
        {currentPage === 'stories' && <StoriesPage lang={lang} />}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'contact' && <ContactPage lang={lang} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}
