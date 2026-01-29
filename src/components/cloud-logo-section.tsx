"use client"

import Image from "next/image"

const cloudLogos = [
  "agc.png",
  "cisco.png",
  "dimension_data.png",
  "enkay.png",
  "hp.png",
  "inspira.png",
  "larsentoubro.png",
  "mobiquest.png",
  "nokia_logo.png",
  "orange_logo.png",
  "presto_logo.png",
  "securens_logo.png",
  "sify_logo.png",
  "syntel_logo.png",
  "tata_business.png",
  "tata_teleservices.png",
  "tata-communications.png",
  "tech-mahindra.png",
  "wipro.png",
  "wns.png"
]

export default function CloudLogoSection() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...cloudLogos, ...cloudLogos]

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="w-full">
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 mx-3 flex items-center justify-center"
                style={{ width: "180px", height: "70px" }}
              >
                <Image
                  src={`/clouds/${logo}`}
                  alt={logo.replace(/_/g, " ").replace(/.png/g, "").replace(/-/g, " ")}
                  width={150}
                  height={60}
                  className="object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
