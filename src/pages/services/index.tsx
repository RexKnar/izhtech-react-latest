import Ourservices from "./components/Ourservices";
import ImageFirstServiceBlock from "../../shared/components/ImageFirstServiceBlock";
import ImageSecondServiceBlock from "../../shared/components/ImageSecondServiceBlock";
import { useGetServicesListQuery } from "../../lib/queries/services/useGetServicesListQuery";
import { ServicesModal } from "../../lib/domains/services";


export default function Services() {
  const { data: servicesList} = useGetServicesListQuery();
  console.log(servicesList);
  
  return (
    
    <section className="mx-auto overflow-hidden container-fluid ">
    <section className="px-5 mx-auto md:container ">
    
    <Ourservices />
    </section>
         
         {servicesList?.map((serviceDetail:ServicesModal,index:number) => {
           if(index%2==0){
           return (<ImageFirstServiceBlock key={serviceDetail.id} {...serviceDetail} />)
           }
           else{
           return (<ImageSecondServiceBlock key={serviceDetail.id} {...serviceDetail} />)
           }
         }) }

    </section>

    
   
  );
}
