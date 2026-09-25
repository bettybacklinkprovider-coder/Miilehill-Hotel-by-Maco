import React from 'react';
import { FACILITIES_DATA, NEARBY_ATTRACTIONS, HOTEL_INFO } from '../data/hotelData';
import { PageRoute } from '../types/hotel';
import { Clock, Coffee, Wifi, Sparkles, ShieldCheck, Briefcase, MapPin, CheckCircle, Navigation, Phone, Calendar } from 'lucide-react';

interface FacilitiesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="bg-[#FDFBF7] py-12 space-y-16">
      
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
          Guest Amenities & Hospitality
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2C1D11]">
          Facilities & Services
        </h1>
        <p className="text-sm sm:text-base text-[#3D271D]/80 max-w-2xl mx-auto leading-relaxed">
          At Miilehill Hotel by Maco, we ensure your stay in Johor Bahru is effortless with 24-hour reception, enterprise-grade Wi-Fi, relaxed lounge spaces, and prompt guest care.
        </p>
      </div>

      {/* Primary Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#A07855]/20 shadow-lg flex flex-col hover:shadow-xl transition-shadow"
            >
              {/* Optional Photo Header */}
              {facility.image && (
                <div className="h-48 overflow-hidden bg-slate-900">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2C1D11] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                      {facility.iconName === 'Clock' && <Clock className="w-5 h-5" />}
                      {facility.iconName === 'Coffee' && <Coffee className="w-5 h-5" />}
                      {facility.iconName === 'Wifi' && <Wifi className="w-5 h-5" />}
                      {facility.iconName === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                      {facility.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                      {facility.iconName === 'Briefcase' && <Briefcase className="w-5 h-5" />}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#2C1D11]">{facility.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3D271D]/80 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A07855]/15 space-y-2">
                  <span className="text-[11px] font-semibold text-[#8C6239] uppercase tracking-wider block">Key Highlights</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2C1D11]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8C6239] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlight Banner: Maco Lounge & Dining Spot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C1D11] text-[#FDFBF7] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              In-House Dining & Relaxation
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#FDFBF7]">
              The Maco Level 3 Coffee Lounge
            </h2>
            <p className="text-xs sm:text-sm text-[#F2ECE1]/80 leading-relaxed">
              Step out of your room into our cozy coffee lounge. Start your mornings with freshly brewed espresso, flaky croissants, and quiet seating. Perfect for informal catch-ups or reviewing your daily travel itinerary.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 bg-[#8C6239] text-white rounded-full">Level 3 Wisma HYH</span>
              <span className="px-3 py-1 bg-[#3D271D] text-[#D4AF37] rounded-full border border-[#D4AF37]/30">Fresh Brews</span>
              <span className="px-3 py-1 bg-[#3D271D] text-[#D4AF37] rounded-full border border-[#D4AF37]/30">Guest Seating</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#A07855]/30 aspect-[4/3] shadow-lg">
            <img
              src={HOTEL_INFO.loungeImage}
              alt="Maco Coffee Lounge"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>

      {/* Nearby Attractions Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
            Explore Johor Bahru
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#2C1D11]">
            Nearby JB Town Center Attractions
          </h2>
          <p className="text-sm text-[#3D271D]/80">
            When staying at Wisma HYH on Jalan Trus, JB’s top shopping, heritage cafes, and travel hubs are right at your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_ATTRACTIONS.map((attr, idx) => (
            <div key={idx} className="p-5 bg-[#F2ECE1]/60 rounded-xl border border-[#A07855]/20 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-[#2C1D11]">{attr.name}</h3>
                <span className="text-[11px] font-semibold text-[#8C6239] bg-white px-2.5 py-0.5 rounded-full border border-[#A07855]/20 shrink-0">
                  {attr.distance}
                </span>
              </div>
              <p className="text-xs text-[#3D271D]/80 leading-relaxed">
                {attr.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#2C1D11]">Have Specific Guest Service Enquiries?</h3>
        <p className="text-xs sm:text-sm text-[#3D271D]/80">
          Our front desk team is ready to help with special arrangements, late arrivals, or group reservations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Desk: {HOTEL_INFO.displayPhone}
          </a>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 bg-[#2C1D11] hover:bg-[#3D271D] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            Book Your Stay Direct
          </button>
        </div>
      </div>

    </div>
  );
};
