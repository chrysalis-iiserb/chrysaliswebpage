import React from 'react'
import { Separator } from './ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Events = () => {
  const events = [
    {
      title: 'Concepts at 3 Levels',
      img: '/events/ca3l/2.jpg',
      description:
        'Ever had a “Eureka” moment when you approached a subject from a fresh and simpler perspective, completely different from what you learnt from the lecture or the book? Think you have a profound understanding of a topic? Look no further, we have the perfect challenge for you. Buckle up to demystify concepts and phenomena that might seem puzzling and hard to grasp at first glance. The catch? Work your way through explaining them in three levels of complexity; to an elementary schooler, an undergrad, and a PhD scholar. ',
      folder_url: 'ca3l',
    },
    {
      title: 'Sci-Comm Workshop',
      img: '/events/scicomm.jpg',
      description:
        'Dive into the world of #StorytellingScience with Nandita Jayaraj! 🌐🔍 Join us for a dynamic masterclass on science communication, exploring the art of storifying science, decoding research papers, and crafting your own compelling narratives. 📚✨ Let&aops;s unravel the secrets of effective science communication together! ',
      folder_url: 'scicomm',
    },
    {
      title: "Communi-Quill'24",
      img: '/events/communi.jpg',
      description:
        "Calling all science enthusiasts and wordsmiths! Dive into the world of scientific exploration with COMMUNI-QUILL'24, an article writing competition like no other. Unleash your creativity, share your insights, and win exciting prizes! Don't miss your chance to be part of this groundbreaking event. See you there!",
      folder_url: 'communi',
    },
  ]
  return (
    <div className="w-full md:px-24 py-12 p-8">
      <div className="flex flex-row mt-12 items-center justify-between">
        <h1 className=" text-4xl md:text-5xl font-sfheavy font-black flex items-end gap-2 ">
          Our <span className="text-blue-500 ">Events</span>{' '}
        </h1>
        <a target="_blank" href={`/topic/`}>
          <button className="fadeUp border hover:border-black cursor-pointer transition-all  px-4 py-2 rounded-full font-sfsemibold">
            <span className="flex gap-2 items-center">
              <span className='hidden lg:flex'>View All Events</span>
              <ArrowRight className="" size={20} />
            </span>
          </button>
        </a>
      </div>
      {/* <Separator /> */}
      <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {events.map((event, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="relative hover:scale-110 transition-all">
                <div className="w-full h-full  absolute bg-black/50 grid place-items-center rounded-xl">
                  <p className="font-sfbold text-white text-3xl">
                    {event.title}
                  </p>
                </div>
                <Image
                  width={888}
                  height={500}
                  alt={event.title}
                  
                  src={event.img}
                  className="rounded-xl object-cover aspect-video"
                />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="">
                <DialogTitle className="text-center text-2xl md:text-5xl md:mb-8 mb-4">
                  {event.title}
                </DialogTitle>
                <DialogDescription>{event.description}</DialogDescription>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {Array(8)
                    .fill(1)
                    .map((image, index) => (
                      <Image
                        width={500}
                        height={500}
                        alt={event.title}
                        
                        src={`/events/${event.folder_url}/${index + 1}.jpg`}
                        key={index}
                        className="w-full aspect-video object-cover"
                      />
                    ))}
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default Events
