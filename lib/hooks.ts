'use client'

import { useEffect, useRef, useState } from 'react'

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [breakpoint])

  return isMobile
}

export function useRevealOnScroll<T extends HTMLElement>(threshold = 0.05, staggerMs = 120) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * staggerMs)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, staggerMs])

  return ref
}
