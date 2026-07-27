import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#07090f] relative border-t border-[#1f293d]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header & Intro */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] flex items-center gap-2">
            <span className="w-8 h-px bg-[#38bdf8]"></span> ABOUT WEBNEXA
          </div>
          
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We don't just write code. We <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7]">build brands</span> that grow.
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Founded by passionate developers and designers, WebNexa combines technical expertise, clean code, and modern UI/UX design to deliver high-performance web applications — from business stores and developer portfolios to unforgettable custom birthday surprises across Tamil Nadu and beyond.
          </p>
        </div>

        {/* Bottom Mission & Vision Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#0b0f19] border border-[#1f293d] p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-all">
            <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#38bdf8]"></span> OUR MISSION
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              To empower businesses, creators, and individuals with innovative digital solutions that drive online visibility, engage target audiences, and maximize digital impact through top-tier web development.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0b0f19] border border-[#1f293d] p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-all">
            <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#38bdf8]"></span> OUR VISION
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              To become one of the most trusted and reliable digital web agencies — helping brands scale through cutting-edge technology, flawless user experience, and measurable digital results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;