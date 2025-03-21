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
      name: "Empowering Intelligent Growth",
      description: "We provide expert AI strategy and consulting services to help businesses harness the power of artificial intelligence. Our team works closely with you to design personalized AI roadmaps, identify opportunities for automation, and optimize decision-making processes. Whether you're looking to improve efficiency or create innovative AI-driven products, we guide you every step of the way",
      // price: 300,
      // duration: "30 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/ai-technology-microchip-background-digital-transformation-concept_53876-124669-6AgujsnXm1CovQJF5qELhw4Ax1PFqs.jpg",
    },
    {
      id: "a2",
      name: "Transforming Ideas into AI Solutions",
      description: "Unlock the potential of AI with tailored consulting that aligns with your business goals. Our consultants bring deep knowledge of AI technologies and industry trends to craft strategic solutions that boost productivity, enhance customer experiences, and drive competitive advantage. From AI adoption to implementation, we provide comprehensive support to help your organization succeed in the digital age.",
      // price: 200,
      // duration: "20 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/ai-technology-brain-background-digital-transformation-concept_53876-124672-HT6X6SdhBn3anRvTERy3srMvpRlvxN.jpg",
    },
    {
      id: "a3",
      name: "Navigating Your AI Journey",
      description: "At AlfaHive, we specialize in guiding businesses through their AI transformation. Our team provides a clear vision of how AI can impact your industry and helps develop a roadmap that integrates seamlessly into your operations. With a focus on measurable outcomes, we support the full AI journey from strategy development to execution, ensuring you stay ahead in an increasingly competitive landscape.",
      // price: 800,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/AI/istockphoto-1495043596-612x612-5ARaYYAa4Jnsnu49ChiWVz7ecKhUYX.jpg",
    },
    {
      id: "a4",
      name: "Tailored Insights for AI Excellence",
      description: "Our AI Strategy & Consulting services deliver customized solutions that address your unique business challenges. We help you define a clear AI strategy, evaluate existing infrastructure, and implement scalable solutions that leverage machine learning, data analytics, and automation. By aligning AI technology with your objectives, we enable your company to achieve efficiency, innovation, and long-term growth.",
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
      description: "We develop powerful SaaS applications tailored to your business needs. Our solutions are built for scalability, security, and seamless integration, ensuring high availability and top-tier user experiences. From multi-tenant architectures to automated workflows, we empower businesses to innovate and grow.",
      // price: 500,
      // duration: "45 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/99cd7e2220901c7714e0f99054b4a0eadc19f03a-1800x900-fj3bKgyItvowDJrhpQlrksPydnEwux.webp",
    },
    {
      id: "s2",
      name: "Travel Platform",
      description: "Our travel software solutions streamline booking, itinerary management, and real-time tracking. With AI-driven recommendations, automated customer support, and secure payment integrations, we create smooth and engaging travel experiences for users worldwide.",
      // price: 1200,
      // duration: "90 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/Adventrip-Travel-Agency-Admin-Dashboard-Figma-Template-scaled-zVvqXSEIf0TjBwyOKFN9JvLhvknI2s.jpg",
    },
    {
      id: "s3",
      name: "Healthcare Platform",
      description: "We develop healthcare platforms that prioritize data security, HIPAA/GDPR compliance, and interoperability. From telemedicine apps to patient management systems, our solutions enhance healthcare delivery while ensuring seamless integration with medical infrastructure.",
      // price: 3000,
      // duration: "120 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/images%20%285%29-fbH113TlO9FoYBYG2ORxjjiz7aSt6e.jpg",
    },
    {
      id: "s4",
      name: "Education Platform",
      description: "Our education software fosters engaging learning environments with AI-powered tutoring, personalized content, and real-time analytics. Whether for e-learning platforms, virtual classrooms, or learning management systems, we create solutions that enhance student engagement and outcomes.",
      // price: 500,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/mini-sidebar-ltr-dark-dashboard-MyxNrFONer1mlv58GHtE1bzGdayy3N.jpg",
    },
    {
      id: "s5",
      name: "E-commerce Platform",
      description: "We design scalable e-commerce platforms optimized for speed, personalization, and seamless checkout experiences. Our solutions include AI-powered product recommendations, secure payment gateways, and analytics-driven insights to boost sales and customer retention.",
      // price: 500,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/software/products-MbY9H43RBqMplmWOSynFLRZt0HkRmL.jpg",
    },
  ],
  cloud: [
    {
      id: "c1",
      name: "Scalable Cloud Infrastructure",
      description: "We design and deploy scalable cloud architectures that ensure high availability, security, and performance. Our solutions leverage AWS, Azure, and Google Cloud to optimize operations, reduce costs, and support business growth.",
      // price: 800,
      // duration: "60 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%286%29-htjYNrSpqSSjKph7Lqqu4numUcdAFn.jpg",
    },
    {
      id: "c2",
      name: "DevOps & Cloud Automation",
      description: "Our DevOps-driven cloud solutions enable faster development cycles, continuous integration, and automated deployment. We implement containerization, infrastructure-as-code, and monitoring tools to streamline cloud operations.",
      // price: 100,
      // duration: "15 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%287%29-UsONqIxEtmg7Axw7jZQ0vTYgNYSien.jpg",
    },
    {
      id: "c3",
      name: "Cloud Migration & Modernization",
      description: "We help businesses seamlessly migrate to the cloud, modernizing legacy systems for enhanced performance and flexibility. Our expert team ensures minimal downtime, improved security, and a smooth transition to cloud-based operations.",
      // price: 500,
      // duration: "45 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/images%20%288%29-aeeu8EFch2Ovrh36PV6Ul476yEi2DZ.jpg",
    },
    {
      id: "c4",
      name: "Cloud Security & Compliance",
      description: "We provide end-to-end cloud security solutions, ensuring data protection, threat detection, and compliance with industry standards like GDPR, HIPAA, and ISO. Our approach safeguards your cloud environment from cyber threats.",
      // price: 300,
      // duration: "30 min",
      image:
        "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/cloud/pngtree-cloud-computing-background-image_782009-79XTIXQEe2RtlkllTCKOUsVJFjF5bi.jpg",
    },
    {
      id: "c5",
      name: "Hybrid & Multi-Cloud Solutions",
      description: "We develop hybrid and multi-cloud strategies to enhance flexibility, reduce vendor lock-in, and optimize performance. Our solutions integrate on-premise and cloud systems, ensuring seamless interoperability and efficiency.",
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
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span>AI</span>
            </TabsTrigger>
            <TabsTrigger value="software" className="flex items-center gap-2">
              <FolderCode className="h-4 w-4" />
              <span>Software</span>
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex items-center gap-2">
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

