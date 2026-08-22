'use client'

import { useEffect, useRef, useState } from 'react'

const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'The NorthCap University, Gurugram',
  date: 'Oct 2020 – Jun 2024',
  detail: 'GPA: 8.40',
}

const certifications = [
  { title: 'Research Article', issuer: 'ISRO', date: '2025' },
  { title: 'The Joy of Computing using Python', issuer: 'IIT Madras', date: '2024' },
  { title: 'AWS Academy Machine Learning Foundations', issuer: 'Amazon Web Services', date: '2022' },
  { title: 'Python Basics for Data Science', issuer: 'IBM', date: '2021' },
]

export default function Education() {
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
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">Background</div>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
        fontWeight: 300, lineHeight: 1.18, marginBottom: '2.5rem',
      }}>
        Education &amp; <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>credentials</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : '4rem',
      }}>
        {/* Education */}
        <div className="reveal">
          <div style={{
            fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-soft)', marginBottom: '1rem',
          }}>
            Education
          </div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.3rem',
          }}>
            {education.degree}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.4rem' }}>
            {education.school}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)', fontFamily: 'DM Mono, monospace' }}>
            {education.date} · {education.detail}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal">
          <div style={{
            fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-soft)', marginBottom: '1rem',
          }}>
            Achievements &amp; Certifications
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {certifications.map((cert) => (
              <div key={cert.title} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{cert.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-mid)' }}>{cert.issuer}</div>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-soft)', fontFamily: 'DM Mono, monospace', whiteSpace: 'nowrap' }}>
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
