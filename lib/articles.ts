import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export type Article = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  content: string
}

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const article = getArticleBySlug(slug)
      return article
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return articles
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags,
      image: data.image,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().slice(0, 3)
}