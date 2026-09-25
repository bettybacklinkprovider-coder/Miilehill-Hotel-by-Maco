import React, { useState } from 'react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types/hotel';
import { BedDouble, Users, Maximize, Check, Calendar, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface RoomsPageProps {
  onOpenBookingWithRoom: (room: Room) => void;
  onSelectRoomModal: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBookingWithRoom, onSelectRoomModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Rooms' },
    { id: 'deluxe', label: 'Deluxe Rooms' },
    { id: 'executive', label: 'Executive Suites' },
    { id: 'family', label: 'Family Suites' },
    { id: 'studio', label: 'Studio Rooms' },
  ];

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(r => r.category === selectedCategory);

  return (
    <div className="bg-[#FDFBF7] py-12 space-y-12">
      
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
          Luxury Accommodation
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2C1D11]">
          Rooms & Suites
        </h1>
        <p className="text-sm sm:text-base text-[#3D271D]/80 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of boutique guest rooms on Level 3, Wisma HYH. Styled with warm timber finishes, crisp linens, and quiet climate control.
        </p>

        {/* Category Interactive Filter Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#8C6239] text-white shadow-md'
                    : 'bg-[#F2ECE1] text-[#2C1D11] hover:bg-[#A07855]/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Direct Booking Inclusions Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C1D11] text-[#FDFBF7] p-6 rounded-2xl border border-[#D4AF37]/30 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
          <div className="space-y-1">
            <span className="text-[#D4AF37] font-bold block">Free Enterprise Wi-Fi</span>
            <span className="text-[#F2ECE1]/70">High-speed fiber in all rooms</span>
          </div>
          <div className="space-y-1">
            <span className="text-[#D4AF37] font-bold block">24/7 Level 3 Reception</span>
            <span className="text-[#F2ECE1]/70">Express check-in assistance</span>
          </div>
          <div className="space-y-1">
            <span className="text-[#D4AF37] font-bold block">Best Direct Rate</span>
            <span className="text-[#F2ECE1]/70">No booking fees or hidden charges</span>
          </div>
          <div className="space-y-1">
            <span className="text-[#D4AF37] font-bold block">Daily Housekeeping</span>
            <span className="text-[#F2ECE1]/70">Pristine sanitization & linens</span>
          </div>
        </div>
      </div>

      {/* Rooms Showcase Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#A07855]/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-[#8C6239]/40 transition-all duration-300"
          >
            
            {/* Image Column (5 cols) */}
            <div className="relative lg:col-span-5 h-72 lg:h-auto min-h-[280px] bg-slate-900 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#2C1D11]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                {room.sizeSqM} sq.m
              </div>
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#A07855]/15 pb-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6239]">
                      {room.category} Class
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1D11]">
                      {room.name}
                    </h3>
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <span className="text-xs text-[#3D271D]/60 block">Starting From</span>
                    <span className="text-3xl font-serif font-bold text-[#8C6239]">MYR {room.priceMYR}</span>
                    <span className="text-xs text-[#3D271D]/70"> / night</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#3D271D]/80 leading-relaxed">
                  {room.fullDesc}
                </p>

                {/* Key Specs Bar */}
                <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#2C1D11] bg-[#F2ECE1]/60 p-3 rounded-xl border border-[#A07855]/15">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4 text-[#8C6239]" />
                    {room.bedType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#8C6239]" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-[#8C6239]" />
                    {room.sizeSqM} sq.m Floor Space
                  </span>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  {room.amenities.slice(0, 6).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#3D271D]/90">
                      <Check className="w-3.5 h-3.5 text-[#8C6239] shrink-0" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-[#A07855]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => onSelectRoomModal(room)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#8C6239] hover:text-[#2C1D11] underline transition-colors"
                >
                  View Full Room Details
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="p-2.5 bg-[#F2ECE1] hover:bg-[#A07855]/20 text-[#2C1D11] rounded-lg transition-colors"
                    title="Call Desk"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onOpenBookingWithRoom(room)}
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Room Now
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
