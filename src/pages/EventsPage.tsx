import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Gem,
  CheckCircle,
  Share2,
  Bookmark,
  Filter,
  Users,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { UPCOMING_EVENTS, PREVIOUS_EVENTS } from '../data/content';
import { CountdownTimer } from '../components/CountdownTimer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PlaceholderNotice } from '../components/PlaceholderNotice';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate, lang }) => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'previous'>('all');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'Official Calendar' : 'ইভেন্ট ক্যালেন্ডার'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'Events & Exhibitions' : 'ইভেন্ট ও প্রদর্শনী'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Discover upcoming exhibitions, ongoing showcases, and previous editions curated by Dhaka Night Market.'
            : 'ঢাকা নাইট মার্কেট আয়োজিত আসন্ন প্রদর্শনী, চলমান ইভেন্ট এবং পূর্ববর্তী আসরের বিস্তারিত তথ্য।'}
        </p>
      </div>

      {/* Countdown Card for Upcoming Event */}
      <CountdownTimer lang={lang} />

      {/* Filter Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-amber-500/20 rounded-xl text-xs sm:text-sm font-medium">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'All Events' : 'সকল ইভেন্ট'}
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              filter === 'upcoming'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'Upcoming' : 'আসন্ন'}
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              filter === 'ongoing'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'Ongoing' : 'চলমান'}
          </button>
          <button
            onClick={() => setFilter('previous')}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              filter === 'previous'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'Previous' : 'পূর্ববর্তী'}
          </button>
        </div>
      </div>

      {/* UPCOMING EVENTS SECTION */}
      {(filter === 'all' || filter === 'upcoming') && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-amber-500/30 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'en' ? 'Upcoming Events' : 'আসন্ন ইভেন্ট'}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
              1 Scheduled
            </span>
          </div>

          <div className="space-y-8">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl bg-[#0D152D] border border-amber-500/30 overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  {/* Visual Art / Poster */}
                  <div className="lg:col-span-5">
                    {event.imageUrl ? (
                      <div className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-slate-950/80 shadow-lg aspect-[16/10] sm:aspect-[4/3]">
                        <img
                          src={event.imageUrl}
                          alt={lang === 'en' ? event.name : event.nameBn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label={lang === 'en' ? event.name : event.nameBn}
                        sublabel={event.imagePlaceholderText}
                        aspectRatio="4:3"
                      />
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                          {event.status}
                        </span>
                        <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                          {lang === 'en' ? event.admission : event.admissionBn}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {lang === 'en' ? event.name : event.nameBn}
                      </h3>

                      <p className="text-sm text-amber-300/90 font-medium">
                        Theme: {lang === 'en' ? event.theme : event.themeBn}
                      </p>

                      {/* Fact items */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{lang === 'en' ? event.dates : event.datesBn}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{lang === 'en' ? event.time : event.timeBn}</span>
                        </div>
                        <div className="flex items-center gap-2.5 sm:col-span-2">
                          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{lang === 'en' ? event.location : event.locationBn}</span>
                        </div>
                      </div>

                      {/* Offerings list */}
                      <div className="pt-2">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          {lang === 'en' ? 'Official Offerings' : 'প্রদর্শনীর অফারিংস'}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(lang === 'en' ? event.offerings.en : event.offerings.bn).map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium"
                            >
                              <Gem className="w-3.5 h-3.5 text-amber-400" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {event.notes && (
                        <p className="text-xs text-slate-400 leading-relaxed italic pt-1">
                          {lang === 'en' ? event.notes : event.notesBn}
                        </p>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onNavigate('vendors')}
                          className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors shadow-md"
                        >
                          {lang === 'en' ? 'Apply to Exhibit' : 'স্টলের জন্য আবেদন'}
                        </button>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-medium uppercase tracking-wider cursor-pointer transition-colors"
                        >
                          {lang === 'en' ? 'Enquire' : 'অনুসন্ধান'}
                        </button>
                      </div>

                      <button
                        onClick={handleShare}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'লিঙ্ক কপি হয়েছে!') : (lang === 'en' ? 'Share Event' : 'শেয়ার করুন')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ONGOING EVENTS SECTION */}
      {(filter === 'all' || filter === 'ongoing') && (
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'en' ? 'Ongoing Events' : 'চলমান ইভেন্ট'}
            </h2>
          </div>

          <PlaceholderNotice
            label="[No Ongoing Events At This Time - Check Upcoming Schedule]"
            subtext={
              lang === 'en'
                ? 'There are currently no active exhibitions right now. Please mark your calendars for the upcoming Wedding & Lifestyle Exhibition on October 9–10, 2026.'
                : 'বর্তমানে কোনো সক্রিয় ইভেন্ট চলছে না। ৯–১০ অক্টোবর ২০২৬ এর ওয়েডিং অ্যান্ড লাইফস্টাইল প্রদর্শনীর জন্য প্রস্তুত থাকুন।'
            }
          />
        </section>
      )}

      {/* PREVIOUS EVENTS SECTION */}
      {(filter === 'all' || filter === 'previous') && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'en' ? 'Previous Events Archive' : 'পূর্ববর্তী ইভেন্টসমূহ'}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              {PREVIOUS_EVENTS.length} Archived
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PREVIOUS_EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl bg-[#0D152D] border border-amber-500/20 hover:border-amber-500/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
              >
                <div>
                  {event.imageUrl ? (
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                      <img
                        src={event.imageUrl}
                        alt={lang === 'en' ? event.name : event.nameBn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D152D] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono font-semibold text-amber-300">
                        {lang === 'en' ? 'Official Poster' : 'অফিসিয়াল পোস্টার'}
                      </div>
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={lang === 'en' ? event.name : event.nameBn}
                      sublabel={event.imagePlaceholderText}
                      aspectRatio="16:9"
                    />
                  )}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-amber-400 font-semibold font-display tracking-wider">
                        {lang === 'en' ? event.dates : event.datesBn}
                      </span>
                      <span className="text-[11px] uppercase font-mono text-slate-500 tracking-wider">
                        {lang === 'en' ? 'Archived Expo' : 'সম্পন্ন এক্সপো'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                        {lang === 'en' ? event.name : event.nameBn}
                      </h3>
                      <p className="text-xs text-amber-300/80 font-medium mt-1 leading-snug">
                        {lang === 'en' ? event.theme : event.themeBn}
                      </p>
                    </div>

                    {/* Verified Stats Highlight */}
                    {event.stats && (
                      <div className="px-3 py-2 rounded-lg bg-slate-950/70 border border-amber-500/20 flex items-center gap-2 text-xs text-slate-300">
                        <Users className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="font-semibold text-amber-200">
                          {lang === 'en' ? event.stats : event.statsBn}
                        </span>
                      </div>
                    )}

                    {/* Metadata details: Time, Location, Admission */}
                    <div className="space-y-2 text-xs text-slate-300 pt-1 border-t border-slate-800/80">
                      <div className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{lang === 'en' ? event.time : event.timeBn}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span>{lang === 'en' ? event.location : event.locationBn}</span>
                          {event.mapUrl && (
                            <a
                              href={event.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline"
                            >
                              <span>{lang === 'en' ? 'Map' : 'ম্যাপ'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400 font-medium">{lang === 'en' ? event.admission : event.admissionBn}</span>
                      </div>
                    </div>

                    {/* Offerings list */}
                    {event.offerings && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold font-display">
                          {lang === 'en' ? 'Event Highlights:' : 'আকর্ষণসমূহ:'}
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300">
                          {(lang === 'en' ? event.offerings.en : event.offerings.bn).slice(0, 4).map((offering, idx) => (
                            <span key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                              <span>{offering}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.notes && (
                      <p className="text-xs text-slate-400 leading-relaxed italic pt-1">
                        {lang === 'en' ? event.notes : event.notesBn}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                  {event.facebookEventUrl ? (
                    <a
                      href={event.facebookEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    >
                      <span>{lang === 'en' ? 'Facebook Event' : 'ফেসবুক ইভেন্ট'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-slate-500">
                      {lang === 'en' ? 'Official Record' : 'অফিসিয়াল রেকর্ড'}
                    </span>
                  )}
                  <button
                    onClick={() => onNavigate('gallery')}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300 font-medium cursor-pointer transition-colors"
                  >
                    <span>{lang === 'en' ? 'View Gallery' : 'গ্যালারি দেখুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
