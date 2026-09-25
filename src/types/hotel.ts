export type PageRoute = 'home' | 'rooms' | 'facilities' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'executive' | 'family' | 'studio';
  shortDesc: string;
  fullDesc: string;
  image: string;
  priceMYR: number;
  sizeSqM: number;
  capacity: string;
  bedType: string;
  amenities: string[];
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  highlights: string[];
}

export interface BookingFormData {
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomId: string;
  guestsCount: number;
  specialRequests: string;
}

export interface WhyStayReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}
