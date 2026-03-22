import LandingPostPreview from 'components/LandingPage/LandingPostPreview'
import type { Post } from 'lib/sanity.queries'

export default function LandingMorePosts({ posts }: { posts: Post[] }) {
  return (
    <section >
      <h2 className="mb-2 text-4xl font-bold leading-tight tracking-tight">
        More Stories
      </h2>
      <div className=" ">
        {posts.slice(0, 4).map((post, index) => (
          <div key={post.slug} className='grid grid-cols-1'>
          <LandingPostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          {/* {index != 3 &&  <img src='/seperatorLine.png' alt='seperator line' />} */}
          </div>
        ))}
      </div>
    </section>
  )
}
