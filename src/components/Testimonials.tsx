import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote, Star, ShieldCheck, GraduationCap } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold text-indigo-700">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Real User Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Students, Researchers & <br />
            <span className="text-indigo-600">
              Independent Developers
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read how FileSentinel provides zero-effort data protection across universities, labs, and tech consultancies.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-indigo-400/40 group-hover:text-indigo-500 transition-colors" />

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                    <p className="text-[11px] text-indigo-600 font-medium">{item.institution}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-extrabold text-indigo-600 block bg-indigo-50 px-2 py-1 rounded border border-indigo-100">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
