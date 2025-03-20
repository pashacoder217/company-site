"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "I've been coming to Studio 39 for over a year now, and I'm always impressed with their hair coloring services. The stylists understand exactly what I want!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "First-time Customer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Best haircut ever! The stylist took time to understand what I wanted and gave great suggestions. Will definitely be coming back.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Loved the nail art! The technicians are so creative and detail-oriented. My nails have never looked better.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Monthly Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "As a man who cares about grooming, I appreciate that this salon caters to both men and women. Great beard trimming and facial services!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="section-padding bg-studio-black relative overflow-hidden animate-fadeIn">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-contain bg-[url('https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/customer-review-good-rating-concept-600nw-2236198959-86JUH4UerxrRASwWH32xvf9d8Pe7fW.webp')] bg- bg-repeat-space bg-contain"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white font-playfair">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences at Studio 39
            Salon.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="studio39-card p-8 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4 border border-studio-gold/30">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <div className="flex text-studio-gold mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4" fill={i < testimonial.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-5xl text-studio-gold opacity-20">"</div>
                      <blockquote className="text-gray-300 italic relative z-10 pl-4">{testimonial.quote}</blockquote>
                      <div className="absolute -bottom-4 -right-2 text-5xl text-studio-gold opacity-20">"</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-studio-black rounded-full p-2 shadow-md hover:bg-gray-900 transition-colors border border-studio-gold/30 text-studio-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-studio-black rounded-full p-2 shadow-md hover:bg-gray-900 transition-colors border border-studio-gold/30 text-studio-gold"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-studio-gold" : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

