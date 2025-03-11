"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [activeAccordion, setActiveAccordion] = useState("collapseOne")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector(".faq-left")
            if (leftElement) {
              leftElement.classList.add("animate-fadeInLeft")
              leftElement.classList.remove("opacity-0")
            }

            const rightElement = entry.target.querySelector(".faq-right")
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

  const faqs = [
    {
      id: "collapseOne",
      question: "Q: How Do I Sing Up For Your Electricity Services?",
      answer:
        "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: "collapseTwo",
      question: "Q: What Types Of Electricity Plans Do You Offer?",
      answer:
        "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: "collapseThree",
      question: "Q: What Are Your Billing And Payment Options?",
      answer:
        "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: "collapseFour",
      question: "Q: How Can I Track My Energy Usage With Your Services?",
      answer:
        "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    },
  ]

  return (
    <div className="container-fluid faq-section bg-light py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 opacity-0 faq-left">
            <h4 className="text-primary">Some Important FAQ's</h4>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Common Frequently Asked Questions?</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur sapiente, modi perspiciatis
              earum ab inventore vitae consequatur tempore quibusdam?
            </p>
            <Link href="#" className="btn btn-primary py-3 px-5 rounded-md inline-block">
              Have Any Questions
            </Link>
          </div>
          <div className="lg:col-span-6 opacity-0 faq-right">
            <div className="h-100">
              <div className="accordion" id="accordionExample">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item mb-3 border rounded-md overflow-hidden">
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className="accordion-button flex justify-between items-center w-full p-4 text-left font-medium bg-white"
                        type="button"
                        onClick={() => setActiveAccordion(activeAccordion === faq.id ? "" : faq.id)}
                        aria-expanded={activeAccordion === faq.id}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                        {activeAccordion === faq.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </h2>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${activeAccordion === faq.id ? "show" : ""}`}
                      aria-labelledby={`heading${faq.id}`}
                    >
                      <div className="accordion-body p-4 bg-white border-t">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

