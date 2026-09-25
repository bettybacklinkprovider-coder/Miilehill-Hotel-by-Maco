import { Room, Facility, WhyStayReason } from '../types/hotel';

import heroFacadeImg from '../assets/images/hotel_hero_facade_1790332657148.jpg';
import aboutLobbyImg from '../assets/images/hotel_about_lobby_1790332674560.jpg';
import roomDeluxeKingImg from '../assets/images/room_deluxe_king_1790332694602.jpg';
import roomExecutiveSuiteImg from '../assets/images/room_executive_suite_1790332708258.jpg';
import facilityLoungeCafeImg from '../assets/images/facility_lounge_cafe_1790332724337.jpg';
import facilityReceptionDeskImg from '../assets/images/facility_reception_desk_1790332738957.jpg';
import facilityWifiImg from '../assets/images/facility_wifi_lounge_1790334145059.jpg';
import facilityHousekeepingImg from '../assets/images/facility_housekeeping_clean_1790334163148.jpg';
import facilityElevatorImg from '../assets/images/facility_elevator_access_1790334180714.jpg';
import facilityBusinessImg from '../assets/images/facility_business_corner_1790334196315.jpg';

import whyStayLocationImg from '../assets/images/why_stay_location_1790333139360.jpg';
import whyStayBoutiqueImg from '../assets/images/why_stay_boutique_1790333159561.jpg';
import whyStayCleanlinessImg from '../assets/images/why_stay_cleanliness_1790333172643.jpg';
import whyStayServiceImg from '../assets/images/why_stay_service_1790333186462.jpg';

