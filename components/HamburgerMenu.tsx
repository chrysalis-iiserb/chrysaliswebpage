import * as React from 'react'
import { Home, Instagram, Mail, Youtube } from 'lucide-react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import categories from '../data/MenuItems'
import Links from '../data/SocialLinks'

gsap.registerPlugin(useGSAP)

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion'

export interface IAppProps {}

export default function HamburgerMenu(props: IAppProps) {
  const [isOpen, setisOpen] = React.useState(false)

  const container = useRef(null)
  const menuOpenRef = useRef(null)
  const menuBarRef = useRef(null)
  const menuOverlayRef = useRef(null)

  const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
  }

  const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L15 14.5' },
  }
  const [isBOpen, setBOpen] = React.useState(false)
  const path01Controls = useAnimation()
  const path02Controls = useAnimation()
  const onClick = async () => {
    // change the internal state
    setBOpen(!isBOpen)
    setisOpen(!isOpen)
    // start animation
    if (!isBOpen) {
      await path02Controls.start(path02Variants.moving)
      path01Controls.start(path01Variants.open)
      path02Controls.start(path02Variants.open)
      gsap.to(menuOverlayRef.current, { opacity: 1, visibility: 'visible' })
      gsap.to(container.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.0001,
      })
      gsap.to(menuBarRef.current, { right: 0 })
      gsap.fromTo(
        menuBarRef.current.querySelectorAll('.list-items'),
        { opacity: 0, y: 20, stiffness: 500, velocity: -50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.2, ease: 'power4.inOut' },
      )
    } else {
      path01Controls.start(path01Variants.closed)
      await path02Controls.start(path02Variants.moving)
      path02Controls.start(path02Variants.closed)
      gsap.to(menuOverlayRef.current, { opacity: 0, visibility: 'hidden' })
      gsap.to(container.current, { opacity: 0, visibility: 'hidden' })
      gsap.to(menuBarRef.current, { right: -600 })
      gsap.fromTo(
        menuBarRef.current.querySelectorAll('.list-items'),
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power4.inOut' },
        { opacity: 0, y: 50, stiffness: 500, velocity: -100 },
      )
    }
  }
  return (
    <div>
      <button
        className={` scale-x-[-1] mr-2 md:mr-12 z-[130] cursor-pointer relative  md:size-[30px]  opacity-50 hover:opacity-100 transition-all`}
        onClick={onClick}
        ref={menuOpenRef}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          color="red"
          className="btn-hamburger-menu z-[100]"
        >
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.3 }}
            stroke={'#000000'}
            strokeWidth={2}
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.3 }}
            stroke={'#000000'}
            strokeWidth={2}
          />
        </svg>
      </button>
      <div
        ref={container}
        className="overflow-hidden w-screen h-screen invisible absolute top-0 left-0 transition-all z-[120]  "
      >
        {/* Overlay behind the menu. */}
        <MenuOverlay onClick={onClick} menuOverlayRef={menuOverlayRef} />

        <div
          ref={menuBarRef}
          className={`menu p-12 bg-white  overflow-hidden flex flex-col top-0 w-full absolute  -right-[1000px] h-[100vh]  z-[100] md:w-[40%]
            `}
        >
          <div className="absolute h-96 w-96 blur-[200px] bg-gradient-to-tr from-blue-300 top-12 right-12 "></div>
          <button className="absolute font-sfsemibold top-8 opacity-60 hover:underline hover:opacity-100 left-12">
            <a href="/">Home</a>
          </button>

          <MenuItems />

          <BottomFooter />
        </div>
      </div>
    </div>
  )
}

const MenuItems = () => {
  const listItems = [
    { title: 'Editions', href: '/editions' },
    { title: 'About', href: '/about' },
    { title: 'Submissions', href: '/submissions' },
    { title: 'Contact', href: '/contact' },
  ]

  const teamItems = [
    { title: '2024', href: '/2024' }
  ]

  return (
    <ul className="text-black  text-xl mt-12 grid gap-3   font-sfsemibold">
      
        <Accordion type="single" collapsible className="w-full  z-[999999]  ">
          <AccordionItem value="item">
            <AccordionTrigger className=" w-full text-xl">
              <h1>Browse Topics</h1>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1  gap-3 ">
                {categories.map((category) => (
                  <Link href={category.href} key={category.title}>
                    <li className="cursor-pointer flex gap-2 items-center hover:translate-x-6 transition-all ">
                      {category.icon}
                      {category.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
  
        <Accordion type="single" collapsible className="w-full  z-[99999]" >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Team</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1  gap-3 ">
                {teamItems.map((teamItem) => (
                  <Link href={`/team/${teamItem.href}`} key={teamItem.title}>
                    <li className="cursor-pointer flex gap-2 hover:translate-x-6  items-center transition-all ">
                      {teamItem.title} Team
                    </li>
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      {listItems.map((item) => (
        <li key={item.title} className='border-b py-4'>
          <Link href={item.href}>
            <p className="list-items hover:underline">{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const BottomFooter = () => {
  return (
    <div className="border-t px-2 md:px-6 py-2 w-full left-0 mb-0 flex my-auto items-center justify-between">
      <h1 className="font-serif text-xl italic">Chrysalis</h1>
      <div className=" flex gap-4">
        <Link target="_blank" href={Links[0].insta}>
          <Instagram size={20} />
        </Link>
        <Link target="_blank" href={Links[0].yt}>
          <Youtube size={20} />
        </Link>
        <Link target="_blank" href={Links[0].mail}>
          <Mail size={20} />
        </Link>
      </div>
    </div>
  )
}

const MenuOverlay = ({ menuOverlayRef, onClick }) => {
  return (
    <div
      className={` invisible bg-black/50 backdrop-blur-sm w-full  h-full z-[60] absolute top-0 left-0 overflow-hidden`}
      ref={menuOverlayRef}
      onClick={onClick}
    ></div>
  )
}
