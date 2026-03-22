import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Loader({ setLoading }) {
  const container = useRef(null)

  useGSAP(() => {

    const tl = gsap.timeline({duration: 0.2})

    // gsap.from(".grid")
    tl.from(container.current, {
        opacity: 1
    }).to(container.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", 
        duration: 0.8, 
        onComplete: () => setLoading(false)
    })
  }, {scope: container})


  return (
    <div ref={container}>
      <div className="loading w-full h-screen bg-blue-500 fixed z-[999999999] overflow-hidden top-0 left-0">
      
      CHRYSALIS
      </div>
    </div>
  )
}
