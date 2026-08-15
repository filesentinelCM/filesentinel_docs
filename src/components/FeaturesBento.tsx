import React, { useState } from 'react';
import { CORE_FEATURES } from '../data/landingData';
import { 
  Zap, ShieldCheck, Sliders, Cpu, Monitor, HardDrive, 
  CheckCircle2, RefreshCw, Folder, ArrowRight, Sparkles 
} from 'lucide-react';

export const FeaturesBento: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kernel' | 'memory' | 'destinations'>('kernel');

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Built in Rust for Speed & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for Absolute Data Sovereignty & <br />
            <span className="text-indigo-600">
              Zero-Effort Local Backup
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No expensive cloud subscriptions, no internet requirements, no complex sync scripts. Just instantaneous, automatic local folder mirroring.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Real-Time Kernel Event Monitoring (Span 2 cols) */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-all" />

            <div className="flex flex-col h-full justify-between space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-xs font-semibold">
                  Sub-Millisecond Speed
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Instant Kernel-Level Directory Sync</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  FileSentinel binds directly to native OS kernel event sub-systems (<code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">inotify</code> on Linux, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">FSEvents</code> on macOS, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">ReadDirectoryChangesW</code> on Windows). The moment a file is saved or modified, it is replicated in real-time.
                </p>
              </div>

              {/* Interactive Performance Metric Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-700 font-medium border-b border-slate-200 pb-2">
                  <span>Kernel Event Hook Test</span>
                  <span className="text-indigo-600 font-bold">⚡ Active Kernel Thread</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">LINUX HOOK</span>
                    <strong className="text-indigo-600">inotify</strong>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">MACOS HOOK</span>
                    <strong className="text-indigo-600">FSEvents</strong>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">WINDOWS HOOK</span>
                    <strong className="text-indigo-600">ReadDir</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Offline & Cloud-Free */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-mono text-xs font-semibold">
                  Zero Cloud
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">100% Offline & Private</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your sensitive thesis papers, research datasets, and private code remain strictly on your local hardware or home/office network. No third-party servers, no data leaks.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Cloud Server Sync:</span>
                  <span className="text-emerald-600 font-bold">DISABLED</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Data Telemetry:</span>
                  <span className="text-emerald-600 font-bold">0 Outbound Packets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Ultra-Lightweight Rust Engine */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-xs font-semibold">
                  &lt; 15MB RAM
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Built in Rust for Performance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No slow Electron bloat or heavy Java runtimes. FileSentinel runs as a lean, memory-safe Rust binary that uses practically zero CPU when idle.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span>RAM Usage:</span>
                  <span className="text-indigo-600 font-bold">~12.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Idle CPU Load:</span>
                  <span className="text-indigo-600 font-bold">0.05%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Local & Network Targets (Span 2 cols) */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <HardDrive className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-xs font-semibold">
                  Flexible Destinations
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Flexible Local & Network Destinations</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  Choose where your backups live. Mirror your work to external USB drives, secondary internal SSDs, SD cards, or local network NAS storage (SMB/NFS).
                </p>
              </div>

              {/* Supported target badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-medium">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>External SSD / HDD</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2">
                  <Folder className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Secondary Disk</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Local NAS Share</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>USB Flash Drive</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
