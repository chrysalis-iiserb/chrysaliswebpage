
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Post, Settings } from 'lib/sanity.queries'
import BlogCard from './BlogCard'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings,
}






export default function TopicPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <IndexPageHead settings={settings}  />
      <Layout preview={preview} loading={loading} >
          <div className=' mx-auto p-12 min-h-screen'>
          <h1 className='font-sfheavy text-4xl md:text-5xl mb-12 text-center'>Find blogs about 
            <span className='uppercase text-blue-500 '>
            {' '}{heroPost && heroPost.category.name}
            </span>
            </h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 md:gap-12 md:p-6'>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>

          )
        })
        }



              
          </div>
          </div>
      </Layout>
      
    </>
  )
}



