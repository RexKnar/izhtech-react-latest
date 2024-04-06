import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";
export default function Brandingdetails({ datas }:any) {
  
  interface items{
    id: number,
    logo: any,
    title: string,
    text:string
  }
 
  return <div className="w-full bg-black text-white grid justify-center items-center mx-auto  ">
  <div className="grid lg:grid-cols-3 lg:gap-14 py-[4rem] p-16 gap-[3.3rem]  " >
      {datas.map((item:items) => {
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