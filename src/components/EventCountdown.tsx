import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface EventCountdownProps {
  lang: Language;
  onExploreClick?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isPast: boolean;
}

export const EventCountdown: React.FC<EventCountdownProps> = ({ lang, onExploreClick }) => {
  // Target: October 9, 2026, 12:00 PM Bangladesh Standard Time (UTC+6)
  const targetStartTime = new Date('2026-10-09T12:00:00+06:00').getTime();
  const targetEndTime = new Date('2026-10-10T23:59:59+06:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    if (now >= targetStartTime && now <= targetEndTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isPast: false };
    }
    if (now > targetEndTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isPast: true };
    }

    const difference = targetStartTime - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isLive: false,
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    const padded = String(Math.max(0, num)).padStart(2, '0');
    if (lang === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return padded
        .split('')
        .map((ch) => bnDigits[parseInt(ch, 10)] ?? ch)
        .join('');
    }
    return padded;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0E172E] via-[#121B38] to-[#0A1024] border border-amber-500/30 p-6 md:p-8 shadow-2xl shadow-black/40">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Left Column: Event Context */}
        <div className="space-y-3 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {lang === 'en'
                ? 'Next Official Event • Free Entry'
                : 'পরবর্তী অফিসিয়াল ইভেন্ট • ফ্রি এন্ট্রি'}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug font-display">
            {lang === 'en'
              ? 'Wedding & Lifestyle Exhibition featuring House of Bengal'
              : 'ওয়েডিং অ্যান্ড লাইফস্টাইল এক্সিবিশন ফিচারিং হাউস অফ বেঙ্গল'}
          </h3>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs md:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en' ? 'October 9–10, 2026' : '৯–১০ অক্টোবর ২০২৬'}
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en' ? '12:00 PM – 12:00 AM' : 'দুপুর ১২:০০ – রাত ১২:০০'}
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en'
                ? 'Sheraton Banani (Grand Ballroom), Dhaka'
                : 'শেরাটন বনানী (গ্র্যান্ড বলরুম), ঢাকা'}
            </span>
          </div>
        </div>

        {/* Right Column: Dynamic Countdown Timer */}
        <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
          {timeLeft.isLive ? (
            <div className="px-6 py-4 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-300 text-center animate-pulse">
              <p className="text-lg font-bold">
                {lang === 'en' ? '🎉 Exhibition is LIVE NOW!' : '🎉 প্রদর্শনী এখন চলছে!'}
              </p>
              <p className="text-xs text-amber-200 mt-1">
                {lang === 'en'
                  ? 'Sheraton Banani (Grand Ballroom) • Free Entry'
                  : 'শেরাটন বনানী (গ্র্যান্ড বলরুম) • ফ্রি প্রবেশ'}
              </p>
            </div>
          ) : timeLeft.isPast ? (
            <div className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 text-sm">
              {lang === 'en' ? 'Event Concluded' : 'ইভেন্ট সম্পন্ন হয়েছে'}
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Days */}
              <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-18 sm:h-22 rounded-xl bg-slate-900/90 border border-amber-500/20 shadow-md">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums leading-none">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1.5">
                  {lang === 'en' ? 'Days' : 'দিন'}
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-18 sm:h-22 rounded-xl bg-slate-900/90 border border-amber-500/20 shadow-md">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums leading-none">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1.5">
                  {lang === 'en' ? 'Hours' : 'ঘণ্টা'}
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-18 sm:h-22 rounded-xl bg-slate-900/90 border border-amber-500/20 shadow-md">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums leading-none">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1.5">
                  {lang === 'en' ? 'Mins' : 'মিনিট'}
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-18 sm:h-22 rounded-xl bg-slate-900/90 border border-amber-500/20 shadow-md">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums leading-none">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1.5">
                  {lang === 'en' ? 'Secs' : 'সেকেন্ড'}
                </span>
              </div>
            </div>
          )}

          {onExploreClick && (
            <button
              onClick={onExploreClick}
              className="mt-4 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
            >
              {lang === 'en' ? 'View Event Details →' : 'ইভেন্টের বিস্তারিত দেখুন →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
