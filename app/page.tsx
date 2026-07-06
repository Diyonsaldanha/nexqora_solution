"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// NOTE: Replace "[Your Company]" below with your actual brand name wherever it appears.

// Reusable SVG Icon
const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 17V7H7" />
  </svg>
);

// Service icons — line style, fixed orange, no emoji
const iconProps = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#ff7f49", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const WebIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <line x1="3" y1="8.5" x2="21" y2="8.5" />
    <circle cx="6.2" cy="6.5" r="0.5" fill="#ff7f49" stroke="none" />
    <circle cx="8.4" cy="6.5" r="0.5" fill="#ff7f49" stroke="none" />
    <path d="M9.5 12.5L7.5 14.5L9.5 16.5" />
    <path d="M14.5 12.5L16.5 14.5L14.5 16.5" />
  </svg>
);

const MobileIcon = () => (
  <svg {...iconProps}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <line x1="10.3" y1="18.3" x2="13.7" y2="18.3" />
  </svg>
);

const DesktopIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="12.5" rx="1.5" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="16.5" x2="12" y2="20" />
  </svg>
);

const CloudIcon = () => (
  <svg {...iconProps}>
    <path d="M7.2 18h10.3a3.4 3.4 0 0 0 0-6.8 5 5 0 0 0-9.5-1.6A3.9 3.9 0 0 0 7.2 18Z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3.2l7 2.9v5.1c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6.1l7-2.9Z" />
    <path d="M9 12.2l2 2 4-4.2" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
    <path d="M12 3.5c2.3 2.4 3.7 5.5 3.7 8.5s-1.4 6.1-3.7 8.5" />
    <path d="M12 3.5c-2.3 2.4-3.7 5.5-3.7 8.5s1.4 6.1 3.7 8.5" />
  </svg>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("Show All");

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Shadow Token from Design System
  const shadowToken = "rgba(0, 0, 0, 0.26) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.23) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.09) 0px 10px 10px -3.75px";

  // Our six core services
  const services = [
    { icon: WebIcon, title: "Web Development", desc: "Custom enterprise websites, portals, and SaaS platforms built on modern frameworks." },
    { icon: MobileIcon, title: "Mobile App Dev", desc: "High-performance native and hybrid apps for a seamless experience on iOS & Android." },
    { icon: DesktopIcon, title: "Desktop Solutions", desc: "Robust desktop software for offline capability, heavy computation, and system integration." },
    { icon: CloudIcon, title: "Cloud Services", desc: "Secure cloud migration, server management, and scalable infrastructure architecture." },
    { icon: ShieldCheckIcon, title: "ISO Consultancy", desc: "Professional guidance for ISO certification, compliance audits, and process standardization." },
    { icon: GlobeIcon, title: "Domain & Hosting", desc: "Complete digital identity management, DNS services, SSL security, and premium hosting." }
  ];

  return (
    <div className="font-sans text-[#0a1128] bg-[#ffffff] min-h-screen selection:bg-[#ff7f49] selection:text-[#001726]">
      
      {/* ================= HERO SECTION ================= */}
      <div className="bg-[#fdf7f4]">
        <section className="relative pt-[60px] pb-[80px] lg:pt-[100px] lg:pb-[120px] px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px] max-w-[1400px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-[48px] items-center">
            
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-[8px] text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[24px]">
                <span>👋</span> Hey there! We're [Your Company]
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-[48px] lg:text-[64px] leading-[1.1] font-medium text-[#0a1128] mb-[24px] tracking-tight">
                Custom Software Solutions Built for Modern Business
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[20px] text-[#595959] mb-[40px] leading-[30.4px] font-medium pr-[32px]">
                From web and mobile to cloud and desktop, we design and engineer reliable software that helps ambitious businesses launch faster, scale smarter, and stay secure.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-[16px]">
                <Link href="#" className="flex items-center justify-center gap-[8px] bg-[#ff7f49] text-[#001726] px-[24px] py-[14px] rounded-[12px] font-medium hover:bg-[#e66c3a] transition-all active:scale-[0.98] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]">
                  Our Services <ArrowUpRight />
                </Link>
                <Link href="#" className="flex items-center justify-center gap-[8px] bg-[#ffffff] text-[#001726] border border-[#595959]/30 px-[24px] py-[14px] rounded-[12px] font-medium hover:border-[#595959] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]">
                  About Us <ArrowUpRight />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-[#ff7f49]/10 rounded-[20px] -z-10 transform translate-x-[16px] translate-y-[16px]" style={{ backgroundImage: 'radial-gradient(#ff7f49 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Software engineer working on code" className="rounded-[20px] object-cover w-full h-[500px] lg:h-[600px]" style={{ boxShadow: shadowToken }} />
              
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute top-1/3 -left-[16px] md:-left-[48px] bg-[#ffffff] p-[12px] pr-[16px] rounded-[20px] flex items-center gap-[12px] border border-gray-100" style={{ boxShadow: shadowToken }}>
                <div className="flex -space-x-[8px]">
                  <div className="w-[32px] h-[32px] rounded-full border-2 border-[#ffffff] bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="user" /></div>
                  <div className="w-[32px] h-[32px] rounded-full border-2 border-[#ffffff] bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="user" /></div>
                  <div className="w-[32px] h-[32px] rounded-full border-2 border-[#ffffff] bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="user" /></div>
                </div>
                <span className="text-[14px] font-medium text-[#0a1128]">150+ Projects Delivered</span>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="absolute -bottom-[24px] right-[32px] bg-[#ffffff] px-[24px] py-[16px] rounded-[14px] flex items-center gap-[16px] border border-gray-100" style={{ boxShadow: shadowToken }}>
                <div className="w-[32px] h-[32px] rounded-[7px] bg-gray-50 flex items-center justify-center font-bold text-[#0000ee]">G</div>
                <div className="flex text-[#ff7f49] text-[14px]">★★★★★</div>
                <div className="text-[14px] font-medium text-[#595959]"><span className="text-[#0a1128]">(4.9)</span> Reviews</div>
              </motion.div>
            </motion.div>

          </div>
        </section>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="bg-gradient-to-b from-[#fdf7f4] to-[#ffffff]">
        <section className="px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px] pb-[80px] lg:pb-[120px] max-w-[1200px] mx-auto relative z-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#ffffff] rounded-[20px] p-[32px] lg:p-[48px] border border-gray-200" style={{ boxShadow: shadowToken }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[16px] mb-[40px] pb-[24px] border-b border-gray-100">
              <h2 className="text-[26px] lg:text-[34px] font-medium tracking-tight text-[#001726] leading-[1.15] max-w-md">
                End-to-end software solutions for every need
              </h2>
              <p className="text-[#595959] text-[14px] font-medium max-w-xs">Six core services, one team to see them through from build to support.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
              {services.map((srv, i) => (
                <div key={i} className="flex flex-col items-start p-[24px] border-r border-b border-gray-100 hover:bg-[#fdf7f4]/50 transition-colors">
                  <srv.icon />
                  <h3 className="text-[15px] font-medium mt-[14px] mb-[6px] text-[#001726]">{srv.title}</h3>
                  <p className="text-[#595959] mb-[14px] text-[13px] font-medium leading-[20px]">{srv.desc}</p>
                  <Link href="#" className="mt-auto flex items-center gap-[6px] font-medium text-[13px] text-[#0a1128] hover:text-[#0000ee] transition-colors focus-visible:outline-[#0000ee]">
                    Read More <span className="scale-75 origin-left"><ArrowUpRight /></span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* ================= TRUSTED LOGOS ================= */}
      <section className="pb-[80px] lg:pb-[120px] border-b border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-[16px] text-center">
          <p className="font-medium text-[#0a1128] mb-[40px] text-[18px]">Trusted by growing businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-[48px] lg:gap-[96px] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['logoipsum-1', 'logoipsum-2', 'logoipsum-3', 'logoipsum-4'].map((_, i) => (
              <div key={i} className="flex items-center gap-[8px] text-[24px] font-bold text-[#595959]">
                <div className="w-[32px] h-[32px] bg-[#595959] rounded-[7px]"></div> Logoipsum
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPLIT FEATURES SECTION ================= */}
      <section className="py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px] max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
          
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-[20px] bg-[#f5e6db] p-[32px] h-[500px] lg:h-[600px]">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Development team planning a project" className="w-full h-full object-cover rounded-[14px]" style={{ boxShadow: shadowToken }} />
            
            {/* Floating Chart Badge */}
            <div className="absolute -right-[16px] md:-right-[32px] bottom-[80px] bg-[#ffffff] p-[24px] rounded-[14px] w-[260px]" style={{ boxShadow: shadowToken }}>
              <h4 className="font-medium text-[14px] mb-[16px] text-[#001726]">Projects Delivered</h4>
              <div className="flex items-end gap-[8px] h-[96px]">
                {[40, 60, 45, 80, 100, 55, 75].map((h, i) => (
                  <div key={i} className={`w-full rounded-t-[4px] ${i === 4 ? 'bg-[#ff7f49]' : 'bg-gray-100'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="absolute top-[56px] right-[56px] bg-[#0a1128] text-[#ffffff] text-[12px] font-medium px-[8px] py-[4px] rounded-[4px]">150+</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-[8px] text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[16px] bg-[#ffffff] px-[16px] py-[8px] rounded-[7px] border border-gray-200">
              <span>💡</span> Why Choose Us
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-medium text-[#001726] mb-[24px] leading-[1.1]">Engineering Excellence, Delivered Reliably</h2>
            <p className="text-[#595959] text-[18px] mb-[40px] leading-[30.4px] font-medium max-w-xl">
              We combine deep technical expertise with agile delivery to build software that's secure, scalable, and built to last, from the first line of code to long-term support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-[32px]">
              <div>
                <div className="w-[48px] h-[48px] rounded-[10px] bg-[#ffffff] border border-gray-200 flex items-center justify-center text-[#ff7f49] mb-[16px] text-[20px]">💻</div>
                <h4 className="font-medium text-[18px] mb-[8px] text-[#001726]">Full-Stack Expertise</h4>
                <p className="text-[#595959] text-[14px] leading-[24px] font-medium">From front-end interfaces to back-end architecture, we deliver complete, production-ready solutions.</p>
              </div>
              <div>
                <div className="w-[48px] h-[48px] rounded-[10px] bg-[#ffffff] border border-gray-200 flex items-center justify-center text-[#ff7f49] mb-[16px] text-[20px]">🔧</div>
                <h4 className="font-medium text-[18px] mb-[8px] text-[#001726]">Ongoing Support & Maintenance</h4>
                <p className="text-[#595959] text-[14px] leading-[24px] font-medium">We provide continuous support, updates, and system monitoring long after your product goes live.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-[80px] lg:py-[120px] bg-[#fdf7f4]">
        <div className="max-w-[1400px] mx-auto px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px]">
          <div className="text-center mb-[48px]">
            <h2 className="text-[32px] lg:text-[48px] font-medium text-[#001726] tracking-tight mb-[32px]">We Have Delivered 150+ Projects</h2>
            
            <div className="inline-flex items-center bg-[#ffffff] p-[8px] rounded-[12px] border border-gray-200 overflow-x-auto max-w-full">
              {['Show All', 'Web', 'Mobile', 'Cloud', 'Desktop', 'Consultancy'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-[24px] py-[8px] rounded-[7px] text-[14px] font-medium transition-colors whitespace-nowrap focus-visible:outline-[#0000ee] ${activeTab === tab ? 'text-[#ff7f49] bg-gray-50' : 'text-[#595959] hover:text-[#0a1128]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-[32px] mb-[48px]">
            {[
              { img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Web Development", title: "Enterprise Portal Platform" },
              { img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Mobile App Dev", title: "Cross-Platform Banking App" },
              { img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Cloud Services", title: "Cloud Migration for FinTech" }
            ].map((proj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#ffffff] rounded-[20px] p-[16px] border border-gray-200 group cursor-pointer hover:border-[#0000ee] transition-colors focus-visible:outline-[#0000ee]">
                <div className="overflow-hidden rounded-[14px] mb-[24px]">
                  <img src={proj.img} alt={proj.title} className="w-full h-[240px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-[8px] pb-[8px]">
                  <div className="text-[#ff7f49] font-medium text-[14px] mb-[8px]">{proj.cat}</div>
                  <h3 className="text-[20px] font-medium text-[#0a1128] group-hover:text-[#0000ee] transition-colors">{proj.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#ff7f49] text-[#001726] px-[32px] py-[14px] rounded-[12px] font-medium hover:bg-[#e66c3a] transition-colors active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* ================= BLOG SECTION (NEW) ================= */}
      <section className="py-[80px] lg:py-[120px] bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[24px] mb-[48px]">
            <div>
              <div className="inline-flex items-center gap-[8px] text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[16px]">
                <span>📰</span> Latest Insights
              </div>
              <h2 className="text-[32px] lg:text-[48px] font-medium text-[#001726] leading-[1.1] tracking-tight">Our Recent Articles</h2>
            </div>
            <Link href="#" className="flex items-center gap-[8px] font-medium text-[#0a1128] hover:text-[#ff7f49] transition-colors focus-visible:outline-[#0000ee]">
              View All Posts <ArrowUpRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-[32px]">
            {[
              // { img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Technology", date: "Jul 12, 2026", title: "The Future of Cloud Architecture in 2026", excerpt: "Explore how serverless environments are evolving and what it means for enterprise scalability." },
              // { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Business", date: "Jul 05, 2026", title: "Why Custom Software Beats Off-the-Shelf", excerpt: "Discover the hidden ROI of investing in bespoke solutions tailored perfectly to your workflows." },
              // { img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", cat: "Development", date: "Jun 28, 2026", title: "A Guide to Modern Frontend Frameworks", excerpt: "React, Vue, or Angular? We break down the best use cases for today's top JS frameworks." }
              { img: "https://placehold.co/800x600/0a1128/ff7f49?text=Cloud+Architecture", cat: "Technology", date: "Jul 12, 2026", title: "The Future of Cloud Architecture in 2026", excerpt: "Explore how serverless environments are evolving and what it means for enterprise scalability." },
              { img: "https://placehold.co/800x600/ff7f49/001726?text=Custom+Software", cat: "Business", date: "Jul 05, 2026", title: "Why Custom Software Beats Off-the-Shelf", excerpt: "Discover the hidden ROI of investing in bespoke solutions tailored perfectly to your workflows." },
              { img: "https://placehold.co/800x600/fdf7f4/0a1128?text=Frontend+Frameworks", cat: "Development", date: "Jun 28, 2026", title: "A Guide to Modern Frontend Frameworks", excerpt: "React, Vue, or Angular? We break down the best use cases for today's top JS frameworks." }
            ].map((blog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer flex flex-col">
                <div className="overflow-hidden rounded-[16px] mb-[24px]">
                  <img src={blog.img} alt={blog.title} className="w-full h-[220px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-[12px] text-[13px] font-medium mb-[12px]">
                  <span className="text-[#ff7f49] bg-[#ff7f49]/10 px-[12px] py-[4px] rounded-full">{blog.cat}</span>
                  <span className="text-[#595959]">{blog.date}</span>
                </div>
                <h3 className="text-[22px] font-medium text-[#0a1128] mb-[12px] group-hover:text-[#0000ee] transition-colors leading-[1.3]">{blog.title}</h3>
                <p className="text-[#595959] text-[15px] leading-[24px] mb-[16px] flex-grow">{blog.excerpt}</p>
                <Link href="#" className="flex items-center gap-[6px] font-medium text-[14px] text-[#0a1128] group-hover:text-[#ff7f49] transition-colors focus-visible:outline-[#0000ee]">
                  Read Article <span className="scale-75 origin-left"><ArrowUpRight /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL (LIGHT SWIPE CARDS) ================= */}
      <section className="py-[80px] lg:py-[120px]   relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#ff7f49 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-[20px] md:px-[40px] lg:px-[64px] xl:px-[80px] relative z-10">
          <div className="text-center mb-[48px] md:mb-[64px]">
            <div className="inline-flex items-center gap-[8px] bg-[#ffffff] px-[16px] py-[8px] rounded-[7px] border border-gray-200 text-[#ff7f49] font-medium text-[14px] tracking-wide mb-[16px]">
              <span>💬</span> Testimonials
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-medium text-[#001726] leading-[1.1] tracking-tight">What Our Clients Say</h2>
          </div>

          {/* Swipeable Container (Horizontal Scroll with CSS Snap) */}
          {/* Custom classes `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]` hide the scrollbar across browsers */}
          <div className="flex overflow-x-auto gap-[24px] pb-[32px] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {[
              { name: "Nicholas Moore", role: "CEO at TechFlow", text: "Their team took our idea from a rough concept to a fully working web and mobile platform in record time. The cloud infrastructure they set up has scaled with us without a single hiccup.", img: "11" },
              { name: "Sarah Jenkins", role: "CTO at RetailPro", text: "We needed a complete overhaul of our legacy desktop systems. They delivered a modern, fast, and incredibly reliable solution that boosted our team's productivity by 40%.", img: "47" },
              { name: "David Chen", role: "Founder at HealthSync", text: "Security and compliance were our top priorities. Their ISO consultancy combined with their secure software development practices gave us total peace of mind.", img: "59" },
              { name: "Elena Rodriguez", role: "VP of Operations", text: "The ongoing support is what truly sets them apart. Any time we need an update or face a technical challenge, they are responsive, professional, and effective.", img: "32" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[85vw] sm:min-w-[400px] max-w-[450px] bg-[#ffffff] p-[32px] md:p-[40px] rounded-[24px] snap-center shrink-0 flex flex-col justify-between border border-gray-100 cursor-grab active:cursor-grabbing"
                style={{ boxShadow: shadowToken }}
              >
                <div>
                  <div className="flex gap-[4px] mb-[24px]">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className="text-[#ff7f49] text-[18px]">★</div>
                    ))}
                  </div>
                  <p className="text-[#0a1128] text-[18px] leading-[30.4px] font-medium mb-[32px]">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-[16px] pt-[24px] border-t border-gray-100">
                  <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-gray-100">
                    <img src={`https://i.pravatar.cc/150?img=${testimonial.img}`} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1128] text-[16px]">{testimonial.name}</h4>
                    <p className="text-[#595959] text-[14px] font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer for right edge padding in scroll container */}
            <div className="min-w-[1px] shrink-0"></div>
          </div>
          
          {/* Scroll instruction for desktop users */}
          <div className="text-center mt-[16px] hidden md:block">
            <span className="text-[#595959] text-[13px] font-medium px-[16px] py-[8px] bg-[#ffffff] rounded-full shadow-sm border border-gray-200">
              ← Swipe or scroll to read more →
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}