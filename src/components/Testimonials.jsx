import React, { useState } from 'react';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquarePlus, Send, ThumbsUp } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    quote: "I tried the new හොඳ බාස් mobile app when my AC stopped cooling. A verified technician responded quickly, inspected the unit via photos, and fixed it the same day. Excellent new app!",
    name: "Kasun Perera",
    city: "Colombo",
    service: "AC Service Booking",
    avatarBg: "from-emerald-500 to-teal-600",
    stars: 5,
    isRecent: false
  },
  {
    id: 2,
    quote: "Finding a reliable electrician used to be so stressful. With this newly launched app, I uploaded photos of my main breaker issue and got an instant price quote before booking.",
    name: "Nipuni Fernando",
    city: "Gampaha",
    service: "Electrical Repair",
    avatarBg: "from-sky-500 to-blue-600",
    stars: 5,
    isRecent: false
  },
  {
    id: 3,
    quote: "A great new Sri Lankan app for home repairs! The interface is super clean, easy to navigate, and connects you directly with local technicians with 100% upfront pricing.",
    name: "Dinesh Amarasinghe",
    city: "Kandy",
    service: "Plumbing Service",
    avatarBg: "from-purple-500 to-indigo-600",
    stars: 5,
    isRecent: false
  }
];

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  
  // New Comment Form State
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('AC Service Booking');
  const [quote, setQuote] = useState('');
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const gradients = [
      "from-emerald-500 to-teal-600",
      "from-sky-500 to-blue-600",
      "from-purple-500 to-indigo-600",
      "from-amber-500 to-orange-600"
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    const newReview = {
      id: Date.now(),
      quote: quote.trim(),
      name: name.trim(),
      city: city.trim() || "Sri Lanka",
      service: service,
      avatarBg: randomGradient,
      stars: stars,
      isRecent: true
    };

    setReviewsList([newReview, ...reviewsList]);
    setName('');
    setCity('');
    setQuote('');
    setStars(5);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3500);
  };

  return (
    <section id="reviews" className="pt-16 pb-16 scroll-mt-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#002B49]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header & Form Toggle Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles size={14} className="text-[#002B49]" /> Early User Reviews
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight leading-tight mb-4">
              What Early Users Say About <span className="font-sinhala-heading text-emerald-700 font-extrabold">හොඳ බාස්</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Be among the first to experience Sri Lanka's newest digital home service platform.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-glow-emerald px-6 py-3.5 rounded-xl font-extrabold text-sm flex items-center gap-2.5 shrink-0 self-start md:self-auto cursor-pointer no-underline shadow-md"
            style={{ borderRadius: '14px' }}
          >
            <MessageSquarePlus size={18} />
            <span>{showForm ? 'Close Form' : 'Write a Review / Comment'}</span>
          </button>
        </div>

        {/* Dynamic Comment / Review Form Box */}
        {showForm && (
          <div className="mb-16 glass-card p-8 rounded-3xl border border-slate-200 bg-white text-left shadow-2xl animate-fade-in" style={{ borderRadius: '26px' }}>
            <h3 className="text-xl font-extrabold text-[#002B49] mb-2 flex items-center gap-2">
              <MessageSquarePlus size={20} className="text-emerald-600" />
              <span>Share Your App Experience / Comment</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Your honest feedback helps us improve the newly launched හොඳ බාස් (Hoda Baas) mobile app.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 font-bold text-sm">
                <ThumbsUp size={22} className="text-emerald-600 shrink-0" />
                <span>Thank you! Your review has been submitted and published below successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-extrabold text-[#002B49] uppercase tracking-wider mb-2">
                    Your Rating:
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setStars(star)}
                        onMouseEnter={() => setHoverStars(star)}
                        onMouseLeave={() => setHoverStars(0)}
                        className="p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110"
                        style={{ background: 'none', border: 'none' }}
                      >
                        <Star 
                          size={26} 
                          className={`transition-colors ${
                            (hoverStars || stars) >= star 
                              ? 'fill-amber-400 text-amber-400' 
                              : 'text-slate-300'
                          }`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-extrabold text-slate-700 ml-2">
                      {stars} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Grid Inputs: Name, City, Service */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#002B49] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sahan Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#002B49] focus:outline-none text-sm text-slate-900 bg-slate-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#002B49] uppercase tracking-wider mb-1.5">
                      Your City
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. Colombo, Gampaha, Kandy"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#002B49] focus:outline-none text-sm text-slate-900 bg-slate-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#002B49] uppercase tracking-wider mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#002B49] focus:outline-none text-sm text-slate-900 bg-slate-50 font-medium cursor-pointer"
                    >
                      <option value="AC Service Booking">AC Service & Repair</option>
                      <option value="Electrical Repair">Electrical Wiring</option>
                      <option value="Plumbing Service">Plumbing Fix</option>
                      <option value="Solar Check">Solar Power Service</option>
                      <option value="Carpentry Work">Carpentry & Furniture</option>
                      <option value="Deep Cleaning">House Cleaning</option>
                      <option value="General App Feedback">General App Feedback</option>
                    </select>
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block text-xs font-extrabold text-[#002B49] uppercase tracking-wider mb-1.5">
                    Your Review / Comment *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write your experience with the new හොඳ බාස් mobile app..."
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#002B49] focus:outline-none text-sm text-slate-900 bg-slate-50 font-medium"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-glow-emerald px-8 py-3.5 rounded-xl font-extrabold text-sm flex items-center gap-2 cursor-pointer border-none shadow-md"
                  >
                    <Send size={16} />
                    <span>Submit Review</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.map((item) => (
            <div 
              key={item.id}
              className={`glass-card p-8 rounded-3xl border border-slate-200/90 bg-white flex flex-col justify-between text-left group shadow-xs hover:shadow-2xl hover:border-[#002B49]/40 transition-all duration-300 ${
                item.isRecent ? 'ring-2 ring-emerald-500/50 bg-emerald-50/20' : ''
              }`}
              style={{ borderRadius: '24px' }}
            >
              <div>
                {/* Header Stars & Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.isRecent && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                        New
                      </span>
                    )}
                    <Quote size={26} className="text-[#002B49]/20 group-hover:text-[#002B49]/40 transition-colors" />
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-linear-to-br ${item.avatarBg} text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-[#002B49] text-sm flex items-center gap-1">
                      <span>{item.name}</span>
                      <CheckCircle2 size={13} className="text-emerald-600" />
                    </div>
                    <div className="text-xs text-slate-500 font-semibold mt-0.5">📍 {item.city}</div>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-[#002B49] border border-slate-200">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
