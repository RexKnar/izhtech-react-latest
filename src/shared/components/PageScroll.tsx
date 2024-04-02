import { useEffect, useState } from "react";

export default function PageScroll() {

  const [scrollTop, setScrollTop] = useState(false);
  const [scrollIndicator, setScrollIndicator] = useState(0);


    useEffect(() => {
      window.addEventListener("scroll", () => {
        
        if (window.scrollY > 100) {
      setScrollTop(true)
      
    }
    else {
      setScrollTop(false)
    }
      })
      
      if (window.scrollY > 100) {
        setScrollIndicator(1);
      } else if (window.scrollY > 200) {
        setScrollIndicator(2);
    
      } else if (window.scrollY > 300) {
        setScrollIndicator(3)
      }
    
      
    }, [scrollIndicator])
 
    function scrollUp() {
  
      window.scrollTo({
        top: 0,
        behavior:"smooth"
      })
  }

  console.log();
  
  
  
    return <div className="fixed bottom-[50%] left-0  cursor-pointer -rotate-90" onClick={scrollUp} >
        
      {scrollTop && <button className=" text-[0.8rem]  ">Back to Top</button>}
      <div className={`w-[6rem] h-[1rem] bg-zinc-400`}>
        <div className={`w-[${scrollIndicator===1?2:scrollIndicator===2?4:scrollIndicator===3?6:0}rem] h-[1rem] bg-black`}></div>
      </div>
  
  </div>
}