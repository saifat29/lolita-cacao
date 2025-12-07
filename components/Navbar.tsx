import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  User,
  Minus,
  Plus,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isMobileShopExpanded, setIsMobileShopExpanded] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const categories = [
    { name: "Shop All", path: "/shop" },
    { name: "Truffles", path: "/shop?cat=Truffles" },
    { name: "BonBons", path: "/shop?cat=BonBons" },
    { name: "Bars", path: "/shop?cat=Bars" },
    { name: "Cookies", path: "/shop?cat=Cookies" },
    { name: "Gifting", path: "/shop?cat=Gifting" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic or navigation
    navigate("/shop");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || isShopHovered
          ? "bg-[#FDF8F5] shadow-sm py-4 text-cocoa-900"
          : "bg-[#FDF8F5] shadow-sm py-4 text-cocoa-900"
        // : 'bg-transparent py-6 text-cocoa-900'
      }`}
      onMouseLeave={() => setIsShopHovered(false)}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cocoa-900 p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Links Left */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group h-full py-2"
              onMouseEnter={() => setIsShopHovered(true)}
            >
              <Link
                to="/shop"
                className="flex items-center text-cocoa-900 hover:text-gold-600 transition-colors uppercase tracking-widest text-xs font-bold"
              >
                Shop <ChevronDown className="w-3 h-3 ml-1" />
              </Link>
            </div>

            <Link
              to="/about"
              className="text-cocoa-900 hover:text-gold-600 transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Our Story
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-grow lg:flex-grow-0 text-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link
              to="/"
              className="font-serif text-3xl md:text-4xl text-cocoa-900 tracking-tighter block leading-none"
            >
              NOLITA{" "}
              <span className="text-gold-500 italic text-xl md:text-2xl">
                cacao
              </span>
            </Link>
          </div>

          {/* Icons Right */}
          <div className="flex items-center space-x-6">
            <button className="hidden lg:block text-cocoa-900 hover:text-gold-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/account"
              className="hidden lg:block text-cocoa-900 hover:text-gold-600 transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 text-cocoa-900 group-hover:text-gold-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <div
          className={`absolute left-0 top-full w-full bg-[#FDF8F5] border-t border-cocoa-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isShopHovered
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsShopHovered(true)}
          onMouseLeave={() => setIsShopHovered(false)}
        >
          <div className="container mx-auto py-12 px-6">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-serif text-xl text-cocoa-900 mb-4 italic">
                  Collections
                </h3>
                <ul className="space-y-3">
                  {categories
                    .filter((c) => c.name !== "Shop All")
                    .map((cat) => (
                      <li key={cat.name}>
                        <Link
                          to={cat.path}
                          className="text-cocoa-600 hover:text-gold-600 hover:pl-2 transition-all text-sm uppercase tracking-wide"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  <li className="pt-2">
                    <Link
                      to="/shop"
                      className="text-cocoa-900 font-bold hover:text-gold-600 transition-colors text-sm uppercase tracking-wide flex items-center"
                    >
                      View All <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h3 className="font-serif text-xl text-cocoa-900 mb-4 italic">
                  Occasions
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/shop?cat=Gifting"
                      className="text-cocoa-600 hover:text-gold-600 transition-colors text-sm uppercase tracking-wide"
                    >
                      Birthdays
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?cat=Gifting"
                      className="text-cocoa-600 hover:text-gold-600 transition-colors text-sm uppercase tracking-wide"
                    >
                      Corporate Gifts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?cat=Gifting"
                      className="text-cocoa-600 hover:text-gold-600 transition-colors text-sm uppercase tracking-wide"
                    >
                      Weddings
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Featured Image in Menu */}
              <div className="col-span-2 relative h-48 rounded-sm overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1563502999-9136183a6949?auto=format&fit=crop&q=80&w=2069"
                  alt="Featured Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3">
                    <span className="font-serif text-cocoa-900 italic text-xl">
                      The Gold Collection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Standard Drawer) */}
      <div
        className={`fixed inset-0 z-50 flex pointer-events-none ${isMobileMenuOpen ? "visible" : "invisible delay-300"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-auto ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`relative w-[85%] max-w-md bg-[#FDF8F5] h-full shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-cocoa-100">
            <span className="font-serif text-2xl text-cocoa-900">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-cocoa-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="p-6 pb-0">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white border border-cocoa-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <Search className="w-4 h-4 text-cocoa-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </form>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Shop Accordion */}
            <div>
              <button
                onClick={() => setIsMobileShopExpanded(!isMobileShopExpanded)}
                className="flex justify-between items-center w-full text-left font-serif text-xl text-cocoa-900 mb-4"
              >
                Shop
                {isMobileShopExpanded ? (
                  <Minus className="w-4 h-4 text-gold-500" />
                ) : (
                  <Plus className="w-4 h-4 text-cocoa-400" />
                )}
              </button>

              <div
                className={`space-y-3 pl-4 overflow-hidden transition-all duration-300 ${isMobileShopExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    className="block text-sm text-cocoa-600 uppercase tracking-widest hover:text-gold-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-cocoa-100"></div>

            <Link
              to="/about"
              className="block font-serif text-xl text-cocoa-900"
            >
              Our Story
            </Link>
            <Link
              to="/about"
              className="block font-serif text-xl text-cocoa-900"
            >
              Values
            </Link>
            <Link
              to="/account"
              className="block font-serif text-xl text-cocoa-900"
            >
              Account
            </Link>
          </div>

          {/* Footer */}
          <div className="p-6 bg-cocoa-50 border-t border-cocoa-100">
            <Link
              to="/shop?cat=Gifting"
              className="block text-center w-full bg-cocoa-900 text-gold-500 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-white transition-colors"
            >
              Gift Guide
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
