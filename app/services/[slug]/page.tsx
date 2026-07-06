// File: app/services/[slug]/page.tsx
"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services-data";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7f49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const shadowToken = "rgba(0, 0, 0, 0.26) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.23) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.09) 0px 10px 10px -3.75px";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params promise to satisfy Next.js 15 requirements
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="font-sans text-[#0a1128] bg-[#ffffff] min-h-screen selection:bg-[#ff7f49] selection:text-[#001726]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-[40px] pb-[80px] lg:pt-[60px] lg:pb-[100px] bg-[#fdf7f4] border-b border-gray-200/50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff7f49 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] lg:px-[64px] relative z-10">
          <Link href="/" className="inline-flex items-center gap-[8px] text-[#595959] hover:text-[#ff7f49] font-medium text-[14px] transition-colors mb-[40px]">
            <ArrowLeft /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-[1fr_400px] gap-[64px] items-start">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
              <motion.div variants={fadeUp} className="w-[64px] h-[64px] bg-[#ffffff] rounded-[16px] flex items-center justify-center mb-[24px] border border-gray-100" style={{ boxShadow: shadowToken }}>
                <div className="scale-150">
                  <service.Icon />
                </div>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[40px] lg:text-[56px] leading-[1.1] font-medium text-[#0a1128] mb-[24px] tracking-tight">
                {service.title}
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[20px] text-[#595959] leading-[32px] font-medium">
                {service.heroDescription}
              </motion.p>
            </motion.div>

            {/* Quick Tech Stack Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="bg-[#ffffff] p-[32px] rounded-[24px] border border-gray-100 hidden lg:block" style={{ boxShadow: shadowToken }}>
              <h3 className="text-[16px] font-bold text-[#0a1128] mb-[24px] uppercase tracking-wider">Technologies We Use</h3>
              <div className="flex flex-wrap gap-[12px]">
                {service.stack.map((tech) => (
                  <span key={tech} className="bg-[#fdf7f4] border border-[#ff7f49]/20 text-[#0a1128] px-[16px] py-[8px] rounded-full text-[14px] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[64px] max-w-[1200px] mx-auto">
        <div className="mb-[64px]">
          <div className="inline-flex items-center gap-[8px] text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[16px] bg-[#fdf7f4] px-[16px] py-[8px] rounded-[7px] border border-[#ff7f49]/20">
            <span>✨</span> What We Deliver
          </div>
          <h2 className="text-[32px] lg:text-[40px] font-medium text-[#001726] leading-[1.1]">Core Capabilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[32px]">
          {service.capabilities.map((cap, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="bg-[#ffffff] p-[32px] rounded-[20px] border border-gray-100 hover:border-[#ff7f49]/40 transition-colors"
              style={{ boxShadow: shadowToken }}
            >
              <h3 className="text-[20px] font-medium text-[#0a1128] mb-[12px] flex items-center gap-[12px]">
                <CheckIcon /> {cap.title}
              </h3>
              <p className="text-[#595959] text-[16px] leading-[26px] font-medium pl-[32px]">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-[80px] lg:py-[120px] bg-[#0a1128] text-white">
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] lg:px-[64px]">
          <div className="text-center mb-[80px]">
            <h2 className="text-[32px] lg:text-[40px] font-medium leading-[1.1] mb-[16px]">How We Work</h2>
            <p className="text-[#a0aab2] text-[18px] max-w-2xl mx-auto">A predictable, transparent process designed to eliminate surprises and deliver exactly what was promised.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-[24px] relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-white/10"></div>
            
            {service.process.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col md:items-center md:text-center"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#ff7f49] text-[#0a1128] font-bold text-[20px] flex items-center justify-center mb-[24px] border-4 border-[#0a1128]">
                  {i + 1}
                </div>
                <h4 className="text-[18px] font-medium mb-[12px] text-white">{step.title}</h4>
                <p className="text-[#a0aab2] text-[14px] leading-[24px] font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[64px] max-w-[1200px] mx-auto">
        <div className="bg-[#ff7f49] rounded-[24px] p-[40px] lg:p-[64px] text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001726 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[32px] lg:text-[48px] font-medium text-[#001726] mb-[24px] leading-[1.1] tracking-tight">
              Ready to start your {service.title} project?
            </h2>
            <p className="text-[#001726]/80 text-[18px] mb-[40px] font-medium">
              Let's discuss your requirements, map out a solution, and get a clear timeline in place.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0a1128] text-white px-[32px] py-[16px] rounded-[12px] font-bold text-[16px] hover:bg-[#1a2442] transition-colors shadow-lg active:scale-[0.98]">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}