'use client';

import { Heart, Share2, ThumbsUp, ThumbsDown, Star, Shield } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  authorityScore: number;
  suggestedBy?: string;
  liked?: boolean;
  inWishlist?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  authorityScore,
  suggestedBy,
  liked = false,
  inWishlist = false
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const [isInWishlist, setIsInWishlist] = useState(inWishlist);

  const getAuthorityColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsInWishlist(!isInWishlist)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
        {suggestedBy && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
            Suggested by {suggestedBy}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
          <div className="flex items-center ml-auto">
            <Shield className={`w-4 h-4 ${getAuthorityColor(authorityScore)}`} />
            <span className={`text-sm font-medium ${getAuthorityColor(authorityScore)}`}>
              {authorityScore}%
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-colors ${
                isLiked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-green-50'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 transition-colors">
              <ThumbsDown className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}