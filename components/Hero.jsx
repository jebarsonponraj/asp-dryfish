import HeroBackground from '@/public/assets/HeroBackground.png'
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="relative min-h-screen">
    {/* Hero Background */}
    <div className="absolute inset-0 z-0">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8 lg:px-16">
      <h1 
        className="font-instrument text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl"
      >
        Fresh from the <span className="italic">Ocean,</span> Dried to Perfection
      </h1>
      
      <p 
        className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
      >
        At ASP Dryfish, we take pride in delivering premium, first-quality dried fish sourced fresh from the ocean and processed with the highest standards of hygiene and care.
      </p>

      <button 
        className="px-8 py-3 bg-gradient-to-b from-[#f37c3f] to-[#f2662b] rounded-xl text-white text-lg border-2 border-[#f37c3f] hover:bg-gradient-to-b hover:from-[#f2662b] hover:to-[#f37c3f] transition-all duration-300"
      >
        Reach us
      </button>

      {/* <p 
        className="text-white/80 text-lg md:text-xl font-light italic mt-7"
      >
        A Sacred Journey of Stillness and Transformation
      </p> */}
    </div>
  </div>
  )
}

export default Hero
