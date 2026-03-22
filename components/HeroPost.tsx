import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug' | 'category'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug, category } = props
  return (
    <section className=''>
      <div className="mb-8 md:mb-8">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-16 md:grid  md:gap-x-16 lg:gap-x-8">
        <div>
        {category && (
            <div className="mb-2 text-sm  font-bold uppercase  underline-offset-2">
              <Link href={`/topic/${category.name}`} className=" text-white p-2  bg-gradient-to-r from-black to-blue-500 ">
                    {category.name}
              </Link>
            </div>
          
          )}
          <h3 className="mb-4 mt-4 text-2xl leading-tight lg:text-5xl text-balance font-bold">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className='flex gap-3 md:gap-6  items-center'>
          <div className="text-sm md:text-md font-semibold">
            <Date dateString={date} />
            
          </div>
          <span>
            <img src="/circle.png" alt="seperator dot" />
          </span>
          <div>
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
          </div>

          </div>
        </div>
        <div>
          {excerpt && (
            <p className="mt-4 text-md">
              {excerpt}
            </p>
          )}
          
          
        </div>
      </div>
    </section>
  )
}
