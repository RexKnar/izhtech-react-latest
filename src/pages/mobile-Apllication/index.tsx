import { motion } from "framer-motion";
import { fadeIn } from "../../shared/animation/variants";
import Brandingheader from "../../shared/components/brandingPage/Brandingheader";
import Servicedetails from "../../shared/components/brandingPage/Servicedetails";
import Ourservice from "../../shared/components/brandingPage/Ourservice";
import Brandingdetails from "../../shared/components/brandingPage/Brandingdetails";
import { datas } from "../../shared/components/data/mobileaApplication";
export default function MobileApplication() {
    return <>
     <Brandingheader title={"Mobile Application"} />
    <Servicedetails company_details="At IZH Tech, we're good at making mobile apps just the way you like. We work closely with you to understand how you want your app to look and work. Your preferences guide us in creating an app that suits your style and meets the needs of your users. Trust IZH Tech to bring your app ideas to life, making your online presence better and keeping your users happy."

            header=""
            izhtech=""
            commitment=""
             commit_heading=""
        />

        <Brandingdetails datas={datas} />

        <Ourservice
            placeholder={<div className="lg:w-2/6">
            <motion.img src="/images/branding/OurService.jpg" alt=""  variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />
        </div>}
            heading="Connect today"
            content="Get in touch today to benefit and boost your brand in the digital world. At IZH Tech, we're committed to helping businesses succeed in the mobile era. Let us be your partner in creating mobile experiences that go beyond user expectations, guiding your business towards a brighter future.            " />
    
    </>
}