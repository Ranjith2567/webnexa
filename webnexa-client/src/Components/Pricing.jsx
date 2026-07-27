import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = ({ onSelectPlan }) => {
  const plans = [
    {
      name: "Special Moments",
      desc: "For Birthdays, Anniversaries, Proposals & Love Stories.",
      features: [
        { text: "Custom Romantic / Birthday Theme", included: true },
        { text: "Photo Gallery & Memories Timeline", included: true },
        { text: "Background Music Integration", included: true },
        { text: "Countdown Timer & Love Notes", included: true },
        { text: "Custom Domain / Hosting Setup", included: false }
      ],
      highlighted: false
    },
    {
      name: "Portfolio / Personal",
      desc: "Ideal for students, freelancers, and job seekers.",
      features: [
        { text: "Sleek Personal Branding Page", included: true },
        { text: "Projects & Skills Showcase", included: true },
        { text: "Resume / CV Download Link", included: true },
        { text: "Social & Contact Links", included: true },
        { text: "Advanced E-Commerce Store", included: false }
      ],
      highlighted: true
    },
    {
      name: "Business & E-Commerce",
      desc: "For small shops, startups, and online stores.",
      features: [
        { text: "Multi-Section Professional Website", included: true },
        { text: "Product Catalog / Services Grid", included: true },
        { text: "Inquiry & Contact Forms", included: true },
        { text: "Direct WhatsApp / Instagram CTA", included: true },
        { text: "1 Month Free Maintenance & SEO", included: true }
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[#07090f] relative border-t border-[#1f293d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#38bdf8]"></span> PRICING PLANS <span className="w-8 h-px bg-[#38bdf8]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Simple, transparent pricing for <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7]">everyone</span>.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Choose the perfect plan that fits your requirements. No hidden charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-[#0b0f19] border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted 
                  ? 'border-[#38bdf8] shadow-2xl shadow-[#38bdf8]/10' 
                  : 'border-[#1f293d] hover:border-gray-600'
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-8 min-h-8">{plan.desc}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-xs md:text-sm">
                      {feat.included ? (
                        <Check size={16} className="text-[#38bdf8] shrink-0" />
                      ) : (
                        <X size={16} className="text-gray-600 shrink-0" />
                      )}
                      <span className={feat.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Started Button */}
              <button 
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-4 rounded-xl font-extrabold text-sm transition-all cursor-pointer ${
                  plan.highlighted
                    ? 'bg-linear-to-r from-[#38bdf8] to-[#0284c7] text-[#07090f] shadow-lg shadow-[#38bdf8]/20 hover:opacity-95'
                    : 'bg-[#111827] text-white border border-[#1f293d] hover:bg-[#1a2333]'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;