import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import MorePostsImage from 'components/MorePostsImage'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className='mt-4 grid grid-cols-3 gap-4  p-2 md:px-4'>
      <div className=" flex col-span-1">
        <MorePostsImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className='col-span-2'>
      <div className=" mb-1 text-xs">
        <Date dateString={date} />
      </div>
      <h1 className="mb-1 font-bold   text-xs md:text-base ">
        <Link href={`/posts/${slug}`} className="  hover:underline">
          {title}
        </Link>
      </h1>
      {author && <div className='text-sm text-black/80'>By {author.name}</div>}
    </div>
    </div>
  )
}