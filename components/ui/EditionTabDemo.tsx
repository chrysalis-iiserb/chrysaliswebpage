'use client'

import Image from 'next/image'
import { Tabs } from '../ui/EditionTabs'
import { urlForImage } from 'lib/sanity.image'
import { Separator } from './separator'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function OurEditions({ latestEdition }) {
  return (
    <div className=" w-full  grid grid-cols-1 md:grid-cols-5  md:justify-between">
      <div className="md:col-span-4   md:h-[40rem] [perspective:1000px]  relative  flex flex-col md:max-w-5xl mx-auto w-full  items-start justify-start mt-4">
        <LatestEditionBox latestEdition={latestEdition} />
      </div>

      <div className="md:col-span-1 md:p-6 mt-4 md:mt-0 flex flex-col justify-center items-center">
        <div className='relative group'>
        <div className='bg-zinc-800 absolute -mt-2 -ml-4 opacity-0  group-hover:opacity-80 transition  -top-12 -left-12 tooltiptext p-2 rounded-xl text-white'>View All Editions</div>

        <a href='/editions'>
        <button 
        className="hover:shadow-lg z  shadow-black relative slide cursor-pointer rounded-full border-2 p-2 group  h-[100px] w-[100px] grid place-items-center transition-all">
          <ArrowRight
            size={30}
            className="z-10 group-hover:text-white group-hover:rotate-[360deg] duration-2 transition-all "
          />
        </button>
        </a>
      </div>
      </div>
    </div>
  )
}




const LatestEditionBox = ({latestEdition}) => {
    return(
      <div className="w-full shadow-lg shadow-zinc-500 overflow-hidden group  relative rounded-2xl p-6 text-xl  md:text-4xl  text-white ">
          <Image
            src={urlForImage(latestEdition.coverImage?.asset._ref)
              .height(1000)
              .width(1000)
              ?.url()}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover h-full top-0 left-0 w-full absolute md:-bottom-48 brightness-[0.1] transition-all duration-500  z-[-1] rounded-2xl"
          />

          <p className="z-[0] font-sfbold text-center mt-4  ">{latestEdition.description}</p>

          <ChiefEditorNote
            coverImage={latestEdition.coverImage}
            download={latestEdition.pdf_download_url}
          />
        </div>
    )
}















const ChiefEditorNote = ({ coverImage, download }) => {
  return (
    <div className="flex flex-col-reverse  md:flex-row gap-2 place-items-center ">
      <Image
        src={urlForImage(coverImage?.asset._ref).height(900).width(600)?.url()}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover w-[70%] md:w-[40%] group-hover:scale-110 transition-all lg:h-full lg:p-12  lg:ml-12 -mb-24 rounded-lg md:rounded-2xl"
      />
      <div className="p-6 flex flex-col items-start gap-4 md:mt-12">
        <p className="font-serif md:flex hidden italic md:text-xl lg:text-3xl text-start">
          {' '}
          Chief Editors' Note
        </p>
        <Separator className="md:flex hidden" />
        <p className="text-xs lg:text-sm md:flex hidden font-sflight text-start mt-2">
          Dear Readers, Welcome to the latest edition of Chrysalis. As the
          Editors-in-Chief, we are delighted to present to you the culmination
          of months of hard work, dedication, and passion from our team as well
          as the contributors. Science communication holds a special place in
          our hearts. It's not just about disseminating facts and figures; it's
          about bridging the gap between the scientific community and the
          public. It's about breaking down complex concepts into digestible
          knowledge, fostering curiosity, and inspiring the next generation of
          scientists and innovators.
          <br />
          <br />
          Warm regards,
          <br />
          Bhavika & Shamika
          <br />
          Editors-in-Chief
        </p>
        <Link href={download} target="_blank">
          <button className="fadeUp px-8 py-2 mt-6  bg-blue-500 text-white tracking-[-0.5%] text-sm rounded-md hover:bg-blue-600 hover:shadow-lg">
            <span >Read Here.</span>
          </button>
          
        </Link>
      </div>
    </div>
  )
}
