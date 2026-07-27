import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-125 h-75 md:h-125 bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0b0f19] border border-[#1f293d] px-4 py-2 rounded-full text-xs md:text-sm text-gray-300 mb-8 shadow-inner">
          <Sparkles size={16} className="text-[#38bdf8]" />
          <span>Professional Web Development & Digital Agency</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Turning Ideas Into <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7]">Digital Brands</span> & Magical Moments
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From high-performance business stores and developer portfolios to custom birthday surprises and love story web apps — we code it all.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-linear-to-r from-[#38bdf8] to-[#0284c7] text-[#07090f] px-8 py-4 rounded-xl font-extrabold text-sm md:text-base shadow-lg shadow-[#38bdf8]/20 hover:shadow-[#38bdf8]/40 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Get a Free Strategy Call <ArrowRight size={18} />
          </button>
          <a 
            href="#services"
            className="w-full sm:w-auto bg-[#0b0f19] hover:bg-[#111827] text-white border border-[#1f293d] px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all text-center"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;