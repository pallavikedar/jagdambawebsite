"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const titleElement = entry.target.querySelector(".team-title")
            if (titleElement) {
              titleElement.classList.add("animate-fadeInUp")
              titleElement.classList.remove("opacity-0")
            }

            const teamItems = entry.target.querySelectorAll(".team-item-animate")
            teamItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fadeInUp")
                item.classList.remove("opacity-0")
              }, index * 200)
            })
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

  const teamMembers = [
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Shoaib Bashir",
      position: "Profession",
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Shoaib Bashir",
      position: "Profession",
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Shoaib Bashir",
      position: "Profession",
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Shoaib Bashir",
      position: "Profession",
    },
  ]

  return (
    <div className="container-fluid team pb-12 md:pb-16 lg:pb-20" ref={sectionRef}>
      <div className="container pb-12 md:pb-16 lg:pb-20">
        <div className="flex flex-col mx-auto text-center mb-10 opacity-0 team-title" style={{ maxWidth: "800px" }}>
          <h4 className="text-2xl text-orange-500 ">Our Team</h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Electricity Service offerings</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt provident ab voluptates rerum
            eaque eum magni autem atque in minus laboriosam corrupti deleniti voluptatibus rem reiciendis modi veniam
            animi?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="opacity-0 team-item-animate">
              <div className="team-item">
                <div className="team-img relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="img-fluid w-full"
                  />
                  <div className="team-icon">
                    <Link href="#" className="btn btn-square btn-primary mb-2 rounded-md">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="btn btn-square btn-primary mb-2 rounded-md">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="btn btn-square btn-primary mb-2 rounded-md">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="btn btn-square btn-primary mb-2 rounded-md">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="team-content bg-light text-center p-4">
                  <h4>{member.name}</h4>
                  <p className="mb-0">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

