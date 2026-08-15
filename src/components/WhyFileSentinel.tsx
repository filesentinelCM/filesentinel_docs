import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, HardDrive, GraduationCap, Laptop, Sparkles, Zap, DollarSign, Lock } from 'lucide-react';
import { COMPARISON_POINTS } from '../data/landingData';

interface WhyFileSentinelProps {
  onOpenAcademicModal: () => void;
  onOpenProModal: () => void;
}

export const WhyFileSentinel: React.FC<WhyFileSentinelProps> = ({
  onOpenAcademicModal,
  onOpenProModal
}) => {
  return (
    <section id="why-filesentinel" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
            <span>The Problem & Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Students & Professionals <br />
            <span className="text-indigo-600">
              Choose FileSentinel
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hardware failures happen. Accidental deletions happen. Cloud outages happen. FileSentinel makes losing work completely impossible — without monthly cloud fees or privacy risks.
          </p>
        </div>

        {/* 3 Core Problem & Target Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Students & Educators */}
          {/* <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">For Students & Educators</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lost your thesis paper or assignment midnight before submission? FileSentinel automatically mirrors your work folder to a USB drive or secondary path instantly as you type.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">Academic Price:</span>
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">100% FREE (.edu)</span>
              </div>
              <button
                onClick={onOpenAcademicModal}
                className="w-full mt-2 py-2.5 text-xs font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Claim Free Student Pass
              </button>
            </div>
          </div> */}

          {/* Card 2: Researchers & Lab Teams */}
          {/* <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">For Researchers & Labs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proprietary research data cannot be uploaded to public cloud servers due to compliance rules. FileSentinel keeps your sensitive datasets mirrored to a local network NAS without internet exposure.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">Data Sovereignty:</span>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">100% Offline</span>
              </div>
              <button
                onClick={onOpenAcademicModal}
                className="w-full mt-2 py-2.5 text-xs font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Get Academic License
              </button>
            </div>
          </div> */}

          {/* Card 3: Freelancers & Professionals */}
          {/* <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">For Freelancers & Pros</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tired of paying $120+/year for bloatware cloud backups? FileSentinel costs just 500 FCFA/month (~$0.80), uses &lt; 15MB RAM, and works completely offline.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">Pro Plan Price:</span>
                <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">500 FCFA / mo (~$0.80)</span>
              </div>
              <button
                onClick={onOpenProModal}
                className="w-full mt-2 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Start Pro Plan
              </button>
            </div>
          </div> */}

        </div>

        {/* Comparison Table: Cloud vs Manual vs FileSentinel */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 overflow-hidden shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">FileSentinel vs Traditional Options</h3>
              <p className="text-slate-600 text-sm mt-1">See how FileSentinel compares to cloud sync services and manual USB copying.</p>
            </div>
            <span className="text-xs font-mono text-indigo-700 font-semibold bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 self-start sm:self-auto">
              Built in Rust • Local First
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase font-mono">
                  <th className="py-3.5 px-4">Feature / Metric</th>
                  <th className="py-3.5 px-4 text-slate-500">Cloud Sync (Dropbox / Drive)</th>
                  <th className="py-3.5 px-4 text-slate-500">Manual USB Copying</th>
                  <th className="py-3.5 px-4 bg-indigo-600 text-white font-bold rounded-t-xl">FileSentinel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                {COMPARISON_POINTS.map((pt, idx) => (
                  <tr key={idx} className={pt.highlight ? 'bg-indigo-50/30' : ''}>
                    <td className="py-4 px-4 font-bold text-slate-900">{pt.feature}</td>
                    <td className="py-4 px-4 text-slate-600 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{pt.cloudBackup}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <span>{pt.manualBackup}</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-indigo-900 bg-indigo-50/80">
                      <div className="flex items-center gap-1.5 text-indigo-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{pt.fileSentinel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
