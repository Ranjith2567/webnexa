import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculates scroll position dynamically from window or body
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    // Attach listener to both window scroll & wheel/touchmove for maximum device compatibility
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07090f]/90 backdrop-blur-md border-b border-[#1f293d]">
      
      {/* Scroll Progress Line at the VERY TOP of the Navbar */}
      <div 
        className="absolute top-0 left-0 h-0.75 bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] transition-all duration-75 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        
        {/* Left: Brand Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group cursor-pointer z-10">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
            <img src="/logo.png" alt="WebNexa Logo" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-wider text-white leading-tight">
              WEB<span className="text-[#38bdf8]">NEXA</span>
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 leading-tight">
              Developer Studio
            </span>
          </div>
        </a>

        {/* Center: Nav Menu Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-300 font-medium absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="hover:text-[#38bdf8] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#38bdf8] transition-colors">About</a>
          <a href="#services" className="hover:text-[#38bdf8] transition-colors">Services</a>
          <a href="#products" className="hover:text-[#38bdf8] transition-colors">Products</a>
          <a href="#process" className="hover:text-[#38bdf8] transition-colors">Process</a>
          <a href="#pricing" className="hover:text-[#38bdf8] transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a>
        </div>

        {/* Right: Start a Project Button */}
        <div className="hidden md:flex items-center z-10">
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#38bdf8] to-[#0284c7] text-[#07090f] font-bold shadow-lg shadow-[#38bdf8]/20 hover:opacity-95 transition-all flex items-center gap-1.5 whitespace-nowrap group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white z-20"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090f] border-b border-[#1f293d] px-6 py-6 flex flex-col gap-4 animate-fade-in-up">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">Services</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}className="text-gray-300 hover:text-[#38bdf8]">Products</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">Process</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">Pricing</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#38bdf8]">Contact</a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-linear-to-r from-[#38bdf8] to-[#0284c7] text-[#07090f] font-bold"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;