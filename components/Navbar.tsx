'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Vision', href: '/vision' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
     

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex-shrink-0 py-2">
                <Image
                  src="/logo.jpeg"
                  alt="Advance Biotech Logo"
                  width={300}
                  height={120}
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
                  priority
                />
              </Link>
            </div>

            {/* Centered Navigation Menu - Desktop */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 px-4 py-2 text-base font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Get Quote Button */}
            <div className="hidden md:flex flex-shrink-0">
              <Button className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-600 p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInFromRight 0.3s ease-out forwards' : ''
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white w-full py-3 text-lg shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}