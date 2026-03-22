import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "category": category->{name}
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postsByTypeQuery = `
*[_type == "post" && references($type)] | order(date desc, _updatedAt desc) {
  ${postFields}
}
`
export const postCategoriesQuery = groq`
*[_type == "category"][]{ 
  name,
  coverImage
}
`

export const CategoryRef = groq`
*[_type == 'category' && name == $categoryName][0]._id
`

export const allEditions = groq`
*[_type == "editions"] | order(date desc, _updatedAt desc){
  _id,
  title,
  description,
  editorsnote,
  coverImage, 
  File,
  "pdf_download_url": File.asset -> url
}`


export const latestEdition = groq`
*[_type == "editions"] | order(date desc, _updatedAt desc)[0]{
  _id,
  title,
  description,
  editorsnote,
  coverImage, 
  File,
  "pdf_download_url": File.asset -> url
}`

export const FiveLatestPosts = groq`
*[_type == "post"] | order(date desc, _updatedAt desc)[0...5] {
  ${postFields}
}`



export interface Author {
  name?: string
  picture?: any
}

export interface Category {
  name?: string,
  coverImage?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  category?: Category
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

export interface Editions {
    _id: string,
    title : string,
    description : string,
    editorsnote : string,
    coverImage?: any, 
    File?: any,
    download_url: string

  }
