import { Award, BarChart, Building2, Cable, Calendar, CalendarClock, CircuitBoard, Codepen, Cog, DraftingCompass, Figma, FileTerminal } from "lucide-react";
import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";
export default function BrandingdetailsCopy() {
  const labels = [
    {
      id: 1,
      logo: <Figma />,
      title: "Logo Creation",
      text: " Your logo is the face of your brand. Our expert designers are dedicated to crafting a logo that encapsulates your brand's essence"
    },
    {
      id: 2,
      logo: <BarChart />,
      title: "Business Card Design",
      text: " A memorable business card is a powerful networking tool. We design cards that leave a lasting impression"
    },
    {
      id: 3,
      logo: <Building2 />,
      title: "Letterhead Design",
      text: "  Professionalism starts with your letterhead. We create designs that convey trust and credibility"
    },
    {
      id: 4,
      logo: <Cable />,
      title: "Banner Design",
      text: " Eye-catching banners for your website or marketing campaigns to capture attention effectively."
    },
    {
      id: 5,
      logo: <Calendar />,
      title: "App Icons",
      text: "Your app's icon is often the first thing users see. We design icons that make a strong first impression"
    },
    {
      id: 6,
      logo: <CalendarClock />,
      title: "Brand Typography",
      text: " Crafting the perfect font selection to align with your brand's voice and personality."
    },
    {
      id: 7,
      logo: <CircuitBoard />,
      title: "Brand Style Guide",
      text: " A comprehensive guide that ensures consistency in your brand's visual identity across all platforms."
    },
    {
      id: 8,
      logo: <Codepen />,
      title: "Color Palette",
      text: " Selecting a palette that evokes the right emotions and resonates with your target audience."
    },
    {
      id: 9,
      logo: <FileTerminal />,
      title: "Miscellaneous Assets",
      text: " Custom-designed graphics and assets tailored to your specific needs. "
    },
    ,
    {
      id: 10,
      logo: <Award />,
      title: "Social Media Graphics",
      text: "Engaging visuals for your social media profiles to enhance your online presence."
    },
    {
      id: 11,
      logo: <Cog />,
      title: "Ad Design Templates",
      text: "Templates for advertisements that maintain your brand's integrity.      "
    },
    {
      id: 12,
      logo: <DraftingCompass />,
      title: "Email Templates",
      text: "Professionally designed email templates to elevate your communication."
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