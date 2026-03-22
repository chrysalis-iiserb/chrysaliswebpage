import React from 'react'
import PageLayout from 'components/PageLayout'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <PageLayout 
      >
        <div>
          <div className="max-w-4xl mt-12 mx-auto p-4 mb-12">
            <PhotoGrid />
            <h1 className="font-sfbold text-4xl mt-12 ">What is <span className='text-blue-500'>Chrysalis</span>?</h1>
            <p className=" font-sfregular mt-5">
              Scientifically, Chrysalis is defined as a quiescent insect pupa,
              especially of a butterfly. It is in the chrysalis that a
              caterpillar prepares itself to spread its wings and emerge as a
              magnificent new creature. Chrysalis gives IISER Bhopal students a
              similar chance - an opportunity to prepare yourself for all the
              scientific writing you will have to do in the future. Writing is
              an indispensable part of science, and what better way to prepare
              yourself for it than by telling others what excites you the most.
              <br />
              However, Chrysalis is more than just that. It is a medium through
              which you can question things, a medium through which you can
              speak your mind, a medium to battle the dark forces of
              pseudoscience, a medium to celebrate science. We are always on the
              lookout for new sciency-stuff to post on our website. It can be
              anything from articles, opinion pieces, scientific artwork and
              photographs, cartoons, science book reviews, some exciting sci-fi
              stories and the like. Do contact us if you have something to say
              on{' '}
              <a
                href="mailto:chrysalis@iiserb.ac.in"
                className="text-blue-500 hover:underline"
              >
                chrysalis@iiserb.ac.in
              </a>
              .
              <br />
              <br />
              <br />
              If you can’t think of anything to write, well, contact us anyway,
              and maybe we could help you out with that! We welcome you to
              explore our website and lose yourself in this world of science.
              P.S. - Here’s a reminder that science also includes everything
              from economics, linguistics, psychology, engineering, sociology to
              the standard subjects of physics, chemistry, math, biology and
              earth sciences.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default About

const PhotoGrid = () => {
  const items = ['3.jpg', '9.jpg', '1.jpg', '10.jpg', '2.jpg']
  const [loading, setLoading] = React.useState(true)
  const onLoad = () => {
    setLoading(false)
  }
  return (
    <div className="grid grid-cols-3  max-w-7xl z-[1] mx-auto md:gap-3">
      {items.map((item, i) => (
        <>
          <Image
            width={500}
            height={500}
            key={i}
            alt={item}
            src={`/gallery/${item}`}
            className={` rounded-xl border shadow-lg
        ${i === 2 ? 'row-span-2  object-cover w-full h-full' : ''}
        ${i === 3 ? 'col-span-2 row-span-2 w-full h-full' : ' border '}`}
            onLoad={onLoad}
          />
          
        </>
      ))}
      {loading && (
            <>
              <div className="w-full h-full animate-pulse bg-gray-300"></div>
            </>
          )}
    </div>
  )
}


// export default async function getStaticProps(){
//   return(
    
//   )
// }