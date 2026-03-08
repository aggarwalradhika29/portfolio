'use client'

import { useEffect, useRef, useState } from 'react'

const skills = [
  { label: 'Cloud & Data Platforms', chips: ['Azure Functions', 'GCP BigQuery', 'Snowflake', 'AWS Redshift', 'Databricks', 'Apache Kafka'] },
  { label: 'Languages & Frameworks', chips: ['Python', 'SQL', 'PySpark', 'Go', 'Java', 'C++'] },
  { label: 'AI & ML',                chips: ['LangChain', 'TensorFlow', 'Scikit-learn', 'LLM Training', 'Geospatial ML'] },
  { label: 'Integration & ETL',      chips: ['REST API', 'GraphQL', 'SAP Integration', 'Pub/Sub', 'Webhooks'] },
  { label: 'BI & Reporting',         chips: ['Looker Studio', 'Power BI', 'Advanced Excel'] },
]

const interests = [
  { icon: '📚', text: 'Always mid-book — usually somewhere between fiction and ideas' },
  { icon: '🍳', text: 'Cooking with too much enthusiasm and too many spices' },
  { icon: '🎵', text: 'Music as a mood regulator and thinking aid' },
  { icon: '🏃', text: 'Fitness as a non-negotiable part of the day' },
  { icon: '🔭', text: 'Endlessly curious about how systems — technical and human — work' },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg-card)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">A bit about me</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
        gap: isMobile ? '2.5rem' : '5rem',
        alignItems: 'start',
      }}>

        {/* Left — text */}
        <div className="reveal">
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
            fontWeight: 300, lineHeight: 1.18, marginBottom: '0.9rem',
          }}>
            Engineer by training,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>builder</em> by nature
          </h2>

          <p style={{ fontSize: '0.95rem', lineHeight: 1.88, color: 'var(--text-mid)', marginBottom: '1.1rem' }}>
            I'm Radhika — a data engineer and AI builder from Gurugram. I got into this field because I'm fascinated by the gap between raw information and actual understanding, and I like being the person who closes that gap.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.88, color: 'var(--text-mid)', marginBottom: '1.1rem' }}>
            My work spans{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>data warehouses, pipeline architecture, cloud integrations, and AI systems</strong>
            {' '}— from ISRO satellite pipelines to production systems handling 100M+ records.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.88, color: 'var(--text-mid)', marginBottom: '2.5rem' }}>
            But I'm also someone who believes that{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>good engineers read widely, think deeply, and stay genuinely curious</em>
            {' '}— about the world, not just the tech stack.
          </p>

          {/* Beyond work */}
          <div>
            <div style={{
              fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--text-soft)', marginBottom: '1rem',
            }}>
              Outside of work
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {interests.map((item) => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.8rem',
                  fontSize: '0.85rem', color: 'var(--text-mid)',
                }}>
                  <span style={{ fontSize: '1rem', width: 28, flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — skills */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {skills.map((group) => (
            <div key={group.label}>
              <div style={{
                fontSize: '0.67rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-soft)', marginBottom: '0.5rem',
              }}>
                {group.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.chips.map((chip) => (
                  <span key={chip} style={{
                    fontSize: '0.72rem', padding: '0.35rem 0.8rem',
                    border: '1px solid var(--border)', borderRadius: 4,
                    color: 'var(--text-mid)', background: 'var(--bg)',
                    fontFamily: 'DM Mono, monospace',
                    transition: 'background 0.4s, border-color 0.4s',
                  }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}