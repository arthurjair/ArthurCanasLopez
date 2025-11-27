'use client'
import React, { useEffect, useRef } from 'react'

export default function CountUp({ from = 0, to = 100, duration = 1, className = '' }) {
  const elRef = useRef(null)
  const startedRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const startAnimation = () => {
      if (startedRef.current) return
      startedRef.current = true
      const startTime = performance.now()

      const step = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const value = Math.floor(from + (to - from) * progress)
        el.textContent = value.toLocaleString()
        if (progress < 1) rafRef.current = requestAnimationFrame(step)
      }

      rafRef.current = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startAnimation()
            // If you only want it to run once, disconnect after start
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [from, to, duration])

  return <span ref={elRef} className={className}>{from.toLocaleString()}</span>
}
