export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Truffles' | 'Bars' | 'Cookies' | 'Gifting' | 'BonBons';
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}

export interface NavItem {
  label: string;
  path: string;
}