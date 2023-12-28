import Brandingdetails from "./components/Brandingdetails";
import Brandingheader from "./components/Brandingheader";
import Ourservice from "./components/Ourservice";
import Servicedetails from "./components/Servicedetails";

export default function Branding(){
    return (
       <>
       <Brandingheader />
       <Servicedetails />
       <Brandingdetails/>
       <Ourservice/>
       </>
    )
}