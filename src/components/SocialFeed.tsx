'use client';

import { Heart, MessageCircle, Share2, Play } from 'lucide-react';
import { useState } from 'react';

interface FeedItem {
  id: string;
  type: 'product' | 'video' | 'review';
  user: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const feedItems: FeedItem[] = [
  {
    id: '1',
    type: 'product',
    user: 'Manya',
    content: 'Just found this amazing wireless headphones! Perfect for our Goa trip 🎧',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 12,
    comments: 3,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    type: 'video',
    user: 'Pari',
    content: 'Quick review of this sunscreen - must-have for beach days! ☀️',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 8,
    comments: 5,
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    type: 'review',
    user: 'Nis',
    content: 'These travel bags are incredible! Lightweight and spacious. Added to our group wishlist 🎒',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 15,
    comments: 7,
    timestamp: '6 hours ago'
  }
];

export default function SocialFeed() {
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  const toggleLike = (itemId: string) => {
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId);
    } else {
      newLikedItems.add(itemId);
    }
    setLikedItems(newLikedItems);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Social Feed</h2>
      
      <div className="space-y-4">
        {feedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {item.user.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.user}</h3>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
            </div>

            <p className="text-gray-800 mb-4">{item.content}</p>

            {item.image && (
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt="Feed content"
                  className="w-full h-64 object-cover rounded-lg"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all">
                      <Play className="w-8 h-8 fill-current" />
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`flex items-center space-x-2 transition-colors ${
                    likedItems.has(item.id) ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                  <span>{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{item.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}