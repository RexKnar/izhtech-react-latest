import Brandingdetails from "../../shared/components/brandingPage/Brandingdetails";
import Brandingheader from "../../shared/components/brandingPage/Brandingheader";
import Ourservice from "../../shared/components/brandingPage/Ourservice";
import Servicedetails from "../../shared/components/brandingPage/Servicedetails";
import Ourservice2 from "../../shared/components/brandingPage/OurService2";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/animation/variants";
import { datas } from "../../shared/components/data/branding";

export default function Branding(){

    // const drandingList:any[]=[{
    //     title:'',
    //     description:'',
    //     icon:''
    // }]
    return (
       <>
            <Brandingheader title={"Branding"} />
            <Servicedetails izhtech="IZH-TECH" company_details="At Izh-Tech, we firmly believe that a robust brand is foundational to a successful business. Our unwavering commitment to this belief drives our dedication to providing a comprehensive array of branding and design services, aimed at not only establishing your brand but also fostering its growth over time."
                header="Your Partner for Crafting Enduring Brand Identities"
                commitment="Our commitment to your brand's success is reflected in our wide-ranging suite of services. Here's a closer look at what we offer:"
             commit_heading="Our Comprehensive Suite of Branding and Design Services"
            />
       <Brandingdetails datas={datas} />
        <Ourservice placeholder={<div className="lg:w-2/6">
            <motion.img src="/images/branding/OurService.jpg" alt=""  variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />
            </div>}
                heading="Tailor-Made Solutions for Every Business"
                content="Whether you're a burgeoning startup endeavoring to carve out your brand's presence or a well-established enterprise seeking to invigorate your image, we're here to provide tailor-made branding solutions tailored to your company's specific requisites. Our commitment is to work closely with you, ensuring that your brand mirrors your values, aspirations, and vision." />
      
            <Ourservice2 heading="Guiding Businesses to Forge Impactful Brands" content="Our fervor lies in guiding businesses to forge impactful, enduring brands. Connect with us to delve into the realm of Izh-Tech's branding and design services. Discover how we can collaborate with you to construct a formidable brand identity that effortlessly distinguishes itself within your industry." />
       </>
    )
}