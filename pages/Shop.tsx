import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Filter } from 'lucide-react';

const Shop: React.FC = () => {
  const categories = ['All', 'Truffles', 'BonBons', 'Bars', 'Cookies', 'Gifting'];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(searchParams.get('cat') || 'All');
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: category });
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#FDF8F5] min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-cocoa-900 mb-4">The Collection</h1>
          <p className="text-cocoa-600 max-w-2xl mx-auto">
            Discover our range of handcrafted chocolates, made with passion and precision.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-cocoa-200 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-sm uppercase tracking-widest font-bold pb-2 transition-all ${
                activeCategory === cat 
                  ? 'text-cocoa-900 border-b-2 border-gold-500' 
                  : 'text-cocoa-400 hover:text-cocoa-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar (Mobile Filters / Sort) */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-cocoa-500 text-sm italic font-serif">
            Showing {filteredProducts.length} results
          </span>
          <button className="flex items-center text-cocoa-900 text-sm font-bold uppercase tracking-wide hover:text-gold-600 transition-colors">
             <Filter className="w-4 h-4 mr-2" /> Sort
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cocoa-500 italic">No products found in this category.</p>
            <button onClick={() => handleCategoryChange('All')} className="mt-4 text-gold-600 underline">View all products</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;