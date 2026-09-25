import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { PageRoute } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C1D11] text-[#FDFBF7] pt-16 pb-8 border-t border-[#A07855]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Hotel Info & Identity */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">
                Miilehill Hotel
              </h3>
              <p className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                by Maco at JB Town Center
              </p>
            </div>
            <p className="text-xs text-[#F2ECE1]/80 leading-relaxed">
              Experience warm Malaysian hospitality, modern boutique comforts, and unrivaled location at Level 3 of Wisma HYH, Jalan Trus in Johor Bahru.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Direct
              </button>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border border-[#25D366]/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F2ECE1]/80">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#D4AF37] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('rooms')} className="hover:text-[#D4AF37] transition-colors">
                  Rooms & Accommodation
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('facilities')} className="hover:text-[#D4AF37] transition-colors">
                  Facilities & Guest Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Contact Us & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#F2ECE1]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:underline text-white font-mono font-medium">
                  {HOTEL_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>inquiries@miilehillhotel.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Actions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Location & Transport
            </h4>
            <p className="text-xs text-[#F2ECE1]/80">
              Located at Wisma HYH along Jalan Trus, 5 mins walk to Komtar JBCC, JB City Square & JB Sentral CIQ.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-2.5 bg-[#3D271D] hover:bg-[#4E3326] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#A07855]/30"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Get Directions
                <ExternalLink className="w-3 h-3 text-white/50" />
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full px-4 py-2.5 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Desk Now
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#A07855]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F2ECE1]/60">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Bandar Johor Bahru, Johor, Malaysia</span>
            <span>·</span>
            <span>24/7 Front Desk</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
