import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react';

const Contact = ({ selectedPlan }) => {
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState('Business Website');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Whenever user clicks "Get Started" in pricing, update textarea message & service type automatically
  useEffect(() => {
    if (selectedPlan) {
      setMessage(`Hi WebNexa team, I am interested in the "${selectedPlan}" plan. Let's discuss details!`);
      
      // Auto-select corresponding service type if it matches
      if (selectedPlan.includes('Portfolio')) {
        setSelectedService('Developer Portfolio');
      } else if (selectedPlan.includes('Moments')) {
        setSelectedService('Birthday / Love Surprise App');
      } else if (selectedPlan.includes('Business')) {
        setSelectedService('E-Commerce Store');
      }
    }
  }, [selectedPlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.target);
    // Web3Forms API Key integration
    formData.append('access_key', 'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2');
    formData.append('service', selectedService);
    formData.append('message', message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again!');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#07090f] relative border-t border-[#1f293d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] flex items-center gap-2">
            <span className="w-8 h-px bg-[#38bdf8]"></span> GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let's grow your business <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#0284c7]">together</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-start gap-4 pb-6 border-b border-[#1f293d]">
              <div className="bg-[#0b0f19] border border-[#1f293d] p-3.5 rounded-xl text-[#38bdf8] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <p className="text-white font-medium text-sm md:text-base">webnexa.official@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-[#1f293d]">
              <div className="bg-[#0b0f19] border border-[#1f293d] p-3.5 rounded-xl text-[#38bdf8] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                <p className="text-white font-medium text-sm md:text-base">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-[#1f293d]">
              <div className="bg-[#0b0f19] border border-[#1f293d] p-3.5 rounded-xl text-[#38bdf8] shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Business Hours</p>
                <p className="text-white font-medium text-sm md:text-base">Mon – Sat, 9:00 AM – 7:00 PM</p>
                <p className="text-xs text-gray-500 mt-0.5">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-[#1f293d] p-8 md:p-10 rounded-2xl shadow-xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  We have received your enquiry. Our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-4 bg-[#111827] text-white px-6 py-2.5 rounded-xl text-xs font-bold border border-[#1f293d] hover:bg-[#1a2333] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" name="name" required placeholder="Your name" className="w-full bg-[#07090f] border border-[#1f293d] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8]" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                    <input type="tel" name="phone" placeholder="+91 Your phone number" className="w-full bg-[#07090f] border border-[#1f293d] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                  <input type="email" name="email" required placeholder="you@company.com" className="w-full bg-[#07090f] border border-[#1f293d] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8]" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Project / Service Type</label>
                  <select 
                    name="service_type"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#07090f] border border-[#1f293d] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option className="bg-[#07090f]" value="Business Website">Business Website</option>
                    <option className="bg-[#07090f]" value="Developer Portfolio">Developer Portfolio</option>
                    <option className="bg-[#07090f]" value="Birthday / Love Surprise App">Birthday / Love Surprise App</option>
                    <option className="bg-[#07090f]" value="E-Commerce Store">E-Commerce Store</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Tell Us About Your Business & Goals</label>
                  <textarea 
                    name="message_body"
                    rows={4} 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What are you looking to build?" 
                    className="w-full bg-[#07090f] border border-[#1f293d] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8] resize-none"
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-red-400 text-xs font-semibold">{errorMsg}</p>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-linear-to-r from-[#38bdf8] to-[#0284c7] text-[#07090f] font-extrabold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#38bdf8]/20 hover:opacity-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Sending Message...' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;