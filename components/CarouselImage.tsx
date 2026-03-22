import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export const runtime = 'edge'

interface CarouselImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CarouselImage(props: CarouselImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 rounded-[50px]  shadow-lg hover:shadow-medium ': slug,
      })}
    >
      <Image
        className=" CarouselImage transition-all shadow-2xl "
        width={2000}
        height={2000}
        alt=""
        src={urlForImage(source).height(800).width(1400).url()}
        sizes="100vw"
        quality={50}
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
