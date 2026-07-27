import React from 'react';

const statsData = [
  { number: "100%", value: "Client Satisfaction", desc: "Custom crafted to perfection" },
  { number: "24/7", value: "Support & Guidance", desc: "Always here to help you grow" },
  { number: "Lightning", value: "Fast Performance", desc: "Optimized speed & smooth UI" },
  { number: "Affordable", value: "Pricing Plans", desc: "Fits every budget easily" }
];

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-[#0b0f19] border-t border-b border-[#1f293d]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="p-4">
            <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7] mb-2">
              {stat.number}
            </div>
            <div className="text-white font-bold text-sm md:text-base mb-1">{stat.value}</div>
            <div className="text-gray-400 text-xs md:text-sm">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;