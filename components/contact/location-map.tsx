"use client"

import { MapPin, Phone, Clock } from "lucide-react"

export default function LocationMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-900 border border-gray-800">
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-studio-gold/20 flex items-center justify-center mb-4">
          <MapPin className="h-8 w-8 text-studio-gold" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Studio 39 Salon</h3>
        <p className="text-gray-400 mb-4">123 Luxury Lane, Mumbai, Maharashtra 400001, India</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full max-w-md">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-studio-gold mr-3" />
            <div>
              <p className="text-gray-300 font-medium">Phone</p>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center">
            <Clock className="h-5 w-5 text-studio-gold mr-3" />
            <div>
              <p className="text-gray-300 font-medium">Hours</p>
              <p className="text-gray-400">10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-6">Interactive map unavailable. Please use the address details above.</p>
      </div>
    </div>
  )
}