export const HOTEL_INFO = {
  name: "Miilehill Hotel by Maco at JB Town Center",
  shortName: "Miilehill Hotel by Maco",
  phone: "+60193493411",
  displayPhone: "+60 19-349 3411",
  whatsappPhone: "60193493411",
  address: "Lvl 3, Wisma HYH, Jalan Trus, Bandar Johor Bahru, 80000 Johor Bahru, Johor Darul Ta'zim, Malaysia",
  street: "Lvl 3, Wisma HYH, Jalan Trus",
  city: "Johor Bahru",
  postcode: "80000",
  state: "Johor Darul Ta'zim",
  country: "Malaysia",
  googleMapsUrl: "https://maps.google.com/?q=Wisma+HYH+Jalan+Trus+Johor+Bahru",
  heroImage: heroFacadeImg,
  aboutImage: aboutLobbyImg,
  receptionImage: facilityReceptionDeskImg,
  loungeImage: facilityLoungeCafeImg,
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    category: 'deluxe',
    shortDesc: 'Elegantly appointed bedroom with a plush King-sized mattress, sleek modern decor, and quiet ambient lighting.',
    fullDesc: 'Designed for discerning travelers seeking comfort and style in JB Town Center. Our Deluxe King Room features a premium pocket-spring mattress, blackout curtains, high-speed Wi-Fi, and a modern en-suite bathroom with a thermostatic rain shower.',
    image: roomDeluxeKingImg,
    priceMYR: 198,
    sizeSqM: 26,
    capacity: '2 Adults',
    bedType: '1 Premium King Bed',
    amenities: [
      'High-Speed Wi-Fi',
      '43" Smart TV with Streaming',
      'Thermostatic Rain Shower',
      'Air Conditioning & Ceiling Fan',
      'In-Room Electronic Safe',
      'Mini Fridge & Mineral Water',
      'Coffee & Tea Maker',
      'Work Desk & Ergonomic Chair'
    ],
    featured: true
  },
  {
    id: 'executive-twin',
    name: 'Executive Twin Suite',
    category: 'executive',
    shortDesc: 'Ideal for business partners or friends, featuring two cozy single beds with crisp white linen and work amenities.',
    fullDesc: 'Spackled with natural sunlight and refined brown wood finishes, the Executive Twin Suite offers maximum versatility. Equipped with individual reading lights, charging ports, and express daily housekeeping.',
    image: roomExecutiveSuiteImg,
    priceMYR: 228,
    sizeSqM: 30,
    capacity: '2 Adults',
    bedType: '2 Comfortable Single Beds',
    amenities: [
      'High-Speed Wi-Fi',
      '43" Smart TV',
      'Rain Shower & Premium Toiletries',
      'Dual Work Spaces',
      'Electronic Safe Box',
      'Mini Refreshment Bar',
      'Hairdryer & Ironing Facilities',
      'Complimentary Bottled Water'
    ],
    featured: true
  },
  {
    id: 'premier-maco-suite',
    name: 'Premier Maco Signature Suite',
    category: 'executive',
    shortDesc: 'Our flagship spacious suite with an extended lounge area, luxury vanity, and panoramic city window views.',
    fullDesc: 'Experience peak hospitality at Miilehill Hotel by Maco. The Premier Maco Suite pairs rich timber accents with plush seating, an upgraded espresso station, and extra spacious layout for ultimate relaxation.',
    image: roomExecutiveSuiteImg,
    priceMYR: 320,
    sizeSqM: 42,
    capacity: '2 Adults + 1 Child',
    bedType: '1 Super King Bed + Seating Sofa',
    amenities: [
      'High-Speed Wi-Fi',
      '50" Smart TV',
      'En-Suite Luxury Bath & Rain Shower',
      'Spacious Seating Lounge',
      'Nespresso Coffee System',
      'Bathrobes & Plush Towels',
      'Laptop-Sized Digital Safe',
      'VIP Welcome Amenities'
    ],
    featured: true
  },
  {
    id: 'family-harmony-suite',
    name: 'Family Harmony Suite',
    category: 'family',
    shortDesc: 'Thoughtfully structured room for families or group travelers with flexible bed configurations and extra space.',
    fullDesc: 'Bring the whole family along. Situated on Level 3 of Wisma HYH, the Family Harmony Suite sleeps up to 4 guests comfortably with generous floor plan and top-tier soundproofing for peaceful nights.',
    image: roomDeluxeKingImg,
    priceMYR: 350,
    sizeSqM: 48,
    capacity: '4 Adults',
    bedType: '1 King Bed + 2 Twin Beds',
    amenities: [
      'High-Speed Wi-Fi',
      '50" Smart TV',
      'Double En-Suite Vanity & Shower',
      'Individual Air Con Controls',
      'Mini Refrigerator',
      'Spacious Wardrobe Storage',
      'Family Coffee & Tea Station',
      'Daily Towel & Housekeeping Service'
    ],
    featured: false
  },
  {
    id: 'studio-comfort-room',
    name: 'Studio Comfort Suite',
    category: 'studio',
    shortDesc: 'Compact, ultra-clean studio ideal for weekend getaways, solo travelers, and brief business stopovers.',
    fullDesc: 'Smart design meets budget-friendly luxury. Featuring all essential amenities in a sleek minimalist layout right in Johor Bahru town center near JB Sentral and heritage attractions.',
    image: facilityLoungeCafeImg,
    priceMYR: 168,
    sizeSqM: 22,
    capacity: '2 Adults',
    bedType: '1 Queen Bed',
    amenities: [
      'High-Speed Wi-Fi',
      '32" Smart TV',
      'Rain Shower',
      'Work Desk',
      'Air Conditioning',
      'Electronic Door Lock',
      'Daily Housekeeping'
    ],
    featured: false
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'reception',
    title: '24/7 Front Desk & Concierge',
    description: 'Our warm and hospitable staff are available round-the-clock to assist with smooth check-ins, local travel advice, and luggage holding.',
    iconName: 'Clock',
    image: facilityReceptionDeskImg,
    highlights: ['24-Hour Express Check-in', 'Multilingual Desk Staff', 'Luggage Storage Service', 'Taxi & Shuttle Booking']
  },
  {
    id: 'maco-lounge',
    title: 'Maco Coffee Lounge & Dining',
    description: 'Unwind at our cozy level 3 coffee lounge serving fresh artisanal brews, morning continental pastries, and relaxed seating for guests.',
    iconName: 'Coffee',
    image: facilityLoungeCafeImg,
    highlights: ['Artisanal Coffee & Tea', 'Fresh Daily Baked Pastries', 'Comfortable Meeting Seating', 'Complimentary Lounge Access']
  },
  {
    id: 'wifi',
    title: 'High-Speed Enterprise Wi-Fi',
    description: 'Seamless, high-speed fiber internet coverage throughout all guest rooms, suites, lobby, and common areas.',
    iconName: 'Wifi',
    image: facilityWifiImg,
    highlights: ['100 Mbps Direct Speed', 'Unlimited Devices Supported', 'Secure Guest Network', 'In-Room Ethernet Port']
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping & Hygiene',
    description: 'Rigorous cleanliness standards with daily room refreshing, fresh crisp bed linens, sanitised surfaces, and plush bath towels.',
    iconName: 'Sparkles',
    image: facilityHousekeepingImg,
    highlights: ['Daily Linen Replacement', 'Sterilised Bathrooms', 'Environmentally Friendly Wash', 'Prompt Turndown Requests']
  },
  {
    id: 'location-access',
    title: 'Prime Location & Elevator Access',
    description: 'Located at Level 3 of Wisma HYH on Jalan Trus, with dedicated elevator access, electronic security cards, and covered entrance.',
    iconName: 'ShieldCheck',
    image: facilityElevatorImg,
    highlights: ['Keycard Floor Access', 'Covered Drop-off Point', 'CCTV Security Monitoring', 'Walking Distance to JB City Square']
  },
  {
    id: 'business-services',
    title: 'Guest Business Corner',
    description: 'Equipped with printing, scanning, and power stations for mobile professionals and corporate guests staying in Johor Bahru.',
    iconName: 'Briefcase',
    image: facilityBusinessImg,
    highlights: ['Document Printing & Scan', 'High-Speed Work Desks', 'Charging Hub Station', 'Quiet Atmosphere']
  }
];

