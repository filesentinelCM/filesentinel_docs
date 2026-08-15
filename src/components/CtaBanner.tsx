import React from 'react';
import { HardDrive, ArrowRight, CheckCircle2, GraduationCap, Download } from 'lucide-react';
import { FileSentinelLogo } from './Logo';

interface CtaBannerProps {
  onOpenAcademicModal: () => void;
  onOpenDownloadModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenAcademicModal,
  onOpenDownloadModal
}) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Radiant Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/60 via-blue-50/40 to-indigo-50/60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl text-center space-y-8 text-white relative overflow-hidden">
          
          <div className="flex flex-col items-center gap-3">
            <FileSentinelLogo size="lg" theme="dark" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs font-semibold">
              <HardDrive className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero Cloud • 100% Offline Data Sovereignty</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Never Lose Your Critical Work Again
            </h2>
            <p className="text-indigo-100 text-base sm:text-lg">
              Download FileSentinel for Windows, macOS, or Linux. Set up real-time automatic local backups in under 10 seconds.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto px-6 py-3.5 font-bold text-indigo-950 bg-white hover:bg-indigo-50 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-700" />
              <span>Download Desktop App</span>
              <ArrowRight className="w-4 h-4 text-indigo-700" />
            </button>

            {/* <button
              onClick={onOpenAcademicModal}
              className="w-full sm:w-auto px-6 py-3.5 font-bold text-indigo-100 bg-indigo-800/90 hover:bg-indigo-800 rounded-xl transition-all border border-indigo-700 flex items-center justify-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-indigo-300" />
              <span>Free Academic Pass (.edu)</span>
            </button> */}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200 font-medium pt-2">
            {/* <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-300" />
              <span>Free for Education</span>
            </div> */}
            {/* <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-300" />
              <span>500 FCFA/mo Pro (~$0.80)</span>
            </div> */}
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-300" />
              <span>Open Source BSL 1.1 → Apache 2.0</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
