'use client';
import { use } from 'react';
import Image from "next/image";
import Link from "next/link";
import RecipeData from '@/data/recipeData';
import { motion } from "framer-motion";

export default function RecipeDetails({ params }) {
  const resolvedParams = use(params);
  const recipe = RecipeData[resolvedParams.id];

  return (
    <div className="bg-[#FCF1DF] min-h-screen py-16 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block mb-6 w-md sm:w-auto">
            <button className="flex items-center justify-center sm:justify-start gap-2 text-[#F37C3F] hover:text-[#d16632] transition-colors w-full sm:w-auto bg-white/50 backdrop-blur-sm py-2 px-4 rounded-lg shadow-sm hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </button>
          </Link>
        </motion.div>

        {/* Recipe Header with Image */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1 
            className="font-instrument text-[#F37C3F] text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {recipe.title}
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {recipe.prerequisites && (
            <div>
              <h2 className="text-2xl font-semibold text-[#F37C3F] mb-4">Pre-requisites</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.prerequisites.map((prereq, index) => (
                  <li key={index} className="text-gray-700">{prereq}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-[#F37C3F] mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#F37C3F] mb-4">Procedure</h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.procedure.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
