import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { PageRoute, Room } from './types/hotel';

export default function App() {
  // Determine initial page from URL path or hash
  const getInitialPage = (): PageRoute => {
    const path = window.location.pathname.toLowerCase().replace('/', '');
    const hash = window.location.hash.toLowerCase().replace('#', '');
    
    if (path === 'rooms' || hash === 'rooms') return 'rooms';
    if (path === 'facilities' || hash === 'facilities') return 'facilities';
    if (path === 'contact' || hash === 'contact') return 'contact';
    return 'home';
  };

  const [activePage, setActivePage] = useState<PageRoute>(getInitialPage());
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<Room | null>(null);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);

  // Sync state with browser URL navigation and popstate (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setActivePage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newPath);
  };

  const handleOpenBookingWithRoom = (room: Room) => {
    setSelectedRoomForBooking(room);
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedRoomForBooking(null);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C1D11] selection:bg-[#8C6239] selection:text-white">
      
      {/* Header with Top Bar Contract */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Main Content Area rendering separate pages */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenGeneralBooking}
            onSelectRoom={(room) => setSelectedRoomForDetail(room)}
          />
        )}

        {activePage === 'rooms' && (
          <RoomsPage
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onSelectRoomModal={(room) => setSelectedRoomForDetail(room)}
          />
        )}

        {activePage === 'facilities' && (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedRoom={selectedRoomForBooking}
      />

      {/* Interactive Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onBookNow={(room) => handleOpenBookingWithRoom(room)}
      />

    </div>
  );
}
