'use client';

import { Users, ShoppingBag, Heart, MessageCircle } from 'lucide-react';

interface GroupCardProps {
  name: string;
  members: string[];
  sharedItems: number;
  wishlistItems: number;
  image: string;
}

export default function GroupCard({ name, members, sharedItems, wishlistItems, image }: GroupCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{members.length} members</p>
        </div>
      </div>

      <div className="flex -space-x-2 mb-4">
        {members.slice(0, 4).map((member, index) => (
          <div
            key={index}
            className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
          >
            {member.charAt(0)}
          </div>
        ))}
        {members.length > 4 && (
          <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs">
            +{members.length - 4}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center">
          <ShoppingBag className="w-5 h-5 text-blue-600 mb-1" />
          <span className="text-sm font-medium text-gray-900">{sharedItems}</span>
          <span className="text-xs text-gray-500">Shared</span>
        </div>
        <div className="flex flex-col items-center">
          <Heart className="w-5 h-5 text-red-500 mb-1" />
          <span className="text-sm font-medium text-gray-900">{wishlistItems}</span>
          <span className="text-xs text-gray-500">Wishlist</span>
        </div>
        <div className="flex flex-col items-center">
          <MessageCircle className="w-5 h-5 text-green-600 mb-1" />
          <span className="text-sm font-medium text-gray-900">Active</span>
          <span className="text-xs text-gray-500">Chat</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Open Group
      </button>
    </div>
  );
}