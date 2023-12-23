import { Tabs } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Progress } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
export default function Ourservice() {

  const customTheme: CustomFlowbiteTheme['tabs'] = {
    "base": "flex flex-row flex-wrap md:flex-col sm:flex-col lg:flex-row gap-2 md:gap-4 lg:gap-2 sm:justify-center md:justify-center",
    "tablist": {
      "base": "flex text-center mx-auto align-center lg:items-baseline lg:justify-start ",
      "styles": {
        "default": "flex-wrap border-b-0 border-r border-transparent dark:border-gray-700 ",
        "pills": "flex-wrap flex-col font-medium text-sm text-gray-500 dark:text-gray-400 bg-gray border-transparent space-x-2 ", 
      },
      "tabitem": {
        "styles": {
          "pills": {
            "base": "bg-transparent",
            "active": {
              "on": "text-black border-transparent border-red-600 hover:bg-gray-50 bg-transparent focus:outline-none border-r-2",
              "off": "text-black border-transparent bg-transparent hover:bg-gray-50",
            }
          }
        }
      }
    }
  }
  
  return (
    
    <section className="bg-gray-100">
<div className="text-center">
<p className="pt-4 pb-2 text-xs">
        #OUR SERVICE
        </p>
        <h1 className="pb-3 font-bold text-md lg:text-3xl md:text-3xl sm:text-3xl">
        What to expect?
        </h1>
      </div>

      <div className="w-full">
        <Tabs aria-label="Pills" style="pills" theme={customTheme} className="outline-none ">
          <Tabs.Item
            active
            title="Branding"
            className="outline-none"
          >
            <div className="flex flex-col items-start flex-1 p-4 sm:flex-row">
              {/* Card */}
              <Card className="max-w-sm" imgAlt="img" imgSrc="/images/Ourservice/Img.png">
                <div className="flex flex-col gap-2">
                  <div className="text-base font-medium dark:text-white">Website & Mobile</div>
                  <Progress progress={45} size="sm" className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative" />
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Packed with API features you will love to <br /> collaborate with issues and change business.
                </p>
              </Card>

              {/* Right */}
              <div className="flex-1 mt-4 sm:ml-4">
                <div className="flex flex-col w-full px-2 gap- lg:justify-center">

                  <div className="flex flex-col border-slate-600 md:flex-1 lg:w-full ">
                    <img src="/images/Ourservice/icon1.png" alt="Image" className="w-12 h-12 mt-5" />
                    <h2 className="pt-2 text-sm font-bold">1. Create a Free Account</h2>
                    <p className="pt-2 pb-3 text-xs">Spaces of each debt in the digital world can help you with overall <br /> simplest authentic.<b>Go to Sign Up / Create an Account.</b> </p>
                  </div>

                  <div className="flex flex-col mt-4 md:flex-1 lg:w-full border-slate-600 sm:mt-0">
                    <img src="/images/Ourservice/icon2.png" alt="Image" className="w-12 h-12 mt-5" />
                    <h2 className="pt-2 text-sm font-bold">2. Generate an API key for your app</h2>
                    <p className="pt-2 pb-3 text-xs">To achieve best results in the digital world can help you with overall  <br />
                      сreate an API Key.<b>Spaces of each debt in the.</b> </p>
                  </div>

                  <div className="flex flex-col mt-4 md:flex-1 lg:w-full border-slate-600 sm:mt-0">
                    <img src="/images/Ourservice/icon3.png" alt="Image" className="w-12 h-12 mt-5" />
                    <h2 className="pt-2 text-sm font-bold">3. That’s it!</h2>
                    <p className="pt-2 pb-3 text-xs">Now you can use the app and improve your scores..</p>
                  </div>

                </div>
              </div>
            </div>

          </Tabs.Item>
          <Tabs.Item title="Web development" className="outline-none">
          </Tabs.Item>
          <Tabs.Item title="Mobile app" className="outline-none">
            <p className="text-sm text-gray-500 dark:text-gray-400">tab3</p>
          </Tabs.Item>
          <Tabs.Item title="Digital marketing" className="outline-none">
            <p className="text-sm text-gray-500 dark:text-gray-400">tab 4</p>
          </Tabs.Item>
        </Tabs>
      </div>

    </section>
  );
}
