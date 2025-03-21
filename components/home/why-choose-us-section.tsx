import Image from "next/image"
import { Users, Award, Sparkles, FolderCode, CloudCog, Brain  } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-studio-gold" />,
    title: "AI Strategy & Consulting",
    description: "Our AI strategy and consulting services help businesses unlock the full potential of artificial intelligence. We guide you through the process of identifying AI opportunities, designing tailored strategies, and implementing intelligent solutions that drive innovation and growth. By combining industry expertise with advanced AI technologies, we help you integrate AI seamlessly into your operations, enhancing decision-making, automation, and efficiency for long-term success.",
    image:
      "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/pngtree-business-people-in-a-meeting-at-office-person-success-conference-photo-image_42384800-wWGruFRYMKsv8MyPoXMF92yLJYmKfA.jpg",
  },
  {
    icon: <FolderCode className="h-8 w-8 text-studio-gold" />,
    title: "Custom Software Development",
    description: "Our custom software development services are designed to create tailored solutions that meet your unique business needs. We work closely with you to understand your goals, providing end-to-end development—from design and architecture to deployment and maintenance. By leveraging the latest technologies, we ensure scalable, secure, and high-performance software that aligns with your vision, driving efficiency and growth for your business.",
    image:
      "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/images%20%282%29-qwXLIcOJ5haCYQ0WjagwKtV9yC1e4k.jpg",
  },
  {
    icon: <CloudCog className="h-8 w-8 text-studio-gold" />,
    title: "Cloud Solutions",
    description: "Our cloud solutions are designed to help businesses scale, innovate, and optimize their operations by leveraging the power of the cloud. We provide end-to-end cloud services, including cloud migration, infrastructure management, and security, ensuring seamless integration with your existing systems. With flexible, secure, and cost-efficient solutions, we enable businesses to enhance collaboration, improve performance, and drive growth through the agility and scalability of cloud technology.",
    image:
      "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/images%20%283%29-rrFdmkGMp8tRScNjkookuLPG3DBRhz.jpg",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white font-playfair">Why Choose AlfaHive?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          With a proven track record in AI, cloud, and software development, Alfahive transforms businesses with cutting-edge technology, driving innovation, efficiency, and unstoppable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="studio39-card overflow-hidden group hover-lift">
              <div className="relative h-48">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-studio-black/90 border border-studio-gold/30 rounded-full mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/about"
            className="inline-flex items-center text-studio-gold font-semibold hover:text-studio-gold-light transition-colors"
          >
            Learn More About Us
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

