'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  external?: boolean
  style?: React.CSSProperties
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  style,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.8rem 1.8rem',
    fontSize: '0.78rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '3px',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    transition: 'background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s',
    fontFamily: 'DM Sans, sans-serif',
    ...style,
  }

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--accent)',
      color: '#fffdf9',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-mid)',
      border: '1px solid var(--border)',
    },
  }

  const combined = { ...base, ...variants[variant] }

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={combined}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} style={combined}>{children}</Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      style={combined}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}