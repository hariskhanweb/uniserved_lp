"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

function TypingAnimation() {
  const phrases = ["Worldwide", "Across India", "Skilled teams", "Verified experts"]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (!isDeleting && displayedText.length < currentPhrase.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1))
        setTypingSpeed(100)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && displayedText === currentPhrase) {
      // Pause after typing complete
      const timeout = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(50)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1))
        setTypingSpeed(50)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayedText === "") {
      // Move to next phrase
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      setTypingSpeed(100)
    }
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typingSpeed])

  return (
    <span className="text-orange-600">
      {displayedText}
      <span className="text-orange-600 opacity-50 animate-pulse" style={{ animationDuration: '0.6s' }}>|</span>
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-semibold text-gray-900 leading-[1.2] text-[36px] md:text-[48px] lg:text-[60px]">
                Your extended team
              </h1>
              <div className="text-[36px] md:text-[48px] lg:text-[60px] leading-[1.2] min-h-[1.2em] font-semibold">
                <TypingAnimation />
              </div>
              <p className="text-black leading-relaxed text-[18px] md:text-[18px] lg:text-[20px] max-w-2xl">
                Get access to more than 150000+ team members instantly, ensuring you have the reach needed to deliver technology Infrastructure projects worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="http://quotes.uniserved.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-yellow-400 text-gray-900 font-medium rounded-full hover:bg-yellow-500 transition-colors group text-[16px] cursor-pointer"
              >
                Book A Ticket
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/oem-collage_02.png"
              alt="Transformation Services"
              width={584}
              height={550}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
