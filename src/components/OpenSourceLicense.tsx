import React from 'react';
import { Code, Github, GitBranch, ArrowRight, CheckCircle2, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

interface OpenSourceLicenseProps {
  onOpenDownloadModal: () => void;
}

export const OpenSourceLicense: React.FC<OpenSourceLicenseProps> = ({ onOpenDownloadModal }) => {
  return (
    <section id="open-source" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <Code className="w-3.5 h-3.5 text-indigo-600" />
            <span>Open Core & Dual License Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transparent Code. <br />
            <span className="text-indigo-600">
              Business Source License 1.1 (BSL)
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            FileSentinel is built with total transparency. Audit our Rust source code on GitHub, submit PRs, or build custom plugins.
          </p>
        </div>

        {/* License Explainer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          
          {/* Left Column: BSL 1.1 Details */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">How BSL 1.1 Works</h3>
                  <p className="text-xs text-slate-500">Fair open source with sustainable business growth</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <p><strong className="text-slate-900">100% Public Source Code:</strong> Every line of Rust and TypeScript source code is publicly accessible for auditing and security verification.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <p><strong className="text-slate-900">Free Non-Commercial & Personal Use:</strong> Individuals, students, educators, and internal non-competing business tools can use the app without restrictions.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <p><strong className="text-slate-900">Automatic Apache 2.0 Transition:</strong> Exactly 4 years after each release date, the license automatically converts to full Apache 2.0 open source forever.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/filesentinelCM/filesentinel"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <button
                onClick={onOpenDownloadModal}
                className="px-6 py-3 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold text-xs hover:bg-indigo-100 transition-colors flex items-center gap-2"
              >
                <span>Build from Source (cargo build)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Snippet / GitHub Mock UI */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl text-slate-200 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-white">filesentinel / src / cli / commands.rs</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px]">
                Rust v1.97.1 • BSL-1.1
              </span>
            </div>

            <div className="space-y-1 text-slate-300 overflow-x-auto text-[11px] leading-relaxed max-h-[360px] overflow-y-auto pr-2">
              <p className="text-slate-500">// FileSentinel CLI & Commands Definition (clap v4)</p>
              <p className="text-indigo-400">use <span className="text-cyan-300">clap</span>::&#123;Parser, Subcommand, ValueEnum&#125;;</p>
              <p className="text-indigo-400">use <span className="text-cyan-300">std::path</span>::PathBuf;</p>
              <br />
              <p className="text-amber-400">#[derive(Parser)]</p>
              <p className="text-amber-400">#[command(name = "filesentinel", version = "0.2.0")]</p>
              <p className="text-amber-400">#[command(about = "Outil de surveillance et synchronisation de fichiers")]</p>
              <p className="text-indigo-400">pub struct <span className="text-amber-300">Cli</span> &#123;</p>
              <p className="pl-4 text-amber-400">#[command(subcommand)]</p>
              <p className="pl-4 text-slate-300">pub command: <span className="text-cyan-300">Commands</span>,</p>
              <p className="pl-4 text-slate-500">/// Fichier de configuration</p>
              <p className="pl-4 text-slate-300">#[arg(short, long, default_value = <span className="text-emerald-300">"config.toml"</span>)]</p>
              <p className="pl-4 text-slate-300">pub config: <span className="text-cyan-300">String</span>,</p>
              <p className="pl-4 text-slate-500">/// Activer le mode verbeux</p>
              <p className="pl-4 text-slate-300">#[arg(short, long)]</p>
              <p className="pl-4 text-slate-300">pub verbose: <span className="text-cyan-300">bool</span>,</p>
              <p className="text-indigo-400">&#125;</p>
              <br />
              <p className="text-amber-400">#[derive(Subcommand)]</p>
              <p className="text-indigo-400">pub enum <span className="text-amber-300">Commands</span> &#123;</p>
              <p className="pl-4 text-slate-500">/// Démarrer la surveillance des répertoires</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">Watch</span> &#123; directories: Vec&lt;String&gt;, daemon: bool &#125;,</p>
              <p className="pl-4 text-slate-500">/// Effectuer une synchronisation manuelle</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">Sync</span> &#123; source: Option&lt;String&gt;, dest: Option&lt;String&gt; &#125;,</p>
              <p className="pl-4 text-slate-500">/// Afficher l'historique des versions d'un fichier</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">VersionHistory</span> &#123; path: PathBuf &#125;,</p>
              <p className="pl-4 text-slate-500">/// Restaurer une version spécifique</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">Restore</span> &#123; path: PathBuf, version: u32 &#125;,</p>
              <p className="pl-4 text-slate-500">/// Synchronisation réseau</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">NetworkSync</span> &#123; direction: SyncDirection &#125;,</p>
              <p className="pl-4 text-slate-500">/// Afficher la configuration / stats / règles</p>
              <p className="pl-4 text-emerald-400"><span className="text-yellow-200">ShowConfig</span>, <span className="text-yellow-200">Stats</span> &#123; period: String &#125;, <span className="text-yellow-200">Rules</span>, <span className="text-yellow-200">Init</span>,</p>
              <p className="text-indigo-400">&#125;</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
              {/* <span>Star GitHub Repo • 1.4k Stars</span> */}
              <span className="text-emerald-400 font-bold">cargo install filesentinel</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
