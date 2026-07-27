import React from 'react';

const processSteps = [
  {
    step: "01",
    title: "Choose & Discuss",
    description: "Tell us what you want — whether it's a business site, portfolio, or a magical birthday/love story surprise."
  },
  {
    step: "02",
    title: "Share Details / Content",
    description: "Send us your text, photos, logos, or special memories (for personal/birthday sites) via chat or Instagram."
  },
  {
    step: "03",
    title: "We Code & Build",
    description: "Our developers craft your website with smooth animations, stunning visuals, and blazing-fast speed."
  },
  {
    step: "04",
    title: "Review & Launch",
    description: "We show you the preview, make any tweaks you need, and launch your live website to the world!"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-[#0b0f19] relative border-t border-b border-[#1f293d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] to-[#d97706]">Work</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            A simple, friendly 4-step workflow to get your dream website ready without any hassle.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div 
              key={index}
              className="bg-[#07090f] p-8 rounded-2xl border border-[#1f293d] relative overflow-hidden group hover:border-[#f59e0b]/50 transition-all duration-300"
            >
              {/* Giant Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-extrabold text-white/5 group-hover:text-[#f59e0b]/10 transition-colors pointer-events-none">
                {item.step}
              </div>
              
              <div className="text-lg font-bold text-[#f59e0b] mb-4">Phase {item.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;