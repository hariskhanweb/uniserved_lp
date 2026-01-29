"use client"

import { useState } from "react"
import { X, ArrowRight } from "lucide-react"

interface Partner {
  title: string
  location?: string
  country?: string
  brief: string
  fullBrief?: string
  services?: string
  specialties: string
  category: "worldwide" | "india"
}

const partners: Partner[] = [
  {
    title: "Global Network Solutions Provider",
    location: "Mumbai, Delhi, Bangalore",
    country: "India",
    brief: "Leading provider of enterprise network infrastructure and managed services",
    fullBrief: "Leading provider of enterprise network infrastructure and managed services across multiple cities in India. Specializes in large-scale deployments and 24/7 support.",
    services: "Network Installation, Managed Services, 24/7 Support",
    specialties: "Enterprise Networks, Data Centers, Cloud Infrastructure",
    category: "india"
  },
  {
    title: "International Technology Services",
    location: "New York, London, Singapore",
    country: "Worldwide",
    brief: "Global technology services company with presence across multiple continents",
    fullBrief: "Global technology services company with presence across multiple continents. Provides end-to-end IT solutions and field services for multinational corporations.",
    services: "Global Deployment, Multi-region Support, Enterprise Solutions",
    specialties: "International Projects, Cross-border Services, Enterprise IT",
    category: "worldwide"
  },
  {
    title: "Regional Field Services Partner",
    location: "Pune, Hyderabad, Chennai",
    country: "India",
    brief: "Specialized in field services and on-site technical support",
    fullBrief: "Specialized in field services and on-site technical support across major Indian cities. Known for rapid response times and skilled technicians.",
    services: "Field Services, On-site Support, Technical Installation",
    specialties: "Field Engineering, Hardware Support, Installation Services",
    category: "india"
  },
  {
    title: "European Technology Solutions",
    location: "Frankfurt, Paris, Amsterdam",
    country: "Worldwide",
    brief: "European leader in technology solutions and digital transformation",
    fullBrief: "European leader in technology solutions and digital transformation. Serves clients across Europe with comprehensive IT and network services.",
    services: "Digital Transformation, IT Consulting, Network Services",
    specialties: "European Markets, Digital Solutions, Enterprise Consulting",
    category: "worldwide"
  },
  {
    title: "South India Network Specialists",
    location: "Bangalore, Chennai, Coimbatore",
    country: "India",
    brief: "Expert in network infrastructure and wireless solutions for South India",
    fullBrief: "Expert in network infrastructure and wireless solutions for South India. Strong presence in tier-2 and tier-3 cities with comprehensive coverage.",
    services: "Network Infrastructure, Wireless Solutions, Regional Coverage",
    specialties: "Regional Networks, Wireless Technology, Infrastructure Deployment",
    category: "india"
  },
  {
    title: "Asia-Pacific Technology Partner",
    location: "Sydney, Tokyo, Hong Kong",
    country: "Worldwide",
    brief: "Leading technology partner serving the Asia-Pacific region",
    fullBrief: "Leading technology partner serving the Asia-Pacific region. Provides comprehensive IT services and field support across multiple countries.",
    services: "APAC Coverage, Technology Services, Regional Support",
    specialties: "Asia-Pacific Markets, Multi-country Services, Regional Expertise",
    category: "worldwide"
  },
  {
    title: "North India Enterprise Solutions",
    location: "Delhi, Noida, Gurgaon",
    country: "India",
    brief: "Focused on enterprise solutions and large-scale deployments in North India",
    fullBrief: "Focused on enterprise solutions and large-scale deployments in North India. Specializes in serving large enterprises and government organizations.",
    services: "Enterprise Solutions, Large-scale Deployments, Government Projects",
    specialties: "Enterprise IT, Government Services, Large Deployments",
    category: "india"
  },
  {
    title: "Americas Technology Services",
    location: "San Francisco, Toronto, São Paulo",
    country: "Worldwide",
    brief: "Comprehensive technology services across North and South America",
    fullBrief: "Comprehensive technology services across North and South America. Provides end-to-end solutions for businesses of all sizes.",
    services: "Americas Coverage, Technology Solutions, Business Services",
    specialties: "Americas Markets, Business Technology, Regional Services",
    category: "worldwide"
  }
]

export default function UnisourcingPartnerNetwork() {
  const [activeFilter, setActiveFilter] = useState<"worldwide" | "india">("india")
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)

  const filteredPartners = partners.filter(partner => partner.category === activeFilter)

  const openModal = (partner: Partner) => {
    setSelectedPartner(partner)
  }

  const closeModal = () => {
    setSelectedPartner(null)
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Unisourcing Partner Network
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("worldwide")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeFilter === "worldwide"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50"
              }`}
            >
              WORLDWIDE
            </button>
            <button
              onClick={() => setActiveFilter("india")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeFilter === "india"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50"
              }`}
            >
              INDIA
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {partner.title}
              </h3>
              <div className="mb-3">
                {partner.location && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    <span className="font-medium">Location:</span> {partner.location}
                  </p>
                )}
                {partner.country && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    <span className="font-medium">Country:</span> {partner.country}
                  </p>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <span className="font-medium">Brief:</span> {partner.brief}
              </p>
              <button
                onClick={() => openModal(partner)}
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors cursor-pointer"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedPartner.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 space-y-4">
              {selectedPartner.location && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Location:</p>
                  <p className="text-gray-700">{selectedPartner.location}</p>
                </div>
              )}
              {selectedPartner.country && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Country:</p>
                  <p className="text-gray-700">{selectedPartner.country}</p>
                </div>
              )}
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Brief:</p>
                <p className="text-gray-700">{selectedPartner.fullBrief || selectedPartner.brief}</p>
              </div>

              {selectedPartner.services && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Services:</p>
                  <p className="text-gray-700">{selectedPartner.services}</p>
                </div>
              )}

              <div>
                <p className="font-semibold text-gray-900 mb-1">Specialties:</p>
                <p className="text-gray-700">{selectedPartner.specialties}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
