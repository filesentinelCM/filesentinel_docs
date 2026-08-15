import React, { useState } from 'react';
import { 
  Radio, Shield, FileCheck, ArrowRight, Server, Cloud, Lock, CheckCircle2, Terminal 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [deploymentMode, setDeploymentMode] = useState<'cloud' | 'hybrid' | 'onprem'>('cloud');

  const steps = [
    {
      num: '01',
      title: 'Hook & Intercept',
      desc: 'FileSentinel sits transparently between your storage gateways, APIs, and end-user devices via lightweight daemon agents or zero-code webhook listeners.',
      features: ['S3 / GCP Bucket Event Hooks', 'OS Kernel File Interceptor', 'API Gateway Reverse Proxy']
    },
    {
      num: '02',
      title: 'Deep Scan & Disarm',
      desc: 'In-memory stream evaluation verifies file entropy, strips embedded macros, scans for 100+ PII types, and evaluates YARA threat signatures in under 5ms.',
      features: ['Zero-Knowledge In-Memory RAM Scan', 'Neural OCR Document Inspection', 'Automated Macro Stripping']
    },
    {
      num: '03',
      title: 'Enforce & Audit',
      desc: 'Threats are automatically quarantined or redacted. Clean sanitized files are delivered to storage while audit logs stream directly to your SIEM/Datadog.',
      features: ['Automated Secret Masking', 'Real-Time SIEM JSON Stream', 'Cryptographic SHA-256 Ledger']
    }
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <Server className="w-3.5 h-3.5" />
            <span>Architecture & Execution Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How FileSentinel Protects Your <br />
            <span className="text-indigo-600">
              Data Pipeline in 3 Steps
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Zero friction for users. Total visibility and protection for your SecOps team.
          </p>
        </div>

        {/* 3 Steps Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all shadow-sm hover:shadow-md relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-indigo-600">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-white text-indigo-600 border border-slate-200 shadow-sm">
                    {idx === 0 ? <Radio className="w-5 h-5" /> : idx === 1 ? <Shield className="w-5 h-5" /> : <FileCheck className="w-5 h-5" />}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Options Interactive Selector Box */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-600" />
                Select Your Deployment Architecture
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Choose how FileSentinel integrates with your compliance perimeter.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setDeploymentMode('cloud')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  deploymentMode === 'cloud'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cloud SaaS
              </button>
              <button
                onClick={() => setDeploymentMode('hybrid')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  deploymentMode === 'hybrid'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Private VPC
              </button>
              <button
                onClick={() => setDeploymentMode('onprem')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  deploymentMode === 'onprem'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Air-Gapped On-Prem
              </button>
            </div>
          </div>

          <div className="pt-6 font-mono text-xs text-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-slate-500 text-[10px] uppercase">Data Perimeter</span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {deploymentMode === 'cloud' ? 'Managed Cloud Global Mesh' : deploymentMode === 'hybrid' ? 'Your Dedicated AWS/GCP VPC' : 'Isolated Bare-Metal Hardware'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-slate-500 text-[10px] uppercase">Encryption Key Management</span>
              <p className="text-sm font-bold text-indigo-600 mt-1">
                {deploymentMode === 'onprem' ? 'Hardware Security Module (HSM)' : 'Customer Managed Keys (KMS)'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-slate-500 text-[10px] uppercase">Deployment Speed</span>
              <p className="text-sm font-bold text-indigo-600 mt-1">
                {deploymentMode === 'cloud' ? '< 2 Minutes (Zero Infra)' : deploymentMode === 'hybrid' ? 'Terraform / Helm Chart (15 mins)' : 'Kubernetes Air-Gapped Bundle'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
