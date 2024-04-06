import { useMotionValueEvent, useScroll,motion } from "framer-motion";
import { useEffect, useState } from "react";



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
    
  if (scrollValue <= 1000) {
  scrollIndicator=null
}
  else if (scrollValue > 1000 && scrollValue < 2300 ) {
 
   scrollIndicator= <div className="w-[20px] h-[50px] bg-black"></div>
  }
  else if (scrollValue > 2300 && scrollValue < 3700) {

    scrollIndicator = <div className="w-[20px] h-[70px] bg-black"></div>
    
  }
  else {
    scrollIndicator = <div className="w-[20px] h-[100px] bg-black"></div>
  }

  
  

  return <>
    
    <motion.div className="fixed cursor-pointer rounded-2xl"  onClick={handleScroll}>
    <div className="w-[20px] h-[100px] bg-slate-300 ml-10 ">
    {scrollIndicator}
      </div>
      {scrollPage && <p className=" ">Back to Top</p> }

    </motion.div>
    
  
  </>

}

