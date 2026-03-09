export const hotelInfo = {
  name: 'Mayuri Residency',
  tagline: 'Your Home Away from Home in Bengaluru',
  description:
    'Mayuri Residency is a comfortable 3-star hotel in Bengaluru offering modern rooms, dining facilities, and convenient access to major city attractions. Suitable for both business and leisure travelers.',
  rating: 4.4,
  reviewCount: 199,
  category: '3-Star Hotel',
  address: {
    line1: '5, 100 Feet Ring Rd',
    line2: 'BTM Layout 2nd Stage, BTM Layout',
    line3: 'Bengaluru, Karnataka 560029',
    full: '5, 100 Feet Ring Rd, BTM Layout 2nd Stage, BTM Layout, Bengaluru, Karnataka 560029',
  },
  distanceFromCity: '5.5 km from City Center',
  airport: 'Kempegowda International Airport (41 km)',
  landmark: 'Jayadeva Hospital – 1.8 km',
  phone: '9035553529',
  whatsapp: '919035553529',
  email: 'Mayuriresidencybtm@gmail.com',
  checkIn:  '11:30 AM',
  checkOut: '12:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d77.6922!3d12.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzAwLjAiTiA3N8KwNDEnMzIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
};

export const rooms = [
  {
    id: 1,
    name: 'Deluxe Double Room',
    type: 'Double',
    area: '883 sq m',
    bed: '9 Double Beds',
    occupancy: '2 Adults',
    priceFrom: 2645,
    priceTo: 3800,
    description:
      'Comfortable deluxe double room with private bathroom and all essential amenities. Perfect for couples or solo business travelers seeking a relaxing stay.',
    image: '/rooms/double-room.jpg',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Private Bathroom', 'Bath'],
    highlight: 'Most Popular',
  },
  {
    id: 2,
    name: 'Twin Room',
    type: 'Twin',
    area: '993 sq m',
    bed: '12 Single Beds',
    occupancy: '2 Adults',
    priceFrom: 3040,
    priceTo: 3800,
    description:
      'Spacious twin room with city views and all modern conveniences. Ideal for friends or colleagues traveling together, featuring comfortable single beds and a private bathroom.',
    image: '/rooms/twin-room.jpg',
    amenities: ['Air Conditioning', 'City View', 'Free Wi-Fi', 'Flat-screen TV', 'Private Bathroom', 'Bath'],
    highlight: 'City View',
  },
  {
    id: 3,
    name: 'Deluxe Suite',
    type: 'Suite',
    area: '999 sq m',
    bed: '3 Large Double Beds',
    occupancy: '2 Adults',
    priceFrom: 3040,
    priceTo: 3800,
    description:
      'Luxurious private suite with large double beds, ideal for a premium stay. Features top-tier amenities and a spacious private bathroom for ultimate comfort.',
    image: '/rooms/deluxe-suite.jpg',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Private Bathroom', 'Bath', 'Private Suite'],
    highlight: 'Best for Families',
  },
];

export const amenities = [
  { icon: 'Wifi',          label: 'Free Wi-Fi',         category: 'Connectivity' },
  { icon: 'AirVent',       label: 'Air Conditioning',   category: 'Comfort' },
  { icon: 'ParkingSquare', label: 'Free Parking',        category: 'Transport' },
  { icon: 'Utensils',      label: 'Restaurant',          category: 'Dining' },
  { icon: 'BellRing',      label: 'Room Service',        category: 'Services' },
  { icon: 'Tv',            label: 'Flat-screen TV',      category: 'Entertainment' },
  { icon: 'ShieldCheck',   label: 'Safe Deposit Box',    category: 'Security' },
  { icon: 'BellRing',      label: '24-hr Front Desk',    category: 'Services' },
  { icon: 'Car',           label: 'Airport Transfer',    category: 'Transport' },
  { icon: 'WashingMachine',label: 'Laundry Service',     category: 'Services' },
  { icon: 'Luggage',       label: 'Luggage Assistance',  category: 'Services' },
  { icon: 'Zap',           label: 'Power Backup',        category: 'Utilities' },
  { icon: 'Elevator',      label: 'Elevator / Lift',     category: 'Access' }, // mapped to ArrowUpDown in Amenities.tsx
  { icon: 'Shield',        label: 'Security Service',    category: 'Security' },
  { icon: 'Globe',         label: 'Multi-language Staff',category: 'Services' },
  { icon: 'Home',          label: 'Daily Housekeeping',  category: 'Services' },
];

