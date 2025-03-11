"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bolt, BatteryCharging, Radio } from "lucide-react"

type ProjectTab = "tab1" | "tab2" | "tab3" | "tab4"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("tab1")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector(".projects-left")
            if (leftElement) {
              leftElement.classList.add("animate-fadeInLeft")
              leftElement.classList.remove("opacity-0")
            }

            const rightElement = entry.target.querySelector(".projects-right")
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

  const projects = {
    tab1: {
      image: "/placeholder.svg?height=400&width=600",
      title: "Power Path Unveiling Our process",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.",
    },
    tab2: {
      image: "/placeholder.svg?height=400&width=600",
      title: "Electro Flow Decoding Our method",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.",
    },
    tab3: {
      image: "/placeholder.svg?height=400&width=600",
      title: "Energetic Engine Behind Scenes",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.",
    },
    tab4: {
      image: "/placeholder.svg?height=400&width=600",
      title: "Watt Works Discover Operations",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.",
    },
  }

  return (
    <div className="container-fluid projects bg-light " ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 opacity-0 projects-left">
            <div>
              <h4 className="text-2xl text-orange-500">Our Projects</h4>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">How to work Our Electricity Projects</h1>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fugiat quae nihil obcaecati,
              </p>
              <ul className="nav flex flex-col projects-tabs">
                {Object.entries(projects).map(([key, project]) => {
                  const isActive = activeTab === key
                  return (
                    <li key={key} className="bg-white mb-4 w-100">
                      <button
                        className={`flex items-center h4 mb-0 p-3 w-full rounded-md transition-all duration-300 ${
                          isActive ? "bg-orange-400 text-white" : "bg-white text-black"
                        }`}
                        onClick={() => setActiveTab(key as ProjectTab)}
                      >
                        <div
                          className={`projects-icon btn-md-square me-3 w-10 h-10 flex items-center justify-center  ${
                            isActive ? "bg-white text-orange-400" : "bg-orange-400 text-black"
                          }`}
                        >
                          {key === "tab1" && <Bolt className="h-6 w-6" />}
                          {key === "tab2" && <BatteryCharging className="h-6 w-6" />}
                          {key === "tab3" && <Radio className="h-6 w-6" />}
                          {key === "tab4" && <Bolt className="h-6 w-6" />}
                        </div>
                        <span>{project.title}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 opacity-0 projects-right">
            <div className="tab-content bg-white shadow-lg">
              <div className="projects-item flex flex-col justify-center items-center">
                <Image
                  src={projects[activeTab].image || "/placeholder.svg"}
                  alt={projects[activeTab].title}
                  width={500}
                  height={300}
                  className="img-fluid min-w-48 "
                />
                <div className="projects-content bg-white p-4">
                  <h4 className="mb-3 font-bold text-lg">{projects[activeTab].title}</h4>
                  <p className="mb-4">{projects[activeTab].description}</p>
                  <Link href="#" className="btn btn-primary py-2 px-4 rounded-md inline-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
