import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const projectsDirectory = path.join(process.cwd(), 'content/projects')

// ── TYPES ──

export type PostFrontmatter = {
  title: string
  excerpt: string
  date: string
  tag: string
  readTime: string
  published: boolean
}

export type ProjectFrontmatter = {
  title: string
  description: string
  date: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export type Project = {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

// ── POSTS ──

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((f) => f.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontmatter: {
          ...data,
          date: String(data.date),
        } as PostFrontmatter,
        content,
      }
    })
    .filter((post) => post.frontmatter.published)
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    )

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: {
        ...data,
        date: String(data.date),
      } as PostFrontmatter,
      content,
    }
  } catch {
    return null
  }
}

// ── PROJECTS ──

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return []

  const fileNames = fs.readdirSync(projectsDirectory)

  const projects = fileNames
    .filter((f) => f.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      }
    })
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    )

  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    }
  } catch {
    return null
  }
}