"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

type ServiceTab = "commercial" | "residential" | "industrial"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("commercial")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const titleElement = entry.target.querySelector(".service-title")
            if (titleElement) {
              titleElement.classList.add("animate-fadeInUp")
              titleElement.classList.remove("opacity-0")
            }

            const tabsElement = entry.target.querySelector(".service-tabs")
            if (tabsElement) {
              tabsElement.classList.add("animate-fadeInLeft")
              tabsElement.classList.remove("opacity-0")
            }

            const contentElement = entry.target.querySelector(".service-content")
            if (contentElement) {
              contentElement.classList.add("animate-fadeInRight")
              contentElement.classList.remove("opacity-0")
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

  const commercialServices = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Brite Spark Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Energy Ease Packages",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Electra Care Packages",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
  ]

  const residentialServices = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Electrical Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Security Systems",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Air Conditioner",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
  ]

  const industrialServices = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Factory Manufacture",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "General Electrical",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Electrical Planing",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
    },
  ]

  const renderServices = () => {
    let services = []

    switch (activeTab) {
      case "commercial":
        services = commercialServices
        break
      case "residential":
        services = residentialServices
        break
      case "industrial":
        services = industrialServices
        break
    }

    return (
      <div className="service-carousel grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={400}
              height={300}
              
             
              className="img-fluid w-full"
            />
            <div className="border border-t-0 p-4">
              <h4 className="mb-3">{service.title}</h4>
              <p className="mb-4">{service.description}</p>
              <Link href="#" className="btn btn-primary py-2 px-4 rounded-md inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container-fluid service py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="flex flex-col mx-auto text-center mb-10 opacity-0 service-title" style={{ maxWidth: "800px" }}>
          <h4 className="text-2xl text-orange-500 ">Our Services</h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The Best Service For You</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt provident ab voluptates rerum
            eaque eum magni autem atque in minus laboriosam corrupti deleniti voluptatibus rem reiciendis modi veniam
            animi?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-3 opacity-0 service-tabs">
            <ul className="nav flex flex-col">
              <li className="me-lg-0 mb-4">
                <button
                  className={`py-3 px-5 block w-full text-left rounded-md ${
                    activeTab === "commercial" ? " bg-orange-400 text-white active" : "border  borderborder-orange-400 bg-slate-50 text-orange-400"
                  }`}
                  onClick={() => setActiveTab("commercial")}
                >
                  <span>Commercial</span>
                </button>
              </li>
              <li className="me-lg-0 mb-4">
                <button
                  className={`py-3 px-5 block w-full text-left rounded-md ${
                    activeTab === "residential" ? " bg-orange-400 text-white active" : "border  borderborder-orange-400 bg-slate-50 text-orange-400"
                  }`}
                  onClick={() => setActiveTab("residential")}
                >
                  <span>Residential</span>
                </button>
              </li>
              <li className="me-lg-0 mb-0">
                <button
                  className={`py-3 px-5 block w-full text-left rounded-md ${
                    activeTab === "industrial" ? " bg-orange-400 text-white active" : "border  borderborder-orange-400 bg-slate-50 text-orange-400"
                  }`}
                  onClick={() => setActiveTab("industrial")}
                >
                  <span>Industrial</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-9 opacity-0 service-content">
            <div className="tab-content">{renderServices()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

