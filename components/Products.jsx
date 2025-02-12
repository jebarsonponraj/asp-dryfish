import TunaFish from "@/public/assets/tuna-fish.jpg";
import PonyFish from "@/public/assets/pony-fish.jpg";
import AnchovyFish from "@/public/assets/anchovy-fish.jpg";
import Image from "next/image";

const Guru = () => {
    return (
        <div className="bg-[#FCF1DF] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <h2 className="font-instrument text-[#F37C3F] text-4xl md:text-7xl text-center md:text-left ml-0 md:ml-12 mb-12">
                    Our Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Tuna Fish Card */}
                    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                        <div className="relative h-[300px] w-full transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={TunaFish}
                                alt="Tuna Fish"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold text-[#F37C3F] group-hover:text-[#d16632]">
                            Premium Tuna Fish
                        </h3>
                    </div>

                    {/* Pony Fish Card */}
                    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                        <div className="relative h-[300px] w-full transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={PonyFish}
                                alt="Pony Fish"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold text-[#F37C3F] group-hover:text-[#d16632]">
                            Fresh Pony Fish
                        </h3>
                    </div>

                    {/* Anchovy Fish Card */}
                    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                        <div className="relative h-[300px] w-full transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={AnchovyFish}
                                alt="Anchovy Fish"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold text-[#F37C3F] group-hover:text-[#d16632]">
                            Dried Anchovy Fish
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guru;
