"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top btn btn-primary btn-lg-square ${isVisible ? "flex" : "hidden"} items-center justify-center fixed bottom-6 right-6 p-3 rounded-md shadow-lg z-50`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

