import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import 'css/embla.css'
import 'css/base.css'



export function Carousel({posts}) {
  const [emblaRef] = useEmblaCarousel()
  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true, breakpoints:{
    768: {
      slidesToScroll: 1,

    },
    1024: {
      slidesToScroll: 3,

    }
  
  }}
  return (
    <section className=" p-0 ">
      <EmblaCarousel posts={posts} options={OPTIONS} />
    </section>
  )
}
