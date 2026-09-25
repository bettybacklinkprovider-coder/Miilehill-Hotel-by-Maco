import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { PageRoute } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'Home' },
    { route: 'rooms', label: 'Rooms & Suites' },
    { route: 'facilities', label: 'Facilities & Services' },
    { route: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Contact Strip */}
      <div className="bg-[#2C1D11] text-[#F2ECE1] text-xs py-2 px-4 border-b border-[#A07855]/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {HOTEL_INFO.street}, {HOTEL_INFO.city}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">
              24/7 Front Desk Reception
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:underline font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              {HOTEL_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2C1D11]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#A07855]/30 text-white'
            : 'bg-[#2C1D11] py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none"
          >
            <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors">
              Miilehill Hotel
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans -mt-0.5">
              by Maco at JB Town Center
            </span>
          </button>

          {/* Zone 2: 4 Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activePage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#F2ECE1]/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#D4AF37] hover:text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hotline</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-lg shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#2C1D11] border-b border-[#A07855]/30 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activePage === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#8C6239] text-white font-semibold'
                        : 'text-[#F2ECE1]/90 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#A07855]/20 flex flex-col gap-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full text-center py-2.5 px-4 bg-[#3D271D] text-[#D4AF37] text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now: {HOTEL_INFO.displayPhone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
