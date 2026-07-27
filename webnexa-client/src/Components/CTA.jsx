import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b132b] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-[#1e293b]">
          
          {/* Subtle Right Glow Effect (from image) */}
          <div className="absolute top-0 right-0 w-full h-full bg-radial from-[#1d4ed8]/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to grow your business?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Let's build your brand, generate more leads, and grow your business — together.
            </p>
            
            <div className="pt-2">
              <button 
                onClick={scrollToContact}
                className="bg-white text-[#0b132b] hover:bg-gray-100 font-extrabold text-sm md:text-base px-8 py-3.5 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Partner With Us <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;