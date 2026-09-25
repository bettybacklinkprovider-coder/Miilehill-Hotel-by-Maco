import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types/hotel';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoom?: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedRoom }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(preSelectedRoom?.id || ROOMS_DATA[0].id);
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update selected room if prop changes
  React.useEffect(() => {
    if (preSelectedRoom) {
      setSelectedRoomId(preSelectedRoom.id);
    }
  }, [preSelectedRoom]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello ${HOTEL_INFO.name}!\nI would like to make a room reservation inquiry:\n\n` +
      `• Name: ${guestName || 'Guest'}\n` +
      `• Phone: ${phone || 'N/A'}\n` +
      `• Room: ${currentRoom.name}\n` +
      `• Check-In: ${checkIn || 'TBD'}\n` +
      `• Check-Out: ${checkOut || 'TBD'}\n` +
      `• Guests: ${guestsCount}\n` +
      (specialRequests ? `• Requests: ${specialRequests}\n` : '') +
      `\nPlease confirm rate and room availability. Thank you!`
    );
    window.open(`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#A07855]/20 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#2C1D11] text-white px-6 py-5 flex items-center justify-between border-b border-[#A07855]/30">
          <div>
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">Direct Reservation</span>
            <h3 className="text-2xl font-serif text-[#FDFBF7] font-semibold">{HOTEL_INFO.shortName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-[#8C6239]/10 text-[#8C6239] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-[#2C1D11]">Reservation Inquiry Received!</h4>
                <p className="text-sm text-[#3D271D]/80 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{guestName || 'Guest'}</span>. Your reservation request for <span className="font-semibold text-[#8C6239]">{currentRoom.name}</span> has been logged.
                </p>
                <p className="text-xs text-[#3D271D]/60">
                  Our front desk at Wisma HYH will review your request and contact you at <span className="font-mono text-[#2C1D11] font-semibold">{phone}</span> shortly.
                </p>
              </div>

              <div className="bg-[#F2ECE1] p-4 rounded-xl border border-[#A07855]/20 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <p className="font-semibold text-[#2C1D11]">Inquiry Summary:</p>
                <div className="grid grid-cols-2 gap-2 text-[#3D271D]">
                  <div><span className="text-[#3D271D]/60">Check-in:</span> {checkIn || 'To be confirmed'}</div>
                  <div><span className="text-[#3D271D]/60">Check-out:</span> {checkOut || 'To be confirmed'}</div>
                  <div><span className="text-[#3D271D]/60">Guests:</span> {guestsCount} Person(s)</div>
                  <div><span className="text-[#3D271D]/60">Est. Rate:</span> MYR {currentRoom.priceMYR} / night</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Fast Track via WhatsApp
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#2C1D11] text-white hover:bg-[#3D271D] text-sm font-medium rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Room Selector Banner */}
              <div className="p-4 bg-[#F2ECE1] rounded-xl border border-[#A07855]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <label className="text-xs text-[#3D271D]/70 font-medium uppercase tracking-wider">Selected Accommodation</label>
                  <select
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full font-serif font-bold text-lg bg-transparent text-[#2C1D11] border-b border-[#8C6239] focus:outline-none focus:border-[#2C1D11] py-0.5 cursor-pointer"
                  >
                    {ROOMS_DATA.map(r => (
                      <option key={r.id} value={r.id} className="font-sans text-sm text-[#2C1D11]">
                        {r.name} — MYR {r.priceMYR} / night
                      </option>
                    ))}
                  </select>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs text-[#3D271D]/60 block">Starting From</span>
                  <span className="text-xl font-bold font-serif text-[#8C6239]">MYR {currentRoom.priceMYR}</span>
                  <span className="text-xs text-[#3D271D]/70"> / night</span>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Alex Tan"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Phone Number (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+60 12-345 6789"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex.tan@example.com"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Check-In Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Check-Out Date *</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Guests</label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Special Requests or Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. High floor preference, quiet room, late check-in..."
                  className="w-full p-3 text-sm bg-white border border-[#A07855]/30 rounded-lg focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#3D271D]/60 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#8C6239]"></span>
                  Best rate guaranteed for direct website inquiries.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-medium text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Submit Booking Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
