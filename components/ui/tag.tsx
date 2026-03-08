type TagProps = {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'sage'
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: {
      background: 'var(--bg-alt)',
      color: 'var(--text-mid)',
      border: '1px solid var(--border-soft)',
    },
    accent: {
      background: 'rgba(196,112,74,0.12)',
      color: 'var(--accent)',
      border: '1px solid rgba(196,112,74,0.2)',
    },
    sage: {
      background: 'var(--sage-bg)',
      color: 'var(--sage)',
      border: '1px solid rgba(143,168,136,0.2)',
    },
  }

  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.65rem',
        padding: '0.28rem 0.65rem',
        borderRadius: '20px',
        letterSpacing: '0.04em',
        fontFamily: 'DM Sans, sans-serif',
        transition: 'background 0.4s',
        ...variants[variant],
      }}
    >
      {children}
    </span>
  )
}