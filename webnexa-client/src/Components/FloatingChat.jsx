
import React from 'react';

const FloatingChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* YouTube Floating Button */}
      <a
        href="https://www.youtube.com/@webnexa_offical"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Channel"
        title="Subscribe on YouTube"
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1f293d] bg-[#07090f] p-1 shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FF0000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
          >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
          </svg>
        </div>
      </a>

      {/* Instagram Floating Button */}
      <a
        href="https://www.instagram.com/webnexa_offical?igsh=MWF0azc1Y3pobWQ1Zg=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Follow on Instagram"
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f293d] bg-[#07090f] p-1 shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full shadow-inner"
          style={{
            background:
              'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
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
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
      </a>

    </div>
  );
};

export default FloatingChat;
