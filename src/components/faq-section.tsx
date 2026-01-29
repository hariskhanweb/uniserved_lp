"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs: { question: string; answer: string }[] = [
  {
    question: "What can we crowdsource?",
    answer: "You can crowdsource field services (installation, repairs, surveys), infrastructure support for datacenters, wired & wireless networks, end-user equipment, and niche technical skills—from networking to IoT and Machine Learning. We aggregate verified partners nationwide to deliver at scale."
  },
  {
    question: "How does Uniserved manage delivery of the services?",
    answer: "We define scope, generate quotes, and match your project with validated partners from our network. Delivery is tracked via our platform with proof-of-delivery (POD), milestone-based reporting, and optional remote support. We coordinate partners, training, and timelines so you get consistent, SLA-driven execution."
  },
  {
    question: "How do I know we are in the right hands?",
    answer: "We work with validated, certified partners and maintain quality through training, clear SLAs, and transparent reporting. Our tech-enabled platform gives you visibility from ticket to closure. You can review case studies, partner profiles, and delivery metrics before engaging."
  },
  {
    question: "How do you handle payments?",
    answer: "Payments are structured around your project—typically milestone-based or ticket-wise, as agreed in the quote. We support transparent billing, purchase orders, and standard commercial terms. Specific payment terms are confirmed before deployment."
  },
  {
    question: "Which Regions can you provide services?",
    answer: "We provide services across India (pan-India, including 98%+ pin codes) and internationally through our worldwide partner network. Coverage includes tier-1 to tier-3 cities, with spares depots and field teams deployed where you need them."
  },
  {
    question: "How do we get started?",
    answer: "Share your project or skill requirements via our Get Quote or Search Skills forms. We’ll review, align on scope and timelines, and connect you with the right partners. You can also schedule a visit or check availability through our booking links."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Based on our discussions with our clients, the following questions have popped up and we would love to answer them.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-gray-100 px-5 py-4">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
