'use client'

import { useEffect, useRef, useState } from 'react'
import Chip from '@/components/ui/chip'



const experiences = [
  {
    date: 'Oct 2025 – Present',
    role: 'Integration Engineer, Data Engineering',
    company: 'Oddr · Remote',
    description:
      'Independently architected a cloud-native data integration middleware on Azure connecting law firm data sources to product APIs — full ownership from requirements scoping to production delivery. Designed API-led, event-driven ETL pipelines processing 9M+ API calls/tenant/month across multiple tenants, cutting integration cost 90% vs. Boomi and latency 66%. Built security architecture (Managed Identity, RBAC, private networking) and CI/CD via GitHub Actions.',
    chips: ['Azure Functions', 'Python', 'PySpark', 'RBAC', 'Private Networking', 'GitHub Actions', 'Integration Builder', 'LegalTech'],
  },
  {
    date: 'Sep 2023 – Oct 2025',
    role: 'Data Engineer',
    company: 'The Guardian Group · Gurugram',
    description:
      'Designed and owned cloud data warehouses on GCP BigQuery and Snowflake processing 100M+ records — primary analytics infrastructure for Product, Marketing, Finance, and IT. Built automated ETL/ELT pipelines (Shopify, Payments, GA4, Pub/Sub) reducing latency 60%. Led a middleware initiative eliminating 95% of manual order processing. Automated reconciliation and audit workflows, saving 30+ FTE hours/week. Delivered 30+ executive dashboards across BellaVita, GNC India, ThriveCo, Bevzilla, and BetterAlt.',
    chips: ['BigQuery', 'Snowflake', 'PySpark', 'Pub/Sub', 'SAP', 'Shopify', 'Looker Studio', 'D2C Product Tech'],
  },
  {
    date: 'Aug 2025 – Oct 2025',
    role: 'Freelance AI Engineer',
    company: 'Independent · Remote',
    description:
      'Designed NP-hard, reasoning, and optimization challenge tasks to train and benchmark LLMs. Built diverse datasets across programming, logic, and quantitative domains to improve model robustness and generalization.',
    chips: ['LLM Evaluation', 'Dataset Design', 'Python', 'Freelance'],
  },
  {
    date: 'Oct 2022 – Apr 2023',
    role: 'R&D Intern',
    company: 'Indian Space Research Organisation (ISRO) · New Delhi',
    description:
      'Built an automation pipeline for multi-temporal Sentinel-1A SAR satellite data. Applied ML algorithms advancing crop classification accuracy by 15–20%. Published peer-reviewed research on in-season crop acreage forecasting.',
    chips: ['Scikit-learn', 'SNAP API', 'Geospatial ML', 'Remote Sensing', 'Python', 'Big Data', 'SpaceTech'],
  },
  {
    date: 'Jun 2022 – Jul 2022',
    role: 'Machine Learning Intern',
    company: 'Universal Technical Systems · Gurugram',
    description:
      'Collaborated to a team of 4 to develop a predictive maintenance model for industrial machinery data. Built and automated the process for evaluating and selecting the best-performing ML model.',
    chips: ['Python', 'Scikit-learn', 'Predictive Modeling'],
  },
]

export default function Experience() {
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
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">Career</div>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
        fontWeight: 300, lineHeight: 1.18, marginBottom: '0.9rem',
      }}>
        Where I've <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built</em> things
      </h2>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: 540, marginBottom: '3.5rem' }}>
        A track record of shipping production-grade data systems across cloud platforms — from satellite data at ISRO to enterprise integrations at scale.
      </p>

      <div className="timeline" style={{ maxWidth: 760 }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="reveal"
            style={{ position: 'relative', paddingBottom: i === experiences.length - 1 ? 0 : '3rem' }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: '-2.2rem', top: 7,
              width: 9, height: 9, borderRadius: '50%',
              background: 'var(--bg-card)', border: '2px solid var(--accent)',
            }} />

            <div style={{
              fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-soft)', marginBottom: '0.3rem',
              fontFamily: 'DM Mono, monospace',
            }}>
              {exp.date}
            </div>

            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.15rem',
            }}>
              {exp.role}
            </div>

            <div style={{
              fontSize: '0.78rem', color: 'var(--sage)',
              fontWeight: 500, letterSpacing: '0.04em', marginBottom: '0.8rem',
            }}>
              {exp.company}
            </div>

            <div style={{ fontSize: '0.86rem', lineHeight: 1.78, color: 'var(--text-mid)', marginBottom: '0.8rem' }}>
              {exp.description}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {exp.chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}