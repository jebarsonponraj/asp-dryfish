import QuoteBg from "@/public/assets/QuoteBg.png"
import Logo from '@/public/assets/AspLogo.png';
import Image from "next/image"

const Verse = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={QuoteBg}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8 -mt-24">
        {/* Logo */}
        <div className="w-[130px] md:w-[160px] lg:w-[200px] h-auto mb-6 md:mb-8">
          <Image
            src={Logo}
            alt="ASP Logo"
            width={170}
            height={170}
            className="w-full h-auto"
          />
        </div>

        {/* Verse Text */}
        <p className="font-instrument text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
        "For over twenty years, we’ve provided not just dried fish, but also reliability and quality—because your business deserves the best."
        </p>
      </div>
    </div>
  )
}

export default Verse
