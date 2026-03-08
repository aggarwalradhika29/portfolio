'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Chip from '@/components/ui/chip'

import { allProjects } from '@/lib/projects'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg-card)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">Work</div>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
        fontWeight: 300, lineHeight: 1.18, marginBottom: '0.9rem',
      }}>
        Things I've <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shipped</em>
      </h2>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: 540, marginBottom: '3rem' }}>
        A mix of production systems, research, and personal builds.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '1.2rem',
      }}>
        {allProjects.slice(0, 4).map((project) => (
          <motion.div
            key={project.slug}
            className="reveal"
            whileHover={{ y: isMobile ? 0 : -3 }}
            transition={{ duration: 0.2 }}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '1.6rem',
              background: 'var(--bg)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.2s, background 0.4s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--blush-mid)'
              e.currentTarget.style.boxShadow = '0 12px 36px var(--shadow)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.9rem' }}>{project.icon}</span>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.45rem' }}>
              {project.title}
            </div>
            <div style={{ fontSize: '0.8rem', lineHeight: 1.72, color: 'var(--text-mid)', marginBottom: '1rem' }}>
              {project.description}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
              {project.chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
            </div>
            <a href={project.githubUrl} style={{
              fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--accent)', textDecoration: 'none',
            }}>
              GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <Link
          href="/projects"
          style={{
            fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--accent)', textDecoration: 'none',
          }}
        >
          View all projects →
        </Link>
      </div>
    </section>
  )
}