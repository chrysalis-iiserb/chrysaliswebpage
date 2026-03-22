import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  postsByTypeQuery,
  postCategoriesQuery,
  CategoryRef,
  allEditions,
  latestEdition,
  FiveLatestPosts
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getFiveLatestPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(FiveLatestPosts)) || []
}


export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}

export async function getPostsByCategory(client: SanityClient, type: String): Promise<Post[]> {
  type = type.toLowerCase()
  const posts =  (await client.fetch(postsByTypeQuery, { type })) || []
  return posts
}

export async function getAllPostsCategories(): Promise<string[]> {
  const client = getClient()
  const categories = (await client.fetch<string[]>(postCategoriesQuery)) || []
  return categories
}

export async function getCategoryRef(client: SanityClient, categoryName: string): Promise<string> {
  const categoryRef =  await client.fetch(CategoryRef, { categoryName }) || ''
  return categoryRef
}


export async function getAllEditions(client: SanityClient) {
  return (await client.fetch(allEditions)) || []
}

export async function getLatestEdition(client: SanityClient) {
  return (await client.fetch(latestEdition)) || []
}