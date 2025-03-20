import type React from "react"
import type { Metadata } from "next"
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
  title: "Studio 39 Salon - Luxury Beauty Experience",
  description:
    "Premier luxury salon in India offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
  keywords: "luxury salon, beauty salon India, haircuts, hairstyling, nail care, beauty treatments, makeup services",
  openGraph: {
    title: "Studio 39 Salon - Luxury Beauty Experience",
    description:
      "Premier luxury salon in India offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-studio-black text-white`}>
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