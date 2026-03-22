'use client'
import { Example } from './commandPallete/CmdkPallete'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'
import Image from 'next/image'

interface ExtendedCSSProperties extends React.CSSProperties {
  '--text'?: string
}

export default function Navbar({ posts }) {
  const title = 'CHRYSALIS.'

  const titleStyle: ExtendedCSSProperties = { '--text': `"${title}"` }

  return (
    <nav className="z-[999999] w-full">
      <header className="px-2 md:px-4  bg-white w-full mb-10 mt-6 md:mt-4 flex items-center md:mb-4 flex-row justify-between text-pretty  z-[50] bg-blue header-nav">
        <div className="text-2xl   font-sfblack tracking-[-1px]  drop-shadow-xl  md:text-4xl flex items-center gap-1 md:gap-4 header-h1">
          <Image
            width={300}
            height={300}
            alt="Chrysalis Logo"
            src="/chrysalis.png"
            className="h-10 w-10 md:h-12 md:w-12 aspect-square"
          />
          <Link
            href={'/'}
            className="cursor-pointer  text-black/80 drop-shadow-lg "
          >
            <div className="h-[40px] md:h-[50px] grid place-items-center w-fit overflow-hidden">
              <h1
                className="font-sfblack text-2xl md:text-4xl relative title"
                style={titleStyle}
              >
                {title}
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center md:gap-4 overflow-x-hidden z-[60]">
          <Example posts={posts} />
          <HamburgerMenu />
        </div>
      </header>
    </nav>
  )
}
