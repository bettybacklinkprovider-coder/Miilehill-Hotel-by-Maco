import React from 'react';
import { X, Check, BedDouble, Users, Maximize, Calendar, ShieldCheck } from 'lucide-react';
import { Room } from '../types/hotel';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBookNow }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#A07855]/20 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Image Banner with overlay close */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11] via-[#2C1D11]/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Accommodation Details</span>
            <h3 className="text-3xl font-serif font-semibold">{room.name}</h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-1">
              <span className="flex items-center gap-1"><BedDouble className="w-4 h-4 text-[#D4AF37]" /> {room.bedType}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#D4AF37]" /> {room.capacity}</span>
              <span className="flex items-center gap-1"><Maximize className="w-4 h-4 text-[#D4AF37]" /> {room.sizeSqM} sq.m</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Price & Overview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F2ECE1] rounded-xl border border-[#A07855]/20">
            <div>
              <span className="text-xs text-[#3D271D]/70 font-medium">Nightly Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold font-serif text-[#2C1D11]">MYR {room.priceMYR}</span>
                <span className="text-xs text-[#3D271D]/70">/ night (Taxes included)</span>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="px-6 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-medium text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book This Room Now
            </button>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-lg font-serif font-bold text-[#2C1D11]">Room Overview</h4>
            <p className="text-sm text-[#3D271D]/80 leading-relaxed">
              {room.fullDesc}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-3">
            <h4 className="text-lg font-serif font-bold text-[#2C1D11]">Included Amenities & Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 bg-white rounded-lg border border-[#A07855]/15 text-xs font-medium text-[#2C1D11]">
                  <div className="w-5 h-5 rounded-full bg-[#8C6239]/10 text-[#8C6239] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="p-4 bg-white rounded-xl border border-[#A07855]/20 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#8C6239] shrink-0" />
            <div className="text-xs text-[#3D271D]/80 space-y-0.5">
              <p className="font-semibold text-[#2C1D11]">Direct Booking Protection</p>
              <p>Free cancellation up to 24 hours prior to check-in. Instant confirmation from front desk at Level 3, Wisma HYH.</p>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#F2ECE1]/60 border-t border-[#A07855]/20 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#3D271D] hover:text-[#2C1D11] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookNow(room);
            }}
            className="px-6 py-2.5 bg-[#2C1D11] hover:bg-[#3D271D] text-white font-medium text-xs rounded-lg transition-colors"
          >
            Reserve Now
          </button>
        </div>

      </div>
    </div>
  );
};
