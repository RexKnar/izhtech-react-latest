
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

type propsType={
    parentClassName?:string | '',
    svgClassName?:string | '',
    ringColor?:string | 'purple'
}

export default function PieScroll({parentClassName, svgClassName, ringColor='purple'}:propsType) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });


// //   .progress {
//   position: sticky;
//   top: 0;
//   width: 80px;
//   height: 80px;
//   margin: 0;
//   padding: 0;
// }

// .progress svg {
//   transform: translateX(-100px) rotate(-90deg);
// }

// circle {
//   stroke-dashoffset: 0;
//   stroke-width: 5%;
//   fill: none;
// }
  return (
    // <section>
      <div ref={ref}>
        
        <figure className={` ${parentClassName}`}>
          <svg id="progress" className={` ${svgClassName} progress  stroke-${ringColor}-600`} width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className={`stroke-${ringColor}-50`}  />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    // </section>
  );
}