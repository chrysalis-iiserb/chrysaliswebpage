import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Editions, Post, Settings } from 'lib/sanity.queries'
import { Carousel } from './Carousel'
import '../css/embla.css'
import '../css/base.css'
import QuoteOfTheDay from './QuoteOfTheDay'
import BrowseBlogs from './BrowseBlogs'
import { OurEditions } from './ui/EditionTabDemo'
import Events from './Events'
import * as demo from 'lib/demo.data'
import Podcasts from './Podcasts'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  latestEdition: Editions
  categories: any
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, latestEdition, categories } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <div className="min-h-screen overflow-x-hidden">
      <IndexPageHead settings={settings} />

      {/* Carousel  */}
      <Carousel posts={posts} />

      {/* Post Previews */}
      <Layout preview={preview} loading={loading}>
        <div className="mx-auto drop-shadow-lg md:px-32 max-w-[1500px] px-4 md:py-12">
          <QuoteOfTheDay />
        </div>
      </Layout>

      <Layout preview={preview} loading={loading}>
        <div className=" mx-auto w-full  px-4 md:px-24 md:py-12 ">
          <BrowseBlogs posts={posts} categories={categories} />
        </div>
      </Layout>

      {/* Editions Sections */}
      <Layout preview={preview} loading={loading}>
        <div className="p-6 md:px-12  w-full bg-gradient-to-br  ">
          <h1 className=" font-black text-center  font-sfheavy mb-12 text-5xl md:text-6xl ">
            Our <span className="text-blue-500">Editions</span>
          </h1>
          <OurEditions latestEdition={latestEdition} />
        </div>
      </Layout>

      <Layout preview={preview} loading={loading}>
        <div className="w-full md:px-24 md:py-12 px-4">
          <Podcasts />
        </div>
      </Layout>

      <Layout preview={preview} loading={loading}>
        <Events />
      </Layout>
    </div>
  )
}
