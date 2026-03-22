import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'
import { Separator } from './ui/separator'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <div className="max-w-[1000px] mt-12 px-6">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:flex  items-center gap-6">
        {author && <Avatar name={author.name} picture={author.picture} />}
        |
        <Date dateString={date} />
      </div>

      <div className="mb-8  md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
    </div>
  )
}
