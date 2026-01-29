"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_dark.png"
                alt="uniserved"
                width={165}
                height={40}
                priority
              />
            </Link>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-yellow-400 text-gray-900 font-medium rounded-full hover:bg-yellow-500 transition-colors group text-[16px] cursor-pointer"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors group text-[16px] cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Or visit one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#platform" className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                Platform
              </Link>
              <Link href="/#benefits" className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                Why Choose Us
              </Link>
              <Link href="/#services" className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

