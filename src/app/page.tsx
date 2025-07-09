'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import GroupCard from '@/components/GroupCard';
import ProductCard from '@/components/ProductCard';
import SocialFeed from '@/components/SocialFeed';
import AIChat from '@/components/AIChat';
import CartSidebar from '@/components/CartSidebar';
import { ShoppingCart } from 'lucide-react';

const groups = [
  {
    name: "Goa Trip Squad",
    members: ["Manya", "Pari", "Nis", "You"],
    sharedItems: 12,
    wishlistItems: 8,
    image: "/group1.jpg"
  },
  {
    name: "College Friends",
    members: ["Alex", "Sarah", "Mike", "Emma", "You"],
    sharedItems: 6,
    wishlistItems: 15,
    image: "/group2.jpg"
  },
  {
    name: "Family Shopping",
    members: ["Mom", "Dad", "Sister", "You"],
    sharedItems: 20,
    wishlistItems: 5,
    image: "/group3.jpg"
  }
];

const products = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones with Noise Cancellation',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 1234,
    authorityScore: 92,
    suggestedBy: 'Manya',
    liked: true
  },
  {
    id: '2',
    name: 'Waterproof Sunscreen SPF 50+ for Sensitive Skin',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 856,
    authorityScore: 88
  },
  {
    id: '3',
    name: 'Lightweight Travel Backpack with Multiple Compartments',
    price: 45.99,
    originalPrice: 65.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    reviews: 567,
    authorityScore: 85,
    suggestedBy: 'Nis'
  },
  {
    id: '4',
    name: 'Portable Phone Charger 20000mAh Power Bank',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4526943/pexels-photo-4526943.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 2341,
    authorityScore: 90,
    inWishlist: true
  }
];

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl text-white p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop Together, Save Together</h1>
          <p className="text-xl mb-6">Connect with friends, share wishlists, and discover products together on Walmart Social</p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Create Group
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Explore Products
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Groups */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Groups</h2>
              <div className="space-y-4">
                {groups.map((group, index) => (
                  <GroupCard key={index} {...group} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Groups</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shared Items</span>
                  <span className="font-semibold">38</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wishlist Items</span>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friends Online</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Products */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for You</h2>
              <div className="grid gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Social Feed */}
          <div className="lg:col-span-1">
            <SocialFeed />
          </div>
        </div>
      </main>

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 left-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          4
        </span>
      </button>

      {/* Components */}
      <AIChat />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}