import { Carousel } from 'flowbite-react';
import { TextInput, Button } from "flowbite-react";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';
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
      "base": "absolute top-1/2 left-1/2 block w-full bg-red-500 -translate-x-1/2 -translate-y-1/2",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
 
    },
    "scrollContainer": {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  }

  return (
    <section>
      <div className="h-96 sm:h-96 lg:h-96 2xl:h-96">
        <Carousel theme={customTheme} leftControl={<MoveLeft/>} rightControl={<MoveRight/>}>
          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 dark:text-white">

            <div className="text-center ">
              <h1 className="pb-3 font-bold text-md lg:text-4xl md:text-4xl sm:text-4xl">
                Meet our customers.
              </h1>
              <button className="h-6 text-xs text-black bg-gray-200 rounded w-28 rounded-2l">
                Design Quality
              </button>
              <p className="pt-2 pb-2 text-sm">
                “The app is a part of our team, helping to <br />
                crystalize our vision and delivering incredible <br />
                results in a record time.”
              </p>

              <div className="flex flex-col items-center">
                <img src="/images/slide/Avatar.png" alt="Image" className="w-12 h-12 mb-2" />
                <h2 className="pt-2 text-sm font-bold">Colin Lucido</h2>
                <p className="pt-2 text-xs text-gray-500">UI Designer · <b>Interactive Media</b></p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>

          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>

        </Carousel>
      </div>

      <section className="px-6">

        <div className="flex flex-col justify-between w-full py-4 md:flex-row lg:flex-row">

          <div className="mb-4 md:w-1/2 lg:w-1/4 md:mb-0 lg:mb-0">
            <div className="">
              <h1 className="font-bold text-md lg:text-3xl md:text-3xl sm:text-2xl">
                Get started with<br />
                our service today.
              </h1>
              <p className="pt-4 pb-2 text-xs">
                The app helps teams create, track, and deliver faster.
              </p>
            </div>
          </div>

          <div className=" lg:w-1/4">
            <div className="max-w-sm">
              <div className="flex lg:flex-row">
                <TextInput
                  className="w-full mb-2 border-transparent md:w-46 text-slate-800"
                  id="email"
                  type="email"
                  placeholder="you@admin.com"
                  required
                />
                <Button
                  className="w-auto h-10 text-white bg-gray-800 lg:w-32"
                  size="xs"
                >
                  Get a Demo
                </Button>
              </div>
              <p className="pt-4 pb-2 text-xs text-slate-950">
                Already using our service?<b> Sign In</b>
              </p>
            </div>
          </div>

        </div>

      </section>
    </section>

  );
}
