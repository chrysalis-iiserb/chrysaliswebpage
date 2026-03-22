'use client'

import React from 'react'
import BlogCard from './BlogCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
import post from 'schemas/post'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Post } from 'lib/sanity.queries'

const BrowseBlogs = ({ posts, categories }) => {
  return (
    <div className="w-full h-fit ">
      <div className="flex flex-row mt-12 items-center justify-between">
        <h1 className=" text-4xl md:text-5xl font-sfheavy font-black flex items-end gap-2 ">
          Browse <span className="text-blue-500 ">Blogs</span>{' '}
        </h1>
        <a target="_blank" href={`/topic/`}>
          <button className="fadeUp border hover:border-black cursor-pointer transition-all  px-4 py-2 rounded-full font-sfsemibold">
            <span className="flex gap-2 items-center">
              <span className='hidden lg:flex'>View All Sections</span>
              <ArrowRight className="" size={20} />
            </span>
          </button>
        </a>
      </div>

      <div className="w-full  mt-3  flex flex-col items-center  ">
        <div className="w-full overflow-scroll md:overflow-hidden relative">
          <div className="w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-6">
            {posts.slice(0, 3).map((post, index) => {
              return (
                <div key={index}>
                  <BlogCard post={post} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseBlogs

const TabTriggers = ({ categories }) => {
  return (
    <React.Fragment>
      <TabsTrigger value="Recents">Recents</TabsTrigger>
      {categories.slice(0, 4).map((category: any, index: number) => {
        return (
          <TabsTrigger value={category.name} key={index}>
            {category.name}
          </TabsTrigger>
        )
      })}
      {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
            <TabsTrigger value="More">
                
                More
              </TabsTrigger>
                
                </DropdownMenuTrigger>
              <DropdownMenuContent className="font-sflight">
              {categories.slice(4).map((category: any, index: number) => {
              return (
                <Link key={index} href={`/topic/${category.name}`}>
                  <DropdownMenuItem className='cursor-pointer'>{category.name}</DropdownMenuItem>
                </Link>
              )})}
              </DropdownMenuContent>
            </DropdownMenu> */}
    </React.Fragment>
  )
}
