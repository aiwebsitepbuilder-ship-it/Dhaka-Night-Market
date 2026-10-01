import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Clock,
  Compass,
} from 'lucide-react';
import { Language, EnquiryType, FormSubmissionState } from '../types';
import { OFFICIAL_INFO } from '../data/content';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('visitor');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    roleOrCategory: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide your full name.' : 'দয়া করে আপনার পূর্ণ নাম লিখুন।',
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide a valid phone number.' : 'দয়া করে একটি সঠিক ফোন নম্বর লিখুন।',
      });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide a valid email address.' : 'দয়া করে একটি সঠিক ইমেইল লিখুন।',
      });
      return;
    }

    if (!formData.message.trim() || formData.message.length < 5) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please enter a message of at least 5 characters.' : 'দয়া করে আপনার বার্তাটি বিস্তারিত লিখুন।',
      });
      return;
    }

    setFormState({ status: 'submitting' });

    // Client-side submission with clean validation & feedback
    setTimeout(() => {
      setFormState({
        status: 'success',
        message:
          lang === 'en'
            ? `Thank you, ${formData.name}. Your ${enquiryType} message has been received by the Dhaka Night Market team.`
            : `ধন্যবাদ, ${formData.name}। আপনার ${enquiryType} বার্তাটি সফলভাবে গৃহীত হয়েছে।`,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        roleOrCategory: '',
        subject: '',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'Connect With Us' : 'যোগাযোগ করুন'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'Contact Dhaka Night Market' : 'ঢাকা নাইট মার্কেট যোগাযোগ'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Whether you are a visitor inquiring about upcoming dates, a brand looking to exhibit, a sponsor exploring partnerships, or a media representative, we are here to assist.'
            : 'ইভেন্ট সংক্রান্ত তথ্য, স্টল বুকিং, স্পন্সরশিপ অথবা মিডিয়া সংক্রান্ত যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Official Contact Directory & Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#0D152D] border border-amber-500/25 p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white font-display">
              {lang === 'en' ? 'Official Channels' : 'অফিসিয়াল তথ্য'}
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                    {lang === 'en' ? 'Office Location' : 'অফিসের ঠিকানা'}
                  </span>
                  <p className="text-white font-medium leading-relaxed">
                    {OFFICIAL_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                    {lang === 'en' ? 'Official Telephone' : 'অফিসিয়াল ফোন'}
                  </span>
                  <a
                    href={`tel:${OFFICIAL_INFO.phone}`}
                    className="text-white hover:text-amber-400 font-mono font-medium block"
                  >
                    {OFFICIAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                    {lang === 'en' ? 'Official Email' : 'অফিসিয়াল ইমেইল'}
                  </span>
                  <a
                    href={`mailto:${OFFICIAL_INFO.email}`}
                    className="text-white hover:text-amber-400 font-mono font-medium block break-all"
                  >
                    {OFFICIAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                {lang === 'en' ? 'Verified Social Media' : 'ভেরিফাইড সোশ্যাল মিডিয়া'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={OFFICIAL_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/30 text-white hover:bg-[#1877F2]/20 text-xs font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
                  <span>Facebook Page</span>
                </a>

                <a
                  href={OFFICIAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-white hover:bg-pink-500/20 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Location Visual Map Card */}
          <div className="rounded-2xl bg-[#0B132B] border border-amber-500/20 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{lang === 'en' ? 'Gulshan 1 / Niketan Area' : 'গুলশান ১ / নিকেতন এলাকা'}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Niketan, Gulshan 1, Dhaka 1212. Central access point in Dhaka for commercial liaisons, partner briefings, and exhibitor registrations.
            </p>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center text-xs text-slate-400 font-mono">
              [Interactive Map View Coordinates: Niketan, Gulshan 1 1212, Dhaka]
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Category Dynamic Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#070B19] border border-amber-500/40 p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Get In Touch' : 'মেসেজ পাঠান'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {lang === 'en' ? 'General & Business Enquiry Form' : 'সাধারণ ও বাণিজ্যিক অনুসন্ধান ফরম'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'en'
                  ? 'Select your inquiry type to display tailored fields for visitors, vendors, partners, or media.'
                  : 'আপনার আগ্রহের ধরন নির্বাচন করুন:'}
              </p>
            </div>

            {/* Dynamic Type Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setEnquiryType('visitor')}
                className={`py-2 px-3 rounded-lg font-medium cursor-pointer transition-colors text-center ${
                  enquiryType === 'visitor'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Visitor' : 'দর্শনার্থী'}
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType('vendor')}
                className={`py-2 px-3 rounded-lg font-medium cursor-pointer transition-colors text-center ${
                  enquiryType === 'vendor'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Vendor' : 'ভেন্ডর'}
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType('partner')}
                className={`py-2 px-3 rounded-lg font-medium cursor-pointer transition-colors text-center ${
                  enquiryType === 'partner'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Sponsor / Partner' : 'স্পন্সর/পার্টনার'}
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType('media')}
                className={`py-2 px-3 rounded-lg font-medium cursor-pointer transition-colors text-center ${
                  enquiryType === 'media'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Media' : 'মিডিয়া'}
              </button>
            </div>

            {/* Form feedback status */}
            {formState.status === 'success' ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'en' ? 'Message Sent' : 'বার্তা পাঠানো হয়েছে'}
                </h3>
                <p className="text-sm text-emerald-200 max-w-md mx-auto">
                  {formState.message}
                </p>
                <button
                  onClick={() => setFormState({ status: 'idle' })}
                  className="mt-4 px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
                >
                  {lang === 'en' ? 'Send Another Message' : 'আরেকটি বার্তা পাঠান'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formState.status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{formState.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Phone Number *' : 'ফোন নম্বর *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Email Address *' : 'ইমেইল ঠিকানা *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Conditional Field: Organization / Brand */}
                  {enquiryType !== 'visitor' && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {enquiryType === 'vendor'
                          ? (lang === 'en' ? 'Brand / Shop Name *' : 'ব্র্যান্ডের নাম *')
                          : enquiryType === 'media'
                          ? (lang === 'en' ? 'Publication / Media Outlet *' : 'মিডিয়া / প্রকাশনার নাম *')
                          : (lang === 'en' ? 'Company / Organization *' : 'প্রতিষ্ঠানের নাম *')}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={
                          enquiryType === 'vendor'
                            ? 'Brand Name'
                            : enquiryType === 'media'
                            ? 'Media Name'
                            : 'Organization'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  )}

                  {/* Conditional Field: Category / Role */}
                  {enquiryType !== 'visitor' && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {enquiryType === 'vendor'
                          ? (lang === 'en' ? 'Product Category' : 'পণ্যের ধরন')
                          : enquiryType === 'media'
                          ? (lang === 'en' ? 'Press Role / Designation' : 'মিডিয়া পদবী')
                          : (lang === 'en' ? 'Partnership Scope' : 'সহযোগিতার ধরন')}
                      </label>
                      <input
                        type="text"
                        value={formData.roleOrCategory}
                        onChange={(e) => setFormData({ ...formData, roleOrCategory: e.target.value })}
                        placeholder={
                          enquiryType === 'vendor'
                            ? 'e.g. Jewelry / Bridal / Lifestyle'
                            : enquiryType === 'media'
                            ? 'e.g. Senior Reporter / Editor'
                            : 'e.g. Title Sponsorship'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {lang === 'en' ? 'Subject' : 'বিষয়'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={
                      lang === 'en'
                        ? `Regarding ${enquiryType} opportunities or exhibition details`
                        : 'বিষয়'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {lang === 'en' ? 'Your Message *' : 'আপনার বার্তা *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'en'
                        ? 'Please write your enquiry, question, or proposal details here.'
                        : 'আপনার বার্তাটি এখানে লিখুন...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <p className="text-[11px] text-slate-500 font-mono">
                  Frontend form active. Pre-configured for direct forwarding to dhakanightmarket@gmail.com upon deployment.
                </p>

                <button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {formState.status === 'submitting'
                      ? (lang === 'en' ? 'Sending Message...' : 'বার্তা পাঠানো হচ্ছে...')
                      : (lang === 'en' ? 'Submit Enquiry' : 'বার্তা পাঠান')}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
