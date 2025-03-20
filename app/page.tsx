import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
// import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Innovative IT Solutions | Alfahive - AI, Software & Cloud Services",
  description:
    "Alfahive provides cutting-edge IT solutions including AI, software development, and cloud services to help businesses achieve growth and efficiency. Partner with us for scalable, secure, and innovative solutions.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <TestimonialsSection />
      {/* <InstagramSection /> */}
      <CTASection />
    </>
  )
}

