import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";
import Ourclients from "./components/Ourclients";
import Testimonials from "./components/Testimonials";
import Awards from "./components/Awards";
import Counts from "./components/Counts";
import Ourteam from "./components/Ourteam";
import Collaborate from "./components/Collaborate";



export  default function About(){

    return (
       <>
       <Aboutus />
       <Banner />
       <Capabilities/>
       <Ourclients/>
       <Testimonials/>
       <Awards/>
       <Counts/>
       <Ourteam/>
       <Collaborate/>
       </>
    )
}