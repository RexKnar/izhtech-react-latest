import Brandingdetails from "../../shared/components/brandingPage/Brandingdetails";
import Brandingheader from "../../shared/components/brandingPage/Brandingheader";
import Ourservice from "../../shared/components/brandingPage/Ourservice";
import Servicedetails from "../../shared/components/brandingPage/Servicedetails";
// import Ourservice2 from "../../shared/components/brandingPage/OurService2";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../shared/animation/variants";
import { usegetServiceByIdQuery } from "../../lib/queries/services/useGetServiceByIdQuery";
import { useParams } from "react-router-dom";


export default function Branding(){

    const { id: serviceId } = useParams();
  
    const { data: serviceIdResponse } = usegetServiceByIdQuery(
        serviceId,
      {
        enabled: !!serviceId,
      }      
    );
    
    
    if(serviceIdResponse){
      return (
        <>
        <section className="px-3 mx-auto md:container ">
         <Brandingheader title={serviceIdResponse?.title} />
        </section>
             
             <Servicedetails 
             izhtech="IZH-TECH" 
             description={<div dangerouslySetInnerHTML={{ __html: serviceIdResponse?.description }}/>}
             featuredImagePath={`${import.meta.env.VITE_BASE_URL}/${serviceIdResponse?.featuredImagePath}`}
             />
             <section className="px-3 mx-auto w-full bg-black ">
             <div className=" text-white grid justify-center items-center mx-auto  ">
             <Brandingdetails datas={ serviceIdResponse?.serviceFeatures } />
             
             
             </div>
             </section>
       
         <Ourservice datas={serviceIdResponse?.serviceHighlights}/>
       
             {/* <Ourservice2 heading="Guiding Businesses to Forge Impactful Brands" content="Our fervor lies in guiding businesses to forge impactful, enduring brands. Connect with us to delve into the realm of Izh-Tech's branding and design services. Discover how we can collaborate with you to construct a formidable brand identity that effortlessly distinguishes itself within your industry." /> */}
        </>
     )
    }

  
}