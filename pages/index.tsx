import IndexPage from 'components/IndexPage'
import Loader from 'components/Loader'
import PageLayout from 'components/PageLayout'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsCategories,
  getClient,
  getFiveLatestPosts,
  getLatestEdition,
  getSettings,
} from 'lib/sanity.client'
import styles from './loader.module.css'
import { Editions, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import type { SharedPageProps } from 'pages/_app'
import { useEffect, useRef, useState } from 'react'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
  latestEdition: Editions
  categories: any
}

interface Query {
  [key: string]: string
}

export default function Members(props: PageProps) {
  const { posts, settings, latestEdition, categories } = props
  const [loading, setLoading] = useState(true)

  const loader = useRef(null)
  const path = useRef(null)
  const initialCurve = 200
  const duration = 600
  let start

  useEffect(() => {
    setPath(initialCurve)
    setTimeout(() => {
      requestAnimationFrame(animate)
    }, 500)
  }, [])

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp
    }
    const elapsed = timestamp - start

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
    setPath(newCurve)

    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + 'px'

    if (elapsed < duration) {
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start
  }

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect()
    return loaderBounds.height
  }

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight()
    path.current.setAttributeNS(
      null,
      'd',
      `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`,
    )
  }

  return (
    <main className={`min-h-screen ${styles.main}`}>
      {/* {loading ? ( */}
      {/* <div ref={loader}>
        <Loader setLoading={setLoading} />
        </div> */}

      <div ref={loader} className={`${styles.loader} `}>
        <div className="w-full flex items-center bg-zinc-900 justify-center h-screen overflow-hidden absolute text-neutral-600">
          <h1 className="text-5xl animate-ping font-sfheavy text-white  uppercase   flex gap-4 items-center">
            <div className='absolute top-[100px] right-[200px] w-[300px] h-[400px] rounded-full bg-teal-500 blur-[200px]'/>
            <div className='absolute top-[1400px] right-[200px] w-[300px] h-[400px] rounded-full bg-blue-500 blur-[200px]'/>
            <img className="h-12 animate-ping" src="chrysalis.png" />
            Chrysalis
          </h1>
        </div>

        <svg>
          <path ref={path}></path>
        </svg>
      </div>

      {/* ) : ( */}
      <div className={styles.body}>
        <PageLayout>
          <IndexPage
            settings={settings}
            posts={posts}
            latestEdition={latestEdition}
            categories={categories}
          />
        </PageLayout>
      </div>
      {/* )} */}
    </main>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = [], latestEdition, categories] = await Promise.all([
    getSettings(client),
    getFiveLatestPosts(client),
    getLatestEdition(client),
    getAllPostsCategories(),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
      latestEdition,
      categories,
    },
  }
}
