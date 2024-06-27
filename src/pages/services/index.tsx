import Ourservices from "./components/Ourservices";
import ImageFirstServiceBlock from "../../shared/components/ImageFirstServiceBlock";
import { useGetServicesListQuery } from "../../lib/queries/services/useGetServicesListQuery";


export default function Services() {
  const { data: servicesList} = useGetServicesListQuery();
  console.log(servicesList ,'sericelist');
  
  return (
    
    <section className="mx-auto overflow-hidden container-fluid ">
    <section className="px-5 mx-auto md:container ">
    
    <Ourservices />
    </section>
         
         {servicesList?.map((serviceDetail:any)=>{
           return (<ImageFirstServiceBlock key={serviceDetail.id} {...serviceDetail} />)
         }) }
        
        {/* <ImageFirstServiceBlock {...brandingContent} />
        <TextFirstServiceBlock {...webAppContent} />
        <ImageFirstServiceBlock {...mobileAppContent} />
        <TextFirstServiceBlock {...digitalMarketingContent} /> */}
      </section>

    
   
  );
}
