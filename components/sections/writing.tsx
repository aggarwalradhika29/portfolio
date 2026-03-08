'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Post } from '@/lib/mdx'

type Props = { posts: Post[] }

export default function Writing({ posts }: Props) {
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
      id="writing"
      ref={sectionRef}
      style={{
        padding: isMobile ? '4.5rem 1.5rem' : '6.5rem 4rem',
        background: 'var(--bg)',
        transition: 'background 0.4s',
      }}
    >
      <div className="section-label">Writing</div>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
        fontWeight: 300, lineHeight: 1.18, marginBottom: '0.9rem',
      }}>
        Things I'm <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>thinking about</em>
      </h2>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: 540, marginBottom: '3rem' }}>
        I write about the quiet things — slow living, becoming, skincare, introversion — and occasionally about data and AI.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1.2rem',
      }}>
        {posts.slice(0, 4).map((post) => (
          <motion.div key={post.slug} className="reveal" whileHover={{ y: isMobile ? 0 : -2 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/writing/${post.slug}`}
              style={{
                display: 'block',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.8rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.4s',
              }}
            >
              <span style={{
                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--sage)', display: 'block', marginBottom: '0.7rem',
              }}>
                {post.frontmatter.tag}
              </span>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.18rem', fontWeight: 500, lineHeight: 1.32,
                marginBottom: '0.6rem', color: 'var(--text)',
              }}>
                {post.frontmatter.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.72, marginBottom: '1rem' }}>
                {post.frontmatter.excerpt}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-soft)', fontFamily: 'DM Mono, monospace' }}>
                {post.frontmatter.date} · {post.frontmatter.readTime}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {posts.length > 4 && (
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link href="/writing" style={{
            fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--accent)', textDecoration: 'none',
          }}>
            Read all posts →
          </Link>
        </div>
      )}
    </section>
  )
}