'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const links = [
  { href: 'https://linkedin.com/in/radhika-aggarwal', label: 'LinkedIn' },
  { href: 'https://github.com/aggarwalradhika29',     label: 'GitHub' },
  { href: 'https://hashnode.com',                     label: 'Hashnode' },
  { href: 'https://leetcode.com',                     label: 'LeetCode' },
]

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: isMobile ? '2rem 1.5rem' : '2rem 4rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '1.2rem' : '0',
        fontSize: '0.75rem',
        color: 'var(--text-soft)',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: 'var(--text)',
            marginBottom: '0.25rem',
          }}
        >
          Radhika Aggarwal
        </div>
        <div>© {new Date().getFullYear()} · Made with curiosity</div>
      </div>

      <div style={{ display: 'flex', gap: '1.4rem' }}>
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: 'var(--accent)' }}
            style={{
              color: 'var(--text-soft)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}