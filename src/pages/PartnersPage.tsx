import React, { useState } from 'react';
import {
  Handshake,
  Award,
  Sparkles,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Target,
  Megaphone,
} from 'lucide-react';
import { Language, FormSubmissionState } from '../types';
import { OFFICIAL_INFO } from '../data/content';
import { PlaceholderNotice } from '../components/PlaceholderNotice';

interface PartnersPageProps {
  lang: Language;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    designation: '',
    phone: '',
    email: '',
    partnershipType: 'sponsorship',
    message: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.organizationName.trim() || !formData.contactPerson.trim()) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide company and contact names.' : 'প্রতিষ্ঠানের নাম ও প্রতিনিধির নাম পূরণ করুন।',
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide a valid phone number.' : 'একটি সঠিক ফোন নম্বর প্রদান করুন।',
      });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormState({
        status: 'error',
        message: lang === 'en' ? 'Please provide a valid official email.' : 'একটি সঠিক প্রাতিষ্ঠানিক ইমেইল লিখুন।',
      });
      return;
    }

    setFormState({ status: 'submitting' });

    setTimeout(() => {
      setFormState({
        status: 'success',
        message:
          lang === 'en'
            ? 'Partnership inquiry received. Our partnerships director will connect with your organization with custom collaboration opportunities.'
            : 'পার্টনারশিপ আবেদন সফলভাবে গৃহীত হয়েছে। আমাদের টিম অতি দ্রুত আপনার সাথে যোগাযোগ করবে।',
      });
      setFormData({
        organizationName: '',
        contactPerson: '',
        designation: '',
        phone: '',
        email: '',
        partnershipType: 'sponsorship',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-display">
          {lang === 'en' ? 'Strategic Alliances' : 'স্ট্র্যাটেজিক পার্টনারশিপ'}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'en' ? 'Partners & Sponsors' : 'পার্টনার্স ও স্পন্সরশিপ'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {lang === 'en'
            ? 'Collaborate with Bangladesh’s first-ever Night Market experience to amplify brand presence, engage affluent evening demographics, and drive experiential impact.'
            : 'বাংলাদেশের প্রথম নাইট মার্কেট প্ল্যাটফর্মের সাথে যুক্ত হয়ে আপনার ব্র্যান্ডের উপস্থিতি বৃদ্ধি ও প্রিমিয়াম অডিয়েন্সের সাথে প্রত্যক্ষ সংযোগ স্থাপন করুন।'}
        </p>
      </div>

      {/* 3 Core Engagement Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0D152D] border border-amber-500/20 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Handshake className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            {lang === 'en' ? 'Partnership Opportunities' : 'পার্টনারশিপের সুযোগ'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Collaborate across venue hosting, financial technology, hospitality, cultural curation, and media broadcasting.'
              : 'ভেন্যু, ডিজিটাল পেমেন্ট, হসপিটালিটি ও মিডিয়া সম্প্রচারের ক্ষেত্রে যৌথ উদ্যোগের সুযোগ।'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D152D] border border-amber-500/20 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            {lang === 'en' ? 'Sponsorship Opportunities' : 'স্পন্সরশিপের সুযোগ'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Title, presenting, and associate sponsorship alignments with prime branding across all exhibition media.'
              : 'টাইটেল ও অ্যাসোসিয়েট স্পন্সর হিসেবে সর্বোচ্চ ভিজিবিলিটি ও এক্সক্লুসিভ ব্র্যান্ডিং সুবিধা।'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D152D] border border-amber-500/20 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            {lang === 'en' ? 'Brand Visibility Opportunities' : 'ব্র্যান্ড ভিজিবিলিটি'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Interactive experiential lounges, product sampling, digital billboard displays, and social media reach.'
              : 'এক্সপেরিয়েনশিয়াল লাউঞ্জ, প্রোডাক্ট স্যাম্পলিং এবং ডিজিটাল ক্যাম্পেইনের মাধ্যমে সমন্বিত প্রচার।'}
          </p>
        </div>
      </div>

      {/* Official Required Placeholders */}
      <div className="space-y-6">
        <PlaceholderNotice
          label="[Partnership Opportunities — Add Official Information]"
          subtext={
            lang === 'en'
              ? 'Institutional partnership structures, joint venture modalities, and community initiatives will be detailed here.'
              : 'প্রাতিষ্ঠানিক পার্টনারশিপের বিস্তারিত নীতিমালা ও সহযোগিতার কাঠামো এখানে যুক্ত হবে।'
          }
        />

        <PlaceholderNotice
          label="[Sponsorship Opportunities — Add Official Information]"
          subtext={
            lang === 'en'
              ? 'Official sponsorship deck containing tier deliverables, naming rights, and media valuation metrics.'
              : 'অফিসিয়াল স্পন্সরশিপ ডেক এবং ব্র্যান্ডিং অধিকার সংক্রান্ত তথ্য প্রকাশের অপেক্ষায় রয়েছে।'
          }
        />

        <PlaceholderNotice
          label="[Brand Visibility Opportunities — Add Official Information]"
          subtext={
            lang === 'en'
              ? 'On-ground experiential activation spaces, photo-opportunity installations, and VIP hospitality provisions.'
              : 'ভেন্যুতে বিশেষ অ্যাক্টিভেশন জোন, ফটো বুথ ও ভিআইপি হসপিটালিটি ব্যবস্থা।'
          }
        />
      </div>

      {/* Previous Partners & Sponsors Placeholder Section */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            {lang === 'en' ? 'Official Partners & Sponsors' : 'পার্টনার্স ও স্পন্সর লোগো'}
          </h2>
        </div>

        {/* Previous Edition Verified Partners & Sponsors */}
        <div className="rounded-xl bg-[#0B132B]/80 border border-amber-500/30 p-5 space-y-3">
          <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
            {lang === 'en' ? 'Previous Edition Partners & Collaborators:' : 'পূর্ববর্তী আসরের অফিসিয়াল পার্টনার ও স্পন্সরবৃন্দ:'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'UCB', role: lang === 'en' ? 'Presenting Sponsor' : 'টাইটেল স্পন্সর' },
              { name: 'Eastern Bank PLC.', role: lang === 'en' ? 'Presenting Sponsor' : 'টাইটেল স্পন্সর' },
              { name: "Domino's Pizza", role: lang === 'en' ? 'Co-Sponsor' : 'কো-স্পন্সর' },
              { name: 'Wow! Momo', role: lang === 'en' ? 'Co-Sponsor' : 'কো-স্পন্সর' },
              { name: 'Roohani', role: lang === 'en' ? 'Co-Sponsor' : 'কো-স্পন্সর' },
              { name: 'Mojo', role: lang === 'en' ? 'Beverage Partner' : 'বেভারেজ পার্টনার' },
              { name: 'Polar Ice Cream', role: lang === 'en' ? 'Ice Cream Partner' : 'আইসক্রিম পার্টনার' },
              { name: 'Pathao', role: lang === 'en' ? 'Logistics Partner' : 'লজিস্টিকস পার্টনার' },
              { name: 'ICT Division', role: lang === 'en' ? 'Hi-Tech Authority' : 'আইসিটি বিভাগ' },
              { name: 'Diamond World', role: lang === 'en' ? 'Jewelry Partner' : 'জুয়েলারি পার্টনার' },
              { name: 'Sheraton Banani', role: lang === 'en' ? 'Venue Partner' : 'ভেন্যু পার্টনার' },
              { name: 'Nibedita', role: lang === 'en' ? 'Organizing Partner' : 'অর্গানাইজিং পার্টনার' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center flex flex-col justify-center items-center hover:border-amber-500/40 transition-colors"
              >
                <span className="text-xs font-bold text-white leading-tight">{p.name}</span>
                <span className="text-[10px] text-amber-400/90 font-mono mt-0.5">{p.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderNotice
            label="[Partner Logos Coming Soon]"
            subtext={
              lang === 'en'
                ? 'Official partner roster is maintained under NDA and published with each edition release.'
                : 'অফিসিয়াল পার্টনারদের লোগো প্রতিটি ইভেন্টের পূর্বে প্রকাশ করা হয়।'
            }
          />

          <PlaceholderNotice
            label="[Sponsor Logos Coming Soon]"
            subtext={
              lang === 'en'
                ? 'Corporate sponsors and commercial patrons will be spotlighted in this section.'
                : 'কর্পোরেট স্পন্সর ও পৃষ্ঠপোষকদের লোগো এখানে প্রদর্শিত হবে।'
            }
          />
        </div>
      </div>

      {/* PARTNER / SPONSOR ENQUIRY FORM */}
      <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#070B19] border border-amber-500/40 p-6 sm:p-10 shadow-2xl">
        <div className="max-w-2xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Corporate Inquiries' : 'কর্পোরেট অনুসন্ধান'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {lang === 'en' ? 'Sponsor & Partner Enquiry Form' : 'স্পন্সর ও পার্টনার এনকোয়ারি ফরম'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {lang === 'en'
              ? 'Connect directly with the Dhaka Night Market steering team to explore bespoke partnership packages.'
              : 'কাস্টম পার্টনারশিপ প্যাকেজ ও স্পন্সরশিপের জন্য ঢাকা নাইট মার্কেট টিমের সাথে সরাসরি যোগাযোগ করুন।'}
          </p>
        </div>

        {formState.status === 'success' ? (
          <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'en' ? 'Inquiry Submitted' : 'অনুসন্ধান গৃহীত হয়েছে'}
            </h3>
            <p className="text-sm text-emerald-200 max-w-md mx-auto">
              {formState.message}
            </p>
            <button
              onClick={() => setFormState({ status: 'idle' })}
              className="mt-4 px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
            >
              {lang === 'en' ? 'Submit Another Enquiry' : 'আরেকটি অনুসন্ধান পাঠান'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {formState.status === 'error' && (
              <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{formState.message}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Organization / Company Name *' : 'প্রতিষ্ঠানের নাম *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  placeholder={lang === 'en' ? 'e.g. Apex Corporation' : 'প্রতিষ্ঠানের নাম'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Contact Person Name *' : 'যোগাযোগকারীর নাম *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Designation / Title' : 'পদবী'}
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder={lang === 'en' ? 'e.g. Brand Marketing Director' : 'পদবী'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
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

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Official Email Address *' : 'প্রাতিষ্ঠানিক ইমেইল *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="corporate@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Partnership Category *' : 'পার্টনারশিপের ধরন *'}
                </label>
                <select
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  <option value="sponsorship">Event / Title Sponsorship</option>
                  <option value="co-branding">Brand Visibility & Activation</option>
                  <option value="hospitality">Venue / Hospitality Partnership</option>
                  <option value="media">Media & Broadcast Collaboration</option>
                  <option value="other">Strategic Institutional Alliance</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {lang === 'en' ? 'Collaboration Scope / Objectives' : 'প্রস্তাবনা ও উদ্দেশ্য'}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  lang === 'en'
                    ? 'Outline your organization’s partnership objectives, target audience, or specific brand activation ideas.'
                    : 'আপনার প্রতিষ্ঠানের উদ্দেশ্য ও প্রচার পরিকল্পনার বিবরণ লিখুন।'
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={formState.status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              <span>
                {formState.status === 'submitting'
                  ? (lang === 'en' ? 'Sending Inquiry...' : 'পাঠানো হচ্ছে...')
                  : (lang === 'en' ? 'Submit Partner Inquiry' : 'পার্টনার অনুসন্ধান জমা দিন')}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
