import { motion } from "framer-motion";
import { fadeIn } from "../../shared/animation/variants";
import Brandingheader from "../../shared/components/brandingPage/Brandingheader";
import Servicedetails from "../../shared/components/brandingPage/Servicedetails";
import Ourservice from "../../shared/components/brandingPage/Ourservice";
import Ourservice2 from "../../shared/components/brandingPage/OurService2";
import Brandingdetails from "../../shared/components/brandingPage/Brandingdetails";
import { datas } from "../../shared/components/data/digitalmarketing";



export default function DigitalMarketing() {
    return <>
     <Brandingheader title={"Digital Marketing"} />
    <Servicedetails company_details="If you want more people to visit your website, get interested customers, or make more sales online, Izh-Tech is here to help. We're experts at making your online strategy better. Let us be your guide in the online world, making sure you not only reach your goals but go beyond them. Join hands with Izh-Tech, and together, we'll make your online presence a big success. Your journey to growing online starts now!"

            header="Enhance Your Digital Presence with Expert Digital Marketing Strategies"
            izhtech=""
            commitment=""
             commit_heading=""
        />
         <Brandingdetails datas={datas} />

        <Ourservice
            placeholder={<div className="lg:w-2/6">
            <motion.img src="/images/branding/OurService.jpg" alt="" className="rounded-2xl"  variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />
        </div>}
            heading="Navigating the World of Online Opportunities with IZH Tech"
            content="In today's digital world, it's important for businesses to be online. At IZH Tech, we offer services to help your business do well on the internet. We make your website show up on search engines, create ads that work, connect with people on social media, and send emails that people like. Our team uses the latest tricks to make sure your business gets noticed online and reaches the right people at the right times.  " />
    
        <Ourservice2 heading="Uniqueness Unleashed: Tailored Strategies with IZH Tech" content="At IZH Tech, we understand every business is unique. We work closely with you to learn your goals, target audience, and competition. With this knowledge, we create a special plan just for your business. Our aim is to make your business stand out online and achieve measurable success."/>

    </>

}