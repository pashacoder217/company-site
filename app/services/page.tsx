import type { Metadata } from "next"
import ServicesTabs from "@/components/services/services-tabs"
import ServicesBanner from "@/components/services/services-banner"

export const metadata: Metadata = {
  title: "Our IT Services | Alfahive - AI, Software & Cloud Solutions",
  description:
    "Explore Alfahive’s expert IT services, including AI-driven solutions, custom software development, and cloud technology services. We help businesses scale with innovative, secure, and efficient tech solutions.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <div className="py-16">
        <div className="container-custom">
          <ServicesTabs />
        </div>
      </div>
    </>
  )
}

