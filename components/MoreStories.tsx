import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import BlogCard from './BlogCard'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-sfbold leading-tight tracking-tighter md:text-6xl">
        Recommended For You
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <BlogCard post={post}/>
        ))}
      </div>
    </section>
  )
}
