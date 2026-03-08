'use client'

import { useState, useEffect, useRef } from 'react'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/radhikaa29' },
  { label: 'GitHub',   href: 'https://github.com/aggarwalradhika29' },
  { label: 'Hashnode', href: 'https://hashnode.com/@aggarwalradhika' },
  { label: 'LeetCode', href: 'https://leetcode.com/seekhradhika' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', subject: 'Collaboration / project', message: '',
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setFormState('success')
        setForm({ name: '', email: '', subject: 'Collaboration / project', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    padding: '0.78rem 0.9rem',
    border: '1px solid var(--border)',
    borderRadius: 5,
    background: 'var(--bg)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.85rem',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.4s',
    width: '100%',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '0.68rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-soft)',
    marginBottom: '0.35rem',
    display: 'block',
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg-card)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">Say hello</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '3rem' : '5rem',
        alignItems: 'start',
      }}>

        {/* Left */}
        <div className="reveal">
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
            fontWeight: 300, lineHeight: 1.18, marginBottom: '0.9rem',
          }}>
            Let's talk about{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>interesting</em> problems
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Whether you want to geek out about data architecture, collaborate on something, or just have a good conversation — I'm always up for it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
              <span>✉️</span>
              <a href="mailto:aggarwalradhika2905@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                aggarwalradhika2905@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
              <span>📍</span> Gurugram, India
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '0.55rem 1.1rem',
                  border: '1px solid var(--border)', borderRadius: 4,
                  fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--text-mid)', textDecoration: 'none',
                  background: 'var(--bg)', transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-mid)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form className="reveal" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Name + Email */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Name</label>
              <input style={inputStyle} type="text" placeholder="Your name"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" placeholder="your@email.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
          </div>

          {/* Subject with custom arrow */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>What&apos;s on your mind?</label>
            <div style={{ position: 'relative' }}>
              <select
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  paddingRight: '2.5rem',
                  cursor: 'pointer',
                }}
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              >
                <option>Collaboration / project</option>
                <option>Data / AI work inquiry</option>
                <option>Just want to connect</option>
                <option>Something else</option>
              </select>
              <span style={{
                position: 'absolute',
                right: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: 'var(--text-soft)',
                fontSize: '0.7rem',
              }}>
                ▾
              </span>
            </div>
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
              placeholder="Tell me what you're thinking..."
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required
              onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === 'loading'}
            style={{
              padding: '0.82rem 1.8rem',
              background: formState === 'loading' ? 'var(--text-soft)' : 'var(--accent)',
              color: '#fffdf9', border: 'none', borderRadius: 4,
              fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s', alignSelf: 'flex-start',
            }}
          >
            {formState === 'loading' ? 'Sending...' : 'Send it →'}
          </button>

          {formState === 'success' && (
            <p style={{ fontSize: '0.82rem', color: 'var(--sage)' }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {formState === 'error' && (
            <p style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>
              Something went wrong. Try emailing me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}