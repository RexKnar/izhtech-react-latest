import Brandingheader from "../../shared/components/brandingPage/Brandingheader";
import Servicedetails from "../../shared/components/brandingPage/Servicedetails";
import Ourservice from "../../shared/components/brandingPage/Ourservice";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/animation/variants";
import Ourservice2 from "../../shared/components/brandingPage/OurService2";
import Brandingdetails from "../../shared/components/brandingPage/Brandingdetails";
import { datas } from "../../shared/components/data/webApplication";


export default function WebApplication() {
    return   <>
    <Brandingheader title={"Web Application"} />
    <Servicedetails company_details="At IZH Tech, we create custom websites and provide programming services for all types of businesses, whether B2B or B2C. We have a variety of services to choose from to meet different needs. Our skilled team is dedicated to making personalized solutions for each client, ensuring a strong online presence. From designing websites to programming, we offer a complete set of services to help businesses succeed in the digital world
"
            header=""
            izhtech=""
            commitment=""
           commit_heading=""
        />

        <Brandingdetails datas={datas} />
        

     <Ourservice placeholder={<div className="lg:w-2/6">
            <motion.img src="/images/branding/OurService.jpg" alt=""  variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />
        </div>}
            heading="Tech Innovation Mastery"
            content="Our skilled team of experienced developers and designers has extensive knowledge in using modern technologies such as React.js, Angular, Express.js, Node, ASP.NET Core, Python, MySQL, SQL Server, MongoDB, AWS, and GitHub. With these advanced tools, we carefully create visually appealing, user-friendly, and strong-performing websites. These sites are fine-tuned to work well on different devices and improved for better visibility on search engines.
            " />
        
        <Ourservice2 heading="Exceptional Customer Commitment" content="At Izh-Tech, we believe that every business, big or small, deserves excellent customer service. That's why we prioritize customer satisfaction by delivering customized web solutions tailored to your unique business needs. Whether you're a startup or an established company, our commitment is strong—to provide personalized web solutions that suit your specific requirements. Partner with Izh-Tech to experience the positive effect of our knowledge in web design and development. Your digital success is our main focus, and we're here to make it happen." />
</>
}