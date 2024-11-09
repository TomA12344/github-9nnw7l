import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import type { Article } from '@/lib/articles'

export async function ArticleLayout({ article }: { article: Article }) {
  const mdxSource = await serialize(article.content)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{article.author}</span>
          <span>•</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <div className="flex gap-2 mb-4">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xl text-gray-600">{article.description}</p>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote {...mdxSource} />
      </div>
    </article>
  )
}