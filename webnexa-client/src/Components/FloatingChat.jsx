import React from 'react';

const FloatingChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram Floating Button */}
      <a 
        href="https://www.instagram.com/webnexa_offical?igsh=MWF0azc1Y3pobWQ1Zg==" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-14 h-14 rounded-full bg-[#07090f] border-2 border-[#1f293d] p-1 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
      >
        <div 
          className="w-full h-full rounded-full flex items-center justify-center shadow-inner"
          style={{
            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default FloatingChat;