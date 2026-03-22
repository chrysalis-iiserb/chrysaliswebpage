import PageLayout from 'components/PageLayout'
import { Separator } from 'components/ui/separator'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/BlogLayout'
import { GetStaticProps } from 'next'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsCategories,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import { Editions, Post, Settings } from 'lib/sanity.queries'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  preview: boolean
  loading: boolean
  settings: Settings
  categories: any
  draftMode: boolean
  token: string
}



interface Query {
  [key: string]: string
}
export default function Topic(props: PageProps) {
  const { preview, loading, settings, categories } = props

  return (
    <PageLayout>
      <div className="min-h-screen">
        <Layout preview={preview} loading={loading}>
          <div className="w-full md:px-24  p-8">
            <h1 className="font-bold mt-12 text-5xl font-sfheavy ">
              Find your <span className="text-blue-500"> TOPICS</span> here.
            </h1>
            <Separator />
            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 ">
              {categories.map((category: any, index) => {


                return (
                  <Link
                    href={`/topic/${category.name}`}
                    key={index}
                    className=" relative  hover:scale-110  duration-700 grid place-items-center justify-center shadow-lg"
                  >
                    <Image
                      className="aspect-video mx-auto drop-shadow-sm w-full object-cover rounded-[24px] hover:drop-shadow-lg  "
                      width={800}
                      height={300}
                      alt=""
                      src={urlForImage(category.coverImage?.asset._ref)
                        .height(800)
                        .width(1000)
                        ?.url()}
                    />
                    <div className="absolute w-full rounded-[24px] h-full bg-black/50 hover:bg-black/70 transition-all text-xl hover:text-3xl cursor-pointer text-white flex items-center justify-center">
                      <h1 className="p-6 font-bold text-xl  font-sfmedium " >
                        {category.name}
                      </h1>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Layout>
      </div>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, categories] = await Promise.all([
    getSettings(client),  
    getAllPostsCategories(),
  ])

  return {
    props: {
        settings,
        preview: draftMode,
        loading: false,
        categories,
        draftMode,
        token: draftMode ? readToken : '',
    },
  }
}
