"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from "@/components/services/service-card"
import { AlignJustify, FolderCode, CloudCog, Brain } from "lucide-react"

// Service data
const services = {
  ai: [
    {
      id: "a1",
      name: "Men's Haircut",
      description: "Precision cutting and styling tailored to your face shape and preferences.",
      // price: 300,
      // duration: "30 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/ai-technology-microchip-background-digital-transformation-concept_53876-124669-6AgujsnXm1CovQJF5qELhw4Ax1PFqs.jpg",
    },
    {
      id: "a2",
      name: "Beard Trim & Styling",
      description: "Expert beard shaping and grooming to enhance your facial features.",
      // price: 200,
      // duration: "20 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/ai-technology-brain-background-digital-transformation-concept_53876-124672-HT6X6SdhBn3anRvTERy3srMvpRlvxN.jpg",
    },
    {
      id: "a3",
      name: "Hair Color",
      description: "Natural-looking color to cover grays or try a new look.",
      // price: 800,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/istockphoto-1495043596-612x612-5ARaYYAa4Jnsnu49ChiWVz7ecKhUYX.jpg",
    },
    {
      id: "a4",
      name: "Men's Facial",
      description: "Deep cleansing facial designed specifically for men's skin needs.",
      // price: 600,
      // duration: "45 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/robot-ai-technology-background-high-quality-illustration-ai-generated-robot-ai-technology-background-305358523-PQYlEiBpngcedIkmhEpKD5I8tkb3UY.webp",
    },
  ],
  software: [
    {
      id: "s1",
      name: "SaaS Platform",
      description: "Precision cutting and styling to enhance your natural beauty.",
      // price: 500,
      // duration: "45 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/99cd7e2220901c7714e0f99054b4a0eadc19f03a-1800x900-fj3bKgyItvowDJrhpQlrksPydnEwux.webp",
    },
    {
      id: "s2",
      name: "Travel Platform",
      description: "From highlights to full color, our stylists create the perfect look for you.",
      // price: 1200,
      // duration: "90 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/Adventrip-Travel-Agency-Admin-Dashboard-Figma-Template-scaled-zVvqXSEIf0TjBwyOKFN9JvLhvknI2s.jpg",
    },
    {
      id: "s3",
      name: "Healthcare Platform",
      description: "Complete bridal makeup package to make you look stunning on your special day.",
      // price: 3000,
      // duration: "120 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/images%20%285%29-fbH113TlO9FoYBYG2ORxjjiz7aSt6e.jpg",
    },
    {
      id: "s4",
      name: "Education Platform",
      description: "Pamper your hands with our luxurious manicure and creative nail art.",
      // price: 500,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/mini-sidebar-ltr-dark-dashboard-MyxNrFONer1mlv58GHtE1bzGdayy3N.jpg",
    },
    {
      id: "s5",
      name: "E-commerce Platform",
      description: "Pamper your hands with our luxurious manicure and creative nail art.",
      // price: 500,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/products-MbY9H43RBqMplmWOSynFLRZt0HkRmL.jpg",
    },
  ],
  cloud: [
    {
      id: "c1",
      name: "Hair Spa Treatment",
      description: "Revitalize your hair with our nourishing spa treatment.",
      // price: 800,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%286%29-htjYNrSpqSSjKph7Lqqu4numUcdAFn.jpg",
    },
    {
      id: "c2",
      name: "Eyebrow Threading",
      description: "Perfect your brows with our precise threading technique.",
      // price: 100,
      // duration: "15 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%287%29-UsONqIxEtmg7Axw7jZQ0vTYgNYSien.jpg",
    },
    {
      id: "c3",
      name: "Basic Facial",
      description: "Refresh and rejuvenate your skin with our classic facial.",
      // price: 500,
      // duration: "45 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%288%29-aeeu8EFch2Ovrh36PV6Ul476yEi2DZ.jpg",
    },
    {
      id: "c4",
      name: "Head Massage",
      description: "Relieve stress and tension with our therapeutic head massage.",
      // price: 300,
      // duration: "30 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/pngtree-cloud-computing-background-image_782009-79XTIXQEe2RtlkllTCKOUsVJFjF5bi.jpg",
    },
    {
      id: "c5",
      name: "Head Massage",
      description: "Relieve stress and tension with our therapeutic head massage.",
      // price: 300,
      // duration: "30 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/team-collaborating-cloud-computing-data-analytics-dashboard-isolated-white-background-366714421-MX6owfRf2QyXGzzu38fTpoz7hEQ60M.webp",
    },
  ],
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter services based on active tab
  const getFilteredServices = () => {
    if (activeTab === "all") {
      return [...services.ai, ...services.software, ...services.cloud]
    }
    return services[activeTab as keyof typeof services] || []
  }

  return (
    <>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <AlignJustify className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="men" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span>AI</span>
            </TabsTrigger>
            <TabsTrigger value="women" className="flex items-center gap-2">
              <FolderCode className="h-4 w-4" />
              <span>Software</span>
            </TabsTrigger>
            <TabsTrigger value="unisex" className="flex items-center gap-2">
              <CloudCog className="h-4 w-4" />
              <span>Cloud</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredServices().map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.ai.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="software" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.software.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cloud" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.cloud.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}

