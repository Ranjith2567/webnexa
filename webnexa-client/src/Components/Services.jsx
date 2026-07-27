import React from 'react';
import { Globe, Laptop, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: "Business Websites",
    desc: "Professional multi-section websites designed to turn visitors into paying customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    icon: <Globe className="text-[#38bdf8]" size={24} />
  },
  {
    title: "Developer Portfolios",
    desc: "Sleek, modern personal branding pages for students, freelancers, and job seekers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    icon: <Laptop className="text-[#38bdf8]" size={24} />
  },
  {
    title: "Birthday & Love Surprises",
    desc: "Custom romantic web apps with photo timelines, love notes, and background music.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop",
    icon: <Heart className="text-[#38bdf8]" size={24} />
  },
{
    title: "E-Commerce Stores",
    desc: "High-performance online shopping portals with product catalogs and smooth checkout flows.",
    // Puthu working image link itho:
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop",
    icon: <ShoppingBag className="text-[#38bdf8]" size={24} />
  }
];

const Services = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#38bdf8]"></span> WHAT WE DO <span className="w-8 h-px bg-[#38bdf8]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Complete digital solutions, managed under <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7]">one roof</span>.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            From first concept to final deployment — we handle design, coding, and performance so you don't have to juggle multiple developers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-[#0b0f19] border border-[#1f293d] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#38bdf8]/50 transition-all duration-300"
            >
              <div>
                {/* Card Image */}
                <div className="h-44 w-full overflow-hidden relative border-b border-[#1f293d]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-[#07090f]/80 backdrop-blur-md p-2 rounded-xl border border-[#1f293d]">
                    {service.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#38bdf8] hover:text-white transition-colors cursor-pointer"
                >
                  Enquire Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;