export const WHY_STAY_REASONS: WhyStayReason[] = [
  {
    id: 'prime-location',
    title: 'Unrivalled Town Center Location',
    description: 'Steps away from Jalan Dhoby heritage street, Komtar JBCC, City Square shopping mall, and 5 minutes to JB Sentral / CIQ checkpoint.',
    iconName: 'MapPin',
    image: whyStayLocationImg
  },
  {
    id: 'boutique-comfort',
    title: 'Modern Boutique Comfort',
    description: 'Meticulously designed rooms with rich warm brown timber, plush orthopedic bedding, and quiet air conditioning for restful sleep.',
    iconName: 'Sparkles',
    image: whyStayBoutiqueImg
  },
  {
    id: 'impeccable-cleanliness',
    title: 'Impeccable Cleanliness & Care',
    description: 'Highest standards of hygiene with daily professional housekeeping, fresh towels, and pristine sanitized bath facilities.',
    iconName: 'Shield',
    image: whyStayCleanlinessImg
  },
  {
    id: 'warm-hospitality',
    title: 'Personalized Guest Service',
    description: 'Dedicated Maco hospitality team ensuring a seamless arrival, local travel assistance, and welcoming guest experience.',
    iconName: 'HeartHandshake',
    image: whyStayServiceImg
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "Jalan Dhoby Heritage Street",
    distance: "2 mins walk (150m)",
    description: "Famous hipster cafes, boutique bakeries, and historical shophouses."
  },
  {
    name: "Komtar JBCC & City Square",
    distance: "5 mins walk (400m)",
    description: "Premier shopping malls, cinema, currency exchange, and dining options."
  },
  {
    name: "JB Sentral & CIQ Checkpoint",
    distance: "7 mins walk (600m)",
    description: "Main transport hub for trains, buses, and direct Singapore Causeway customs."
  },
  {
    name: "Hiap Joo Bakery (Banana Cake)",
    distance: "3 mins walk (200m)",
    description: "100-year-old wood-fired bakery famous for traditional banana cakes."
  },
  {
    name: "Bazaar Karat Night Market",
    distance: "3 mins walk (250m)",
    description: "Vibrant evening market along Jalan Segget for local street food & crafts."
  }
];

export const FAQS = [
  {
    q: "Where is Miilehill Hotel by Maco located?",
    a: "We are located at Level 3, Wisma HYH, Jalan Trus, in the heart of Bandar Johor Bahru town center (Postcode 80000). We are walking distance to JB City Square, Komtar JBCC, and JB Sentral CIQ."
  },
  {
    q: "How do I check in upon arrival at Wisma HYH?",
    a: "Enter Wisma HYH on Jalan Trus and take the main building elevator directly up to Level 3. Our 24-hour reception desk is right at the elevator lobby for instant check-in."
  },
  {
    q: "What are the standard Check-in and Check-out times?",
    a: "Standard Check-in time is from 3:00 PM onwards, and Check-out is until 12:00 PM (noon). Early check-in or late check-out can be requested subject to room availability."
  },
  {
    q: "Is parking available near the hotel?",
    a: "Public street parking and covered multi-storey parking facilities are available directly along Jalan Trus and adjacent commercial complexes around Wisma HYH."
  },
  {
    q: "How can I make a reservation or inquire about room rates?",
    a: "You can easily book online via our 'Book Your Stay' form on this website, call our reservation hotline directly at +60193493411, or send us a WhatsApp message for instant response."
  }
];
