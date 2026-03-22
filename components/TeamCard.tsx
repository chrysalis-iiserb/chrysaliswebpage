
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function TeamCard ({memberInfo})  {

  return (
    <div className="flex flex-col justify-between mx-auto  mt-12 w-[250px]  relative   text-gray-900">
      <div className='w-full shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] relative h-[300px] overflow-y-hidden'>
        <Image
          className="object-cover shadow-lg overflow-hidden aspect-[3/4] max-h-[300px] w-full h-full rounded-xl "
          src={memberInfo.Picture}
          alt="Members"
          fill={true}
        />
        <div className='absolute w-full h-[300px] p-4 rounded-xl top-[85%] hover:top-0 transition-all left-0 truncate hover:whitespace-normal bg-black/80'>
          <h1 className='font-sfregular select-none text-xs text-white'>{memberInfo.Bio}</h1>
 
        </div>
        </div>
        <h1 className='mt-6 font-sfsemibold text-3xl'>{memberInfo.Name}</h1>
        <p className='font-sflight'>{memberInfo.Roles}</p>
        <div className='flex gap-2 mt-4  size-48 h-fit'>
            <Link href={`mailto:${memberInfo.Username}`}><Mail size={17} /></Link>
            {memberInfo.Instagram ? <Link href={`https://www.instagram.com/${memberInfo.Instagram}` || ""} target='_blank'><Instagram size={17} /></Link> : <Instagram size={17} color='gray' />}
            {memberInfo.LinkedIn ? <Link href={`https://www.linkedin.com/in/${memberInfo.LinkedIn}` || ""} target='_blank'><Linkedin size={17}/></Link>: <Linkedin size={17} color='#00000055'/>}
          </div>
    </div>
  )
}



