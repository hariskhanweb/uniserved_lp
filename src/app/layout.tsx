import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Uniserved | OEM Support Services",
  description:
    "Uniserved helps OEMs cut downtime with nationwide spares depots, faster response times, and SLA-driven field service—powered by an AI-enabled platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

