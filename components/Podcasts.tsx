import { Separator } from "../components/ui/separator";
import { MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import ReactPlayer from "react-player/lazy";


export default function Podcasts(){
    return(
        <>

          <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-12  mt-12">
            <div>
                <h1 className="font-bold text-4xl font-sfheavy">Watch our latest Podcast on <span className="text-blue-500">`Science Communication`</span></h1>
                <p className="font-sfregular text-xl mt-6">Discover the importance of making scientific knowledge accessible and engaging, and learn how science communication bridges the gap between researchers and the public.</p>
                <Link href={'https://www.youtube.com/watch?v=JamFSUoaM6c&t=142s'} target="_blank">
                <button className="fadeUp mt-8 group shadow-lg hover:bg-blue-700 transition-all rounded-xl text-white bg-blue-500 px-4 py-2 font-sfregular ">
                  <span className=" flex gap-2 items-center">Watch here <MoveRight /></span>
                </button>
                </Link>
            </div>

            <Link href={'https://www.youtube.com/watch?v=JamFSUoaM6c&t=142s'}>
            <ReactPlayer
              className="rounded-xl w-full shadow-lg aspect-[16/9]"
              url="https://www.youtube.com/watch?v=JamFSUoaM6c&t=142s"
              playing
              muted
              width={"100%"}
              height={"100%"}
              controls={false}
            />
            
            </Link>
          </div>
        </>
    )
}