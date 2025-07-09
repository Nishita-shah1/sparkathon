'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Users, Bell, User, MessageCircle } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">Walmart Social</div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, friends, or groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <Users className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <button className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </button>
            <button className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
            <button className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </button>
            <button className="p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}