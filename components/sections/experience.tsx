'use client'

import Chip from '@/components/ui/chip'
import { useIsMobile, useRevealOnScroll } from '@/lib/hooks'



const experiences = [
  {
    date: 'Oct 2025 – Present',
    role: 'Data Engineer & AI R&D Lead',
    company: 'Oddr · Remote',
    description:
      'Founded and lead Oddr\'s Implementation AI R&D initiative (CPO-backed): building a multi-agent orchestration pipeline with memory and feedback loops and a golden template engine for Azure/Boomi/IB integrations — back-test framework validates agent-generated code at ≥85% accuracy. Independently architected a cloud-native data integration middleware on Azure (selected over Boomi via structured POC); designed API-led, event-driven ETL pipelines using Python, PySpark and SQL — 9M+ API calls/tenant/month across 13 tenants, ~90% cost reduction vs. Boomi, ~66% latency reduction. Reduced new tenant onboarding from 4+ months to <30 days. Won company hackathon with FixLab, an AI error-remediation agent built on Claude.',
    chips: ['Azure Functions', 'Python', 'PySpark', 'SQL', 'Multi-agent AI', 'LLM Orchestration', 'GitHub Actions', 'LegalTech'],
  },
  {
    date: 'Aug 2025 – Oct 2025',
    role: 'Freelance AI Engineer',
    company: 'Independent · Remote · Part-time, alongside Guardian Group',
    description:
      'Designed NP-hard, reasoning, and optimization challenge tasks to train and benchmark LLMs. Built diverse datasets across programming, logic, and quantitative domains to improve model robustness and generalization. Wrapped up upon joining Oddr full-time.',
    chips: ['LLM Evaluation', 'Dataset Design', 'Python', 'Freelance'],
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
  const isMobile = useIsMobile()
  const sectionRef = useRevealOnScroll<HTMLElement>(0.05)

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
        Where I&apos;ve <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built</em> things
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