import React from 'react';
import { ArrowRight, CheckCircle2, Download, GraduationCap } from 'lucide-react';
import { FileSentinelLogo } from './Logo';

interface HeroProps {
  onOpenAcademicModal: () => void;
  onOpenDownloadModal: () => void;
  onOpenProModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAcademicModal,
  onOpenDownloadModal,
  onOpenProModal
}) => {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle Background Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.1),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Light Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Official Brand Wordmark & Tag */}
          <div className="flex flex-col items-center justify-center gap-2 pt-2">
            <FileSentinelLogo size="lg" className="hover:opacity-95 transition-opacity" />
          </div>

          {/* Badge: Free for Education / Built in Rust */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-semibold">Rust-Powered Backup Engine:</span>
            <span>100% Offline & Automatic</span>
            <span className="text-slate-300">•</span>
            <span className="text-indigo-700 font-bold flex items-center gap-1 cursor-pointer hover:underline" onClick={onOpenAcademicModal}>
              Free for Education (.edu) <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            </span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Real-Time Directory Sync <br className="hidden sm:inline" />
            <span className="text-indigo-600">
              for Effortless Local Backup
            </span>
          </h1>

          {/* Subtitle / Problem & Solution */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Never lose your thesis, research data, or code again. FileSentinel monitors your folders and instantly mirrors every file change to your local drive or NAS network — automatic, cloud-free, and built in Rust.
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Download className="w-5 h-5 text-white" />
              <span>Download for Desktop</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* <button
              onClick={onOpenAcademicModal}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Claim Free Academic Access (.edu)</span>
            </button> */}
          </div>

          {/* Platform & Core Differentiator Highlights */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>100% Offline (No Cloud Dependency)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Zero Configuration Needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Windows, macOS & Linux</span>
            </div>
            {/* <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Pro Plan: 500 FCFA/mo (~$0.80)</span>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
};
