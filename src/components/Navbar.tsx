import React, { useState, useEffect } from 'react';
import { Shield, HardDrive, Terminal, Menu, X, Download, GraduationCap, Code } from 'lucide-react';
import { FileSentinelLogo } from './Logo';

interface NavbarProps {
  onOpenAcademicModal: () => void;
  onOpenDownloadModal: () => void;
  onOpenProModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAcademicModal,
  onOpenDownloadModal,
  onOpenProModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="FileSentinel Home"
          >
            <div className="flex items-center gap-2.5">
              <FileSentinelLogo size="md" />
              <span className="hidden sm:inline-flex text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 tracking-wider">
                v0.1.0-alpha
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-sm">
            <button
              onClick={() => scrollToSection('features')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors cursor-pointer"
            >
              Features
            </button>
            {/* <button
              onClick={() => scrollToSection('simulator')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-white rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              Live Sync Simulator
            </button> */}
            <button
              onClick={() => scrollToSection('why-filesentinel')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors cursor-pointer"
            >
              Why FileSentinel
            </button>
            {/* <button
              onClick={() => scrollToSection('pricing')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors cursor-pointer"
            >
              Pricing
            </button> */}
            <button
              onClick={() => scrollToSection('open-source')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Code className="w-3.5 h-3.5 text-slate-500" />
              Open Source & BSL
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button
              onClick={onOpenAcademicModal}
              className="px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Free Academic Access</span>
            </button> */}

            <button
              onClick={onOpenDownloadModal}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Desktop App</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDownloadModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get App</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Features
            </button>
            {/* <button
              onClick={() => scrollToSection('simulator')}
              className="text-left px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Live Sync Simulator
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-semibold">Try Demo</span>
            </button> */}
            <button
              onClick={() => scrollToSection('why-filesentinel')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Why FileSentinel
            </button>
            {/* <button
              onClick={() => scrollToSection('pricing')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Pricing (Free Academic / 300 FCFA Pro)
            </button> */}
            <button
              onClick={() => scrollToSection('open-source')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Open Source & License (BSL 1.1)
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            {/* <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAcademicModal();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Claim Free Academic Access (.edu)</span>
            </button> */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-indigo-600 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Desktop Installer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
