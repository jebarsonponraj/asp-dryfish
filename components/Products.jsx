'use client';
import TunaFish from "@/public/assets/tuna-fish.jpg";
import Maasi from "@/public/assets/Fishes/Maasi.jpeg";
import Nethili from "@/public/assets/anchovy-fish.jpg";
import Keerisaala from "@/public/assets/Fishes/Keerimeen.jpg";
import Kelangan from "@/public/assets/Fishes/Kilangan.jpg";
import Maththi from "@/public/assets/Fishes/Mathi.jpg";
import Mural from "@/public/assets/Fishes/Mural.jpg";
import Petha from "@/public/assets/Fishes/Petha.jpg";
import Sambaan from "@/public/assets/Fishes/Sambaan.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Guru = () => {
    const fishes = [
        { image: Maththi, name: "Maththi", price: "100" },
        { image: Petha, name: "Petha", price: "150" },
        { image: TunaFish, name: "Tuna", price: "80" },
        { image: Kelangan, name: "Kelangan", price: "150" },
        { image: Sambaan, name: "Sambaan", price: "120" },
        { image: Mural, name: "Mural", price: "200" },
        { image: Keerisaala, name: "Keeri saala", price: "150" },
        { image: Nethili, name: "Nethili", price: "300" },
        { image: Maasi, name: "Maasi", price: "500" },
    ];

    return (
        <div id="products" className="bg-[#FCF1DF] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="font-instrument text-[#F37C3F] text-4xl md:text-7xl text-center md:text-left ml-0 md:ml-12 mb-12"
                >
                    Our Products
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {fishes.map((fish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl bg-white"
                        >
                            <div className="relative h-[300px] w-full transform transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src={fish.image}
                                    alt={fish.name}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold text-[#F37C3F] group-hover:text-[#d16632]">
                                    {fish.name}
                                </h3>
                                <p className="mt-2 text-lg font-medium text-gray-600">
                                    ₹{fish.price}/kg
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Guru;
