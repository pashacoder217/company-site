"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        isScrolled ? "bg-studio-black/95 backdrop-blur-md border-b border-studio-gold/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-studio-gold/50">
              <Image
                src="https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/alfahive_logo-or8Nx7fB7ktxPUjhTAmoMamwt8sWzz.png"
                alt="Studio 39 Salon Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold gradient-text font-playfair">AlfaHive</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105 transform ${
                  pathname === item.href
                    ? "text-studio-black bg-studio-gold shadow-md"
                    : "text-studio-gold hover:text-studio-black hover:bg-studio-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-8 bg-studio-gold text-studio-black shadow-md hover:bg-studio-gold-light hover:shadow-lg rounded-md">
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>

          <Button
            size="icon"
            className="lg:hidden bg-studio-gold text-studio-black hover:bg-studio-gold-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-studio-black rounded-lg shadow-lg p-4 border border-studio-gold/30">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-base font-medium mb-2 ${
                  pathname === item.href
                    ? "text-studio-black bg-studio-gold shadow-md"
                    : "text-studio-gold hover:text-studio-black hover:bg-studio-gold"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-4 animate-pulse hover:animate-none">
              <Link
                href="/booking"
                className="flex items-center justify-center bg-studio-gold text-studio-black shadow-md hover:bg-studio-gold-light hover:shadow-lg rounded-md"
              >
                <span>Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

