import React from 'react';
import { Smartphone, Download, QrCode, Phone, Mail, MapPin, Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer id="download" className="bg-[#00192C] text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Ambient Gradient Glow Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#005E99]/10 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Top Download Card Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#004370]/80 shadow-2xl" style={{ borderRadius: '32px', background: 'linear-gradient(135deg, #00192C 0%, #002B49 100%)' }}>
          
          {/* Left Callouts */}
          <div className="max-w-2xl text-left">
            <span className="text-xs font-extrabold px-3.5 py-1 rounded-full bg-[#005E99]/30 text-white border border-[#005E99]/50 uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-emerald-400" /> OFFICIAL APP RELEASE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Download <span className="font-sinhala-heading font-extrabold text-emerald-400">හොඳ බාස්</span> (Hoda Baas) App Today
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Transform how you manage home maintenance. Install our official Android application to book background-checked local electricians, plumbers, AC pros, and solar specialists in seconds.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/honda_baas_v1.0.apk"
                download="honda_baas_v1.0.apk"
                className="btn-glow-emerald px-7 py-3.5 rounded-xl font-extrabold flex items-center gap-3 no-underline shadow-lg text-sm text-white hover:scale-105 transition-transform"
                style={{ borderRadius: '12px' }}
              >
                <Download size={20} />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase font-extrabold opacity-95">Download Android App</div>
                  <div className="text-xs sm:text-sm font-extrabold">Direct APK Download (v1.0)</div>
                </div>
              </a>

              <div 
                className="px-6 py-3.5 rounded-xl font-extrabold flex items-center gap-3 text-slate-400 bg-white/5 border border-slate-700 text-sm select-none"
                style={{ borderRadius: '12px' }}
              >
                <Smartphone size={20} className="text-slate-500" />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase font-extrabold opacity-80">Google Play Store</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-300">Coming Soon 🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scannable QR Box */}
          <div className="bg-[#002B49]/90 p-6 rounded-2xl border border-[#004370] text-center shrink-0 flex flex-col items-center shadow-xl" style={{ borderRadius: '24px' }}>
            <div className="w-36 h-36 bg-white p-2.5 rounded-2xl flex items-center justify-center shadow-md relative overflow-hidden group">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=002B49&data=https://hodabaas.lk/honda_baas_v1.0.apk" 
                alt="Scan to Download හොඳ බාස් App" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="text-xs font-extrabold text-white mt-2 flex items-center gap-1.5">
              <QrCode size={14} className="text-emerald-400" />
              <span>Scan QR Code to Download</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5">Direct APK Download Link</span>
          </div>

        </div>
      </div>

      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800 text-left">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shrink-0" style={{ borderRadius: '12px' }}>
                <img src={logoImg} alt="හොඳ බාස් (Hoda Baas) Logo" className="w-full h-full object-contain rounded-md" />
              </div>
              <span className="font-sinhala-heading text-2xl font-extrabold text-white">
                හොඳ බාස් <span className="font-sans text-emerald-400 font-bold text-base">(Hoda Baas)</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              Sri Lanka's leading digital platform connecting homeowners with background-checked local technicians for on-demand home maintenance and repairs.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck size={16} />
              <span>100% ID & Police Verified Local Technicians</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-extrabold text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400" style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors no-underline">Services Categories</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors no-underline">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors no-underline">How It Works (60s)</a></li>
              <li><a href="#app-showcase" className="hover:text-emerald-400 transition-colors no-underline">App Preview & Screenshots</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors no-underline">Early User Reviews</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors no-underline">FAQ & Help</a></li>
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-extrabold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400" style={{ listStyle: 'none', padding: 0 }}>
              <li>Solar Power Systems</li>
              <li>Electrical Repairs</li>
              <li>Plumbing & Piping</li>
              <li>AC Service & Repair</li>
              <li>Carpentry Works</li>
              <li>Painting Services</li>
              <li>Deep House Cleaning</li>
              <li>Masonry Repairs</li>
            </ul>
          </div>

          {/* Support Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-extrabold text-white mb-4">
              Support & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>හොඳ බාස් (Hoda Baas) HQ, Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <span>+94 77 123 4567 / +94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <span>support@hodabaas.lk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>© 2026 හොඳ බාස් (Hoda Baas) Sri Lanka. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span>Crafted for Sri Lankan Homes with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
