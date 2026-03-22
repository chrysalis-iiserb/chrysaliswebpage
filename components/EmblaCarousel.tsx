import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import 'css/base.css'
import 'css/embla.css'
import Date from 'components/PostDate'

import Autoplay from 'embla-carousel-autoplay'
import CarouselImage from './CarouselImage'
import Link from 'next/link'
import { Post } from 'lib/sanity.queries'
import { ChevronDown, ChevronRight } from 'lucide-react'

const TWEEN_FACTOR = 4.2

type PropType = {
  posts: any[]
  options?: EmblaOptionsType
}

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { posts, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [tweenValues, setTweenValues] = useState<any[]>([])
  const [brightnessFilter, setBrightnessFilter] = useState<any[]>([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }

      return diffToTarget * (-1 / TWEEN_FACTOR) * 100
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])
  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {posts.map((slide: Post, index) => (
            <div className="embla__slide max-h-[85vh] group" key={index}>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer "
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                  <div className=" embla__parallax__img  brightness-[65%]  ">
                    <CarouselImage
                      slug={slide.slug}
                      title={slide.title}
                      image={slide.coverImage}
                      priority={true}
                    />
                  </div>

                  <div className="transition-all Carousel_Container   inset-0   w-full  group-hover:bg-black/50 duration-100 absolute bottom-0 text-white ">
                    <div className=" w-full h-full relative ">
                      <div className="w-full flex items-center group cursor-pointer  gap-24  absolute  justify-between Carousel_Label min-h-[50%] transition-all p-6 md:px-12 py-6">
                        <div className="">
                          <p className="md:mb-1 text-[6px] tracking-wider md:text-xs font-sfregular text-white/70 text-opacity-80">
                            {slide.author?.name} •{' '}
                            <time>
                              {' '}
                              <Date dateString={slide.date} />
                            </time>
                          </p>

                          <Link
                            href={`/posts/${slide.slug}`}
                            className="grid grid-cols-1 gap-6  transition-all "
                          >
                            <h1 className="text-sm md:text-4xl  hover:underline font-sfheavy font-black">
                              {slide.title}
                            </h1>
                            <p className="md:block hidden font-sans font-extralight text-sm">
                              {slide.excerpt}
                            </p>
                          </Link>
                        </div>
                        <div className='lg:flex hidden group-hover:animate-ping '>
                          <ChevronDown size={30}  />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
