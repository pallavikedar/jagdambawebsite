"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const titleElement = entry.target.querySelector(".blog-title")
            if (titleElement) {
              titleElement.classList.add("animate-fadeInUp")
              titleElement.classList.remove("opacity-0")
            }

            const blogItems = entry.target.querySelectorAll(".blog-item-animate")
            blogItems.forEach((item, index) => {
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

  const blogPosts = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Electrifying Reads Explore Our Electricity",
      date: "April 2, 2025",
      category: "Electricity Corner",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Empowering Energy Dive into Our Electricity",
      date: "April 2, 2025",
      category: "Electricity Corner",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "Electricity Explained: Bloggin Power of Tomorrow",
      date: "April 2, 2025",
      category: "Electricity Corner",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!",
    },
  ]

  return (
    <div className="container-fluid blog py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="flex flex-col mx-auto text-center mb-10 opacity-0 blog-title" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Our Blog</h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Electricity News & Updates</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt provident ab voluptates rerum
            eaque eum magni autem atque in minus laboriosam corrupti deleniti voluptatibus rem reiciendis modi veniam
            animi?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="opacity-0 blog-item-animate">
              <div className="blog-item">
                <div className="blog-img">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="img-fluid w-full"
                  />
                </div>
                <div className="blog-heading ms-4">
                  <Link href="#" className="h4 mb-0 p-4 block font-medium">
                    {post.title}
                  </Link>
                </div>
                <div className="blog-content bg-light p-4">
                  <div className="flex justify-between mb-4">
                    <p className="mb-0 text-sm">
                      <Calendar className="inline-block mr-2 h-4 w-4" /> {post.date}
                    </p>
                    <p className="mb-0 text-sm">
                      <Tag className="inline-block mr-2 h-4 w-4" /> {post.category}
                    </p>
                  </div>
                  <p className="mb-4">{post.description}</p>
                  <Link href="#" className="btn btn-primary py-2 px-4 rounded-md inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

