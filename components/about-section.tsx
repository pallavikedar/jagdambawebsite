"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bolt, Radio } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector(".about-left")
            const rightElement = entry.target.querySelector(".about-right")

            if (leftElement) {
              leftElement.classList.add("animate-fadeInLeft")
              leftElement.classList.remove("opacity-0")
            }

            if (rightElement) {
              rightElement.classList.add("animate-fadeInRight")
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="container-fluid about " ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 opacity-0 about-left">
            <div className="h-100">
              <h4 className="text-2xl text-orange-500 ">About Us</h4>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Providing you with the highest quality of features
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="col-span-1">
                  <Link href="#" className="flex items-center">
                    <Bolt color="orange" className="w-10 h-10 mr-3 text-primary" />
                    <h4 className="mb-0">Emergency Power Solution</h4>
                  </Link>
                </div>
                <div className="col-span-1">
                  <Link href="#" className="flex items-center">
                    <Radio color="orange" className="w-10 h-10 mr-3 text-primary" />
                    <h4 className="mb-0">Full-Service Electrical Layout</h4>
                  </Link>
                </div>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, minus. At velit nam, animi culpa fugiat
                neque facere illum, eum possimus omnis accusantium deleniti consectetur temporibus necessitatibus
                asperiores sunt dicta?
              </p>
              <div className="text-dark mb-4">
                <p className="text-lg">
                  <span className="fa fa-check text-orange-500 me-2 ">✓</span>
                  Installed, maintained and repaired lighting for clients.
                </p>
                <p className="text-lg">
                  <span className="fa fa-check  text-orange-500 me-2">✓</span>
                  Increasingly popular way to generate electricity.
                </p>
                <p className="text-lg">
                  <span className="fa fa-check  text-orange-500 me-2">✓</span>
                  Protect electrical devices from damage.
                </p>
              </div>
              <Link href="#" className="btn btn-primary py-3 px-4 md:px-5 rounded-md inline-block">
                Contact us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 opacity-0 about-right">
            <div className="position-relative h-full">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About"
                width={500}
                height={600}
                className="img-fluid w-full h-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

