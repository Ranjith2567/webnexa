import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05070b] border-t border-[#1f293d] pt-16 pb-28 sm:pb-20 px-6 text-gray-400 text-sm relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="text-2xl font-extrabold text-white tracking-wider">
            Web<span className="text-[#f59e0b]">Nexa</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Turning ideas into digital brands, and clicks into customers. A full-service web development agency based in Tamil Nadu, India.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#home" className="hover:text-[#38bdf8] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#38bdf8] transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-[#38bdf8] transition-colors">Services</a></li>
            <li><a href="#process" className="hover:text-[#38bdf8] transition-colors">Our Process</a></li>
            <li><a href="#pricing" className="hover:text-[#38bdf8] transition-colors">Pricing Plans</a></li>
            <li><a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2.5 text-xs">
            <li><span className="hover:text-[#38bdf8] transition-colors cursor-pointer">Business Websites</span></li>
            <li><span className="hover:text-[#38bdf8] transition-colors cursor-pointer">Developer Portfolios</span></li>
            <li><span className="hover:text-[#38bdf8] transition-colors cursor-pointer">Birthday & Love Surprises</span></li>
            <li><span className="hover:text-[#38bdf8] transition-colors cursor-pointer">E-Commerce Stores</span></li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Email & Location only) */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-[#38bdf8] shrink-0" />
              <span>webnexa.official@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={14} className="text-[#38bdf8] shrink-0" />
              <span>Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-[#1f293d]/50 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 WebNexa. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <Heart size={12} className="text-red-500 fill-red-500" /> for digital growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;