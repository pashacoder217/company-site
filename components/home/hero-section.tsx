import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/360_F_478957385_zCuEGTXNJKPygVCxmxkY01oV7JFVUFDv-zlys5kPNfR4NWQiseSP28d5Hlgei4p.jpg"
          alt="Luxurious hive interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-af-black/95 via-af-black/80 to-af-black/60"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-playfair">
            Your Business, {" "}
            <span className="text-transparent bg-clip-text bg-gold-gradient animate-shimmer bg-[length:200%_auto]">
            Supercharged by Tech.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed font-montserrat">
            We specialize in AI consulting, custom software development, and comprehensive technology solutions
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden text-lg px-8 py-6 bg-af-gold text-af-black hover:bg-af-gold-light rounded-md 
                        shadow-[0_0_15px_rgba(212,175,55,0.5)] group transition-all duration-300 
                        animate-slow-pulse hover:animate-none"
            >
              <Link href="/booking" className="relative flex items-center justify-center">
                {/* Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                                w-full h-full animate-shine pointer-events-none" />
                {/* Button Text & Icon */}
                <span className="relative z-10 flex items-center">
                  Book Your Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 text-af-gold border-af-gold hover:bg-af-gold/10 rounded-md"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-af-gold overflow-hidden">
                  <Image
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                    alt={`Happy customer ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-af-gold flex text-2xl">{"★★★★★"}</div>
              <p className="text-sm text-gray-300">Trusted by 500+ happy clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      {/* <div className="fixed bottom-24 left-6 z-40 md:block hidden">
        <Link href="/booking">
          <Button
            size="lg"
            className="bg-af-gold text-af-black hover:bg-af-gold-light rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group animate-bounce hover:animate-none"
          >
            <span className="flex items-center">
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>
      </div> */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-af-black to-transparent"></div>
    </section>
  )
}

