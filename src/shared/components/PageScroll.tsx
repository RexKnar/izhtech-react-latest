import { useMotionValueEvent, useScroll,motion } from "framer-motion";
import { useEffect, useState, } from "react";



export default function Item() {

  let scrollIndicator
  let value;

  const [scrollValue, setScrollValue] = useState(0)
  const [scrollPage,setScrollPage]=useState(false)
 
  const { scrollY } = useScroll();

  useEffect(() => {
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setScrollPage(true)
      }
      else if(window.scrollY >3500) {
        setScrollPage(false)
      }
      else {
        setScrollPage(false)
      }
    })
},[scrollValue])


    useMotionValueEvent(scrollY, "change", (latest) => {
  
      value = Math.round(latest)
      setScrollValue(value)
    })
  
  

  console.log(scrollValue);
  
  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
  }
    
  if (scrollValue <= 700) {
  scrollIndicator=null
}
  else if (scrollValue > 700 && scrollValue < 1800 ) {
 
    scrollIndicator = <motion.div  className=" bg-black " animate={{ width: "30px", height: "10px",borderRadius:"20px" }} 
    ></motion.div>
  }
  else if (scrollValue >= 1800 && scrollValue <= 3600) {

    scrollIndicator = <motion.div  className=" bg-black " animate={{ width: "65px", height: "10px",borderRadius:"20px" }} ></motion.div>
    
  }
  else {
    scrollIndicator = <motion.div  className=" bg-black " animate={{ width: "100px", height: "10px",borderRadius:"20px" }} 
    ></motion.div>
  }

  
  

  return <>
    
   {scrollPage &&  <motion.div className=" fixed cursor-pointer rounded-2xl mt-[8rem]  ml-8  rotate-90 " layoutId="pointer" >

<motion.div className="  w-[100px] h-[10px] bg-slate-300  mt-[5rem] "  animate={{borderRadius:"20px"}} >
 {scrollIndicator}
 
</motion.div>
<p className=" cursor-pointer"  onClick={handleScroll} >Back to top</p>

</motion.div>
}
  
      </>
      

}

