export const hotelInfo = {
  name: 'Mayuri Residency',
  tagline: 'Your Home Away from Home in Bengaluru',
  description:
    'Mayuri Residency is a comfortable 3-star hotel in Bengaluru offering modern rooms, dining facilities, and convenient access to major city attractions. Suitable for both business and leisure travelers.',
  rating: 4.4,
  reviewCount: 140,
  category: '3-Star Hotel',
  address: {
    line1: 'No. 35/7, Nagaraj Building',
    line2: 'Yadavanahalli Village, Attibele Hobli',
    line3: 'Hosur Road, Bengaluru, Karnataka – 562107',
    full: 'No. 35/7, Nagaraj Building, Yadavanahalli Village, Attibele Hobli, Hosur Road, Bengaluru, Karnataka – 562107, India',
  },
  distanceFromCity: '8.4 km from City Center',
  airport: 'Kempegowda International Airport (~65 km)',
  landmark: 'Oxford Medical College Hospital – 1.4 km',
  phone: '+91 80 2345 6789',
  whatsapp: '+918023456789',
  email: 'info@mayuriresidency.com',
  checkIn:  '12:00 PM',
  checkOut: '11:00 AM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d77.6922!3d12.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzAwLjAiTiA3N8KwNDEnMzIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
};

export const rooms = [
  {
    id: 1,
    name: 'Deluxe Double Room',
    type: 'Double',
    area: '102 sq ft',
    bed: 'King Bed',
    occupancy: '2 Adults',
    priceFrom: 2000,
    priceTo: 2800,
    description:
      'Spacious deluxe room with a king-size bed, perfect for couples and solo business travelers. Enjoy modern amenities and a comfortable private bathroom.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Work Desk', 'Private Bathroom', 'Safe Deposit Box'],
    highlight: 'Most Popular',
  },
  {
    id: 2,
    name: 'Deluxe Twin Room',
    type: 'Twin',
    area: '124 sq ft',
    bed: 'Two Single Beds',
    occupancy: '2 Adults',
    priceFrom: 2200,
    priceTo: 3000,
    description:
      'A spacious twin room with city views, ideal for friends or colleagues traveling together. Features two comfortable single beds and all modern conveniences.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    amenities: ['Air Conditioning', 'City View', 'Free Wi-Fi', 'Flat-screen TV', 'Work Desk', 'Private Bathroom'],
    highlight: 'City View',
  },
  {
    id: 3,
    name: 'Family Executive Room',
    type: 'Family',
    area: '180 sq ft',
    bed: 'King + Single Beds',
    occupancy: '4 Adults',
    priceFrom: 3000,
    priceTo: 3800,
    description:
      'Expansive family suite with interconnected rooms, perfect for families. Generous space ensures everyone travels comfortably with all premium amenities.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    amenities: ['Air Conditioning', 'Interconnected Rooms', 'Free Wi-Fi', 'Flat-screen TV', 'Mini Fridge', 'Private Bathroom'],
    highlight: 'Best for Families',
  },
];

export const amenities = [
  { icon: 'Wifi',          label: 'Free Wi-Fi',         category: 'Connectivity' },
  { icon: 'AirVent',       label: 'Air Conditioning',   category: 'Comfort' },
  { icon: 'ParkingSquare', label: 'Free Parking',        category: 'Transport' },
  { icon: 'Utensils',      label: 'Restaurant',          category: 'Dining' },
  { icon: 'Wine',          label: 'Bar / Skybar',        category: 'Dining' },
  { icon: 'Coffee',        label: 'Breakfast Options',   category: 'Dining' },
  { icon: 'Tv',            label: 'Flat-screen TV',      category: 'Entertainment' },
  { icon: 'ShieldCheck',   label: 'Safe Deposit Box',    category: 'Security' },
  { icon: 'BellRing',      label: '24-hr Front Desk',    category: 'Services' },
  { icon: 'Car',           label: 'Airport Transfer',    category: 'Transport' },
  { icon: 'WashingMachine',label: 'Laundry Service',     category: 'Services' },
  { icon: 'Luggage',       label: 'Luggage Assistance',  category: 'Services' },
  { icon: 'Zap',           label: 'Power Backup',        category: 'Utilities' },
  { icon: 'Elevator',      label: 'Elevator / Lift',     category: 'Access' }, // mapped to ArrowUpDown in Amenities.tsx
  { icon: 'Leaf',          label: 'Garden Area',         category: 'Outdoors' },
  { icon: 'Building2',     label: 'Terrace',             category: 'Outdoors' },
  { icon: 'Globe',         label: 'Multi-language Staff',category: 'Services' },
  { icon: 'Shield',        label: 'Security Service',    category: 'Security' },
];

