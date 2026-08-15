import React from 'react';
import { Shield, Award, CheckCircle, Lock, ShieldCheck, Cpu } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  const companies = [
    'Datadog',
    'Snowflake',
    'Cloudflare',
    'MongoDB',
    'Twilio',
    'Vercel',
    'DigitalOcean',
    'Palo Alto Networks'
  ];

  const complianceBadges = [
    { label: 'SOC 2 Type II', sub: 'Certified' },
    { label: 'ISO 27001', sub: 'Compliant' },
    { label: 'HIPAA', sub: 'Protected' },
    { label: 'GDPR', sub: 'Enforced' },
    { label: 'PCI-DSS', sub: 'Level 1' },
    { label: 'FedRAMP', sub: 'Ready' }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by Security Teams Protecting 500+ Million Critical Files Daily
        </p>

        {/* Company Logo Grid / Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
          {companies.map((company, i) => (
            <div
              key={i}
              className="py-3 px-4 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 text-center transition-all group hover:bg-slate-50 shadow-sm"
            >
              <span className="font-sans text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                {company}
              </span>
            </div>
          ))}
        </div>

        {/* Compliance Badges Row */}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {complianceBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-mono text-indigo-700"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span className="font-bold text-indigo-900">{badge.label}</span>
              <span className="text-indigo-300">•</span>
              <span className="text-indigo-600 font-semibold">{badge.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
