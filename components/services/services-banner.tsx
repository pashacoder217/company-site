import Image from "next/image"

export default function ServicesBanner() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/360_F_636580399_lpAcQfxbpGPPgWlwoMQ8KXndj6zOTN0S-TYDWoDZqmaFirvvnZOLDCUsvOhaIuB.jpg"
          alt="Salon services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-black/90 to-studio-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4 font-playfair">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover our comprehensive range of beauty and grooming services designed for both men and women.
          </p>
        </div>
      </div>
    </section>
  )
}

