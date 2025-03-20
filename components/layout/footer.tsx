import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Scissors } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-studio-black text-white pt-20 pb-10 border-t border-studio-gold/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Studio 39 Salon */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-studio-gold rounded-full flex items-center justify-center mr-3">
                <Scissors className="h-5 w-5 text-studio-black" />
              </div>
              <span className="text-2xl font-bold gradient-text font-playfair">Studio 39</span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating beauty and style with our premium luxury salon services. Experience the Studio 39 difference
              today!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-studio-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-studio-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-studio-gold transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-studio-gold mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-studio-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-studio-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-studio-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-studio-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-studio-gold transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-studio-gold mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-studio-gold shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-400">123 Luxury Lane, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-studio-gold mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-studio-gold mr-3" />
                <span className="text-gray-400">info@studio39salon.in</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-studio-gold mr-3"></span>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-studio-gold shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Monday - Saturday:</p>
                  <p className="font-semibold text-white">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-studio-gold shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Sunday:</p>
                  <p className="font-semibold text-white">11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-studio-gold/20 pt-10 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 font-playfair">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest offers and beauty tips.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-studio-gold border border-studio-gold/30"
              />
              <button type="submit" className="studio39-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Studio 39 Salon. All rights reserved.</p>
          <p className="mt-2">
            <span className="inline-block">Made with ❤️ in India</span>
            <span className="mx-2">|</span>
            <span className="inline-block">सभी के लिए लक्ज़री (Luxury for All)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

