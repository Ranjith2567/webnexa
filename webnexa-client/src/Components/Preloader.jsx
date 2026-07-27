import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Initial scale up
    const t1 = setTimeout(() => setStage(1), 600);
    // Stage 2: Subtitle text fade-in
    const t2 = setTimeout(() => setStage(2), 1400);
    // Stage 3: Complete and smoothly hide preloader
    const t3 = setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-9999 flex items-center justify-center bg-[#07090f] transition-opacity duration-1000 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        
        {/* Your Custom Preloader Logo Image */}
        <div className={`transition-all duration-700 transform ${
          stage >= 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}>
          <div className="w-28 h-28 flex items-center justify-center">
            <img src="/preloader-logo.png" alt="WebNexa Logo" className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]" />
          </div>
        </div>

        {/* Brand Name Text */}
        <div className={`flex flex-col items-center mt-3 transition-all duration-700 transform ${
          stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <span className="text-white font-extrabold tracking-widest text-sm">
            WEB<span className="text-[#38bdf8]">NEXA</span>
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-0.5">
            Developer Studio
          </span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;