
import { Carousel } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import CustomObject from "../../../shared/components/CustomObjects";

export default function Slider() {
  


  const customTheme: CustomFlowbiteTheme['carousel'] = {

    "root": {
      "base": "relative h-full w-full",
      "leftControl": "absolute top-0 lg:left-36 hidden lg:flex flex h-full items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-0 lg:right-36 hidden lg:flex flex h-full items-center justify-center px-4 focus:outline-none", 
    },
    "indicators": {
      "active": {
        "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-white dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
      "base": "absolute top-1/2 left-1/2 block w-full  -translate-x-1/2 -translate-y-1/2",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none  group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
 
    },
    "scrollContainer": {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  }

  return (
    // <section className='py-10 text-center bg-gray-100'>
    <section className="lg:px-10 pb-20 pt-28 bg-[#F5F7FF] rounded  relative overflow-hidden">
    {/* <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row"> */}
      <h1 className="pt-6 pb-3 font-bold text-center text-md lg:text-4xl md:text-4xl sm:text-4xl">
  Meet our customers
</h1>
<CustomObject
  className="absolute -left-0 -z-1 -top-20 lg:-top-20 max-w-screen-2xl "
  variants="vector_one"
/>
<CustomObject
  className="absolute -bottom-20 -z-1 left-50 right-10 max-w-screen-2xl"
  variants="vector_one"
/>
      <div className="relative h-60">
        <Carousel theme={customTheme} leftControl={<MoveLeft/>} rightControl={<MoveRight/>}>
          
          <div className="flex items-center justify-center h-full dark:text-white">

            <div className="text-center ">
              <button className="h-6 text-xs text-black rounded w-28 rounded-2l">
                Design Quality
              </button>
              <p className="pt-2 pb-2 text-sm">
                “Izhtech turned our ideas into an amazing reality with their creative design work, <br/>taking our LinkedIn presence to a whole new level ”
              </p>

              <div className="flex flex-col items-center">
                <img src="/images/clients/statppc.png" alt="Image" className="w-auto h-12 mb-2" />
                {/* <h2 className="pt-2 text-sm font-bold">Colin Lucido</h2> */}
                <p className="pt-2 text-xs text-gray-500">CEO · <b>StatPPC</b></p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full dark:text-white">
          <div className="text-center ">
              <button className="h-6 text-xs text-black rounded w-28 rounded-2l">
                Design Quality
              </button>
              <p className="pt-2 pb-2 text-sm">
                “Izhtech's strategic marketing has successfully <br/> attracted more customers for us.  ”
              </p>
   
              <div className="flex flex-col items-center">
                <img src="/images/cardprofile/Avatar.png" alt="Image" className="w-auto h-12 mb-2" />
                {/* <h2 className="pt-2 text-sm font-bold">Colin Lucido</h2> */}
                <p className="pt-2 text-xs text-gray-500">CEO · <b>Fastrack llc</b></p>
              </div>
            </div>
          
          </div>

          <div className="flex items-center justify-center h-full dark:text-white">
          <div className="text-center ">
              <button className="h-6 text-xs text-black rounded w-28 rounded-2l">
                Design Quality
              </button>
              <p className="pt-2 pb-2 text-sm">
                “Izhtech team clearly fulfils what we needed! <br/>They extract every details of what we want from us in prior and gave us the perfect design
           ”
              </p>
  
              <div className="flex flex-col items-center">
                <img src="/images/cardprofile/Avatar.png" alt="Image" className="w-auto h-12 mb-2" />
                {/* <h2 className="pt-2 text-sm font-bold">Colin Lucido</h2> */}
                <p className="pt-2 text-xs text-gray-500">CEO · <b>Rexcoders</b></p>
              </div>
            </div>
          </div>
  
        </Carousel>
      {/* </div> */}
      </div>
      
    </section>

  );
}
