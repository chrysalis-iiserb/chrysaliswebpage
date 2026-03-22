// "use client"

import {  useState } from 'react'
import {  Search } from 'lucide-react'


export default function SearchCommand({open, setOpen, posts}) {


    return(
        <>
        <button className='border' onClick={()=>setOpen(!open)}>
          <Search />
        </button>
        

    </>
    )

}


