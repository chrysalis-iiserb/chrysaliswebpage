import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'
import AuthorAvatar from './AuthorAvatar'
import Date from 'components/PostDate'
import Link from 'next/link'

const BlogCard = ({ post }) => {
  const [loading, setLoading] = React.useState(true)

  const onImageLoad = () => {
    setLoading(false)
  }
  return (
    <div className="rounded-[16px]     cursor-pointer mb-6 md:mb-0 md:min-h-[400px]">
      {loading && (<Loader />)}
      <div className='overflow-hidden'>
      <Image
        className=" object-cover rounded-xl hover:brightness-75 hover:scale-110 transition-all aspect-video shadow-lg "
        width={888}
        height={500}
        alt=""
        src={urlForImage(post.coverImage.asset).height(1000).width(1900).url()}
        sizes="100vw"
        onLoad={onImageLoad}
      />
      </div>

      <Link href={`/posts/${post.slug}`} target="_blank">
        <h1 className=" font-sfbold hover:underline text-lg lg:text-xl mt-4">
          {post.title}
        </h1>
      </Link>
      {/* <p className=' text-xs font-sfregular  mt-4'>{post.excerpt}</p> */}
      <div className="mt-2 text-zinc-600 flex gap-2 text-[13px] items-center text-sflight">
        {post.author && (
          <AuthorAvatar
            name={post.author?.name}
            picture={post.author?.picture}
          />
        )}{' '}
        |
        <Date dateString={post.date} />
      </div>
    </div>
  )
}

export default BlogCard



const Loader = () => {
  return (
    <div className="animate-pulse h-[100px] w-full bg-gray-200  rounded-xl"></div>
  )
}