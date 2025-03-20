import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Alfahive IT Solutions",
  description: "Reach out to Alfahive IT Solutions for expert guidance on AI, software development, and cloud technologies. Our team is ready to assist you with customized solutions and support.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services or to book your next appointment.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-20">
          <h2 className="heading-md mb-6">Find Us</h2>
          <LocationMap />
        </div>
      </div>
    </>
  )
}

