export interface Destination {
  id: number;
  city: string;
  country: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  isFavorite: boolean;
}

export interface TourPackage {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: string;
  hotel: string;
  transportation: string;
  meals: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  isWishlisted: boolean;
  featured: boolean;
}

export interface WhyChooseUs {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: string;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  review: string;
}

export interface GalleryImage {
  id: number;
  image: string;
  category: string;
  title: string;
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Deals', href: '#deals' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const destinations: Destination[] = [
  {
    id: 1,
    city: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 899,
    description: 'Tropical paradise with stunning beaches and ancient temples.',
    isFavorite: false,
  },
  {
    id: 2,
    city: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: 1299,
    description: 'City of love, art, and world-class cuisine.',
    isFavorite: false,
  },
  {
    id: 3,
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: 1199,
    description: 'Futuristic city blending tradition with cutting-edge culture.',
    isFavorite: false,
  },
  {
    id: 4,
    city: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-travel-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 1499,
    description: 'Iconic white-washed buildings and breathtaking sunsets.',
    isFavorite: false,
  },
  {
    id: 5,
    city: 'Cape Town',
    country: 'South Africa',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: 999,
    description: 'Where mountains meet ocean in dramatic fashion.',
    isFavorite: false,
  },
  {
    id: 6,
    city: 'Dubai',
    country: 'UAE',
    image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: 1399,
    description: 'Luxury, innovation, and desert adventures combined.',
    isFavorite: false,
  },
  {
    id: 7,
    city: 'Kyoto',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: 1099,
    description: 'Ancient temples, serene gardens, and timeless culture.',
    isFavorite: false,
  },
  {
    id: 8,
    city: 'Maldives',
    country: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 1899,
    description: 'Crystal-clear waters and overwater bungalow paradise.',
    isFavorite: false,
  },
];

export const packageFilters = ['All', 'Beach', 'Adventure', 'Family', 'Luxury', 'Honeymoon'];

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: 'Bali Island Escape',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Beach',
    duration: '7 Days / 6 Nights',
    hotel: '5-star beach resort',
    transportation: 'Airport transfer + Tours',
    meals: 'All inclusive',
    rating: 4.9,
    originalPrice: 1899,
    discountedPrice: 1299,
    discount: 32,
    isWishlisted: false,
    featured: true,
  },
  {
    id: 2,
    title: 'Swiss Alps Adventure',
    image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Adventure',
    duration: '10 Days / 9 Nights',
    hotel: 'Mountain lodge',
    transportation: 'Train pass + Guides',
    meals: 'Half board',
    rating: 4.8,
    originalPrice: 2499,
    discountedPrice: 1799,
    discount: 28,
    isWishlisted: false,
    featured: false,
  },
  {
    id: 3,
    title: 'Greek Family Odyssey',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-travel-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Family',
    duration: '12 Days / 11 Nights',
    hotel: 'Family villa',
    transportation: 'Rental car + Ferry',
    meals: 'Breakfast included',
    rating: 4.7,
    originalPrice: 3499,
    discountedPrice: 2599,
    discount: 26,
    isWishlisted: false,
    featured: true,
  },
  {
    id: 4,
    title: 'Maldives Luxury Retreat',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Luxury',
    duration: '5 Days / 4 Nights',
    hotel: 'Overwater villa',
    transportation: 'Seaplane transfer',
    meals: 'All inclusive',
    rating: 4.9,
    originalPrice: 4999,
    discountedPrice: 3499,
    discount: 30,
    isWishlisted: false,
    featured: true,
  },
  {
    id: 5,
    title: 'Costa Rica Wildlife',
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Adventure',
    duration: '8 Days / 7 Nights',
    hotel: 'Eco-lodge',
    transportation: '4x4 + Nature tours',
    meals: 'Full board',
    rating: 4.6,
    originalPrice: 1899,
    discountedPrice: 1299,
    discount: 32,
    isWishlisted: false,
    featured: false,
  },
  {
    id: 6,
    title: 'Paris Romantic Getaway',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Honeymoon',
    duration: '6 Days / 5 Nights',
    hotel: 'Boutique hotel',
    transportation: 'Metro + City tours',
    meals: 'Breakfast included',
    rating: 4.8,
    originalPrice: 2199,
    discountedPrice: 1599,
    discount: 27,
    isWishlisted: false,
    featured: false,
  },
  {
    id: 7,
    title: 'Thailand Beach & Culture',
    image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Beach',
    duration: '9 Days / 8 Nights',
    hotel: 'Beachfront resort',
    transportation: 'Ferry + Tuk-tuk tours',
    meals: 'All inclusive',
    rating: 4.7,
    originalPrice: 1699,
    discountedPrice: 1199,
    discount: 29,
    isWishlisted: false,
    featured: false,
  },
  {
    id: 8,
    title: 'Italian Dolce Vita',
    image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Luxury',
    duration: '11 Days / 10 Nights',
    hotel: 'Historic villa',
    transportation: 'Private car + Guide',
    meals: 'Half board',
    rating: 4.9,
    originalPrice: 3999,
    discountedPrice: 2999,
    discount: 25,
    isWishlisted: false,
    featured: false,
  },
];

