import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';

export interface CountdownTimerProps {
  targetDate?: string | Date;
  eventName?: string;
  eventNameBn?: string;
  venue?: string;
  venueBn?: string;
  timeRange?: string;
  timeRangeBn?: string;
  lang?: Language;
  variant?: 'card' | 'compact' | 'banner';
  showSeconds?: boolean;
  onExploreClick?: () => void;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isPast: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = '2026-10-09T12:00:00+06:00',
  eventName = 'Wedding & Lifestyle Exhibition featuring House of Bengal',
  eventNameBn = 'ওয়েডিং অ্যান্ড লাইফস্টাইল এক্সিবিশন ফিচারিং হাউস অফ বেঙ্গল',
  venue = 'Sheraton Banani (Grand Ballroom), Dhaka',
  venueBn = 'শেরাটন বনানী (গ্র্যান্ড বলরুম), ঢাকা',
  timeRange = '12:00 PM – 12:00 AM',
  timeRangeBn = 'দুপুর ১২:০০ – রাত ১২:০০',
  lang = 'en',
  variant = 'card',
  showSeconds = false,
  onExploreClick,
  className = '',
}) => {
  const targetStartTime = new Date(targetDate).getTime();
  // Duration: 2 days (October 9–10, 2026)
  const targetEndTime = targetStartTime + 2 * 24 * 60 * 60 * 1000;

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = Date.now();
    if (now >= targetStartTime && now <= targetEndTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isPast: false };
    }
    if (now > targetEndTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isPast: true };
    }

    const difference = Math.max(0, targetStartTime - now);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isLive: false,
      isPast: false,
    };
  };

  const [time, setTime] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetStartTime, targetEndTime]);

  const formatDigits = (val: number): string => {
    const padded = String(Math.max(0, val)).padStart(2, '0');
    if (lang === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return padded
        .split('')
        .map((digit) => bnDigits[parseInt(digit, 10)] ?? digit)
        .join('');
    }
    return padded;
  };

  // Compact variant (e.g. for badges or sidebar strips)
  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-300 font-mono text-xs shadow-md ${className}`}
      >
        <Clock className="w-3.5 h-3.5 text-amber-400" />
        {time.isLive ? (
          <span className="font-bold text-amber-400 animate-pulse">
            {lang === 'en' ? 'LIVE NOW' : 'চলছে'}
          </span>
        ) : time.isPast ? (
          <span className="text-slate-400">
            {lang === 'en' ? 'Concluded' : 'সম্পন্ন'}
          </span>
        ) : (
          <span className="font-bold tabular-nums">
            {formatDigits(time.days)}d : {formatDigits(time.hours)}h : {formatDigits(time.minutes)}m
            {showSeconds && ` : ${formatDigits(time.seconds)}s`}
          </span>
        )}
      </div>
    );
  }

  // Banner variant (horizontal ribbon)
  if (variant === 'banner') {
    return (
      <div
        className={`w-full rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-500/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-display">
              {lang === 'en' ? eventName : eventNameBn}
            </h4>
            <p className="text-xs text-amber-300/80">
              {lang === 'en' ? 'Starts October 9, 2026 • Free Entry' : 'শুরু ৯ অক্টোবর ২০২৬ • ফ্রি এন্ট্রি'}
            </p>
          </div>
        </div>

        {/* Counter unit */}
        <div className="flex items-center gap-2 font-mono">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/30 text-center">
            <span className="text-lg font-bold text-amber-400">{formatDigits(time.days)}</span>
            <span className="text-[10px] text-slate-400 block -mt-1">{lang === 'en' ? 'Days' : 'দিন'}</span>
          </div>
          <span className="text-amber-500 font-bold">:</span>
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/30 text-center">
            <span className="text-lg font-bold text-amber-400">{formatDigits(time.hours)}</span>
            <span className="text-[10px] text-slate-400 block -mt-1">{lang === 'en' ? 'Hours' : 'ঘণ্টা'}</span>
          </div>
          <span className="text-amber-500 font-bold">:</span>
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/30 text-center">
            <span className="text-lg font-bold text-amber-400">{formatDigits(time.minutes)}</span>
            <span className="text-[10px] text-slate-400 block -mt-1">{lang === 'en' ? 'Mins' : 'মিনিট'}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default 'card' variant: Complete feature card
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0E172E] via-[#121B38] to-[#0A1024] border border-amber-500/30 p-6 md:p-8 shadow-2xl shadow-black/40 ${className}`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Left Column: Event Details */}
        <div className="space-y-3 text-center lg:text-left max-w-xl">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-display flex items-center justify-center lg:justify-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {lang === 'en'
                ? 'Official Countdown · October 9, 2026'
                : 'অফিসিয়াল কাউন্টডাউন · ৯ অক্টোবর ২০২৬'}
            </span>
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug font-display">
            {lang === 'en' ? eventName : eventNameBn}
          </h3>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-xs md:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en' ? 'October 9–10, 2026' : '৯–১০ অক্টোবর ২০২৬'}
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en' ? timeRange : timeRangeBn}
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              {lang === 'en' ? venue : venueBn}
            </span>
          </div>
        </div>

        {/* Right Column: Days, Hours, Minutes Countdown display */}
        <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
          {time.isLive ? (
            <div className="px-6 py-4 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-300 text-center animate-pulse">
              <p className="text-lg font-bold">
                {lang === 'en' ? '🎉 Exhibition is LIVE NOW!' : '🎉 প্রদর্শনী এখন চলছে!'}
              </p>
              <p className="text-xs text-amber-200 mt-1">
                {lang === 'en'
                  ? 'Sheraton Banani (Grand Ballroom) · Free Entry'
                  : 'শেরাটন বনানী (গ্র্যান্ড বলরুম) · ফ্রি প্রবেশ'}
              </p>
            </div>
          ) : time.isPast ? (
            <div className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 text-sm">
              {lang === 'en' ? 'Event Concluded' : 'ইভেন্ট সম্পন্ন হয়েছে'}
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Days Display Unit */}
              <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-xl bg-slate-950/70 backdrop-blur-md border border-amber-500/30 shadow-lg shadow-black/50 group hover:border-amber-400 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono tabular-nums leading-none tracking-tight">
                  {formatDigits(time.days)}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest font-medium mt-2">
                  {lang === 'en' ? 'Days' : 'দিন'}
                </span>
              </div>

              <span className="text-xl sm:text-2xl font-bold text-amber-500/60 pb-3 font-mono">:</span>

              {/* Hours Display Unit */}
              <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-xl bg-slate-950/70 backdrop-blur-md border border-amber-500/30 shadow-lg shadow-black/50 group hover:border-amber-400 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono tabular-nums leading-none tracking-tight">
                  {formatDigits(time.hours)}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest font-medium mt-2">
                  {lang === 'en' ? 'Hours' : 'ঘণ্টা'}
                </span>
              </div>

              <span className="text-xl sm:text-2xl font-bold text-amber-500/60 pb-3 font-mono">:</span>

              {/* Minutes Display Unit */}
              <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-xl bg-slate-950/70 backdrop-blur-md border border-amber-500/30 shadow-lg shadow-black/50 group hover:border-amber-400 transition-colors">
                <span className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono tabular-nums leading-none tracking-tight">
                  {formatDigits(time.minutes)}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest font-medium mt-2">
                  {lang === 'en' ? 'Minutes' : 'মিনিট'}
                </span>
              </div>

              {/* Optional Seconds */}
              {showSeconds && (
                <>
                  <span className="text-xl sm:text-2xl font-bold text-amber-500/60 pb-4 font-mono">:</span>
                  <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-black/50 group hover:border-amber-400 transition-colors">
                    <span className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums leading-none tracking-tight">
                      {formatDigits(time.seconds)}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-widest font-semibold mt-2">
                      {lang === 'en' ? 'Seconds' : 'সেকেন্ড'}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {onExploreClick && (
            <button
              onClick={onExploreClick}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
            >
              <span>{lang === 'en' ? 'View Event Details' : 'ইভেন্টের বিস্তারিত দেখুন'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
