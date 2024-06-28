import Ourservices from "./components/Ourservices";
import ImageFirstServiceBlock from "../../shared/components/ImageFirstServiceBlock";
import { useGetServicesListQuery } from "../../lib/queries/services/useGetServicesListQuery";
import { ServicesModal } from "../../lib/domains/services";


export default function Services() {
  const { data: servicesList} = useGetServicesListQuery();
  console.log(servicesList ,'sericelist');
  
  return (
    
    <section className="mx-auto overflow-hidden container-fluid ">
    <section className="px-5 mx-auto md:container ">
    
    <Ourservices />
    </section>
         
         {servicesList?.map((serviceDetail:ServicesModal)=>{
           return (<ImageFirstServiceBlock key={serviceDetail.id} {...serviceDetail} />)
         }) }

    </section>

    
   
  );
}
