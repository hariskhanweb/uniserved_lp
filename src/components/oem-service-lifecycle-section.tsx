import Image from "next/image"

export default function OemServiceLifecycleSection() {
  return (
    <section id="platform" className="py-16 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Text Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Uniserved Service Assurance Framework for OEMs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="text-green-600 font-semibold">End-to-end</span> support
            across the lifecycle of the Product. Delivered by an{" "}
            <span className="text-green-600 font-semibold">AI driven platform</span>{" "}
            & engaged{" "}
            <span className="text-green-600 font-semibold">ecosystem</span>.
          </p>
        </div>

        {/* Lifecycle Diagram */}
        <div className="w-full flex justify-center">
          {/* Desktop Image */}
          <Image
            src="/framework-oems.svg"
            alt="Uniserved Service Assurance Framework for OEMs"
            width={1200}
            height={800}
            className="w-full h-auto hidden md:block"
            unoptimized
          />
          {/* Mobile Image */}
          <Image
            src="/framework-oems-mobile.svg"
            alt="Uniserved Service Assurance Framework for OEMs"
            width={767}
            height={800}
            className="w-full h-auto block md:hidden"
            unoptimized
          />
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <div>
            <h3>Deployment Support</h3>
            <p>
              Uniserved provides comprehensive deployment support services for OEMs including
              demonstration support, installation support with site survey, BOQ preparation,
              one-time installation, and DOA (Dead on Arrival) management. Our deployment services
              cover product installation, commissioning, site survey, and technical deployment
              support for OEM equipment manufacturers across India.
            </p>
          </div>
          <div>
            <h3>Customer Support (Helpdesk)</h3>
            <p>
              Our 24/7 customer support services include catch and dispatch operations,
              round-the-clock helpdesk support, remote technical support, and Center of
              Excellence (CoE) services for highest level technical skills. We provide
              technical support, customer service, helpdesk solutions, and remote assistance
              for OEM products with 24/7 availability and rapid response times.
            </p>
          </div>
          <div>
            <h3>Lifecycle Management (In-Life Support)</h3>
            <p>
              Uniserved offers on-demand break-fix support, proactive and predictive maintenance
              services, and multi-year maintenance contracts (AMC) to ensure optimal product
              performance throughout its lifecycle. Our in-life support includes preventive
              maintenance, repair services, AMC contracts, and lifecycle management solutions
              for continuous product performance and reliability.
            </p>
          </div>
          <div>
            <h3>Product Continuity</h3>
            <p>
              Our product continuity services include warranty management, RMA (Return Merchandise
              Authorization) handling, contract inventory management, and logistics coordination
              to ensure seamless product availability and support. We manage warranty claims,
              RMA processing, inventory management, spare parts availability, and supply chain
              logistics to maintain uninterrupted product service and support.
            </p>
          </div>
          <div>
            <h3>End-of-Life Support</h3>
            <p>
              Uniserved provides end-of-life support services including buy-back and exchange
              operations, de-installation services, reverse logistics management, and
              e-waste disposal solutions for sustainable product lifecycle management. Our
              end-of-life services cover product decommissioning, equipment buyback, reverse
              logistics, e-waste management, and sustainable disposal solutions for complete
              product lifecycle closure.
            </p>
          </div>
          <p>
            The Uniserved Service Assurance Framework for OEMs delivers end-to-end support
            across the entire product lifecycle through an AI-driven platform and an engaged
            service ecosystem, ensuring comprehensive coverage from deployment through
            end-of-life management.
          </p>
        </div>
      </div>
    </section>
  )
}

