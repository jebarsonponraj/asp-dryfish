"use client"
import { ArrowPathIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline'

const Benefits = () => {
  const benefits = [
    {
      title: "Fresh from the Ocean",
      description: "We source only the best, naturally fresh fish to ensure rich flavor and quality.",
      icon: ArrowPathIcon
    },
    {
      title: "Strict Hygiene Standards",
      description: "Our processing is 100% organic and chemical-free, ensuring clean, safe dried fish.",
      icon: ShieldCheckIcon
    },
    {
      title: "Naturally Preserved Nutrients",
      description: "Our drying methods retain essential proteins and flavors for superior product quality.",
      icon: BeakerIcon
    }
  ];

  return (
    <div className="bg-[#FFE1C2] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-instrument text-[#F37C3F] text-4xl md:text-7xl text-center mb-12">
          Why ASP Dryfish?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center cursor-pointer">
                <div className="p-3 bg-[#FCF1DF] rounded-full mb-4 group-hover:bg-[#F37C3F] transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-[#F37C3F] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#F37C3F] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;