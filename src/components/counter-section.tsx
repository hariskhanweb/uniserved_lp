"use client"

import { useEffect, useRef, useState } from "react"

interface CounterStat {
  label: string
  value: number
  suffix: string
}

const stats: CounterStat[] = [
  { label: "COUNTRIES", value: 45, suffix: "+" },
  { label: "OEM SKILLS", value: 700, suffix: "+" },
  { label: "SERVICES PARTNERS", value: 10000, suffix: "+" },
  { label: "FREELANCE PARTNERS", value: 35000, suffix: "+" }
]

function useCounterUp(end: number, duration: number = 2000, startOnMount: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startOnMount)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasStarted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return { count, elementRef }
}

function CounterItem({ stat }: { stat: CounterStat }) {
  const { count, elementRef } = useCounterUp(stat.value)

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
        {stat.label}
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
        {count.toLocaleString()}{stat.suffix}
      </div>
    </div>
  )
}

export default function CounterSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Tech Enabled Army
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <CounterItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
