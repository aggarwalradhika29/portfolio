import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Writing from '@/components/sections/writing'
import Contact from '@/components/sections/contact'
import { getAllPosts } from '@/lib/mdx'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Writing posts={posts} />
      <Contact />
    </>
  )
}