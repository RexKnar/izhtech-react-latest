import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";
import { ServicesHighlightsModal } from "../../../lib/domains/serviceHighlights";



export default function Ourservice({datas }:ServicesHighlightsModal) {
  console.log(datas)
  
  return (
    <section>
      {datas.map((item:ServicesHighlightsModal,index:number) => {
        console.log(item);
        if(index%2==0){
      return  (
      <div className="container lg:mx-auto lg:px-16 px-2 py-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-16 md:items-center lg:justify-center">
        <motion.img src={`${import.meta.env.VITE_BASE_URL}/${item?.imagePath}`} alt="" className="rounded-lg" variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />

          <motion.div className="lg:w-3/6 md:px-14 lg:px-2" variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p className="text-xs font-medium tracking-wide"></p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
              { item.name}
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify" dangerouslySetInnerHTML={{ __html: item?.description }} >
            </p>
          </motion.div>
        </div>
      </div>
      )
    }
    else{
      return  (
        <div className="container lg:mx-auto lg:px-16 px-2 bg-teal-50 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-16 md:items-center lg:justify-center">              
            <motion.div className="lg:w-3/6 md:px-14 lg:px-2" variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="text-xs font-medium tracking-wide"></p>
              <p className="xl:text-6xl text-4xl font-bold pb-2.5">
                { item.name}
              </p>
              <p className="text-sm leading-7 tracking-wider text-justify" dangerouslySetInnerHTML={{ __html: item?.description }} >
              </p>
            </motion.div>
            <motion.img src={`${import.meta.env.VITE_BASE_URL}/${item?.imagePath}`} alt="" className="rounded-lg" variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden" />
          </div>
        </div>
        )
      }
      })}
    </section>
  );
}
