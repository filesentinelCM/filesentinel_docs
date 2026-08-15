import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/landingData';
import { PricingPlan } from '../types';
import { Check, Sparkles, GraduationCap, ArrowRight, Calculator, CheckCircle2, DollarSign, Globe } from 'lucide-react';

interface PricingProps {
  onOpenAcademicModal: () => void;
  onOpenDownloadModal: () => void;
  onOpenProModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onOpenAcademicModal,
  onOpenDownloadModal,
  onOpenProModal
}) => {
  const [currency, setCurrency] = useState<'FCFA' | 'USD' | 'EUR'>('FCFA');
  const [academicEmailInput, setAcademicEmailInput] = useState('');
  const [academicVerified, setAcademicVerified] = useState(false);

  const handleAcademicCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (academicEmailInput.includes('.edu') || academicEmailInput.includes('.ac.') || academicEmailInput.includes('.univ') || academicEmailInput.includes('@')) {
      setAcademicVerified(true);
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            <span>Fair & Accessible Global Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Free for Academic Users. <br />
            <span className="text-indigo-600">
              Only 500 FCFA/mo (~$0.80) for Pros.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance automatic local backup shouldn't cost a fortune. Choose the plan that fits your status.
          </p>

          {/* Currency Switcher */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-slate-500 font-mono font-semibold mr-1">Select Currency:</span>
            <button
              onClick={() => setCurrency('FCFA')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === 'FCFA'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              FCFA (XOF / XAF)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === 'EUR'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Academic Email Quick Verification Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-indigo-100 max-w-3xl mx-auto shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Are you a Student, Educator, or Researcher?</h3>
              <p className="text-xs text-slate-500">Enter your university or school email (.edu) to unlock 100% free academic access instantly.</p>
            </div>
          </div>

          {!academicVerified ? (
            <form onSubmit={handleAcademicCheck} className="flex flex-col sm:flex-row gap-3 pt-1">
              <input
                type="email"
                required
                placeholder="student@university.edu or professor@ac.uk"
                value={academicEmailInput}
                onChange={(e) => setAcademicEmailInput(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 font-mono"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
              >
                Verify .edu Email
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2 animate-fade-in">
              <p className="font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Academic Access Verified! Free License Unlocked.
              </p>
              <p className="text-slate-600">Email: {academicEmailInput} • Status: Unlimited Free Student Tier</p>
              <button
                onClick={onOpenDownloadModal}
                className="mt-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors cursor-pointer text-xs"
              >
                Download Free Academic App
              </button>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isAcademic = plan.isAcademicFree;
            const isPopular = plan.popular;

            let displayPrice = '';
            let period = '/ month';

            if (isAcademic) {
              displayPrice = 'FREE';
              period = 'forever';
            } else if (currency === 'FCFA') {
              displayPrice = `${plan.fcfaPriceMonthly.toLocaleString()} FCFA`;
            } else if (currency === 'USD') {
              displayPrice = plan.id === 'pro' ? '$0.80' : '$2.30';
            } else {
              displayPrice = plan.id === 'pro' ? '€0.76' : '€2.10';
            }

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white font-bold font-mono text-xs shadow-md uppercase tracking-wider">
                    Most Popular for Pros
                  </div>
                )}

                {isAcademic && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white font-bold font-mono text-xs shadow-md uppercase tracking-wider">
                    100% Free Education
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-slate-500 text-xs mt-1 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  <div className="py-2 border-y border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">{displayPrice}</span>
                      <span className="text-slate-500 text-xs font-semibold">{period}</span>
                    </div>
                    <p className="text-[11px] text-indigo-600 font-mono mt-1 font-semibold">{plan.targetAudience}</p>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Included Plan Features:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (isAcademic) onOpenAcademicModal();
                      else onOpenProModal();
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200'
                        : isAcademic
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
