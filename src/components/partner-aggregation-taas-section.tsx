"use client"

import Link from "next/link"

const QUOTES_URL = "http://quotes.uniserved.com/"

export default function PartnerAggregationTaasSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">
        {/* Partner Aggregation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Partner Aggregation
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We support field services and infrastructure for datacenters, wired & wireless networks, and end-user equipment. Deliver nationwide with aggregated partners to optimise cost and delivery time.
            </p>
            <ol className="space-y-4">
              {[
                "Define the project and generate a quote.",
                "Review plan and finalise finer details.",
                "Start deploying."
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-600 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5 flex flex-col space-y-1">
            <Link
              href="http://quotes.uniserved.com/quotes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 bg-orange-600 rounded text-white font-semibold hover:bg-orange-700 transition-colors border-b border-orange-500/30"
            >
              Get Quote
            </Link>
            <Link
              href="https://goo.gl/forms/dXgMicR4OVHftTdr1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 bg-orange-600 rounded text-white font-semibold hover:bg-orange-700 transition-colors border-b border-orange-500/30"
            >
              Check Availability
            </Link>
            <Link
              href="https://uniserved.simplybook.me/v2/#book"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
            >
              Schedule A Visit
            </Link>
          </div>
        </div>

        {/* TaaS (Talent As a Service) Marketplace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              TaaS (Talent As a Service) Marketplace
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              We deliver niche skills remotely—from networking to IoT and Machine Learning—and help with project planning and execution.
            </p>
            <ol className="space-y-4">
              {[
                "Define the requirements and the skills needed.",
                "Review skill partners and budgets.",
                "Execute and close."
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-600 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <Link
              href="https://goo.gl/forms/dXgMicR4OVHftTdr1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-5 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-colors border border-orange-500/20"
            >
              Search Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
