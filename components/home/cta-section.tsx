import Link from "next/link"
import { Button } from "@/components/ui/button"
import LocationMap from "@/components/home/location-map"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-studio-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-contain bg-[url('https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/images-SYRRkFK1583UBk8HD6kz6MHtIC9fK5.jpg')] bg-no-repeat bg-[length:200px_200px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6 text-white font-playfair">Our Locations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Visit us at one of our convenient locations across Miami. We offer our full range of premium
            services.
          </p>
        </div>

        {/* <div className="mb-12 studio39-card p-1">
          <LocationMap />
        </div> */}

        {/* <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white font-playfair">Ready to Experience Studio 39?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Book your appointment today and let our expert stylists help you look and feel your best.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-studio-gold text-studio-black hover:bg-studio-gold-light rounded-md shadow-md"
          >
            <Link href="/booking">Book Your Appointment Now</Link>
          </Button>
        </div> */}
      </div>
    </section>
  )
}

