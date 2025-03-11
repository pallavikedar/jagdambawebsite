"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function BannerSection() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-zoomIn")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <div className="container-fluid banner py-12 md:py-16 lg:py-20 opacity-0" ref={bannerRef}>
      <div className="banner-design-1"></div>
      <div className="banner-design-2"></div>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div>
              <h4 className="text-white">Contact With Me</h4>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-0 font-bold">
                We provide professional electric services for our customer
              </h1>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex items-center justify-center lg:justify-end h-full">
              <Link href="#" className="btn btn-primary py-3 px-4 md:px-5 rounded-md">
                EXPLORE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

