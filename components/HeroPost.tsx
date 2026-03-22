import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useState } from 'react'

export default function HeroPost(
  props: Pick
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section className="relative w-full overflow-hidden rounded-xl mb-12">
      <div className="relative h-[500px] w-full">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="text-white">
            {author && (
              <p className="text-sm mb-2 opacity-80">
                {author.name} · <Date dateString={date} />
              </p>
            )}
            <h2 className="text-3xl font-bold mb-2 text-balance">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title || 'Untitled'}
              </Link>
            </h2>
            {excerpt && (
              <p className="text-sm opacity-80 line-clamp-2 text-pretty">
                {excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