export const nearbyAttractions = [
  { name: 'Lalbagh Botanical Garden', distance: '6.7 km',  icon: 'Flower2',      type: 'Nature' },
  { name: 'UB City Mall',            distance: '9.7 km',  icon: 'ShoppingBag',  type: 'Shopping' },
  { name: 'Cubbon Park',             distance: '10.4 km', icon: 'TreePine',     type: 'Nature' },
  { name: 'Bangalore Palace',        distance: '12.7 km', icon: 'Castle',       type: 'Heritage' },
  { name: 'Indiranagar Metro',       distance: '11 km',   icon: 'Train',        type: 'Transport' },
  { name: 'Madiwala Bus Stop',       distance: '2.9 km',  icon: 'Bus',          type: 'Transport' },
  { name: 'Central Silk Board',      distance: '2.7 km',  icon: 'Navigation',   type: 'Landmark' },
  { name: 'Kempegowda Airport',      distance: '~65 km',  icon: 'Plane',        type: 'Transport' },
];

export const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    date: 'January 2025',
    comment: 'Excellent stay! The staff was extremely friendly and helpful. Check-in process was smooth and the room was very comfortable. Will definitely return.',
    avatar: 'RK',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    rating: 4,
    date: 'December 2024',
    comment: 'Good location for traveling around Bangalore. Clean rooms, decent breakfast. The AC worked perfectly. A great value for the price.',
    avatar: 'PS',
    source: 'Booking.com',
  },
  {
    id: 3,
    name: 'Anil Mehta',
    rating: 5,
    date: 'November 2024',
    comment: 'Stayed here for a week on a business trip. The work desk and Wi-Fi made it easy to work from room. Highly recommend for business travelers.',
    avatar: 'AM',
    source: 'TripAdvisor',
  },
  {
    id: 4,
    name: 'Deepa Nair',
    rating: 4,
    date: 'October 2024',
    comment: 'The family room was spacious enough for our family of four. Kids enjoyed the stay. The restaurant food was good, especially breakfast.',
    avatar: 'DN',
    source: 'MakeMyTrip',
  },
  {
    id: 5,
    name: 'Suresh Patel',
    rating: 5,
    date: 'September 2024',
    comment: 'Outstanding hospitality! The terrace view is beautiful. Staff went above and beyond to make our anniversary special. 10/10!',
    avatar: 'SP',
    source: 'Google',
  },
  {
    id: 6,
    name: 'Kavitha Reddy',
    rating: 4,
    date: 'August 2024',
    comment: 'Very clean hotel with great amenities. Parking was convenient. The skybar is a nice touch. Reasonable pricing for the quality offered.',
    avatar: 'KR',
    source: 'Agoda',
  },
];

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    alt: 'Hotel Exterior',
    category: 'Exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    alt: 'Deluxe Double Room',
    category: 'Rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    alt: 'Deluxe Twin Room',
    category: 'Rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    alt: 'Family Suite',
    category: 'Rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    alt: 'Bathroom',
    category: 'Rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Restaurant',
    category: 'Dining',
  },
  {
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    alt: 'Bar / Skybar',
    category: 'Dining',
  },
  {
    url: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&q=80',
    alt: 'Hotel Lobby',
    category: 'Interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe2dc?w=800&q=80',
    alt: 'Terrace View',
    category: 'Exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=800&q=80',
    alt: 'Garden Area',
    category: 'Exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    alt: 'Breakfast Spread',
    category: 'Dining',
  },
  {
    url: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&q=80',
    alt: 'Parking Area',
    category: 'Exterior',
  },
];

export const policies = [
  { label: 'Check-in',       value: '12:00 PM' },
  { label: 'Check-out',      value: '11:00 AM' },
  { label: 'Minimum Age',    value: '18 years' },
  { label: 'ID Required',    value: 'Aadhaar / Passport / Driving License' },
  { label: 'Pets',           value: 'Not Allowed' },
  { label: 'Cancellation',   value: 'Free cancellation up to 24 hrs before check-in' },
];
