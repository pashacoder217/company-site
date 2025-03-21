"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Clock, X, Calendar, ChevronRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import Image from "next/image"

// Sample data for the upcoming appointments
const appointments = [
  {
    id: 1,
    clientName: "Priya Sharma",
    clientImage: "https://randomuser.me/api/portraits/women/41.jpg",
    service: "Hair Coloring",
    staffName: "Anjali Sharma",
    time: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    status: "confirmed",
    phone: "+919876543219",
  },
  {
    id: 2,
    clientName: "Arjun Kapoor",
    clientImage: "https://randomuser.me/api/portraits/men/32.jpg",
    service: "Men's Haircut",
    staffName: "Raj Kapoor",
    time: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours from now
    status: "confirmed",
    phone: "+919876543220",
  },
  {
    id: 3,
    clientName: "Neha Patel",
    clientImage: "https://randomuser.me/api/portraits/women/17.jpg",
    service: "Bridal Makeup",
    staffName: "Anjali Sharma",
    time: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
    status: "pending",
    phone: "+919876543221",
  },
  {
    id: 4,
    clientName: "Vikram Singh",
    clientImage: "https://randomuser.me/api/portraits/men/53.jpg",
    service: "Beard Trim",
    staffName: "Raj Kapoor",
    time: new Date(Date.now() + 1000 * 60 * 60 * 4), // 4 hours from now
    status: "confirmed",
    phone: "+919876543222",
  },
  {
    id: 5,
    clientName: "Meera Reddy",
    clientImage: "https://randomuser.me/api/portraits/women/63.jpg",
    service: "Manicure & Nail Art",
    staffName: "Priya Gupta",
    time: new Date(Date.now() + 1000 * 60 * 60 * 5), // 5 hours from now
    status: "pending",
    phone: "+919876543223",
  },
]

export default function UpcomingAppointments() {
  const [appointmentList, setAppointmentList] = useState(appointments)

  const handleStatusChange = (id: number, newStatus: "confirmed" | "pending" | "cancelled" | "completed") => {
    setAppointmentList(prev => 
      prev.map(appointment => 
        appointment.id === id 
          ? { ...appointment, status: newStatus } 
          : appointment
      )
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-600 hover:bg-green-700">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Pending</Badge>
      case "cancelled":
        return <Badge className="bg-red-600 hover:bg-red-700">Cancelled</Badge>
      case "completed":
        return <Badge className="bg-blue-600 hover:bg-blue-700">Completed</Badge>
      default:
        return null
    }
  }

  const handleSendWhatsApp = (phone: string, message: string) => {
    const cleanPhone = phone.replace('+', '') // Remove '+' for WhatsApp API compatibility
    const whatsappMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${cleanPhone}?text=${whatsappMessage}`, "_blank")
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-medium text-white">
          Upcoming Appointments
        </CardTitle>
        <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
          <Link href="/admin/calendar">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </span>
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointmentList.map((appointment) => (
            <div 
              key={appointment.id} 
              className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border border-gray-700">
                  <Image 
                    src={appointment.clientImage || "/placeholder.svg"} 
                    alt={appointment.clientName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">{appointment.clientName}</h3>
                  <p className="text-sm text-gray-400">
                    {appointment.service} with {appointment.staffName}
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(appointment.time, { addSuffix: true })}
                    </span>
                    <span className="mx-2 text-gray-600">•</span>
                    {getStatusBadge(appointment.status)}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {appointment.status === "pending" && (
                  <>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-green-500 hover:text-green-400 hover:bg-green-900/30"
                      onClick={() => handleStatusChange(appointment.id, "confirmed")}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-red-500 hover:text-red-400 hover:bg-red-900/30"
                      onClick={() => handleStatusChange(appointment.id, "cancelled")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                )}
                {appointment.status === "confirmed" && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-blue-500 hover:text-blue-400 hover:bg-blue-900/30"
                    onClick={() => handleStatusChange(appointment.id, "completed")}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                )}
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-studio-gold hover:text-studio-gold-light hover:bg-studio-gold/10"
                  onClick={() => handleSendWhatsApp(
                    appointment.phone, 
                    `Hello ${appointment.clientName}, this is a reminder about your appointment for ${appointment.service} with ${appointment.staffName} at Studio 39 Salon. Please confirm your attendance.`
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

