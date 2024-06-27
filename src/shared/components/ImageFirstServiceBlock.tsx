

import { fadeIn } from "../animation/variants";
import { motion } from "framer-motion";
import Counter from "../animation/Counter";
import  Accordion  from "./Accordion";
import { LinkButton } from "./buttons/LinkButton";
import { ServicesModal } from "../../lib/domains/services";


export default function ImageFirstServiceBlock(props: ServicesModal) {
  const {id,title,shortNote,featuredImagePath,serviceHighlights} = props;
  
  return (
    <section className="container-fluid ">
      <div className="flex flex-col items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-5">
        <motion.div  variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"} 
              viewport={{ once: false, amount: 0.1 }} style={{ backgroundImage: `url('${import.meta.env.VITE_BASE_URL}/${featuredImagePath}')` }} className={`w-[100%] bg-no-repeat flex bg-cover h-[20rem] lg:w-1/2 lg:h-[40rem] `}>
              
          <div className="flex items-end self-end justify-end hidden">
            <div className="grid justify-center p-6 text-white bg-indigo-950 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon2.png"
                  alt="Example Image"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl"> <Counter value={35} direction="up" />+</h1>
              </div>
              <p className="pt-2 text-xs">designers and developers</p>
            </div>
            <div className="grid justify-center p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon1.png"
                  alt="Example Image"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl"> <Counter value={28} direction="up" />+</h1>
              </div>
              <p className="pt-2 text-xs">awards for digital innovation</p>
            </div>
          </div>
        </motion.div>
        <motion.div  variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="w-full px-5 py-10 lg:py-0 md:flex-1 lg:w-1/2 lg:w-1/4 lg:pe-20 xl:pe-36">
          <p className="pb-2 text-xs">OUR SERVICES</p>
          <h1 className="pb-2 text-3xl font-bold"> {title}</h1>
          <div dangerouslySetInnerHTML={{ __html: shortNote }} />
          {/* <p className="pb-6 text-xs" dangerouslySetInnerHTML={{__html:shortNote}}></p> */}


           <Accordion items={serviceHighlights} />
      
          

          <LinkButton href={`/service-detail/${id}`} size={'sm'} >Know more</LinkButton>

        </motion.div>
      </div>
    </section>
  );
}
