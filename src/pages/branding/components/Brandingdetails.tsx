import { Award, BarChart, Building2, Cable, Calendar, CalendarClock, CircuitBoard, Codepen, Cog, DraftingCompass, Figma, FileTerminal } from "lucide-react";
import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants";
export default function BrandingdetailsCopy() {
  const labels = [
    {
      id: 1,
      logo: <Award />,
      title: "Award",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 2,
      logo: <BarChart />,
      title: "Barchart",
      text: "A memorable business card is a powerful networking tool. We design cards that leave a lasting impression."
    },
    {
      id: 3,
      logo: <Building2 />,
      title: "building",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 4,
      logo: <Cable />,
      title: "cable",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 5,
      logo: <Calendar />,
      title: "calender",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 6,
      logo: <CalendarClock />,
      title: "calenderClock",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 7,
      logo: <CircuitBoard />,
      title: "circuit",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 8,
      logo: <Codepen />,
      title: "codepen",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 9,
      logo: <FileTerminal />,
      title: "Award",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    ,
    {
      id: 10,
      logo: <Figma />,
      title: "Logo Creation",
      text: "Your logo is the face of your brand. Our expert designers are dedicated to crafting a logo that encapsulates your brand&#39;s essence."
    },
    {
      id: 11,
      logo: <Cog />,
      title: "Award",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    },
    {
      id: 12,
      logo: <DraftingCompass />,
      title: "Award",
      text: " Let's unlock your true potential and fuel your brand's growth together!"
    }


  ]

  return <div className="w-full bg-black text-white grid justify-center items-center mx-auto  ">
  <div className="grid lg:grid-cols-3 lg:gap-14 py-[4rem] p-16 gap-[3.3rem]  " >
  {labels.map((item) => {
      return <motion.li key={item?.id} className=" list-none  " variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      exit="hidden">
         <div className="w-[50px] h-[50px] bg-neutral-600 flex justify-center items-center rounded-full"> <p >{item?.logo}</p></div>
          <h1 className="text-slate-50 font-bold text-[1.2rem]">{item?.title}</h1>
          <p className="text-slate-300">{ item?.text}</p>

      </motion.li>
  
  })}
    </div>
    </div>


}