export const whyChooseUs: WhyChooseUs[] = [
  {
    id: 1,
    title: 'Best Price Guarantee',
    description: 'We match any competitor\'s price. If you find a lower price elsewhere, we\'ll refund the difference.',
    icon: 'BadgeDollarSign',
  },
  {
    id: 2,
    title: 'Secure Payments',
    description: 'Your payment information is protected with bank-level encryption and secure processing.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: '24/7 Customer Support',
    description: 'Our travel experts are available around the clock to help with any questions or issues.',
    icon: 'Headphones',
  },
  {
    id: 4,
    title: 'Trusted Guides',
    description: 'All our tours are led by certified, knowledgeable local guides with years of experience.',
    icon: 'Users',
  },
  {
    id: 5,
    title: 'Personalized Trips',
    description: 'Every trip is tailored to your preferences, interests, and travel style.',
    icon: 'MapPin',
  },
  {
    id: 6,
    title: 'Flexible Cancellation',
    description: 'Plans change? No problem. Our flexible cancellation policies keep you covered.',
    icon: 'RefreshCw',
  },
];

export const categories: Category[] = [
  { id: 1, name: 'Adventure', image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800', count: '120+ Tours' },
  { id: 2, name: 'Beach', image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800', count: '85+ Tours' },
  { id: 3, name: 'Mountains', image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=800', count: '95+ Tours' },
  { id: 4, name: 'Wildlife', image: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=800', count: '60+ Tours' },
  { id: 5, name: 'Cruises', image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800', count: '40+ Tours' },
  { id: 6, name: 'Cultural', image: 'https://images.pexels.com/photos/2225446/pexels-photo-2225446.jpeg?auto=compress&cs=tinysrgb&w=800', count: '75+ Tours' },
  { id: 7, name: 'Road Trips', image: 'https://images.pexels.com/photos/1573236/pexels-photo-1573236.jpeg?auto=compress&cs=tinysrgb&w=800', count: '55+ Tours' },
  { id: 8, name: 'Luxury', image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800', count: '50+ Tours' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    country: 'United States',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'Absolutely magical! Our honeymoon in Bali was beyond expectations. The team handled every detail perfectly, from the airport pickup to our sunset dinner.',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'The Swiss Alps adventure was the trip of a lifetime. Our guide was incredibly knowledgeable and the accommodations were stunning. Can\'t wait to book again!',
  },
  {
    id: 3,
    name: 'Mei Chen',
    country: 'Singapore',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'We took our family to Greece and it was flawless. The kids loved the activities, my husband loved the food, and I loved not having to plan anything!',
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    country: 'Egypt',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4,
    review: 'Great value for money. The customer service was exceptional when we had a last-minute change request. Highly recommend the Maldives package.',
  },
  {
    id: 5,
    name: 'Elena Petrova',
    country: 'Russia',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'The luxury tour in Italy was pure perfection. Every hotel was a gem, every meal was a delight. This company truly understands premium travel.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Beach', title: 'Bali Sunset' },
  { id: 2, image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'City', title: 'Paris at Night' },
  { id: 3, image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Mountains', title: 'Swiss Alps' },
  { id: 4, image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Beach', title: 'Maldives Paradise' },
  { id: 5, image: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wildlife', title: 'African Safari' },
  { id: 6, image: 'https://images.pexels.com/photos/2225446/pexels-photo-2225446.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Cultural', title: 'Ancient Temple' },
  { id: 7, image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-travel-161815.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Beach', title: 'Santorini Views' },
  { id: 8, image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'City', title: 'Dubai Skyline' },
  { id: 9, image: 'https://images.pexels.com/photos/1573236/pexels-photo-1573236.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Adventure', title: 'Road Trip' },
  { id: 10, image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Cruises', title: 'Ocean Cruise' },
];

export const heroStats = [
  { value: 50000, suffix: '+', label: 'Happy Travelers' },
  { value: 120, suffix: '+', label: 'Countries Covered' },
  { value: 2500, suffix: '+', label: 'Tours Completed' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate' },
];

export const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Discover Your Next Adventure',
    subtitle: 'Explore breathtaking destinations around the world with curated experiences',
  },
  {
    image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Wander in the Mountains',
    subtitle: 'Find peace and adventure in the world\'s most stunning alpine landscapes',
  },
  {
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Paradise Awaits',
    subtitle: 'Experience crystal-clear waters and pristine beaches in tropical havens',
  },
];

export const offerDetails = {
  title: 'Summer Special: 40% Off All Beach Packages',
  subtitle: 'Limited time offer. Book before July 31st!',
  discountCode: 'SUMMER40',
  endDate: '2026-07-31',
};
