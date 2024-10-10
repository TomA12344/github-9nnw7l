'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useParams } from 'next/navigation'

// Mock data for articles
const articles = [
  {
    slug: 'the-art-of-creating-sticky-headers',
    title: 'The Art of Creating Sticky Headers',
    author: 'John Doe',
    date: 'August 15, 2023',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction</h2>
        <p class="mb-4">
          Sticky headers have become a popular design pattern in modern web development. They provide a consistent
          navigation experience and keep important elements accessible as users scroll through content. In this
          article, we'll explore the art of creating effective sticky headers and discuss best practices for
          implementation.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">The Basics of Sticky Headers</h2>
        <p class="mb-4">
          A sticky header, also known as a fixed header, is a navigation bar that remains visible at the top of the
          screen as the user scrolls down a web page. This design pattern ensures that navigation options and other
          crucial elements are always accessible, improving user experience and site usability.
        </p>
        <p class="mb-4">
          Implementing a sticky header involves a combination of HTML structure, CSS positioning, and often
          JavaScript for advanced features like resizing or changing opacity on scroll.
        </p>
      </section>
    `
  },
  {
    slug: 'responsive-design-best-practices',
    title: 'Responsive Design Best Practices',
    author: 'Jane Smith',
    date: 'August 20, 2023',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Responsive Design</h2>
        <p class="mb-4">
          Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. In this article, we'll explore best practices for creating responsive designs that provide an optimal viewing experience across a wide range of devices.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Key Principles of Responsive Design</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Fluid grids</li>
          <li>Flexible images</li>
          <li>Media queries</li>
          <li>Mobile-first approach</li>
        </ul>
        <p class="mb-4">
          By following these principles, you can create websites that adapt seamlessly to different screen sizes and devices, providing a consistent and user-friendly experience for all visitors.
        </p>
      </section>
    `
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance',
    author: 'Alex Johnson',
    date: 'August 25, 2023',
    content: `
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Web Performance</h2>
        <p class="mb-4">
          Web performance optimization is crucial for providing a smooth and enjoyable user experience. In this article, we'll explore various strategies to improve your website's loading speed and overall performance.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Key Optimization Techniques</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Minimize HTTP requests</li>
          <li>Optimize images</li>
          <li>Use content delivery networks (CDNs)</li>
          <li>Implement browser caching</li>
          <li>Minify CSS, JavaScript, and HTML</li>
        </ul>
        <p class="mb-4">
          By implementing these techniques, you can significantly improve your website's loading times and create a better experience for your users across various devices and network conditions.
        </p>
      </section>
    `
  }
]

export default function ArticlePage() {
  const [scrolled, setScrolled] = useState(false)
  const params = useParams()
  const slug = params.slug as string
  const article = articles.find(a => a.slug === slug)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md py-2'
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`text-2xl font-bold text-gray-800 transition-all duration-300 ${
                scrolled ? 'text-xl' : ''
              }`}
            >
              Blog
            </Link>
            <div className="relative flex-grow max-w-md mx-4">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pr-10"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 pt-32 flex-grow">
        <article className="max-w-3xl mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Article cover image"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center mb-8">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Author avatar"
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-gray-600">Published on {article.date}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </main>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-gray-800">Blog</Link>
            </div>
            <nav className="w-full md:w-auto mb-4 md:mb-0">
              <ul className="flex justify-center md:justify-end space-x-4">
                <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-800">Home</Link></li>
                <li><Link href="/articles" className="text-sm text-gray-600 hover:text-gray-800">Articles</Link></li>
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-800">About</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-800">Contact</Link></li>
              </ul>
            </nav>
            <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}