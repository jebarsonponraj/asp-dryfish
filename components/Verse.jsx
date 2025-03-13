'use client'
import { motion } from "framer-motion"
import QuoteBg from "@/public/assets/QuoteBg.png"
import Logo from '@/public/assets/AspLogo.png';
import Image from "next/image"

const Verse = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={QuoteBg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8 -mt-24">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[130px] md:w-[160px] lg:w-[200px] h-auto mb-6 md:mb-8"
        >
          <Image
            src={Logo}
            alt="ASP Logo"
            width={170}
            height={170}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Verse Text */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-instrument text-xl md:text-2xl lg:text-3xl text-white leading-relaxed"
        >
          "For over twenty years, we've provided not just dried fish, but also reliability and quality—because your business deserves the best."
        </motion.p>
      </div>
    </div>
  )
}

export default Verse
