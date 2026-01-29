"use client"

import { useState } from "react"
import { X, ArrowRight } from "lucide-react"

interface CaseStudy {
  title: string
  endCustomer?: string
  customer?: string
  type?: string
  brief: string
  fullBrief?: string
  noOfSites?: string
  uniservedSolution: string
  tags: string
  profilesHandled?: string
  typeOfSystem?: string
  category: "all" | "aggregation" | "skills-marketplace"
}

const caseStudies: CaseStudy[] = [
  {
    title: "Multilocation/ Large Per site delivery",
    endCustomer: "Global Telecommunication Services Provider",
    brief: "Customer needed support to deploy",
    fullBrief: "Customer needed support to deploy an upgrade to their Wireless Networks on the basis of previous performed active wireless surveys",
    noOfSites: "80 offices",
    uniservedSolution: "Validated and certified networking partners were finalised and on site as per the customers deployment plan. Proof of delivery provided via photographs and WCC reports collated and submitted weekly",
    tags: "Photographic POD, WCC Soft Copy",
    category: "aggregation"
  },
  {
    title: "Multi-location Wireless Deployment",
    customer: "Major Indian Budget Hotels Network",
    brief: "Customer needed support to deploy wireless networks across locations",
    fullBrief: "Customer needed support to deploy wireless networks across locations. Once the BOM is delivered, they needed skilled teams to install and test the network.",
    noOfSites: "Ongoing",
    uniservedSolution: "Clear scope defined for each site and communicated to our partner network in the required locations. Installation being completed as two phases, installation and testing. POD of installation provided via site reports and photographs and testing via popular speedtest solutions.",
    tags: "Hospitality, WiFi, Speed Testing, Installation",
    category: "aggregation"
  },
  {
    title: "Permanent and short term skill support",
    endCustomer: "Multiple MNC's",
    brief: "Provide skilled resources for short-medium term projects for various activities like Move-Add-Change",
    fullBrief: "Provide skilled resources for short-medium term projects for various activities like Move-Add-Change-Delete, system troubleshooting, developing integrations etc.",
    profilesHandled: "Cloud Migration, Network Security, PMP, BI developers, VMware, ETL developers",
    uniservedSolution: "Resources comfortable with working on contract/freelancers were identified for each of the requirements. Contract resources were engaged with possibility of extension or absorption onto rolls based on project progress.",
    tags: "Part time resources, Remote Work, Contract Staffing",
    category: "skills-marketplace"
  },
  {
    title: "Multilocation/ Small per site Delivery",
    endCustomer: "Large Indian engineering and construction conglomerate",
    brief: "Project was to install GPON ONT/OLT with",
    fullBrief: "Project was to install GPON ONT/OLT with supporting equipment at Gram Panchayats as part of the NOFN project across India.",
    noOfSites: "2000+",
    uniservedSolution: "Installation partners were identified and finalised at district level. Training was provided via online videos and in person training. Remote support war room was setup to provide technical support if needed. Physical POD were signed and collated in central location before submission.",
    tags: "Gram Panchayat, Fibre Optics, Physical POD",
    category: "aggregation"
  },
  {
    title: "Requirement Analysis",
    endCustomer: "International System Integrator",
    brief: "Understand a client IoT requirement and provide a full Solution Space Analysis including",
    fullBrief: "Understand their clients IoT requirement and provide a full Solution Space Analysis Report including hardware. The project is in the area of Long range WAN (LoRaWAN)",
    typeOfSystem: "LoRaWAN Data Collection Edge Network Deployment",
    uniservedSolution: "Selected partner with 15+ years experience in embedded systems. Once finalised, parter worked with client to deliver a full analysis of the solution space, including options for feasibility",
    tags: "Bank branch, BFSI, WCC, Security Patch, Upgrade",
    category: "skills-marketplace"
  },
  {
    title: "Wifi/ EM active surveys",
    type: "Large multinational Conglomerate",
    brief: "Customer needed WiFi/EM spectrum surveys to be performed using Airmagnet to enable Wifi Planning",
    fullBrief: "Client needed WiFi/EM spectrum surveys to be performed using Airmagnet to enable Wifi Planning and design. Reports needed to be provided along with floorplans to be created on site.",
    uniservedSolution: "Work with on ground partners to complete the site surveys and rough floor plan creation. Final floor plans created by remote design team. Airmagnet WiFi/EM surveys conducted by multiple travelling teams based on geography, to optimise time and cost. Licensed reports provided with all required plans.",
    tags: "Wifi Survey, EM spectrum Analysis",
    category: "aggregation"
  },
  {
    title: "Software Installation/Patches",
    customer: "Multinational Public Sector bank",
    brief: "Customer needed support to deploy an upgrade across systems",
    fullBrief: "Customer needed support to deploy an upgrade across systems in their various branches manually.",
    noOfSites: "800+",
    uniservedSolution: "Parnters with PC Maintenance skill were finalised and patches were distributed. Proof of delivery was driven with WCC document softcopies, submitted in milestones.",
    tags: "Bank branch, BFSI, WCC, Security Patch, Upgrade",
    category: "aggregation"
  },
  {
    title: "Field O&M requirements",
    endCustomer: "Big 4 Internet Major",
    brief: "Provide field support and O&M services to maintain the network of Public Wifi points in railway",
    fullBrief: "Provide field support and O&M services to maintain the network of Public Wifi points in railway stations across India.",
    uniservedSolution: "Curated a network of pre trained partners. Training provided via a mix of online documentation, on ground training and phone support. Pre approved ticketwise billing. Purely online documentation for POD with NoC Support. Fully trained remote support team to provide technical support if needed.",
    tags: "O&M, Troubleshooting, Online POD",
    category: "aggregation"
  }
]

