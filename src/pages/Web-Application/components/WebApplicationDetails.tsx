import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants"




export default function WebApplicationDetails() {

    const details = [
        {
            id:1,
            title: 'Your tailored digital solutions',
            description:" We're experts at making personalized websites and apps that match exactly what your business needs"
        },
        {
            id:2,
            title: "E-commerce Websites ",
            description:" We create e-commerce solutions to help businesses succeed online, providing smooth shopping experiences for customers in the digital marketplace."
        },
        {
            id:3,
            title: "ERP(Enterprise Resource Planning)",
            description:" Make your business run smoother using our ERP solutions, improving efficiency and getting more done."
        },
        {
            id:4,
            title: "CRM(Customer Relationship Management) ",
            description:"Building strong, lasting relationships with your customers through our CRM systems "
        },
        {
            id:5,
            title: "HRM(Human Resource Management)",
            description:" Simplify HR processes and management with our HRM solutions            "
        },
        {
            id:6,
            title: "Redesign Solutions",
            description:" Refresh your online image with our website redesign services to keep your brand updated and appealing."
        },
        
        
      ]


    return <>
        <div className="container m-h-screen bg-black text-white grid justify-center items-center mx-auto gap-8 ">
            <div className="my-[4rem] grid gap-8">
            {details.map((item) => {
                return <motion.li key={item?.id} className="list-none " variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                >
                    <h3 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">{item?.title}</h3>
                    <p className="">{ item?.description}</p>
              </motion.li>
          })}
            </div>
          
    </div>
    </>
}