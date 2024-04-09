import { Tabs } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import BrandingService from "./branding/BrandingService";
import WebDevelopmentService from "./webdevelopment/WebDevlopmentService";
import MobileAppService from "./mobileapp/MobileAppService";
import DigitalMarketingService from "./digitalmarketing/DigitalMarketingService";
export default function Ourservice() {
  const customTheme: CustomFlowbiteTheme["tabs"] = {
    base: "flex flex-col ring-transparent align-start md:flex-col  lg:flex-row gap-2 md:gap-4 lg:gap-2 sm:justify-center md:justify-start",
    tablist: {
      base: "flex text-center mt-8 ring-transparent align-left lg:items-baseline lg:justify-start justify-center ",
      styles: {
        default:
          "flex-wrap border-b-0 border-r rounded-none ring-transparent border-transparent dark:border-gray-700 ",
        pills:
          "flex-wrap text-left lg:flex-col font-medium text-sm ring-transparent rounded-none text-gray-500 dark:text-gray-400 bg-gray border-transparent space-x-2 ",
      },
      tabitem: {
        
        styles: {
          
          pills: {
            
            base: "text-left bg-transparent rounded-none lg:w-full justify-start !focus:outline-none ring-transparent",
            active: {
              on: "text-black border-transparent border-[#FFD074] hover:bg-gray-50 bg-transparent ring-transparent !focus:outline-none border-b-2 lg:border-r-2 lg:border-b-0",
              off: "text-black border-transparent bg-transparent hover:bg-gray-50",
            }
          },
        },
      },
    },
    tabitemcontainer: {
      base: "",
      styles: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: ""
      }
    },
    tabpanel: ""
  };

  return (
    <section className="lg:px-10 pb-20 pt-28 bg-[#F5F7FF] rounded">
   {/* <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">  */}
    <div className="relative py-10">
      
          {/* <GroupLine  svgClassName="-rotate-90 -translate-x-60 xl:w-[10vw] xl:h-[10vw] w-[20vw] h-[20vw] "
            ringColor="purple"
            parentClassName=" absolute z-50 -right-60 md:-right-50"
      {/* <PieScroll
            svgClassName="-rotate-90 -translate-x-60 xl:w-[10vw] xl:h-[10vw] w-[20vw] h-[20vw] "
            ringColor="purple"
            parentClassName=" absolute z-50 -right-60 md:-right-50"
          />
          <GroupLine  svgClassName="-rotate-90 -translate-x-60 xl:w-[10vw] xl:h-[10vw] w-[20vw] h-[20vw] "
            ringColor="purple"
            parentClassName=" absolute z-50 -right-60 md:-right-50"
          /> */}
      <div className="text-center ">
        <p className="pt-4 pb-2 text-xs">#OUR SERVICE</p>
        <h1 className="pb-3 font-bold text-md lg:text-3xl md:text-3xl sm:text-3xl">
          What to expect? 
          
        </h1>
        
      </div>

      <div className="w-full lg:pl-10">
        <Tabs
          aria-label="Pills"
          style="pills"
          theme={customTheme}
          className="outline-none "
        >
          <Tabs.Item active title="Branding" className="outline-none">
            <BrandingService />
          </Tabs.Item>
          <Tabs.Item
            title="Web development"
            className="outline-none"
          ><WebDevelopmentService /></Tabs.Item>
          <Tabs.Item title="Mobile app" className="outline-none">
            <MobileAppService />
          </Tabs.Item>
          <Tabs.Item title="Digital marketing" className="outline-none">
            <DigitalMarketingService/>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
    {/* // </div> */}
    </section>
  );
}
