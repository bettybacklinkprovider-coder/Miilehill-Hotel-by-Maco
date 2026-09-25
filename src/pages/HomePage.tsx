import React from 'react';
import { Calendar, Phone, ArrowRight, MapPin, CheckCircle, Wifi, Clock, Sparkles, ShieldCheck, Coffee, Navigation, ChevronRight, Star } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA, WHY_STAY_REASONS } from '../data/hotelData';
import { PageRoute, Room } from '../types/hotel';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
  onSelectRoom: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onSelectRoom }) => {
  return (
    <div className="space-y-0">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2C1D11]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.heroImage}
            alt="Miilehill Hotel Exterior & Facade"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Measured Scrim Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11] via-[#2C1D11]/70 to-[#2C1D11]/40"></div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C6239]/40 border border-[#D4AF37]/30 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            Boutique Luxury Stay in Johor Bahru Town Center
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-tight max-w-4xl mx-auto">
            {HOTEL_INFO.name}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#F2ECE1]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to a haven of warm elegance and modern comfort. Situated on Level 3 of Wisma HYH along historical Jalan Trus, steps away from JB City Square & CIQ.
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-semibold text-sm rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              Book Your Stay
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FDFBF7] font-semibold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Location Quick Badge */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#F2ECE1]/80">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Lvl 3, Wisma HYH, Jalan Trus, Bandar Johor Bahru</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE HOTEL */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Visual Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#A07855]/20 aspect-[4/3]">
                <img
                  src={HOTEL_INFO.aboutImage}
                  alt="Miilehill Hotel Lobby Lounge"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Highlight Box */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#2C1D11] text-[#FDFBF7] p-5 rounded-xl shadow-xl border border-[#D4AF37]/30 max-w-xs hidden sm:block">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">Heart of JB Town</span>
                <p className="text-xs text-[#F2ECE1]/90 pt-1">
                  Walking distance to Komtar JBCC, Jalan Dhoby heritage street, and JB Sentral customs.
                </p>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                  About The Hotel
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C1D11]">
                  Refined Comforts in Bandar Johor Bahru
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#3D271D]/80 leading-relaxed">
                <strong className="text-[#2C1D11]">Miilehill Hotel by Maco</strong> offers a sophisticated retreat designed for vacationers, business travelers, and weekend explorers in Johor Bahru. Located on Level 3 of Wisma HYH along bustling Jalan Trus, our boutique establishment balances modern luxury with cozy hospitality.
              </p>

              <p className="text-sm sm:text-base text-[#3D271D]/80 leading-relaxed">
                Whether you are crossing the Causeway for a shopping spree at JB City Square, visiting local heritage bakeries, or seeking a quiet room with premium bedding and high-speed Wi-Fi, Miilehill Hotel delivers a warm and seamless stay experience.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-[#F2ECE1] rounded-lg border border-[#A07855]/20 text-xs space-y-1">
                  <span className="font-bold text-[#2C1D11] block">Prime Location</span>
                  <span className="text-[#3D271D]/80">Level 3, Wisma HYH, Jalan Trus</span>
                </div>
                <div className="p-3.5 bg-[#F2ECE1] rounded-lg border border-[#A07855]/20 text-xs space-y-1">
                  <span className="font-bold text-[#2C1D11] block">Hotline Assistance</span>
                  <span className="text-[#3D271D]/80">+60 19-349 3411</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-[#2C1D11] hover:bg-[#3D271D] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  Learn More About Our Location
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-[#F2ECE1]/60 border-y border-[#A07855]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                Rooms & Accommodation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C1D11]">
                Thoughtfully Designed Suites
              </h2>
              <p className="text-sm text-[#3D271D]/80">
                Choose from our range of deluxe bedrooms, executive suites, and family spaces outfitted with premium pocket-spring mattresses and modern amenities.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto shrink-0 shadow-sm"
            >
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#A07855]/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#2C1D11]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                    MYR {room.priceMYR} <span className="font-sans text-[10px] font-normal text-white/80">/ night</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#2C1D11] group-hover:text-[#8C6239] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#3D271D]/80 line-clamp-2 leading-relaxed">
                      {room.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#A07855]/15 flex items-center justify-between text-xs text-[#3D271D]/70 font-medium">
                    <span>{room.bedType}</span>
                    <span>·</span>
                    <span>{room.sizeSqM} sq.m</span>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-2.5 px-4 bg-[#F2ECE1] hover:bg-[#8C6239] hover:text-white text-[#2C1D11] text-xs font-semibold rounded-lg transition-colors text-center"
                    >
                      View Details & Rates
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: FACILITIES & SERVICES */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
              Guest Conveniences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C1D11]">
              Facilities & Guest Services
            </h2>
            <p className="text-sm text-[#3D271D]/80">
              We focus on the essential hospitality services that make your stay in JB Town Center relaxed, secure, and effortlessly convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((fac) => {
              return (
                <div
                  key={fac.id}
                  className="p-6 bg-[#F2ECE1]/50 rounded-2xl border border-[#A07855]/20 hover:border-[#8C6239]/50 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2C1D11] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                    {fac.iconName === 'Clock' && <Clock className="w-6 h-6" />}
                    {fac.iconName === 'Coffee' && <Coffee className="w-6 h-6" />}
                    {fac.iconName === 'Wifi' && <Wifi className="w-6 h-6" />}
                    {fac.iconName === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                    {fac.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {fac.iconName !== 'Clock' && fac.iconName !== 'Coffee' && fac.iconName !== 'Wifi' && fac.iconName !== 'Sparkles' && fac.iconName !== 'ShieldCheck' && <CheckCircle className="w-6 h-6" />}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-serif font-bold text-[#2C1D11]">{fac.title}</h3>
                    <p className="text-xs text-[#3D271D]/80 leading-relaxed">{fac.description}</p>
                  </div>

                  <ul className="space-y-1 pt-1">
                    {fac.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="text-[11px] text-[#8C6239] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                onNavigate('facilities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6239] hover:text-[#2C1D11] underline transition-colors"
            >
              Explore Full Facilities Page
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY STAY WITH US */}
      <section className="py-20 bg-[#2C1D11] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The Miilehill Distinction
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FDFBF7]">
              Why Stay With Us?
            </h2>
            <p className="text-sm text-[#F2ECE1]/80">
              Designed around peace of mind, strategic location, and personal hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_STAY_REASONS.map((reason) => (
              <div
                key={reason.id}
                className="bg-[#3D271D]/80 rounded-2xl border border-[#A07855]/30 hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl"
              >
                {/* Photo Header */}
                <div className="relative h-44 overflow-hidden bg-[#2C1D11]">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D271D] via-transparent to-black/20"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#2C1D11]/80 backdrop-blur-md text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/30 shadow-md">
                    <Star className="w-4 h-4 fill-[#D4AF37]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-serif font-semibold text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors leading-snug mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-[#F2ECE1]/75 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#3D271D] p-6 rounded-2xl border border-[#A07855]/30 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-serif font-bold text-[#D4AF37]">Travelling from Singapore via Causeway?</h4>
              <p className="text-xs text-[#F2ECE1]/80">
                We are just 7 minutes walk from JB Sentral CIQ. Perfect for Singapore day-trippers and weekend staycations.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-xl shrink-0 transition-colors shadow-lg"
            >
              Reserve Direct Rate
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: LOCATION & CONTACT / CALL TO ACTION */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#A07855]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F2ECE1] rounded-3xl p-8 sm:p-12 border border-[#A07855]/30 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Contact Details Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                  Location & Contact
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C1D11]">
                  Visit Us at Wisma HYH, Jalan Trus
                </h2>
                <p className="text-sm text-[#3D271D]/80">
                  Reach out directly to our front desk or navigate easily using Google Maps.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#2C1D11]">
                <div className="p-4 bg-white rounded-xl border border-[#A07855]/20 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8C6239] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-xs uppercase tracking-wider text-[#8C6239]">Hotel Address</span>
                    <span className="font-medium text-[#2C1D11] leading-relaxed">{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#A07855]/20 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#8C6239] shrink-0" />
                  <div>
                    <span className="font-bold block text-xs uppercase tracking-wider text-[#8C6239]">Hotline & WhatsApp</span>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="font-mono font-bold text-base text-[#2C1D11] hover:underline">
                      {HOTEL_INFO.displayPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-semibold text-xs rounded-xl transition-colors text-center shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#2C1D11] hover:bg-[#3D271D] text-white font-semibold text-xs rounded-xl transition-colors text-center shadow-md flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Final Booking Call-to-Action Card */}
            <div className="bg-[#2C1D11] text-white p-8 rounded-2xl border border-[#D4AF37]/30 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Ready For Your Stay?
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDFBF7]">
                  Book Direct For Best Available Rates
                </h3>
                <p className="text-xs text-[#F2ECE1]/80 leading-relaxed">
                  Enjoy instant confirmation, free Wi-Fi, flexible check-in support, and friendly service at Miilehill Hotel by Maco.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  Book Your Stay Now
                </button>
              </div>

              <p className="text-[11px] text-[#F2ECE1]/60 text-center">
                Level 3, Wisma HYH, Jalan Trus, Johor Bahru · Phone: {HOTEL_INFO.displayPhone}
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
