import React, { useEffect, useState } from 'react'
import quotes from '../data/quotes.js'
const QuoteOfTheDay = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => {
        // Increment current quote index
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
      },
      24 * 60 * 60 * 1000,
    ) // Update every 24 hours

    return () => clearInterval(interval)
  }, [quotes.length])
  return (
    <div className="md:mt-0 mt-12  w-full font-serif relative bg-blue-300 rounded-2xl py-12 md:py-24 overflow-hidden flex items-center justify-center ">
      <div className="absolute h-full w-full rounded-full  lg:-top-12 -left-12 animate-spin-slow bg-gradient-to-r from-cyan-500  to-blue-700 blur-[150px]"></div>

      <div className="font-sfheavy  relative text-xl md:text-3xl  lg:text-5xl z-[10] px-6 md:w-[50%]">
        <span className="md:text-[300px] font-serif md:mt-12 lg:-mt-12 -left-12  text-black/10   absolute">
          &#8220;
        </span>
        <p>{quotes[currentQuoteIndex].quote}</p>
        <p className="font-sflight text-sm md:text-xl italic">
          - {quotes[currentQuoteIndex].author}
        </p>
        <span className="md:text-[300px] lg:-mt-24 right-0 font-serif  text-black/10 absolute">
          &#8221;
        </span>
      </div>
    </div>
  )
}

export default QuoteOfTheDay
