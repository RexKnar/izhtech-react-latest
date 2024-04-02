
import Client1 from "./components/Client1";
import Client2 from "./components/Client2";
import Labels from "./components/Labels";
import Patner from "./components/Patner";

export default function Brandingpage() {
    return<>
        <div className="mt-[2rem] ml-[2rem] ">
            <h3 className="text-[1.2rem]  ">Our Services</h3>
            <h1 className="text-[3rem] ">Branding</h1>
        
        </div>


    <div className="lg:w-full mx-auto m-h-screen  lg:px-[3rem] my-[2rem]">
        <Patner />
        </div>
        
        <Labels />

        <div className="my-[4rem]">
        <Client1 />
        </div>
        <div className="my-[4rem]">
            <Client2 />
        </div>

     
     

        </>


}