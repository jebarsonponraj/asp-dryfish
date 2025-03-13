"use client";
import { motion } from "framer-motion"
import Image from "next/image"
import Gallery1 from "@/public/assets/gallery1.jpg"
import Gallery2 from "@/public/assets/gallery2.jpg"
import Gallery3 from "@/public/assets/gallery3.jpg"
import Gallery4 from "@/public/assets/gallery4.jpg"
import Gallery5 from "@/public/assets/gallery5.jpg"
import Gallery6 from "@/public/assets/gallery6.jpg"

const Gallery = () => {
  return (
    <div className="bg-[#FCF1DF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="gallery" 
          className="font-instrument text-[#F37C3F] text-4xl md:text-7xl text-center md:text-left ml-0 md:ml-12 mb-12"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6].map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-square transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;