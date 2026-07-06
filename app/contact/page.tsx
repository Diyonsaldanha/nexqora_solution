 "use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Reusable SVG Icons
const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Shadow Token from Design System
  const shadowToken = "rgba(0, 0, 0, 0.26) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.23) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.09) 0px 10px 10px -3.75px";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="font-sans text-[#0a1128] bg-[#ffffff] min-h-screen selection:bg-[#ff7f49] selection:text-[#001726]">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative pt-[60px] pb-[40px] lg:pt-[100px] lg:pb-[60px] bg-[#fdf7f4] border-b border-gray-200/50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff7f49 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] lg:px-[64px] relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-[8px] text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[16px]">
              <span>✉️</span> Get in Touch
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[40px] lg:text-[56px] leading-[1.1] font-medium text-[#0a1128] mb-[24px] tracking-tight">
              Let's Build Something Great Together
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[20px] text-[#595959] leading-[32px] font-medium">
              Whether you have a fully mapped out project or just a rough idea, our team is ready to help you bring it to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT SPLIT SECTION ================= */}
      <section className="py-[60px] lg:py-[100px] px-[20px] md:px-[40px] lg:px-[64px] max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-[48px] lg:gap-[64px] items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[32px]"
          >
            <div>
              <h3 className="text-[24px] font-bold text-[#0a1128] mb-[8px]">Contact Information</h3>
              <p className="text-[#595959] text-[15px] font-medium leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#fdf7f4] flex items-center justify-center border border-[#ff7f49]/20 group-hover:bg-[#ff7f49]/10 transition-colors shrink-0">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#595959] uppercase tracking-wider mb-[4px]">Email Us</p>
                  <a href="mailto:hello@yourcompany.com" className="text-[16px] font-medium text-[#0a1128] hover:text-[#ff7f49] transition-colors focus-visible:outline-[#0000ee]">
                    hello@yourcompany.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#fdf7f4] flex items-center justify-center border border-[#ff7f49]/20 group-hover:bg-[#ff7f49]/10 transition-colors shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#595959] uppercase tracking-wider mb-[4px]">Call Us</p>
                  <a href="tel:+10000000000" className="text-[16px] font-medium text-[#0a1128] hover:text-[#ff7f49] transition-colors focus-visible:outline-[#0000ee]">
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#fdf7f4] flex items-center justify-center border border-[#ff7f49]/20 group-hover:bg-[#ff7f49]/10 transition-colors shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#595959] uppercase tracking-wider mb-[4px]">Visit Us</p>
                  <p className="text-[16px] font-medium text-[#0a1128] leading-[24px]">
                    123 Innovation Drive, Suite 400<br />
                    Tech City, TC 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#fdf7f4] flex items-center justify-center border border-[#ff7f49]/20 group-hover:bg-[#ff7f49]/10 transition-colors shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#595959] uppercase tracking-wider mb-[4px]">Working Hours</p>
                  <p className="text-[16px] font-medium text-[#0a1128] leading-[24px]">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM (EST)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#ffffff] p-[32px] md:p-[48px] rounded-[24px] border border-gray-100 relative overflow-hidden"
            style={{ boxShadow: shadowToken }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-[64px] h-[64px] bg-[#ff7f49]/10 text-[#ff7f49] rounded-full flex items-center justify-center mb-[24px]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-[#0a1128] mb-[12px]">Message Sent!</h3>
                <p className="text-[#595959] text-[16px] font-medium max-w-sm mx-auto mb-[32px]">
                  Thank you for reaching out. One of our experts will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#ff7f49] font-bold hover:text-[#e66c3a] transition-colors focus-visible:outline-[#0000ee]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                <div className="grid md:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="firstName" className="text-[14px] font-bold text-[#0a1128]">First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="lastName" className="text-[14px] font-bold text-[#0a1128]">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="email" className="text-[14px] font-bold text-[#0a1128]">Work Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="phone" className="text-[14px] font-bold text-[#0a1128]">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label htmlFor="service" className="text-[14px] font-bold text-[#0a1128]">How can we help? <span className="text-red-500">*</span></label>
                  <select 
                    id="service" 
                    required
                    className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230a1128' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="" disabled selected>Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="desktop">Desktop Solutions</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="iso">ISO Consultancy</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label htmlFor="message" className="text-[14px] font-bold text-[#0a1128]">Project Details <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="bg-[#fdf7f4] border border-gray-200 text-[#0a1128] text-[15px] font-medium rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#ff7f49] focus:ring-4 focus:ring-[#ff7f49]/10 transition-all resize-none"
                    placeholder="Tell us a bit about your goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-[8px] flex items-center justify-center gap-[8px] bg-[#ff7f49] text-white px-[24px] py-[16px] rounded-[12px] font-bold text-[16px] hover:bg-[#e66c3a] transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-[20px] h-[20px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message <SendIcon /></>
                  )}
                </button>
                <p className="text-[13px] text-[#595959] text-center mt-[8px]">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-[#0a1128]">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}