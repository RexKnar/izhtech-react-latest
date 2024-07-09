
import Ourservice from "../../shared/components/brandingPage/Ourservice";

import ServiceHeader from "./serviceHeader";
import Details from "./components/details";
import { useParams } from "react-router-dom";
import { usegetServiceByIdQuery } from "../../lib/queries/services/useGetServiceByIdQuery";


export default function ServiceDetail() {
 
    
        
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

<section className="px-5 mx-auto md:container ">
        <ServiceHeader title={"Web Application"} />
    </section>
    <section>
           <Details 
                izhtech="IZH-TECH"
                description={serviceIdResponse?.description || ""}
                featuredImagePath={`${import.meta.env.VITE_BASE_URL}/${serviceIdResponse?.featuredImagePath}`}
                header={""}        />
           <section className="px-3 mx-auto w-full bg-black ">
           <div className=" text-white grid justify-center items-center mx-auto  ">
           {/* <Brandingdetails datas={ serviceIdResponse?.serviceFeatures } /> */}
           
           
           </div>
           </section>
     </section>
       {/* <Ourservice datas={serviceIdResponse?.serviceHighlights}/> */}
     
           {/* <Ourservice2 heading="Guiding Businesses to Forge Impactful Brands" content="Our fervor lies in guiding businesses to forge impactful, enduring brands. Connect with us to delve into the realm of Izh-Tech's branding and design services. Discover how we can collaborate with you to construct a formidable brand identity that effortlessly distinguishes itself within your industry." /> */}
      </>
   )
  }


}
  