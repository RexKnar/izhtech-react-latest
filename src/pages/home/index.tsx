import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Partnercompany from "./components/partnercompany";
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
       <div className="container mx-auto">
       <section className="pt-6">
       <Hero/>
       </section>
       
       
       <section className="grid w-full bg-sky-100">
       <Feature />
       </section>
       
       <section className="grid w-full bg-white">
       <Partnercompany />
       </section>
       
       <section className="px-12 pt-12 bg-blue-100">
       <Banner />
       </section>
       
       <section className="flex items-center justify-center py-4 bg-white">
       <Missionstatement />
       </section>
       
       <section className="py-4 bg-gray-100">
       <Platforminsights />
       </section>
       
       <section className='py-8'>
       <Cards />
       </section>

       <section className="bg-gray-100">
       <Ourservice />
       </section>
       
       <section className='px-3 '>
       <Process/>
       </section>
       
       <section className="py-6">
       <Slider/>
       </section>
       </div>
       </>
    )
}
