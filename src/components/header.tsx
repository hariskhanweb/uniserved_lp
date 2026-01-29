"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  // Navigation items - easy to edit from one place
  const navigationItems = [
    { href: "/", label: "HOME", anchor: "#home" },
    { href: "/", label: "PARTNERS", anchor: "#partners" },
    { href: "/", label: "PLATFORM", anchor: "#platform" },
    { href: "/", label: "COMPLIANCES", anchor: "#compliances" },
  ]

  // CTA Button - easy to edit from one place
  const ctaButton = {
    href: "http://quotes.uniserved.com/",
    label: "Book A Ticket",
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMounted && pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string | null) => {
    if (anchor && isMounted) {
      if (pathname === "/") {
        // On home page, scroll to anchor
        e.preventDefault()
        const element = document.getElementById(anchor.substring(1)) // Remove # from anchor
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // On another page, navigate to home with anchor
        e.preventDefault()
        window.location.href = `/${anchor}`
      }
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2" onClick={handleHomeClick}>
              <Image
                src="/logo_dark.png"
                alt="uniserved"
                width={165}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              // Use anchor format that works consistently on server and client
              // For anchor links, use the anchor directly - Next.js will handle navigation
              // We'll handle cross-page navigation in onClick
              const linkHref = item.anchor || item.href
              return (
                <Link
                  key={item.label}
                  href={linkHref}
                  className="text-gray-700 hover:text-orange-600 px-1 py-2 text-[16px] font-medium transition-colors"
                  onClick={(e) => {
                    if (item.anchor) {
                      handleAnchorClick(e, item.anchor)
                    } else if (item.href === "/") {
                      handleHomeClick(e)
                    }
                  }}
                >
                  <span suppressHydrationWarning>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href={ctaButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-yellow-400 text-gray-900 font-medium rounded-full hover:bg-yellow-500 transition-colors group text-[16px] cursor-pointer"
            >
              {ctaButton.label}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => {
                // Use anchor format that works consistently on server and client
                // For anchor links, use the anchor directly - Next.js will handle navigation
                // We'll handle cross-page navigation in onClick
                const linkHref = item.anchor || item.href
                return (
                  <Link
                    key={item.label}
                    href={linkHref}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-[16px] font-medium transition-colors"
                    onClick={(e) => {
                      toggleMenu()
                      if (item.anchor) {
                        handleAnchorClick(e, item.anchor)
                      } else if (item.href === "/") {
                        handleHomeClick(e)
                      }
                    }}
                  >
                    <span suppressHydrationWarning>{item.label}</span>
                  </Link>
                )
              })}
              <Link
                href={ctaButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 block px-3 py-2 text-[16px] font-semibold rounded-full hover:bg-yellow-500 transition-colors mt-4 text-center cursor-pointer w-full"
                onClick={toggleMenu}
              >
                {ctaButton.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

