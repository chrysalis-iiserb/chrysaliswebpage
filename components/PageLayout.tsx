'use client'

import { Post } from 'lib/sanity.queries'
import Navbar from './Navbar'
import Transition from './transition'
import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Lenis from '@studio-freight/lenis'

interface HeaderProps {
  children: React.ReactNode
}

const PageLayout: React.FC<HeaderProps> = ({ children }) => {
  // Fetch data here (useEffect if needed)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('/api/allposts').then((data) => {
        return data.json()
      })
      setPosts(response)
    }
    getPosts()
  }, [])

  return (
    <div className="min-h-screen h-fit heroContainer" data-scroll-container>
      <Navbar posts={posts} />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
