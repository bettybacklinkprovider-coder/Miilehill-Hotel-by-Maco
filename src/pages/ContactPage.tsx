import React, { useState } from 'react';
import { HOTEL_INFO, FAQS } from '../data/hotelData';
import { Phone, MapPin, Mail, MessageSquare, Navigation, ExternalLink, Send, CheckCircle2, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBF7] py-12 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
          Reach Out To Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2C1D11]">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#3D271D]/80 max-w-2xl mx-auto leading-relaxed">
          Whether you need assistance with room reservations, directions to Wisma HYH on Jalan Trus, or travel guidance around Johor Bahru, we are at your service.
        </p>
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#2C1D11] text-[#FDFBF7] p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Hotel Details</span>
                <h2 className="text-2xl font-serif font-bold text-[#FDFBF7] pt-1">
                  {HOTEL_INFO.name}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#F2ECE1]/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#D4AF37] font-semibold block text-xs uppercase tracking-wider">Full Address</span>
                    <span className="leading-relaxed">{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[#D4AF37] font-semibold block text-xs uppercase tracking-wider">Reservation Phone</span>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="font-mono font-bold text-base hover:underline text-white">
                      {HOTEL_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[#D4AF37] font-semibold block text-xs uppercase tracking-wider">Front Desk Hours</span>
                    <span>24 Hours Daily (Level 3 Lobby)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[#D4AF37] font-semibold block text-xs uppercase tracking-wider">Email Support</span>
                    <span>inquiries@miilehillhotel.com</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="pt-4 border-t border-[#A07855]/30 space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full py-3.5 px-4 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {HOTEL_INFO.displayPhone}
                </a>

                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us Instant
                </a>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#3D271D] hover:bg-[#4E3326] text-[#FDFBF7] font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#A07855]/30"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  Get Directions to Wisma HYH
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#A07855]/20 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">Send A Message</span>
              <h2 className="text-2xl font-serif font-bold text-[#2C1D11]">
                Guest Contact Form
              </h2>
              <p className="text-xs text-[#3D271D]/70 pt-1">
                Fill out the form below and our front office team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-[#F2ECE1]/50 rounded-2xl p-6 border border-[#A07855]/20">
                <div className="w-16 h-16 bg-[#8C6239]/10 text-[#8C6239] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2C1D11]">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-[#3D271D]/80 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{name}</span>. We have received your inquiry regarding "{subject}". Our team will contact you shortly via phone or email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#8C6239] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Ahmad"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FDFBF7] border border-[#A07855]/30 rounded-xl focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+60 19-349 3411"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FDFBF7] border border-[#A07855]/30 rounded-xl focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FDFBF7] border border-[#A07855]/30 rounded-xl focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Inquiry Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FDFBF7] border border-[#A07855]/30 rounded-xl focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                    >
                      <option value="General Enquiry">General Inquiry</option>
                      <option value="Room Reservation">Room Reservation</option>
                      <option value="Group Stay Request">Group Stay Request</option>
                      <option value="Directions & Parking">Directions & Parking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1D11] mb-1">Message / Special Requests *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist your stay at Miilehill Hotel by Maco?"
                    className="w-full p-3.5 text-sm bg-[#FDFBF7] border border-[#A07855]/30 rounded-xl focus:outline-none focus:border-[#8C6239] focus:ring-1 focus:ring-[#8C6239]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8C6239] hover:bg-[#6e4b2a] text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

      {/* Location Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">Interactive Map Location</span>
          <h2 className="text-3xl font-serif font-bold text-[#2C1D11]">
            Find Us At Wisma HYH, Jalan Trus
          </h2>
          <p className="text-xs sm:text-sm text-[#3D271D]/80">
            Lvl 3, Wisma HYH, Jalan Trus, Bandar Johor Bahru, 80000 Johor Bahru, Johor Darul Ta'zim, Malaysia
          </p>
        </div>

        {/* Map Preview Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-[#A07855]/30 shadow-2xl h-80 sm:h-96 bg-[#2C1D11] flex items-center justify-center">
          <iframe
            title="Miilehill Hotel Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5137272268716!2d103.762810!3d1.458920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c222222222%3A0x0!2sJalan+Trus%2C+Bandar+Johor+Bahru%2C+Johor!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy"
            className="w-full h-full border-0 opacity-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Map Overlay Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#2C1D11]/95 text-white p-4 rounded-xl border border-[#D4AF37]/30 backdrop-blur-md flex items-center justify-between gap-4 shadow-2xl">
            <div className="space-y-0.5">
              <span className="text-xs font-serif font-bold text-[#D4AF37] block">Wisma HYH (Level 3)</span>
              <p className="text-[11px] text-[#F2ECE1]/80">Jalan Trus, Bandar Johor Bahru</p>
            </div>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#8C6239] hover:bg-[#6e4b2a] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3 h-3 text-[#D4AF37]" />
              Open Maps
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6239]">Guest Questions</span>
          <h2 className="text-3xl font-serif font-bold text-[#2C1D11]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#A07855]/20 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-serif font-semibold text-[#2C1D11] hover:text-[#8C6239] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#8C6239]" /> : <ChevronDown className="w-5 h-5 text-[#8C6239]" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-[#3D271D]/80 leading-relaxed border-t border-[#A07855]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
