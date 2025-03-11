"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import BannerSection from "@/components/banner-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import BlogSection from "@/components/blog-section"
import TeamSection from "@/components/team-section"
import TestimonialSection from "@/components/testimonial-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import Spinner from "@/components/spinner"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      {loading && <Spinner />}
      <Header />
      <HeroCarousel />
      <AboutSection />
      <BannerSection />
      <ServicesSection />
      <ProjectsSection />
     
      <TeamSection />
      <TestimonialSection />
     
      <Footer />
      <BackToTop />
    </main>
  )
}

