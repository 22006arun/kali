import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { Product, User, PRODUCT_CATEGORIES } from '../types';

// Sample products for each category
const sampleProducts: Omit<Product, 'id' | 'createdAt'>[] = [
  {
    name: 'Premium Sparklers - 10 inch',
    category: 'Sparklers',
    price: 150,
    description: 'Beautiful long-lasting sparklers perfect for celebrations. Burns for 45 seconds with bright golden sparks.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 100,
    isActive: true
  },
  {
    name: 'Electric Crackers Combo',
    category: 'Electric crackers',
    price: 300,
    description: 'Safe electric crackers with stunning light effects. No smoke, perfect for indoor celebrations.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 50,
    isActive: true
  },
  {
    name: 'Deluxe Flower Pot - Large',
    category: 'Flower pots',
    price: 250,
    description: 'Colorful flower pot crackers with amazing visual effects. Creates beautiful fountain of colors.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 75,
    isActive: true
  },
  {
    name: 'Sky Rocket - Multi Color',
    category: 'Rockets',
    price: 200,
    description: 'High-flying rockets with spectacular aerial displays. Multiple color bursts in the sky.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 60,
    isActive: true
  },
  {
    name: 'Kids Special Safety Pack',
    category: 'Kids special and candles',
    price: 180,
    description: 'Safe and fun crackers specially designed for children. Includes sparklers and safe fountains.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 80,
    isActive: true
  },
  {
    name: 'Ground Chakkar - Spinning Wheel',
    category: 'Ground chakkar',
    price: 120,
    description: 'Colorful spinning wheel crackers that create mesmerizing patterns on the ground.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 90,
    isActive: true
  },
  {
    name: 'Festival Gift Box - Premium',
    category: 'Gift boxes and family pack',
    price: 500,
    description: 'Complete festival pack with assorted crackers. Perfect gift for families and celebrations.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 30,
    isActive: true
  },
  {
    name: '2025 Special New Year Crackers',
    category: '2025 special crackers',
    price: 350,
    description: 'Exclusive 2025 collection with latest designs and effects. Limited edition crackers.',
    imageUrl: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg',
    stock: 40,
    isActive: true
  }
];

export const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');

    // Create demo users
    console.log('Creating demo users...');
    
    // Create demo user
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, 'user@demo.com', 'password123');
      const userData: User = {
        uid: userCredential.user.uid,
        email: 'user@demo.com',
        displayName: 'Demo User',
        role: 'user',
        phone: '9876543210',
        address: 'Demo Address, Demo City',
        createdAt: new Date()
      };
      await setDoc(doc(db, 'users', userCredential.user.uid), userData);
      console.log('Demo user created successfully');
    } catch (error: any) {
      if (error.code !== 'auth/email-already-in-use') {
        console.error('Error creating demo user:', error);
      }
    }

    // Create demo admin
    try {
      const adminCredential = await createUserWithEmailAndPassword(auth, 'admin@demo.com', 'admin123');
      const adminData: User = {
        uid: adminCredential.user.uid,
        email: 'admin@demo.com',
        displayName: 'Demo Admin',
        role: 'admin',
        phone: '6374363805',
        address: 'Viruthunagar Main Road, Amathur, Viruthunagar DT',
        createdAt: new Date()
      };
      await setDoc(doc(db, 'users', adminCredential.user.uid), adminData);
      console.log('Demo admin created successfully');
    } catch (error: any) {
      if (error.code !== 'auth/email-already-in-use') {
        console.error('Error creating demo admin:', error);
      }
    }

    // Add sample products
    console.log('Adding sample products...');
    const productsRef = collection(db, 'products');
    
    for (const product of sampleProducts) {
      const productData = {
        ...product,
        createdAt: new Date()
      };
      await addDoc(productsRef, productData);
    }

    console.log('Database seeding completed successfully!');
    console.log('Demo accounts created:');
    console.log('User: user@demo.com / password123');
    console.log('Admin: admin@demo.com / admin123');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};