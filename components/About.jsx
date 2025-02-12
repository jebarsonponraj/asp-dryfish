import AboutImage from "@/public/assets/About.png"
import Image from "next/image";

const About = () => {
  return (
    <div 
      className="bg-[#FCF1DF] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div 
            className="space-y-6"
          >
            <h2 className="font-instrument text-[#F37C3F] text-4xl md:text-7xl"><strong>About us</strong></h2>
            <div className="space-y-4 text-black">
                <p className="mb-1">
                <strong>Two Decades of Excellence in Premium Dry Fish Supply</strong>
                </p>
              <p>
                Established in 2000, <span className="text-[#F37C3F]">ASP Dryfish</span> has been a <strong>trusted name in the dried fish industry</strong> for over two decades. We specialize in sourcing the <strong>freshest fish straight from the ocean</strong>, drying it with <strong>hygienic and organic processing methods</strong>, and supplying it in bulk to wholesalers across Tamil Nadu.
              </p>
              <p>
                Our commitment to <strong>quality, freshness, and reliability</strong> has made us a preferred partner for businesses seeking premium-grade dried fish. With <strong>years of expertise</strong> and a dedication to excellence, we ensure that every batch meets the highest industry standards.
              </p>
              <p>
                At <span className="text-[#F37C3F]">ASP Dryfish</span>, we don't just sell dried fish—we deliver <strong>consistency, quality, and trust</strong>.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mx-auto"
          >
            <Image 
              src={AboutImage}
              alt="About Yadah"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
