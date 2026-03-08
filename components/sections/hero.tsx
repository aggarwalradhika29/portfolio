'use client'

import { motion, type Variants } from 'framer-motion'
import Button from '@/components/ui/button'
import Tag from '@/components/ui/tag'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        {/* Background gradients */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `
            radial-gradient(ellipse 55% 55% at 75% 38%, var(--hero-grad1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 18% 72%, var(--hero-grad2) 0%, transparent 60%)
          `,
          transition: 'background 0.4s',
        }} />

        {/* Left */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--sage)', marginBottom: '1.8rem',
            }}
          >
            <span style={{ width: 26, height: 1, background: 'var(--sage)', display: 'inline-block' }} />
            Data engineer · AI builder · Curious human
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
              fontWeight: 300, lineHeight: 1.08, marginBottom: '1.5rem',
            }}
          >
            I build systems<br />
            that make <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>data</em><br />
            actually useful.
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontSize: '1rem', lineHeight: 1.8,
              color: 'var(--text-mid)', maxWidth: 460, marginBottom: '2.5rem',
            }}
          >
            By day, I design data platforms and AI pipelines for products people use.
            By night, I read too much, cook with too many spices, and think about how everything connects.{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Currently at Oddr</strong>,
            working on enterprise data infrastructure.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Button href="/#projects">See my work</Button>
            <Button href="/writing" variant="ghost">Read my writing</Button>
          </motion.div>
        </div>

        {/* Right — card */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="hero-card-col"
          style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {/* Profile card */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '2rem',
            boxShadow: '0 16px 50px var(--shadow), 0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.4s, border-color 0.4s',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, var(--blush-mid), var(--accent), var(--sage))',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.4rem' }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blush), var(--sage-bg))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--accent)',
                border: '1.5px solid var(--blush-mid)', flexShrink: 0,
              }}>R</div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500 }}>
                  Radhika Aggarwal
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-soft)', marginTop: '0.15rem' }}>
                  📍 Gurugram, India
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.4rem' }}>
              <Tag variant="accent">Azure · GCP · Snowflake</Tag>
              <Tag variant="sage">Python · PySpark · SQL</Tag>
              <Tag>LLMs · ETL · API Design</Tag>
              <Tag variant="sage">ISRO Research · Published</Tag>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem', paddingTop: '1.2rem',
              borderTop: '1px solid var(--border-soft)',
            }}>
              {[
                { num: '2+', label: 'Yrs prod.' },
                { num: '100M+', label: 'Records' },
                { num: '30+', label: 'Dashboards' },
              ].map((s) => (
                <div key={s.label}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem', fontWeight: 500,
                    color: 'var(--accent)', display: 'block',
                  }}>{s.num}</span>
                  <span style={{
                    fontSize: '0.62rem', color: 'var(--text-soft)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently card */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '1.4rem 1.8rem',
            display: 'flex', alignItems: 'center', gap: '1.2rem',
            transition: 'background 0.4s, border-color 0.4s',
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--sage)', flexShrink: 0,
              animation: 'pulse 2s infinite',
            }} />
            <div style={{ fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Currently writing about:</strong>{' '}
              slow life, introversion, the sense of becoming, and occasionally — data systems.
            </div>
          </div>
        </motion.div>
      </section>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 8rem 4rem 4rem;
          position: relative;
          overflow: hidden;
          gap: 4rem;
        }
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 7rem 1.5rem 4rem;
            gap: 2.5rem;
          }
          .hero-card-col {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}