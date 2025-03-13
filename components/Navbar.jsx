'use client';
import Logo from '@/public/assets/AspLogo.png';
import HamburgerIcon from '@/public/assets/HamburgerIcon.png';
import CloseIcon from '@/public/assets/CloseIcon.png';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Prodcuts", href: "#products" },
    { title: "Gallery", href: "#gallery" },
    { title: "Why us", href: "#whyus" },
    {title: "Recipe", href: "#recipe" },
    {title: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="mx-auto max-w-5xl px-4 my-4">
        <div className="backdrop-blur-md nav-bg rounded-2xl border border-black/20 shadow-lg">
          <div className="mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src={Logo}
                  alt="ASP Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Contact Us Button */}
              <div className="hidden md:block">
                <button className="px-6 py-2 bg-gradient-to-b from-[#f37c3f] to-[#f2662b] rounded-xl text-white border-2 border-[#f37c3f] hover:bg-gradient-to-b hover:from-[#f2662b] hover:to-[#f37c3f] transition-all duration-300">
                  Contact Us
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2"
                >
                  <Image
                    src={isMenuOpen ? CloseIcon : HamburgerIcon}
                    alt="Menu"
                    width={24}
                    height={24}

                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <button className="w-full px-6 py-2 bg-gradient-to-b from-[#f37c3f] to-[#f2662b] rounded-xl text-white border-2 border-[#f37c3f] hover:bg-gradient-to-b hover:from-[#f2662b] hover:to-[#f37c3f] transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
