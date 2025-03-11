"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Play } from "lucide-react"

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 2
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // useEffect(() => {
  //   // Start the carousel interval
  //   startCarousel()

  //   // Clean up on unmount
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current)
  //     }
  //   }
  // }, [])

  // const startCarousel = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current)
  //   }

  //   intervalRef.current = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % totalSlides)
  //   }, 5000)
  // }

  // const goToSlide = (index: number) => {
  //   setActiveSlide(index)
  //   // Reset the interval when manually changing slides
  //   startCarousel()
  // }

  return (
    <div className="header-carousel owl-carousel overflow-hidden relative">
      {/* Slide 1 */}
      <div
        className={`hero-section transition-opacity duration-1000 ${
          activeSlide === 0 ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
      >
        <div className="hero-bg-half-1"></div>
        <div className="hero-shape-1"></div>
        <div className="carousel-caption">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
              <div className="lg:col-span-7 animate-fadeInLeft">
                <div className="text-center sm:text-center md:text-left">
                  <h4 className="text-white uppercase font-bold mb-4 drop-shadow-2xl ">Current Electricity Services</h4>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold drop-shadow-2xl">
                    Power for Seamless Electricity Solutions
                  </h1>
                  <p className="mb-5 text-lg text-white drop-shadow-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start mb-4 gap-2">
                    <Link href="#" className="btn bg-orange-50 text-orange-500 font-bold  py-3 px-4 md:px-5 rounded-md text-xl">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-primary" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </div>
  )
}

