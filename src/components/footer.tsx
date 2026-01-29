"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Mail, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Footer() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  // Navigation items - easy to edit from one place
  const navigationItems = [
    { href: "/", label: "Home", anchor: "#home" },
    { href: "/", label: "Platform", anchor: "#platform" },
    { href: "/", label: "Why choose us", anchor: "#benefits" },
    { href: "/", label: "Our services", anchor: "#services" },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/logo_dark.png"
                  alt="UniServed logo"
                  width={180}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Your trusted partner for comprehensive business solutions. 
                We deliver excellence through innovation and dedication to help your business thrive.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-5">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.473c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209C18.002 21 22.947 13.504 22.947 6.515c0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => {
                // Use anchor format that works consistently on server and client
                // For anchor links, use the anchor directly - Next.js will handle navigation
                // We'll handle cross-page navigation in onClick
                const linkHref = item.anchor || item.href
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (item.anchor && isMounted && pathname === "/") {
                    // On home page, scroll smoothly to anchor
                    e.preventDefault()
                    const element = document.getElementById(item.anchor.substring(1)) // Remove # from anchor
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  } else if (item.anchor && pathname !== "/") {
                    // If on another page, navigate to home with anchor
                    e.preventDefault()
                    window.location.href = `/${item.anchor}`
                  }
                }
                return (
                  <li key={item.label}>
                    <Link 
                      href={linkHref} 
                      className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                      onClick={handleClick}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" aria-hidden="true" />
                <div className="text-gray-600">
                  <p>Office no. 802, RUPA SOLITAIRE, Bldg. No, A-1, MBP Rd, Sector 1, MIDC Industrial Area, Navi Mumbai, 400710, Maharashtra</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500 shrink-0" aria-hidden="true" />
                  <p className="text-gray-600">contact@uniserved.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-500 shrink-0" aria-hidden="true" />
                  <p className="text-gray-600">www.uniserved.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              {"© 2025 Uniserved Tech Solutions Pvt Ltd. All rights reserved."}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-8">
              <Link href="/privacy/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

