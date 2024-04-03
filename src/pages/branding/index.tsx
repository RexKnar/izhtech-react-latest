import Brandingdetails from "./components/Brandingdetails";
import Brandingheader from "./components/Brandingheader";
import Ourservice from "./components/Ourservice";
import Servicedetails from "./components/Servicedetails";
import Ourservice2 from "./components/ourService2";

export default function Branding(){
    return (
       <>
       <Brandingheader />
       <Servicedetails />
       <Brandingdetails />
        <Ourservice />
        <Ourservice2 />
       </>
    )
}