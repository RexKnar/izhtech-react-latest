import CustomObject from "../../shared/components/CustomObjects";
import Contactus from "./components/Contactus";
import Inquiry from "./components/Inquiry";
import Map from "./components/Map";

export default function Contact(){
    return(
        <>
      <section className="container mx-auto">
        <Contactus/>
        </section>
        <Map/>
        <section className="container relative py-10 mx-auto">
        <CustomObject className="absolute w-[45%] lg:w-[20%] right-0 -top-5 -z-10" variants="line-teal-up" />
        <div className="py-8">
        <Inquiry />
        </div>
        
        </section>
        </>
    )
} 