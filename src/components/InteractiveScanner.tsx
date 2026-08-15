import React, { useState } from 'react';
import { INITIAL_BACKUP_FOLDERS, INITIAL_SYNC_EVENTS } from '../data/landingData';
import { SyncFileEvent } from '../types';
import { 
  Terminal, FolderPlus, FilePlus, RefreshCw, HardDrive, CheckCircle2, 
  FolderCheck, History, RotateCcw, Zap, ShieldCheck, FileText, Trash2, Sparkles 
} from 'lucide-react';

export const InteractiveScanner: React.FC = () => {
  const [folders, setFolders] = useState(INITIAL_BACKUP_FOLDERS);
  const [events, setEvents] = useState<SyncFileEvent[]>(INITIAL_SYNC_EVENTS);
  const [newFileName, setNewFileName] = useState('');
  const [newFileFolder, setNewFileFolder] = useState('~/Documents/PhD_Thesis_2026');
  const [selectedFolderId, setSelectedFolderId] = useState(folders[0].id);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleAddFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFileName.trim()) return;

    setIsSimulating(true);

    setTimeout(() => {
      const targetFolder = folders.find((f) => f.path === newFileFolder) || folders[0];
      const speed = parseFloat((Math.random() * 0.5 + 0.1).toFixed(2));

      const newEvent: SyncFileEvent = {
        id: 'evt-' + Date.now(),
        fileName: newFileName.trim(),
        fileSize: '240 KB',
        sourcePath: targetFolder.path,
        targetPath: targetFolder.targetDestination,
        action: 'CREATED',
        timestamp: 'Just now',
        syncTimeMs: speed,
        hash: `0x${Math.random().toString(16).substring(2, 10)}`
      };

      setEvents((prev) => [newEvent, ...prev]);
      setFolders((prev) =>
        prev.map((f) =>
          f.id === targetFolder.id
            ? { ...f, fileCount: f.fileCount + 1, lastSynced: 'Just now' }
            : f
        )
      );

      setNewFileName('');
      setIsSimulating(false);
    }, 300);
  };

  const handleSimulateDelete = (fileName: string) => {
    const targetFolder = folders[0];
    const speed = parseFloat((Math.random() * 0.4 + 0.1).toFixed(2));

    const newEvent: SyncFileEvent = {
      id: 'evt-' + Date.now(),
      fileName: fileName,
      fileSize: '0 KB',
      sourcePath: targetFolder.path,
      targetPath: targetFolder.targetDestination,
      action: 'DELETED',
      timestamp: 'Just now',
      syncTimeMs: speed,
      hash: `0x${Math.random().toString(16).substring(2, 10)}`
    };

    setEvents((prev) => [newEvent, ...prev]);
  };

  return (
    <section id="scanner" className="py-20 md:py-28 bg-white relative border-t border-slate-100">
      
      {/* Background Accent Ambient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Folder Sync Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Test Real-Time Directory Sync <span className="text-indigo-600">Live</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Create a file in your source folder below and watch FileSentinel mirror it to your local target drive in sub-milliseconds with zero cloud required.
          </p>
        </div>

        {/* Playground Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Create File & Folder Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Create / Modify Test File Form */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FilePlus className="w-4 h-4 text-indigo-600" />
                  Simulate File Change
                </h3>
                <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Sub-ms Speed
                </span>
              </div>

              <form onSubmit={handleAddFile} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                    Select Target Monitored Folder
                  </label>
                  <select
                    value={newFileFolder}
                    onChange={(e) => setNewFileFolder(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-mono focus:outline-none focus:border-indigo-600"
                  >
                    {folders.map((f) => (
                      <option key={f.id} value={f.path}>
                        {f.name} ({f.path})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                    File Name To Create / Modify
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. final_thesis_chapter_5.docx"
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                      className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                    />
                    <button
                      type="submit"
                      disabled={isSimulating || !newFileName.trim()}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                    >
                      {isSimulating ? 'Syncing...' : 'Save File'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Quick Preset Actions */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 block mb-2 font-semibold">Quick Actions:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setNewFileName('phd_data_matrix_2026.csv');
                    }}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono rounded-lg border border-slate-200"
                  >
                    + Thesis Data Matrix
                  </button>
                  <button
                    onClick={() => {
                      setNewFileName('main_rust_kernel.rs');
                    }}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono rounded-lg border border-slate-200"
                  >
                    + Rust Kernel Source
                  </button>
                  <button
                    onClick={() => handleSimulateDelete('old_draft_backup.tmp')}
                    className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 text-[11px] font-mono rounded-lg border border-rose-200 flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Delete Temp File
                  </button>
                </div>
              </div>
            </div>

            {/* Active Monitored Folders Summary */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-600 uppercase">
                Active Local Folder Pairings
              </h4>
              <div className="space-y-2">
                {folders.map((f) => (
                  <div key={f.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{f.name}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{f.path} → {f.targetDestination}</p>
                    </div>
                    <span className="text-emerald-600 font-mono font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      SYNC ACTIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Event Stream Log */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden min-h-[460px] flex flex-col text-slate-200 font-mono text-xs">
              
              {/* Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">FileSentinel Rust Daemon Event Stream</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Kernel Hook Active
                </span>
              </div>

              {/* Event Stream List */}
              <div className="p-5 flex-1 space-y-3 overflow-y-auto max-h-[380px]">
                <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold border-b border-slate-800 pb-2">
                  <span>MUTATED FILE</span>
                  <span>MIRROR TARGET</span>
                  <span>MUTATION</span>
                  <span>LATENCY</span>
                </div>

                {events.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        {evt.fileName}
                      </p>
                      <p className="text-[10px] text-slate-500">{evt.fileSize} • Hash: {evt.hash}</p>
                    </div>

                    <div className="text-[10px] text-slate-400 truncate max-w-[180px]">
                      → <span className="text-indigo-300">{evt.targetPath}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                          evt.action === 'CREATED'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : evt.action === 'MODIFIED'
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}
                      >
                        {evt.action}
                      </span>
                      <span className="text-emerald-400 font-bold">{evt.syncTimeMs} ms</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Console Footer */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>100% Offline • Zero Remote Cloud Servers</span>
                <span className="text-emerald-400 font-bold">100% Data Sovereignty Preserved</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
