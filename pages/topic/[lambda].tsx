import IndexPage from 'components/IndexPage'
import PageLayout from 'components/PageLayout'
import PreviewIndexPage from 'components/PreviewIndexPage'
import TopicPage from 'components/TopicPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsCategories,
  getCategoryRef,
  getClient,
  getPostsByCategory,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, posts, draftMode } = props
  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />
  // }

  return (
    <PageLayout>
      <TopicPage posts={posts} settings={settings} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const categoryRef = await getCategoryRef(client, params.lambda)
  const [settings, posts] = await Promise.all([
    getSettings(client),
    getPostsByCategory(client, categoryRef),
  ])
  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const categories = await getAllPostsCategories()
  return {
    paths: categories?.map((category) => `/topic/${category}`) || [],
    fallback: 'blocking',
  }
}
