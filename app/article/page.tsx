'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ArticlePage() {
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
          <h1 className="text-4xl font-bold mb-4">The Art of Creating Sticky Headers</h1>
          <div className="flex items-center mb-8">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Author avatar"
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">Published on August 15, 2023</p>
            </div>
          </div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Sticky headers have become a popular design pattern in modern web development. They provide a consistent
              navigation experience and keep important elements accessible as users scroll through content. In this
              article, we'll explore the art of creating effective sticky headers and discuss best practices for
              implementation.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Basics of Sticky Headers</h2>
            <p className="mb-4">
              A sticky header, also known as a fixed header, is a navigation bar that remains visible at the top of the
              screen as the user scrolls down a web page. This design pattern ensures that navigation options and other
              crucial elements are always accessible, improving user experience and site usability.
            </p>
            <p className="mb-4">
              Implementing a sticky header involves a combination of HTML structure, CSS positioning, and often
              JavaScript for advanced features like resizing or changing opacity on scroll.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Best Practices for Sticky Headers</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Keep it minimal: Include only essential navigation items to avoid cluttering the header.</li>
              <li>Consider mobile: Ensure your sticky header is responsive and doesn't take up too much screen space on smaller devices.</li>
              <li>Use smooth transitions: Implement subtle animations when the header changes state (e.g., resizing or changing opacity).</li>
              <li>Maintain contrast: Ensure the header is always distinguishable from the content beneath it.</li>
              <li>Test performance: Sticky elements can impact scrolling performance, so optimize your implementation.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
            <p className="mb-4">
              For a more engaging user experience, consider implementing advanced features in your sticky header:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Shrinking header: Reduce the header size as the user scrolls down to minimize screen space usage.</li>
              <li>Transparency: Adjust the header's opacity based on scroll position for a sleek, modern look.</li>
              <li>Hide on scroll down, show on scroll up: This pattern provides more screen space while still allowing quick access to navigation.</li>
              <li>Contextual headers: Change the header content or style based on the current section of the page.</li>
            </ol>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              Sticky headers are a powerful tool in web design, offering improved navigation and user experience.
              By following best practices and considering advanced techniques, you can create sticky headers that
              enhance your site's usability without sacrificing performance or aesthetics.
            </p>
            <p>
              Remember, the key to a great sticky header is balance – it should be helpful without being intrusive.
              With careful design and implementation, your sticky header can become an integral part of your site's
              user interface.
            </p>
          </section>
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
                <li><Link href="/article" className="text-sm text-gray-600 hover:text-gray-800">Articles</Link></li>
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