import type React from "react"
import type { Metadata } from "next"
import Head from 'next/head';
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Alfa Hive  - Innovative IT Solutions: AI, Software Development, and Cloud Technologies",
  description:
    "Alfahive specializes in AI solutions, custom software, and cloud technologies to drive business growth and efficiency",
  keywords: "AI solutions, software development, cloud technologies, SaaS development, DevOps, data engineering, cloud security",
  openGraph: {
    title: "Innovative IT Solutions for Businesses | Alfahive",
    description:
      "Alfahive provides AI, software, and cloud technologies to drive business growth, efficiency, and innovation.",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "US",
  },
    generator: 'alfahive team'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="https://alfahive.net/favicon.ico" />
        <script
            src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`}
            defer
        >
        </script>
      </Head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-af-black text-white`}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}



import './globals.css'