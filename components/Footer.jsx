'use client';
import Logo from '../public/assets/AspLogo.png'
import Image from 'next/image'
import facebookIcon from '@/public/assets/facebookIcon.png'
import instagramIcon from '@/public/assets/instagramIcon.png'
import youtubeIcon from '@/public/assets/youtubeIcon.png'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-8"
        >
          {/* Logo and Tagline */}
          <div className="flex flex-col items-left md:w-1/3">
            <div className="w-1/3">
              <Image 
                src={Logo}
                alt="ASP Logo"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-gray-300 w-3/4">
              Premium quality dried fish products for over 20 years.
            </p>
          </div>

          {/* Quick Links and Contact Container */}
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:w-2/3 md:justify-end">
            {/* Quick Links */}
            <div>
              <ul className="space-y-3 text-left">
                <li><a href="#home" className="hover:text-[#F37C3F] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#F37C3F] transition-colors">About ASP</a></li>
                <li><a href="#products" className="hover:text-[#F37C3F] transition-colors">Our Products</a></li>
                <li><a href="#gallery" className="hover:text-[#F37C3F] transition-colors">Gallery</a></li>
                <li><a href="#whyus" className="hover:text-[#F37C3F] transition-colors">Why us</a></li>
                <li><a href="#recipe" className="hover:text-[#F37C3F] transition-colors">Recipe</a></li>
                <li><a href="#contact" className="hover:text-[#F37C3F] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-left">
              <h3 className="font-semibold text-lg">Contact us</h3>
              <p>East Kamaraj Nagar, Mottaikopuram</p>
              <p>Thalamuthunagar, Thoothukudi-2</p>
              <p>Ph no : +91-9443131022</p>
              
              {/* Social Icons */}
              {/* <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={facebookIcon} alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={youtubeIcon} alt="YouTube" width={24} height={24} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={instagramIcon} alt="Instagram" width={24} height={24} />
                </a>
              </div> */}
            </div>

            {/* Email Section */}
            <div className="space-y-3 text-left">
              <h3 className="font-semibold text-lg">Email us</h3>
              <button className="bg-gradient-to-b from-[#f37c3f] to-[#f2662b] px-3 py-2 rounded-md hover:opacity-90 transition-opacity">
              aspdryfishmerchants@gmail.com
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <hr className="border-[#525252]" />
        <p className="text-gray-400 text-center mt-6 text-sm">
          ©{new Date().getFullYear()} ASP Dryfish Merchants. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer