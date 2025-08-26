export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  isActive: boolean;
  createdAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  customerInfo: {
    name: string;
    phone: string;
    address: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
  adminNotes?: string;
}

export const PRODUCT_CATEGORIES = [
  'One sound crackers',
  'Electric crackers',
  'Deluxe crackers',
  'Garland crackers',
  'Ground chakkar',
  'Flower pots',
  'Atom bomb',
  'Rockets',
  'Twinkling Stars and Candles',
  'Kids special and candles',
  'Night aerial Attractions',
  'Aerial and festival repeating shots',
  'Festival mega repeating shots',
  'Sparklers',
  'Gift boxes and family pack',
  '2025 special crackers'
];