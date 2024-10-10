'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Search, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const featuredArticles = [
  {
    slug: 'the-art-of-creating-sticky-headers',
    title: 'The Art of Creating Sticky Headers',
    description: 'Learn how to implement effective sticky headers in modern web development.',
  },
  {
    slug: 'responsive-design-best-practices',
    title: 'Responsive Design Best Practices',
    description: 'Explore key principles and techniques for creating responsive web designs.',
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance',
    description: 'Discover strategies to improve your website\'s loading speed and overall performance.',
  },
]

export function BlogLandingPageComponent() {
  const [scrolled, setScrolled] = useState(false)

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
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Welcome to Our Blog</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Discover insightful articles, expert opinions, and the latest trends in technology, design, and more.
          </p>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, i) => (
              <Card key={i}>
                <CardHeader>
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Featured article ${i + 1}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{article.title}</CardTitle>
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/articles/${article.slug}`}>
                    <Button variant="outline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-center text-gray-600 mb-6">
              Stay up to date with our latest articles and insights.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
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
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}