export const nearbyAttractions = [
  { name: 'Lalbagh Botanical Garden', distance: '5 km',   icon: 'Flower2',      type: 'Nature' },
  { name: 'Forum Mall, Koramangala',  distance: '3.6 km', icon: 'ShoppingBag',  type: 'Shopping' },
  { name: 'Cubbon Park',             distance: '9 km',   icon: 'TreePine',     type: 'Nature' },
  { name: 'Bangalore Palace',        distance: '11 km',  icon: 'Castle',       type: 'Heritage' },
  { name: 'Rashtriya Vidyalaya Metro', distance: '3.3 km', icon: 'Train',       type: 'Transport' },
  { name: 'Bangalore City Railway',  distance: '10 km',  icon: 'Bus',          type: 'Transport' },
  { name: 'Bull Temple',             distance: '7 km',   icon: 'Navigation',   type: 'Landmark' },
  { name: 'Kempegowda Airport',      distance: '41 km',  icon: 'Plane',        type: 'Transport' },
];

export const reviews = [
  {
    id: 1,
    name: 'Prabal Bharadwaj',
    rating: 5,
    date: 'October 2025',
    comment: 'Great place to stay at a very prominent location (right next to the BTM metro station). Rooms are super clean and tidy and the staff is very courteous. I accommodated my family for an event here and the stay was very comfortable. Special thanks to Jayanth, he gave us a great pricing as well. Loved it!',
    avatar: 'PB',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Priyanshu R',
    rating: 5,
    date: 'January 2026',
    comment: 'The property is located in a convenient area with easy access to nearby attractions. The ambience is warm and well-maintained. Overall, a very good stay.',
    avatar: 'PR',
    source: 'Google',
  },
  {
    id: 3,
    name: 'Harshith Rai',
    rating: 5,
    date: 'August 2025',
    comment: 'Excellent Stay. Very clean, luxurious, and comfortable rooms with superb A/C. Peaceful atmosphere and great service. Perfect for a relaxing stay. Highly recommended!',
    avatar: 'HR',
    source: 'Google',
  },
  {
    id: 4,
    name: 'Ved Patani',
    rating: 5,
    date: 'November 2025',
    comment: 'One of the best affordable hotels in Bangalore prime location so called BTM, and in many ways in terms of rooms or service or customer satisfaction, they are best and better than other 5 star hotels.',
    avatar: 'VP',
    source: 'Google',
  },
  {
    id: 5,
    name: 'Anish Rai',
    rating: 5,
    date: 'August 2025',
    comment: 'Affordable, clean, and comfortable. What more could you ask for? The staff was polite and always ready to assist.',
    avatar: 'AR',
    source: 'Google',
  },
  {
    id: 6,
    name: 'Glory Vijil',
    rating: 5,
    date: 'November 2025',
    comment: 'Restaurant service is great. Food served is hygienic and must visit place for family dine in. Prices are fair for the quality and quantity of the food served. Vinod\'s hospitality was great. Overall highly recommended!',
    avatar: 'GV',
    source: 'Google',
  },
];

export const galleryImages = [
  {
    url: '/gallery/exterior-night.jpg',
    alt: 'Hotel Exterior – Night',
    category: 'Exterior',
  },
  {
    url: '/gallery/exterior-day.jpg',
    alt: 'Hotel Exterior – Day',
    category: 'Exterior',
  },
  {
    url: '/gallery/room-double.jpg',
    alt: 'Deluxe Double Room',
    category: 'Rooms',
  },
  {
    url: '/gallery/room-twin-1.jpg',
    alt: 'Twin Room',
    category: 'Rooms',
  },
  {
    url: '/gallery/room-twin-2.jpg',
    alt: 'Twin Room – Wide View',
    category: 'Rooms',
  },
  {
    url: '/gallery/room-twin-3.jpg',
    alt: 'Twin Room – Beds',
    category: 'Rooms',
  },
  {
    url: '/gallery/room-suite.jpg',
    alt: 'Deluxe Suite',
    category: 'Rooms',
  },
  {
    url: '/gallery/room-interior.jpg',
    alt: 'Room Interior',
    category: 'Rooms',
  },
  {
    url: '/gallery/lobby-reception.jpg',
    alt: 'Reception Desk',
    category: 'Interior',
  },
  {
    url: '/gallery/lobby-wide.jpg',
    alt: 'Hotel Lobby',
    category: 'Interior',
  },
  {
    url: '/gallery/lounge.jpg',
    alt: 'Lounge Area',
    category: 'Interior',
  },
  {
    url: '/gallery/lift-lobby.jpg',
    alt: 'Lift Lobby',
    category: 'Interior',
  },
];

export const policies = [
  { label: 'Check-in',       value: 'From 11:30 AM' },
  { label: 'Check-out',      value: 'Until 12:00 PM' },
  { label: 'Age Restriction', value: 'No age restriction for check-in' },
  { label: 'ID Required',    value: 'Aadhaar / Passport / Driving License' },
  { label: 'Pets',           value: 'Not Allowed' },
  { label: 'Parties/Events', value: 'Not Allowed' },
  { label: 'Cots & Extra Beds', value: 'Not available' },
  { label: 'Cancellation',   value: 'Costs 50% to cancel – no prepayment needed' },
];
