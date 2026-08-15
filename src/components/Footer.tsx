import React from 'react';
import { Shield, Github, Twitter, ExternalLink, Cpu, HardDrive } from 'lucide-react';
import { FileSentinelLogo } from './Logo';

interface FooterProps {
  onOpenAcademicModal: () => void;
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAcademicModal,
  onOpenDownloadModal
}) => {
  return (
    <footer className="bg-slate-50 text-slate-600 text-xs border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <FileSentinelLogo size="md" />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Real-time directory synchronization for effortless backup — local, automatic, and cloud-free. Built in Rust for maximum speed and zero memory footprint.
            </p>

            {/* <div className="flex items-center gap-2 text-slate-700 font-mono text-[11px] bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>100% Offline • Zero Remote Cloud Servers</span>
            </div> */}
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <p className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wider">Product</p>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-indigo-600 transition-colors">Rust Kernel Sync Engine</a></li>
              {/* <li><a href="#scanner" className="hover:text-indigo-600 transition-colors">Interactive Folder Simulator</a></li> */}
              <li><a href="#why-filesentinel" className="hover:text-indigo-600 transition-colors">Why FileSentinel</a></li>
              <li><a href="#open-source" className="hover:text-indigo-600 transition-colors">BSL 1.1 License Model</a></li>
              {/* <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Academic & Pro Plans</a></li> */}
            </ul>
          </div>

          {/* Access & Community */}
          <div className="space-y-3">
            <p className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wider">Access</p>
            <ul className="space-y-2 text-slate-600">
              {/* <li>
                <button onClick={onOpenAcademicModal} className="hover:text-indigo-600 transition-colors text-left">
                  Student Pass (.edu Free)
                </button>
              </li> */}
              <li>
                <button onClick={onOpenDownloadModal} className="hover:text-indigo-600 transition-colors text-left">
                  Download Windows App
                </button>
              </li>
              <li>
                <button onClick={onOpenDownloadModal} className="hover:text-indigo-600 transition-colors text-left">
                  Download macOS Universal
                </button>
              </li>
              <li>
                <button onClick={onOpenDownloadModal} className="hover:text-indigo-600 transition-colors text-left">
                  Download Linux (Deb/RPM/AppImage)
                </button>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div className="space-y-3">
            <p className="font-mono font-bold text-slate-900 uppercase text-[11px] tracking-wider">Open Source</p>
            <ul className="space-y-2 text-slate-600">
              <li><a href="https://github.com/filesentinelCM/filesentinel" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1">GitHub Repository <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="#open-source" className="hover:text-indigo-600 transition-colors">BSL 1.1 → Apache 2.0 Terms</a></li>
              <li><a href="https://crates.io" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">Rust Crate (crates.io)</a></li>
              <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} filesentinel. All rights reserved. Zero-Cloud Local Synchronization.</p>
          
          <div className="flex items-center gap-6">
            <a href="#open-source" className="hover:text-slate-900">BSL 1.1 License</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
