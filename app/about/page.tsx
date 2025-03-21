import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Alfahive - Leading IT Solutions in AI, Software & Cloud",
  description: "Learn about Alfahive, a leading provider of AI, software, and cloud solutions. Our team is dedicated to delivering innovative and secure technology services that help businesses grow and thrive in the digital era.",
}

const teammember  = [
  {
    avatar:"https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/1712130683067-MGsi1ZBnFfO4KqkEVVlRJqLVkmb18W.jpg",
    name: "Joseph Fennell",
    position:"CEO"
  },
  {
    avatar:"https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/avatar/1516315631331-kfbWr7TRXRWweseSmdCw0cncBXobOv.jpg",
    name: "Toni Johnson",
    position:"CTO"
  }
]

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">About AlfaHive</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            Discover our story, our passion for improving, and our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="heading-lg mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
            Alfahive was founded with a clear vision: to empower businesses through innovative AI, software, and cloud solutions. A group of passionate tech professionals came together to bridge the gap between cutting-edge technology and businesses seeking scalable, secure solutions.
            </p>
            <p className="text-gray-600 mb-4">
            We focused on creating tailored, efficient solutions that help businesses thrive in the digital age. By embracing emerging technologies and building strong client relationships, Alfahive has become a trusted partner for organizations of all sizes. Today, we continue to drive digital transformation, delivering impactful results through our expertise in AI and cloud technologies.
            </p>
            <Button asChild className="mt-4">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/business-colleagues-working-reports-communicating-while-working-office-focus-is-woman_637285-1061-eOJ9djtLNo8AhYzX1QlRkGFvnX7nEl.jpg"
              alt="Glow Salon Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Alfahive, our mission is to empower businesses with cutting-edge AI, software, and cloud solutions, transforming ideas into scalable, high-performance technology. We strive to drive innovation, enhance efficiency, and create a future where technology fuels limitless growth.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="heading-lg text-center mb-12">Our Team</h2>
          <div className="flex justify-around gap-20">
            {
              teammember.map((member, index) => (
                <div key={index} className="salon-card text-center px-20 py-10">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src={member.avatar} alt={`Stylist ${index + 1}`} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4 font-bold">{member.position}</p>
                  {/* <Link href="/booking" className="text-primary hover:text-primary-dark transition-colors">
                    Book with this stylist
                  </Link> */}
                </div>
              ))
            }
          </div>
        </div>

        <div className="text-center">
          <h2 className="heading-lg mb-6">Experience the Glow Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to visit AlfaHive and experience our commitment to AI, software, and cloud solutions.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book Your Appointment Today</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

