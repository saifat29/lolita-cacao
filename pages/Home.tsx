import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, TESTIMONIALS } from "../constants";

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(
    (p) => p.isBestSeller || p.isNew,
  ).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <span className="animate-slide-up [animation-delay:200ms] text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4">
            Swiss Heritage • Indian Soul
          </span>
          <h1 className="animate-slide-up [animation-delay:400ms] font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            The Art of <br />
            <span className="italic text-gold-200">Indulgence</span>
          </h1>
          <p className="animate-slide-up [animation-delay:600ms] max-w-xl font-sans text-gray-200 text-sm md:text-base leading-relaxed mb-10">
            Handcrafted in small batches using the finest Felchlin couverture.
            Experience chocolate that is not just a treat—it is a moment of pure
            luxury.
          </p>
          <Link
            to="/shop"
            className="animate-slide-up [animation-delay:800ms] border border-white text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-cocoa-900 transition-all duration-300"
          >
            Shop Collections
          </Link>
        </div>
      </section>

      {/* Categories / Intro */}
      <section className="py-24 bg-[#FDF8F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl text-cocoa-900 mb-4">
              Curated Collections
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-cocoa-600 font-sans leading-relaxed">
              From our signature truffles infused with exotic spices to our
              single-origin bars, explore a world of refined flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Link
              to="/shop?cat=Truffles"
              className="group relative h-96 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600"
                alt="Truffles"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="border border-white/50 p-6 px-10 backdrop-blur-sm">
                  <h3 className="text-white font-serif text-2xl italic">
                    Truffles & Bonbons
                  </h3>
                </div>
              </div>
            </Link>
            {/* Category 2 */}
            <Link
              to="/shop?cat=Bars"
              className="group relative h-96 overflow-hidden mt-0 md:-mt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1718011794471-8777e6b5b05c?auto=format&fit=crop&q=80&w=600"
                alt="Bars"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="border border-white/50 p-6 px-10 backdrop-blur-sm">
                  <h3 className="text-white font-serif text-2xl italic">
                    Artisan Bars
                  </h3>
                </div>
              </div>
            </Link>
            {/* Category 3 */}
            <Link
              to="/shop?cat=Gifting"
              className="group relative h-96 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1656821991459-ae723d90d648?auto=format&fit=crop&q=80&w=600"
                alt="Gifting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="border border-white/50 p-6 px-10 backdrop-blur-sm">
                  <h3 className="text-white font-serif text-2xl italic">
                    Luxury Gifting
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl text-cocoa-900">
                Featured Creations
              </h2>
              <p className="text-cocoa-500 text-sm mt-2">
                Discover our most loved chocolates.
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-cocoa-900 font-bold text-xs uppercase tracking-widest hover:text-gold-600 transition-colors"
            >
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 flex md:hidden justify-center">
            <Link
              to="/shop"
              className="flex items-center text-cocoa-900 font-bold text-xs uppercase tracking-widest border-b border-cocoa-900 pb-1"
            >
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 bg-cocoa-900 text-[#FDF8F5]">
        <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
          <div className="w-full md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?auto=format&fit=crop&q=80&w=800"
              alt="Pouring chocolate"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-cocoa-900">
            <div className="max-w-md">
              <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2 block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl mb-6">
                Crafting Chocolates and Culture
              </h2>
              <p className="text-cocoa-200 font-sans leading-relaxed mb-8">
                At Nolita Cacao, chocolate is more than a confection—it's an art
                form. Inspired by European traditions and driven by a commitment
                to quality, we use only the finest Swiss chocolate and ethically
                selected ingredients.
              </p>
              <Link
                to="/about"
                className="inline-block border-b border-gold-500 text-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs font-bold tracking-widest"
              >
                Read our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gifting / Call to Action */}
      <section className="py-24 bg-[#FDF8F5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cocoa-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cocoa-900 mb-6">
            The Perfect Gift
          </h2>
          <p className="max-w-xl mx-auto text-cocoa-600 mb-10 leading-relaxed">
            Whether for a celebration, a corporate gesture, or a personal
            indulgence, our luxury gift boxes leave a lasting impression.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/shop?category=Gifting"
              className="bg-cocoa-900 text-gold-500 px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              Shop Gifts
            </Link>
            <button className="bg-transparent border border-cocoa-900 text-cocoa-900 px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-cocoa-900 hover:text-white transition-all">
              Corporate Orders
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-cocoa-100">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl text-center text-cocoa-900 mb-16">
            Client Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="text-center p-6">
                <div className="flex justify-center mb-4 text-gold-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif italic text-lg text-cocoa-800 mb-6">
                  "{t.text}"
                </p>
                <div className="font-sans text-xs font-bold text-cocoa-900 uppercase tracking-widest">
                  {t.name}
                </div>
                <div className="font-sans text-[10px] text-cocoa-500 uppercase tracking-wide">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
