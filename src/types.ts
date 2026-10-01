export type PageId =
  | 'home'
  | 'events'
  | 'experience'
  | 'gallery'
  | 'vendors'
  | 'partners'
  | 'stories'
  | 'about'
  | 'contact';

export type Language = 'en' | 'bn';

export interface EventDetail {
  id: string;
  name: string;
  nameBn: string;
  dates: string;
  datesBn: string;
  startDateIso: string; // ISO date for countdown
  endDateIso: string;
  time: string;
  timeBn: string;
  location: string;
  locationBn: string;
  admission: string;
  admissionBn: string;
  theme: string;
  themeBn: string;
  offerings: {
    en: string[];
    bn: string[];
  };
  status: 'upcoming' | 'ongoing' | 'previous';
  imageUrl?: string;
  imagePlaceholderText: string;
  stats?: string;
  statsBn?: string;
  footfall?: string;
  brandCount?: string;
  foodBrandCount?: string;
  facebookEventUrl?: string;
  mapUrl?: string;
  notes?: string;
  notesBn?: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  titleBn: string;
  shortDescription: string;
  shortDescriptionBn: string;
  iconName: string;
  statusText: string;
  statusTextBn: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleBn: string;
  event: string;
  year: string;
  category: 'event' | 'bridal' | 'lifestyle' | 'food' | 'crowd' | 'video';
  isVideo?: boolean;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
  imageUrl?: string;
  placeholderLabel: string;
}

export interface StoryItem {
  id: string;
  title: string;
  titleBn: string;
  category: 'announcement' | 'highlights' | 'vendor' | 'behind-scenes' | 'media';
  date: string;
  dateBn: string;
  summary: string;
  summaryBn: string;
  isOfficialAnnouncement?: boolean;
}

export type EnquiryType = 'visitor' | 'vendor' | 'partner' | 'media';

export interface FormSubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}
