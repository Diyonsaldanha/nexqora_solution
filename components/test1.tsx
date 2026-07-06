"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const services = [
    { title: "Web Development", desc: "Custom enterprise websites, portals, and SaaS platforms built on modern frameworks.", icon: "🌐" },
    { title: "Mobile App Dev", desc: "High-performance native and hybrid apps ensuring a seamless user experience on iOS & Android.", icon: "📱" },
    { title: "Desktop Solutions", desc: "Robust desktop software for offline capability, heavy computation, and system integration.", icon: "💻" },
    { title: "Cloud Services", desc: "Secure cloud migration, server management, and scalable infrastructure architecture.", icon: "☁️" },
    { title: "ISO Consultancy", desc: "Professional guidance for ISO certification, compliance audits, and process standardization.", icon: "🛡️" },
    { title: "Domain & Hosting", desc: "Complete digital identity management, DNS services, SSL security, and premium hosting.", icon: "🔗" }
  ];

  const faqs = [
    { title: "Strategic Business Analysis", content: "We don't just write code. We sit down to understand your workflow, identifying bottlenecks where technology can actually save you money and time." },
    { title: "Secure & Scalable Architecture", content: "We build on enterprise-grade cloud foundations (AWS/Azure) ensuring your data is encrypted, backed up, and ready to scale from 100 to 1 million users." },
    { title: "Seamless UX/UI Design", content: "Functionality meets beauty. We prioritize the end-user experience, simplifying complex processes into intuitive interfaces that require zero training." }
  ];

  // Custom Digiket Shadow Token
  const shadowToken = "rgba(0, 0, 0, 0.26) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.23) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.09) 0px 10px 10px -3.75px";

  return (
    // Base surface updated to #fdf7f4 (warm beige), text: color.text.primary (#595959)
    <div className="font-sans bg-[#fdf7f4] text-[#595959] min-h-screen selection:bg-[#ff7f49] selection:text-[#001726]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[120px] overflow-hidden border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-[16px] md:px-[24px]">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Badge: surface.strong (#0a1128) */}
              <div className="inline-flex items-center gap-[8px] px-[12px] py-[6px] rounded-[7px] bg-[#0a1128] text-[#ffffff] text-[12px] font-medium mb-[24px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#ff7f49]"></span>
                Delivering Excellence in IT Since 2016
              </div>
              
              {/* Headline: text.tertiary (#001726), font.size.4xl (48px) */}
              <h1 className="text-[48px] font-medium text-[#001726] tracking-tight leading-[1.1] mb-[24px]">
                Your partner for <br className="hidden sm:block" />
                <span className="text-[#0000ee]">digital innovation.</span>
              </h1>
              
              {/* Body: text.primary (#595959), font.size.xl (20px), line-height (30.4px) */}
              <p className="text-[20px] leading-[30.4px] font-medium mb-[32px] max-w-lg">
                We provide end-to-end IT solutions ranging from Cloud Architecture and ISO Consultancy to bespoke Web & Mobile development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[16px]">
                {/* Primary Button: surface.raised (#ff7f49), text.tertiary (#001726) for WCAG AA contrast */}
                <button className="inline-flex justify-center items-center px-[24px] py-[14px] bg-[#ff7f49] text-[#001726] text-[16px] font-medium rounded-[12px] hover:bg-[#e66c3a] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee] transition-all shadow-sm shadow-[#ff7f49]/20">
                  Consult an Expert
                </button>
              </div>
            </motion.div>

            {/* Right Side: Structured UI Mockup instead of AI Blobs */}
            <motion.div 
              initial={{ opacity: 0, x: 24 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div 
                className="relative z-10 bg-[#ffffff] rounded-[20px] border border-gray-200 overflow-hidden"
                style={{ boxShadow: shadowToken }}
              >
                <div className="bg-gray-50/80 border-b border-gray-100 px-[24px] py-[16px] flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[12px] h-[12px] rounded-[4px] bg-[#0000ee]"></div>
                    <span className="text-[14px] font-medium text-[#001726]">System Architecture</span>
                  </div>
                </div>
                <div className="p-[24px] space-y-[16px]">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-[16px] p-[12px] rounded-[10px] bg-[#fdf7f4] border border-gray-100">
                      <div className="w-[40px] h-[40px] rounded-[7px] bg-[#0a1128] opacity-10"></div>
                      <div className="flex-1 space-y-[8px]">
                        <div className="h-[8px] bg-[#0a1128] opacity-20 rounded-full w-1/3"></div>
                        <div className="h-[8px] bg-[#595959] opacity-20 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Accent elements */}
              <div className="absolute -bottom-[24px] -left-[24px] w-[120px] h-[120px] bg-[#ff7f49] rounded-[20px] opacity-20 -z-10"></div>
              <div className="absolute -top-[24px] -right-[24px] w-[80px] h-[80px] bg-[#0000ee] rounded-[14px] opacity-10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (FAQ) ================= */}
      <section className="relative py-[80px] lg:py-[120px]">
        <div className="max-w-7xl mx-auto px-[16px] md:px-[24px]">
          <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center">
            
            <div className="order-2 lg:order-1">
              <div className="mb-[32px]">
                <h2 className="text-[32px] md:text-[48px] font-medium text-[#001726] leading-[1.1] mb-[16px]">
                  We build solutions that <span className="text-[#0000ee]">scale with you.</span>
                </h2>
                <p className="text-[18px] leading-[30.4px] text-[#595959] font-medium">
                  Focused on implementation-ready architectures and accessible digital experiences.
                </p>
              </div>
              
              <div className="space-y-[12px]">
                {faqs.map((item, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-[14px] bg-[#ffffff] transition-all duration-200 overflow-hidden ${
                      activeIndex === index ? "border-[#0000ee]" : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ boxShadow: activeIndex === index ? shadowToken : 'none' }}
                  >
                    <button 
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)} 
                      aria-expanded={activeIndex === index}
                      className="flex items-center justify-between w-full p-[20px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0000ee]"
                    >
                      <span className={`text-[16px] font-medium transition-colors ${activeIndex === index ? "text-[#0000ee]" : "text-[#001726]"}`}>
                        {item.title}
                      </span>
                      <span className={`flex items-center justify-center w-[24px] h-[24px] transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#0000ee]" : "text-[#595959]"}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          transition={{ duration: 0.3, ease: "easeInOut" }} 
                          className="overflow-hidden"
                        >
                          <div className="px-[20px] pb-[20px] text-[16px] leading-[30.4px] text-[#595959] font-medium border-t border-gray-100 pt-[16px]">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div 
                className="relative rounded-[20px] overflow-hidden border border-gray-200 bg-white"
                style={{ boxShadow: shadowToken }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration focused on business strategy" 
                  className="w-full h-[400px] lg:h-[540px] object-cover filter contrast-[0.95]" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      {/* Changed background to white to alternate and create visual separation from the beige */}
      <section className="py-[80px] lg:py-[120px] bg-[#ffffff] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-[16px] md:px-[24px]">
          <div className="max-w-2xl mb-[48px]">
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#001726] leading-[1.1] mb-[16px]">
              Core Competencies
            </h2>
            <p className="text-[18px] leading-[30.4px] text-[#595959] font-medium">
              Implementation-ready solutions designed to integrate seamlessly into your enterprise environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {services.map((service, index) => (
              <Link 
                href="#" 
                key={index} 
                className="group flex flex-col bg-[#fdf7f4] rounded-[14px] p-[24px] border border-gray-200 transition-all hover:border-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px -1px" }}
              >
                <div className="w-[48px] h-[48px] rounded-[10px] bg-[#ffffff] shadow-sm flex items-center justify-center text-[24px] mb-[24px] group-hover:bg-[#0000ee] group-hover:text-[#ffffff] transition-colors border border-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-[20px] font-medium text-[#001726] mb-[12px] group-hover:text-[#0000ee] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[30.4px] text-[#595959] font-medium">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}