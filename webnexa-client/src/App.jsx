import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Services from './Components/Services';
import Process from './Components/Process';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import CTA from './Components/CTA';
import FloatingChat from './Components/FloatingChat';
import Preloader from './Components/Preloader';
import CustomCursor from './Components/CustomCursor';
import Products from './Components/Products';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [loading, setLoading] = useState(true);

// Auto Email Notification with Location, IP & Device Info
  useEffect(() => {
    const notifyVisitor = async () => {
      const hasVisited = sessionStorage.getItem('webnexa_visited');
      
      if (!hasVisited) {
        try {
          // Fetch Visitor Location & IP Address
          const ipResponse = await fetch('https://ipapi.co/json/');
          const ipData = await ipResponse.json();

          const visitorInfo = new FormData();
          // ⚠️ Puthiya Visitor Tracker Access Key-a inga podunga
          visitorInfo.append('access_key', import.meta.env.VITE_VISTER_ACCESS_KEY_1);
          visitorInfo.append('subject', '🚀 New Visitor on WebNexa Website!');
          visitorInfo.append('from_name', 'WebNexa Visitor Tracker');
          visitorInfo.append('message', `
            A new visitor has landed on WebNexa!
            
            📍 Location: ${ipData.city || 'Unknown'}, ${ipData.region || ''}, ${ipData.country_name || 'Unknown'}
            🌐 IP Address: ${ipData.ip || 'Unknown'}
            💻 Network Provider: ${ipData.org || 'Unknown'}
            📱 Device Screen: ${window.innerWidth}x${window.innerHeight}px
            🕒 Time: ${new Date().toLocaleString()}
            🌐 Page URL: ${window.location.href}
          `);

          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: visitorInfo,
          });

          sessionStorage.setItem('webnexa_visited', 'true');
        } catch (err) {
          console.log('Visitor tracking skipped:', err);
        }
      }
    };

    notifyVisitor();
  }, []);

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 return (
    <div className="bg-[#07090f] min-h-screen text-white font-sans selection:bg-[#38bdf8] selection:text-[#07090f] relative overflow-x-hidden">
      {/* Glow Cursor Animation */}
      <CustomCursor />

      {/* Intro Preloader Animation */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Website Content */}
      {!loading && (
        <div className="animate-fade-in-up relative">
          <Navbar />
          <Hero />
          <Stats />
          <About />
<Services />
<Products />
<Process />
          <Pricing onSelectPlan={handleSelectPlan} />
          <Testimonials />
          <CTA />
          <Contact selectedPlan={selectedPlan} />
          <Footer />
        </div>
      )}

      {/* Floating Chat-a antha main content div-ku veliya, direct-ah main container-kulla potrukonha */}
      <FloatingChat />
    </div>
  );
}

export default App;