import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: (
      <Image
        src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI-v0FpFAgjB8RJUgkwpFhTpgVLRWpDVu.png"
        alt="ai"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
    ),
    title: "AI Strategy & Consulting",
    description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
    link: "/services#aistrategy",
  },
  {
    icon: (
      <Image
        src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software-SKSgapC6xMeKg99AWI8UEuV34kUfmY.webp"
        alt="software"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
    ),
    title: "Custom Software Development",
    description: "Build scalable and efficient software solutions that drive your business forward.",
    link: "/services#software",
  },
  {
    icon: (
      <Image
        src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud-of4M2ZFhwv3Zw2bumonf4I8QxlSCqO.png"
        alt="cloud"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
    ),
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for enhanced scalability and performance.",
    link: "/services#cloud",
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-studio-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white font-playfair">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="studio39-card p-8 text-center hover-lift transition-all duration-300 hover:bg-gray-900"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-studio-gold/10 mb-6 border border-studio-gold/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-studio-gold font-medium hover:text-studio-gold-light transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

