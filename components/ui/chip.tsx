type ChipProps = {
  children: React.ReactNode
}

export default function Chip({ children }: ChipProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.63rem',
        padding: '0.22rem 0.6rem',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        color: 'var(--text-soft)',
        fontFamily: 'DM Mono, monospace',
        transition: 'border-color 0.4s',
      }}
    >
      {children}
    </span>
  )
}