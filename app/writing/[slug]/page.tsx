import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.frontmatter.title} — Radhika Aggarwal`,
    description: post.frontmatter.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '8rem', transition: 'background 0.4s' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 4rem 6rem' }}>

        {/* Back link */}
        <Link
          href="/writing"
          style={{
            fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-soft)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            marginBottom: '3rem',
          }}
        >
          ← All writing
        </Link>

        {/* Post header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--sage)', marginBottom: '1rem',
          }}>
            {post.frontmatter.tag}
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300, lineHeight: 1.12,
            marginBottom: '1rem', color: 'var(--text)',
          }}>
            {post.frontmatter.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {post.frontmatter.excerpt}
          </p>

          <div style={{
            display: 'flex', gap: '1.5rem',
            fontSize: '0.72rem', color: 'var(--text-soft)',
            fontFamily: 'DM Mono, monospace',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border)',
          }}>
            <span>{post.frontmatter.date}</span>
            <span>{post.frontmatter.readTime}</span>
          </div>
        </div>

        {/* MDX content */}
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer nav */}
        <div style={{
          marginTop: '4rem', paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
        }}>
          <Link
            href="/writing"
            style={{
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--accent)', textDecoration: 'none',
            }}
          >
            ← Back to all writing
          </Link>
        </div>
      </div>
    </div>
  )
}