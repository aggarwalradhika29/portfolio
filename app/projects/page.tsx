'use client'

import Link from 'next/link'
import { allProjects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      paddingTop: '8rem',
      transition: 'background 0.4s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 4rem 6rem' }}
        className="projects-page-container"
      >
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Projects</div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Things I've{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shipped</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: 540 }}>
            A mix of production systems, research, and personal builds. Some solved real problems, some were just fun to figure out.
          </p>
        </div>

        {/* Grid */}
        <div
          className="projects-page-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.2rem',
          }}
        >
          {allProjects.map((project) => (
            <div
              key={project.slug}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.8rem',
                background: 'var(--bg-card)',
                transition: 'border-color 0.2s, box-shadow 0.2s, background 0.4s',
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
              <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '1rem' }}>
                {project.icon}
              </span>

              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem',
              }}>
                {project.title}
              </div>

              <div style={{
                fontSize: '0.82rem', lineHeight: 1.75,
                color: 'var(--text-mid)', marginBottom: '1.2rem',
              }}>
                {project.description}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.2rem' }}>
                {project.chips.map((chip) => (
                  <span key={chip} style={{
                    fontSize: '0.63rem', padding: '0.22rem 0.6rem',
                    border: '1px solid var(--border)', borderRadius: 20,
                    color: 'var(--text-soft)', fontFamily: 'DM Mono, monospace',
                  }}>
                    {chip}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--accent)', textDecoration: 'none',
                }}
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div style={{ marginTop: '4rem' }}>
          <Link href="/#projects" style={{
            fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-soft)', textDecoration: 'none',
          }}>
            ← Back to home
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-page-container {
            padding: 0 1.5rem 4rem !important;
          }
          .projects-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}