"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Define salon locations
const locations = [
  { name: "Studio 39 - Bandra", address: "123 Hill Road, Bandra West, Mumbai" },
  { name: "Studio 39 - Andheri", address: "456 Veera Desai Road, Andheri West, Mumbai" },
  { name: "Studio 39 - Powai", address: "789 Hiranandani Gardens, Powai, Mumbai" },
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState(0)

  return (
    <div className=" rounded-lg overflow-hidden shadow-md bg-gray-900 border border-gray-800">
      <div className="h-full flex flex-col md:flex-row">
        {/* Location list */}
        {/* <div className="w-full md:w-1/3 border-r border-gray-800 overflow-y-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer transition-colors ${
                activeLocation === index
                  ? "bg-gray-800 border-l-4 border-studio-gold"
                  : "hover:bg-gray-800 border-l-4 border-transparent"
              }`}
              onClick={() => setActiveLocation(index)}
            >
              <h3 className="font-semibold text-white">{location.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{location.address}</p>
            </div>
          ))}
        </div> */}

        {/* Map visualization */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-studio-gold/20 flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-studio-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{locations[activeLocation].name}</h3>
          <p className="text-gray-400 mb-6">{locations[activeLocation].address}</p>
          <p className="text-gray-500 text-sm mb-6">
            Interactive map unavailable. Please use the location details above.
          </p>
          <Button asChild className="bg-studio-gold text-studio-black hover:bg-studio-gold-light">
            <Link href="/booking">Book at this Location</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