export default function UnisourcingCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<"all" | "aggregation" | "skills-marketplace">("all")
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  const filteredCaseStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter)

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study)
  }

  const closeModal = () => {
    setSelectedStudy(null)
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Unisourcing Case Studies
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeFilter === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveFilter("aggregation")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeFilter === "aggregation"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50"
              }`}
            >
              AGGREGATION
            </button>
            <button
              onClick={() => setActiveFilter("skills-marketplace")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeFilter === "skills-marketplace"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50"
              }`}
            >
              SKILLS MARKETPLACE
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {study.title}
              </h3>
              <div className="mb-3">
                {study.endCustomer && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    <span className="font-medium">End Customer:</span> {study.endCustomer}
                  </p>
                )}
                {study.customer && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    <span className="font-medium">Customer:</span> {study.customer}
                  </p>
                )}
                {study.type && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    <span className="font-medium">Type:</span> {study.type}
                  </p>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <span className="font-medium">Brief:</span> {study.brief}
              </p>
              <button
                onClick={() => openModal(study)}
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors cursor-pointer"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
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
                {selectedStudy.title}
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
              {selectedStudy.endCustomer && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">End Customer:</p>
                  <p className="text-gray-700">{selectedStudy.endCustomer}</p>
                </div>
              )}
              {selectedStudy.customer && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Customer:</p>
                  <p className="text-gray-700">{selectedStudy.customer}</p>
                </div>
              )}
              {selectedStudy.type && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Type:</p>
                  <p className="text-gray-700">{selectedStudy.type}</p>
                </div>
              )}
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Brief:</p>
                <p className="text-gray-700">{selectedStudy.fullBrief || selectedStudy.brief}</p>
              </div>

              {selectedStudy.typeOfSystem && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Type Of System:</p>
                  <p className="text-gray-700">{selectedStudy.typeOfSystem}</p>
                </div>
              )}

              {selectedStudy.noOfSites && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">No. of Sites:</p>
                  <p className="text-gray-700">{selectedStudy.noOfSites}</p>
                </div>
              )}

              {selectedStudy.profilesHandled && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Profiles Handled:</p>
                  <p className="text-gray-700">{selectedStudy.profilesHandled}</p>
                </div>
              )}

              <div>
                <p className="font-semibold text-gray-900 mb-1">Uniserved Solution:</p>
                <p className="text-gray-700">{selectedStudy.uniservedSolution}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Tags:</p>
                <p className="text-gray-700">{selectedStudy.tags}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
