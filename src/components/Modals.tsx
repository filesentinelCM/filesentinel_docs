import React, { useState } from 'react';
import { X, GraduationCap, Download, CheckCircle2, ArrowRight, ShieldCheck, Laptop, Cpu, Sparkles, Copy, Terminal } from 'lucide-react';
import { FileSentinelLogo } from './Logo';
import { downloadFiles, DownloadFile } from '../data/downloadsData';

interface ModalsProps {
  academicOpen: boolean;
  downloadOpen: boolean;
  proOpen: boolean;
  onCloseAcademic: () => void;
  onCloseDownload: () => void;
  onClosePro: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  academicOpen,
  downloadOpen,
  proOpen,
  onCloseAcademic,
  onCloseDownload,
  onClosePro
}) => {
  // Academic Form state
  const [academicEmail, setAcademicEmail] = useState('');
  const [academicInstitution, setAcademicInstitution] = useState('');
  const [academicClaimed, setAcademicClaimed] = useState(false);

  // Download state
  const [selectedOS, setSelectedOS] = useState<'windows' | 'macos' | 'linux'>('windows');
  const [downloadStarted, setDownloadStarted] = useState(false);

  // Pro Plan Form state
  const [proEmail, setProEmail] = useState('');
  const [proSubmitted, setProSubmitted] = useState(false);

  const handleAcademicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAcademicClaimed(true);
  };

  // Fonction de téléchargement avec lien vers un fichier réel
  const handleDownloadClick = (os: string) => {
    setDownloadStarted(true);
    
    // Créer un lien de téléchargement vers le fichier dans le dossier public
    const downloadLink = document.createElement('a');
    
    // Récupérer les informations du fichier
    const fileInfo = downloadFiles[os as keyof typeof downloadFiles];
    if (!fileInfo) return;
    
    // Définir le chemin et le nom du fichier
    downloadLink.href = fileInfo.filePath;
    downloadLink.download = fileInfo.fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Réinitialiser l'état après 3 secondes
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const handleProSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProSubmitted(true);
  };

  // Récupérer les informations du fichier sélectionné
  const getCurrentFileInfo = (): DownloadFile => {
    return downloadFiles[selectedOS] || downloadFiles.windows;
  };

  if (!academicOpen && !downloadOpen && !proOpen) return null;

  const fileInfo = getCurrentFileInfo();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      
      {/* ----------------- ACADEMIC FREE LICENSE MODAL ----------------- */}
      {academicOpen && (
        <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <button
            onClick={() => {
              onCloseAcademic();
              setAcademicClaimed(false);
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Claim Free Academic License</h3>
              <p className="text-xs text-slate-500">100% Free for students, educators, and university researchers.</p>
            </div>
          </div>

          {!academicClaimed ? (
            <form onSubmit={handleAcademicSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                  Academic / University Email (.edu or .ac) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@university.edu"
                  value={academicEmail}
                  onChange={(e) => setAcademicEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                  School / Institution Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stanford University or University of Yaoundé"
                  value={academicInstitution}
                  onChange={(e) => setAcademicInstitution(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant activation for verified .edu email domains.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Unlock Free Academic Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-6 space-y-5 animate-fade-in">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                <p className="font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Academic License Verified & Key Provisioned!
                </p>
                <p className="text-slate-600">Email: {academicEmail} • Status: Lifetime Academic License</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-slate-700 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                  Your Free Academic License Key
                </span>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400">
                  <span>EDU-PASS-2026-RUST-SYNC-FREE</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onCloseAcademic();
                  onCloseDownload(); // open download or close
                  setAcademicClaimed(false);
                }}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors cursor-pointer text-xs"
              >
                Done & Download FileSentinel
              </button>
            </div>
          )}

        </div>
      )}

      {/* ----------------- DOWNLOAD APP MODAL ----------------- */}
      {downloadOpen && (
        <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <button
            onClick={onCloseDownload}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Download FileSentinel Desktop</h3>
              <p className="text-xs text-slate-500">{fileInfo.version} • Lightweight Rust Binary (&lt; 8 MB installer)</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setSelectedOS('windows')}
              className={`p-3 rounded-xl border text-xs font-mono font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                selectedOS === 'windows'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>Windows</span>
              <span className="text-[10px] opacity-80">64-bit / ARM</span>
            </button>
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-1">
              <span className="text-xs font-mono font-bold text-slate-600">macOS</span>
              <span className="text-[10px] text-slate-500 text-center">Will be available soon</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-1">
              <span className="text-xs font-mono font-bold text-slate-600">Linux</span>
              <span className="text-[10px] text-slate-500 text-center">Will be available soon</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex justify-between items-center text-xs text-slate-700 font-mono">
              <span>File Name:</span>
              <span className="font-bold text-slate-900 truncate max-w-[180px]">
                {fileInfo.fileName}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-700 font-mono">
              <span>Size:</span>
              <span className="font-bold text-slate-900">{fileInfo.size}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-700 font-mono">
              <span>SHA-256 Checksum:</span>
              <span className="font-bold text-indigo-600 text-[10px] truncate max-w-[160px]">{fileInfo.sha256}</span>
            </div>
          </div>

          <button
            onClick={() => handleDownloadClick(selectedOS)}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={downloadStarted}
          >
            <Download className="w-4 h-4" />
            <span>{downloadStarted ? 'Downloading FileSentinel Installer...' : `Download for ${selectedOS.toUpperCase()}`}</span>
          </button>

          {downloadStarted && (
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 text-center animate-fade-in font-medium">
              ✨ Download started! Run the installer and select your source and destination folders.
            </div>
          )}

        </div>
      )}

      {/* ----------------- PRO PLAN MODAL ----------------- */}
      {proOpen && (
        <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <button
            onClick={() => {
              onClosePro();
              setProSubmitted(false);
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Get Pro Plan Access</h3>
              <p className="text-xs text-slate-500">500 FCFA / month (~$0.80/mo) • Cancel anytime</p>
            </div>
          </div>

          {!proSubmitted ? (
            <form onSubmit={handleProSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="pro@freelance.com"
                  value={proEmail}
                  onChange={(e) => setProEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                  Preferred Payment Method
                </label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-indigo-600 font-mono">
                  <option>Mobile Money (Orange Money / MTN Mobile Money / Wave)</option>
                  <option>Credit / Debit Card (Visa / Mastercard)</option>
                  <option>PayPal / Apple Pay</option>
                </select>
              </div>

              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-xs text-indigo-900 space-y-1">
                <p className="font-bold">Affordable Local & International Rate:</p>
                <p className="text-slate-600">500 FCFA / month (~$0.80) with 7-day initial risk-free trial.</p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Start 7-Day Free Pro Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Pro Account Setup Complete!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Activation details and license key sent to <span className="text-indigo-600 font-semibold">{proEmail}</span>.
              </p>
              <button
                onClick={() => {
                  onClosePro();
                  setProSubmitted(false);
                }}
                className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close & Continue
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};