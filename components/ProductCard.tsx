import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[4/5]">
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-cocoa-900 text-gold-500 text-[10px] uppercase font-bold tracking-widest px-3 py-1 z-10">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-gold-500 text-cocoa-900 text-[10px] uppercase font-bold tracking-widest px-3 py-1 z-10">
            Best Seller
          </span>
        )}

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-sm p-4 flex justify-between items-center border-t border-cocoa-100">
           <span className="font-serif text-cocoa-900 italic">Quick Add</span>
           <button className="bg-cocoa-900 text-gold-500 p-2 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
             <ShoppingBag className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="text-center group-hover:opacity-80 transition-opacity">
        <h3 className="font-serif text-xl text-cocoa-900 mb-1">{product.name}</h3>
        <p className="font-sans text-xs text-cocoa-500 uppercase tracking-wide mb-2">{product.category}</p>
        <span className="font-sans font-medium text-gold-600">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;