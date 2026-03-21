import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — Radhika Aggarwal',
  description: 'Essays on life in general - in all its quiet corners, data engineering, and AI.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '8rem', transition: 'background 0.4s' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 4rem 6rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label">Writing</div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Things I&apos;m{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>thinking about</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>
            I write about the quiet things in life — and occasionally about data and AI when I have something real to say.
          </p>
        </div>

        {/* Posts list */}
        {posts.length === 0 ? (
          <p style={{ color: 'var(--text-soft)', fontSize: '0.95rem' }}>
            Posts coming soon. Check back shortly.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="writing-list-item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '2rem',
                  alignItems: 'start',
                  padding: '2rem 0',
                  borderBottom: '1px solid var(--border-soft)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div>
                  <div style={{
                    fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--sage)', marginBottom: '0.3rem',
                  }}>
                    {post.frontmatter.tag}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', color: 'var(--text-soft)',
                    fontFamily: 'DM Mono, monospace',
                  }}>
                    {post.frontmatter.date}
                  </div>
                </div>

                <div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.3,
                    marginBottom: '0.5rem', color: 'var(--text)',
                  }}>
                    {post.frontmatter.title}
                  </div>
                  <div style={{
                    fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.7,
                  }}>
                    {post.frontmatter.excerpt}
                  </div>
                  <div style={{
                    fontSize: '0.68rem', color: 'var(--text-soft)',
                    fontFamily: 'DM Mono, monospace', marginTop: '0.6rem',
                  }}>
                    {post.frontmatter.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}