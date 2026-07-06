// File: components/Footer.tsx
"use client";
import Link from "next/link";
import { services } from "@/lib/services-data"; // <-- Imported services

const ArrowUpRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 17V7H7" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const DoubleUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 11 12 6 7 11" />
    <polyline points="17 18 12 13 7 18" />
  </svg>
);

const LogoLayerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#ff7f49" />
    <path d="M2 12L12 17L22 12" stroke="#0a1128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17L12 22L22 17" stroke="#0a1128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdf7f4] text-[#595959] pt-20 pb-10 px-6 font-sans selection:bg-[#ff7f49] selection:text-[#001726]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="bg-[#ffffff] rounded-[24px] p-8 md:p-12 lg:px-16 lg:py-14 mb-24 flex flex-col md:flex-row justify-between items-center relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff7f49 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

          <div className="z-10 max-w-xl mb-8 md:mb-0">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0a1128] mb-4 leading-[1.1] tracking-tight">
              Looking For a Reliable Software Development Partner?
            </h2>
            <p className="text-[#595959] text-[15px] font-medium leading-relaxed max-w-md">
              From web platforms to cloud infrastructure, we build software that helps your business run smoother and scale faster.
            </p>
          </div>

          <div className="z-10 flex flex-col items-center md:items-end">
            <Link href="/contact" className="bg-[#ff7f49] text-white px-8 py-3.5 rounded-[12px] font-bold text-[15px] flex items-center gap-2 hover:bg-[#e66c3a] transition-all shadow-sm">
              Start a Project <span className="scale-75"><ArrowUpRightIcon /></span>
            </Link>
            <span className="text-[13px] font-medium text-[#595959] mt-3">
              Free consultation, no obligation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-20">
          <div className="lg:col-span-2 pr-4">
            <div className="mb-4 flex items-center gap-2">
              <LogoLayerIcon />
              <span className="text-[24px] font-bold tracking-tight text-[#0a1128]">
                [Your Company]
              </span>
            </div>
            <p className="mb-6 leading-relaxed text-[#595959] text-[14px] font-medium max-w-[250px]">
              Building reliable web, mobile, cloud, and desktop software for growing businesses.
            </p>
            <form className="flex items-center bg-[#ffffff] rounded-[8px] p-1.5 border border-gray-200 max-w-[280px]">
              <input type="email" placeholder="Email Address" required className="w-full bg-transparent px-3 py-2 text-[14px] font-medium text-[#0a1128] placeholder-[#595959]/60 outline-none" />
              <button type="submit" className="bg-[#ff7f49] text-white p-2 rounded-[6px] hover:bg-[#e66c3a] transition-colors" aria-label="Subscribe">
                <ArrowUpRightIcon />
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <h6 className="text-[#0a1128] text-[16px] font-bold mb-6">Services</h6>
            <ul className="space-y-4">
              {/* Maps exactly the first 4 services dynamically */}
              {services.slice(0, 4).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}`} className="text-[#595959] text-[14px] font-medium hover:text-[#ff7f49] transition-colors block w-fit">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h6 className="text-[#0a1128] text-[16px] font-bold mb-6">Quick Link</h6>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#595959] text-[14px] font-medium hover:text-[#ff7f49] transition-colors block w-fit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h6 className="text-[#0a1128] text-[16px] font-bold mb-6">Company</h6>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Latest News'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#595959] text-[14px] font-medium hover:text-[#ff7f49] transition-colors block w-fit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h6 className="text-[#0a1128] text-[16px] font-bold mb-6">Contact</h6>
            <p className="text-[#595959] text-[14px] font-medium leading-relaxed mb-4 max-w-[200px]">
              [Street Address],<br/> [City, Country]
            </p>
            <div className="space-y-3">
              <Link href="mailto:hello@yourcompany.com" className="flex items-center gap-3 text-[#595959] text-[14px] font-medium hover:text-[#0a1128] transition-colors w-fit">
                <span className="text-[#ff7f49]"><MailIcon /></span>
                hello@yourcompany.com
              </Link>
              <Link href="tel:+10000000000" className="flex items-center gap-3 text-[#595959] text-[14px] font-medium hover:text-[#0a1128] transition-colors w-fit">
                <span className="text-[#ff7f49]"><PhoneIcon /></span>
                [Phone Number]
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-gray-300 pt-8 mt-12 flex flex-col items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="absolute left-1/2 -top-[20px] -translate-x-1/2 bg-[#ffffff] w-[40px] h-[40px] rounded-[8px] flex items-center justify-center text-[#0a1128] border border-gray-200 hover:text-[#ff7f49] transition-colors" aria-label="Scroll to top">
            <DoubleUpIcon />
          </button>
          <p className="text-[13px] text-[#595959] font-medium">
            Copyright ©{currentYear}, [Your Company] All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}