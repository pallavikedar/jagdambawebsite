"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Quote } from "lucide-react"

export default function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 3
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start the carousel interval
    startCarousel()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector(".testimonial-left")
            if (leftElement) {
              leftElement.classList.add("animate-fadeInUp")
              leftElement.classList.remove("opacity-0")
            }

            const rightElement = entry.target.querySelector(".testimonial-right")
            if (rightElement) {
              rightElement.classList.add("animate-fadeInUp")
              rightElement.classList.remove("opacity-0")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const startCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
    // Reset the interval when manually changing slides
    startCarousel()
  }

  const testimonials = [
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Person Name",
      position: "Profession",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Person Name",
      position: "Profession",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Person Name",
      position: "Profession",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
  ]

  return (
    <div className="container-fluid testimonial bg-dark py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 xl:col-span-5 opacity-0 testimonial-left">
            <h4 className="text-2xl text-orange-500 ">Testimonial</h4>
            <h1 className="text-3xl md:text-4xl text-white mb-4 font-bold">
              Powerfull Praise Heare From Our Customers
            </h1>
            <p className="mb-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic aspernatur unde magnam
              necessitatibus provident iusto maxime nobis esse eligendi.
            </p>
            <Link href="#" className="btn btn-light py-3 px-5 rounded-md inline-block">
              View All Reviews
            </Link>
          </div>
          <div className="lg:col-span-7 xl:col-span-7 opacity-0 testimonial-right">
            <div className="owl-carousel testimonial-carousel relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-item transition-opacity duration-500 ${
                    activeSlide === index ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <div className="testimonial-quote">
                    <Quote className="h-8 w-8" />
                  </div>
                  <div className="testimonial-inner p-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="img-fluid rounded-full"
                    />
                    <div className="ms-4">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                      <div className="flex text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-body"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="customer-text p-4">
                    <p className="mb-0">{testimonial.text}</p>
                  </div>
                </div>
              ))}

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-primary" : "bg-white/50"}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

