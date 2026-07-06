"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab-dev");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[64px] lg:h-[80px] bg-white border-b border-gray-100 z-[1100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center mr-10 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#0a1128] rounded-lg flex items-center justify-center mr-2.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0a1128] font-extrabold text-xl tracking-tight leading-none">
                EXA<span className="text-[#ff7f49]">MPLE</span>
              </span>
              <span className="text-[10px] text-[#595959] font-medium tracking-widest uppercase">Example</span>
            </div>
          </Link>

          <nav className="h-full hidden lg:block">
            <ul className="flex h-full gap-1">
              <li className="h-full flex items-center">
                <Link href="/" className="text-[15px] font-medium text-[#595959] px-4 py-2 rounded-full hover:bg-[#ff7f49]/10 hover:text-[#ff7f49] transition-all">
                  Home
                </Link>
              </li>
              <li className="h-full flex items-center relative group" onMouseLeave={() => setOpenMenu(null)}>
                <button
                  onMouseEnter={() => setOpenMenu("services")}
                  className={`text-[15px] font-medium px-4 py-2 rounded-full flex items-center gap-1.5 cursor-pointer relative transition-all ${
                    openMenu === "services" ? "bg-[#ff7f49]/10 text-[#ff7f49]" : "text-[#595959] hover:bg-[#ff7f49]/10 hover:text-[#ff7f49]"
                  }`}
                >
                  Services
                  <svg className={`w-3 transition-transform duration-200 ${openMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Desktop Mega Menu */}
                <div
                  className={`fixed top-[80px] left-0 right-0 w-full bg-white border-t border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-200 z-[1000] ${
                    openMenu === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-[260px_1fr_280px] min-h-[400px]">
                    {/* Categories column */}
                    <div className="py-8 pr-4 border-r border-gray-100 flex flex-col gap-2">
                      <span className="text-xs font-bold text-[#595959]/70 uppercase tracking-wider mb-2 pl-4">Categories</span>
                      <button
                        onMouseEnter={() => setActiveTab("tab-dev")}
                        className={`flex justify-between items-center px-4 py-3 text-[15px] font-medium rounded-lg text-left transition-all ${
                          activeTab === "tab-dev" ? "bg-[#ff7f49]/10 text-[#ff7f49] shadow-sm ring-1 ring-[#ff7f49]/20" : "text-[#595959] hover:bg-gray-50"
                        }`}
                      >
                        Software Development {activeTab === "tab-dev" && <span>→</span>}
                      </button>
                      <button
                        onMouseEnter={() => setActiveTab("tab-infra")}
                        className={`flex justify-between items-center px-4 py-3 text-[15px] font-medium rounded-lg text-left transition-all ${
                          activeTab === "tab-infra" ? "bg-[#ff7f49]/10 text-[#ff7f49] shadow-sm ring-1 ring-[#ff7f49]/20" : "text-[#595959] hover:bg-gray-50"
                        }`}
                      >
                        Infrastructure & Compliance {activeTab === "tab-infra" && <span>→</span>}
                      </button>
                    </div>

                    {/* Service links column */}
                    <div className="p-10 bg-white">
                      {activeTab === "tab-dev" && (
                        <div className="animate-fade-in grid grid-cols-2 gap-x-10 gap-y-8">
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">Web Development</span>
                            <p className="text-sm text-[#595959] mt-1">Custom enterprise websites, portals, and SaaS platforms built on modern frameworks.</p>
                          </Link>
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">Mobile App Dev</span>
                            <p className="text-sm text-[#595959] mt-1">High-performance native and hybrid apps for iOS & Android.</p>
                          </Link>
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">Desktop Solutions</span>
                            <p className="text-sm text-[#595959] mt-1">Robust desktop software for offline capability and system integration.</p>
                          </Link>
                        </div>
                      )}
                      {activeTab === "tab-infra" && (
                        <div className="animate-fade-in grid grid-cols-2 gap-x-10 gap-y-8">
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">Cloud Services</span>
                            <p className="text-sm text-[#595959] mt-1">Secure cloud migration, server management, and scalable infrastructure.</p>
                          </Link>
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">ISO Consultancy</span>
                            <p className="text-sm text-[#595959] mt-1">Guidance for ISO certification, compliance audits, and process standardization.</p>
                          </Link>
                          <Link href="#" className="group block">
                            <span className="text-base font-bold text-[#0a1128] group-hover:text-[#ff7f49] transition-colors">Domain & Hosting</span>
                            <p className="text-sm text-[#595959] mt-1">Digital identity management, DNS services, SSL security, and premium hosting.</p>
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Promo / CTA column */}
                    <div className="py-8 pl-6 border-l border-gray-100 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-[#fdf7f4] flex items-center justify-center text-[#ff7f49] mb-4">
                          ✦
                        </div>
                        <h4 className="text-[15px] font-bold text-[#0a1128] mb-2">Not sure where to start?</h4>
                        <p className="text-sm text-[#595959] leading-[22px]">
                          Tell us about your project and we'll recommend the right service for your goals.
                        </p>
                      </div>
                      <Link
                        href="#contact"
                        className="mt-6 inline-flex items-center justify-center bg-[#ff7f49] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#e86d3a] transition-all"
                      >
                        Talk to Us
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="h-full flex items-center">
                <Link href="/about" className="text-[15px] font-medium text-[#595959] px-4 py-2 rounded-full hover:bg-[#ff7f49]/10 hover:text-[#ff7f49] transition-all">About</Link>
              </li>
              <li className="h-full flex items-center">
                <Link href="/contact" className="text-[15px] font-medium text-[#595959] px-4 py-2 rounded-full hover:bg-[#ff7f49]/10 hover:text-[#ff7f49] transition-all">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="#contact" className="bg-[#ff7f49] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e86d3a] transition-all shadow-lg active:scale-95">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMobileMenu} className="flex flex-col justify-center gap-[5px] cursor-pointer p-2 lg:hidden z-[1101]">
            <span className={`w-6 h-0.5 transition-all duration-300 origin-center ${isMobileMenuOpen ? "translate-y-[7px] rotate-45 bg-[#ff7f49]" : "bg-[#0a1128]"}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "bg-[#0a1128]"}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 origin-center ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45 bg-[#ff7f49]" : "bg-[#0a1128]"}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-[64px] left-0 right-0 bottom-0 bg-white overflow-y-auto z-[1050]"
          >
            <div className="p-6 flex flex-col gap-6">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href="/" className="block py-4 text-lg font-bold text-[#0a1128] border-b border-gray-100" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </li>

                {/* Mobile Services accordion */}
                <li className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#0a1128]"
                  >
                    Services
                    <svg className={`w-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 flex flex-col gap-1">
                          {[
                            "Web Development",
                            "Mobile App Dev",
                            "Desktop Solutions",
                            "Cloud Services",
                            "ISO Consultancy",
                            "Domain & Hosting",
                          ].map((service) => (
                            <Link
                              key={service}
                              href="#"
                              className="py-2.5 pl-4 text-[15px] font-medium text-[#595959] hover:text-[#ff7f49] transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link href="/about" className="block py-4 text-lg font-bold text-[#0a1128] border-b border-gray-100" onClick={toggleMobileMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-4 text-lg font-bold text-[#0a1128] border-b border-gray-100" onClick={toggleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>

              <Link
                href="#contact"
                className="mt-2 bg-[#ff7f49] text-white text-center px-6 py-3.5 rounded-full font-bold text-base hover:bg-[#e86d3a] transition-all active:scale-95"
                onClick={toggleMobileMenu}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}