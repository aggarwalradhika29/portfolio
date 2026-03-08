'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/#about',      label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/projects',   label: 'Projects' },
  { href: '/writing',     label: 'Writing' },
  { href: '/#contact',    label: 'Say hello' },
]

export default function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved ?? 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.2rem 4rem',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
          transition: 'border-color 0.3s, background 0.4s',
        }}
        className="nav-outer"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.25rem', fontWeight: 500, letterSpacing: '0.02em',
            color: 'var(--text)', textDecoration: 'none',
          }}
        >
          Radhika Aggarwal
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop" style={{
          display: 'flex', gap: '2.2rem', listStyle: 'none', alignItems: 'center',
        }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: pathname === link.href ? 'var(--accent)' : 'var(--text-mid)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? 'var(--accent)' : 'var(--text-mid)')}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'var(--toggle-bg)', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1rem',
                transition: 'background 0.3s, transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(20deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="nav-mobile-right" style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'var(--toggle-bg)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '0.9rem',
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              width: 34, height: 34, borderRadius: 6,
              background: 'var(--toggle-bg)', border: 'none',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
              padding: '8px',
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 18, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '65px', left: 0, right: 0, bottom: 0,
              zIndex: 99,
              background: 'var(--bg-card)',
              display: 'flex', flexDirection: 'column',
              padding: '2rem 2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem', fontWeight: 300,
                    color: 'var(--text)', textDecoration: 'none',
                    padding: '0.8rem 0',
                    borderBottom: '1px solid var(--border-soft)',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-outer { padding: 1rem 1.5rem !important; }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-right { display: flex !important; }
        }
      `}</style>
    </>
  )
}