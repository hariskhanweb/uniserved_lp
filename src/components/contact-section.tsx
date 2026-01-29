"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Globe, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add API call or email service integration here
  }

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/oem-collage_03.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left Column - Contact Form */}
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y text-gray-900 placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors uppercase tracking-wide"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="relative z-10 flex flex-col justify-center text-white">
            <div className="relative">
              {/* INDIA Button */}
              <div className="justify-end mb-8 hidden">
                <button className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors uppercase text-sm">
                  India
                </button>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Address</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 shrink-0 text-orange-400" />
                  <p className="text-gray-200 leading-relaxed">
                    Office no. 802, RUPA SOLITAIRE, Bldg. No, A-1, MBP Rd, Sector 1, MIDC Industrial Area, Navi Mumbai, 400710, Maharashtra
                  </p>
                </div>
              </div>

              {/* Email & Website */}
              <div>
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-orange-400" />
                    <a
                      href="mailto:contact@uniserved.com"
                      className="text-gray-200 hover:text-orange-400 transition-colors"
                    >
                      E: contact@uniserved.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 shrink-0 text-orange-400" />
                    <a
                      href="https://www.uniserved.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-orange-400 transition-colors"
                    >
                      W: www.uniserved.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
