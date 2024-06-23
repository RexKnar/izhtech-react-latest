import { motion, useScroll } from "framer-motion";

export default function PageScroll() {
  const { scrollYProgress } = useScroll();
  
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <><div className="fixed z-50 flex top-[40%] flex-col cursor-pointer  h-2/6 justify-end hidden md:block">
      <p
        className="-rotate-90 "
        onClick={handleScrollToTop}
      >
        Back to top
      </p>
      <motion.div
        className="w-1 bg-black h-[100px]  ml-9 mt-9  rounded-2xl  rotate-90"
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }} />

    </div>
    <div className="fixed bottom-0 z-50 flex justify-center gap-5 p-3 cursor-pointer md:hidden">
        <p
          onClick={handleScrollToTop}
        >
          Back to top
        </p>
        <motion.div
          className="h-1 bg-black w-[100px]  my-auto  rounded-2xl  "
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }} />

      </div></>
  );
}
