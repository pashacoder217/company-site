import Image from "next/image"

export default function BookingBanner() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/contact-us-or-customer-support-hotline-people-connect-businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-email-address-live-chat-internet-wifi-free-photo-2RN35lgn4YP2e9utbiXCLVnQRW36y1.jpg"
          alt="Booking appointment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4">Book Your Appointment</h1>
          <p className="text-lg md:text-xl text-white/90">
            Schedule your visit to AlfaHive and experience our premium services.
          </p>
        </div>
      </div>
    </section>
  )
}

