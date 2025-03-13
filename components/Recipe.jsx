'use client';
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import FishCurry from "@/public/assets/fish_curry.jpeg";
import KaruvaduThokku from "@/public/assets/karuvadu_thokku.jpeg";
import NethiliGravy from "@/public/assets/nethili_gravy.jpeg";
import MaasiSambal from "@/public/assets/maasi_sambal.jpeg";

const recipes = [
  {
    id: 'dry-fish-kulambu',
    title: 'Dry Fish Kulambu',
    image: FishCurry,
    description: 'A traditional South Indian curry made with dried fish and aromatic spices.'
  },
  {
    id: 'nethili-dryfish-gravy',
    title: 'Nethili Dry Fish Gravy',
    image: NethiliGravy,
    description: 'A flavorful gravy dish made with Nethili dry fish.'
  },
  {
    id: 'nethili-dryfish-fry',
    title: 'Nethili Dry Fish Fry',
    image: KaruvaduThokku,
    description: 'A simple yet delicious dry fish fry recipe.'
  },
  {
    id: 'maasi-sambal',
    title: 'Maasi Dry Fish Sambal',
    image: MaasiSambal,
    description: "A quick and easy bachelor's recipe for Maasi dry fish."
  }
];

const Recipe = () => {
  return (
    <div id="recipe" className="bg-[#FCF1DF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-instrument text-[#F37C3F] text-4xl md:text-7xl text-center mb-12"
        >
          Recipes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/recipes/${recipe.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 w-full">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#F37C3F] mb-2">{recipe.title}</h3>
                    <p className="text-gray-600 text-sm">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;