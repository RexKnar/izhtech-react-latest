import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Partnercompany from "./components/Partnercompany";
import Banner from "./components/Banner";
import Missionstatement from "./components/Missionstatement";
import Platforminsights from "./components/Platforminsights";
import Cards from "./components/BlogList";
import Ourservice from "./components/Ourservice";
import Process from "./components/Process";
import Slider from "./components/Slider";

export  default function Home(){

    return (
       <>
       <Hero/>
       <Feature />
       <Partnercompany />
       <Banner />
       <Missionstatement />
       <Platforminsights />
       <Cards />
       <Ourservice />
       <Process/>
       <Slider/>
       </>
    )
}
