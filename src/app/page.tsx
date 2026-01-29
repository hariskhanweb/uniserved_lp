"use client"

import HeroSection from "@/components/hero-section"
import UnisourcingCaseStudies from "@/components/unisourcing-case-studies"
import CloudLogoSection from "@/components/cloud-logo-section"
import CounterSection from "@/components/counter-section"
import UnisourcingPartnerNetwork from "@/components/unisourcing-partner-network"
import PartnerAggregationTaasSection from "@/components/partner-aggregation-taas-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      {/* Cloud Logo Section */}
      <CloudLogoSection />
      {/* Unisourcing Case Studies Section */}
      <UnisourcingCaseStudies />
      {/* Counter Section */}
      <CounterSection />
      {/* Unisourcing Partner Network Section */}
      <UnisourcingPartnerNetwork />

      {/* Partner Aggregation & TaaS Section */}
      <PartnerAggregationTaasSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

