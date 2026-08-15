export interface SyncFileEvent {
  id: string;
  fileName: string;
  fileSize: string;
  sourcePath: string;
  targetPath: string;
  action: 'CREATED' | 'MODIFIED' | 'DELETED' | 'SYNCED';
  timestamp: string;
  syncTimeMs: number;
  hash: string;
}

export interface BackupFolder {
  id: string;
  name: string;
  path: string;
  targetDestination: string;
  fileCount: number;
  totalSize: string;
  status: 'active' | 'paused' | 'syncing';
  lastSynced: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlight?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  fcfaPriceMonthly: number;
  usdApproxMonthly: string;
  isAcademicFree?: boolean;
  popular?: boolean;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  avatarUrl: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Academic' | 'Pricing' | 'License' | 'Technical' | 'Privacy';
}

export interface ComparisonPoint {
  feature: string;
  cloudBackup: string; // e.g. Dropbox / Google Drive / OneDrive
  manualBackup: string; // e.g. USB Flash Drives
  fileSentinel: string; // FileSentinel
  highlight?: boolean;
}
