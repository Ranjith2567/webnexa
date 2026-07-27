import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: "Karthik R.",
    role: "Startup Founder",
    comment: "WebNexa built our business landing page in just 3 days. The speed and clean design completely blew our clients away!"
  },
  {
    name: "Priya S.",
    role: "UI/UX Freelancer",
    comment: "Got my personal portfolio built here. The dark theme and smooth layout helped me land high-paying international clients instantly."
  },
  {
    name: "Rahul & Sneha",
    role: "Anniversary Surprise",
    comment: "We ordered a custom anniversary love story website with countdowns and photos. It was the most magical gift ever!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted By <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] to-[#d97706]">Clients</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Here is what our happy clients have to say about their WebNexa experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <div 
              key={index}
              className="bg-[#0b0f19] p-8 rounded-2xl border border-[#1f293d] relative flex flex-col justify-between hover:border-[#f59e0b]/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={40} />
              
              <div>
                <div className="flex space-x-1 mb-6 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.comment}"</p>
              </div>

              <div>
                <div className="text-white font-bold">{item.name}</div>
                <div className="text-xs text-gray-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;