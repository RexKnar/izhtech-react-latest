import { motion } from "framer-motion"
import { fadeIn } from "../animation/variants"
import { Accordion } from "flowbite-react"
import  { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

type accordionContent={
    header: string,
    content:string
    
}

export default function AccordionPage({header,content}:accordionContent) {

    const PlusIcon = () => <FontAwesomeIcon icon={faPlus} />
    const MinusIcon = () => <FontAwesomeIcon icon={faMinus} />


    const [isOpen, setIsOpen] = useState(false)
    

    function handleClick() {
        setIsOpen(prev=>!prev)
        
    }


    return <>
        <motion.span variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            exit={"hidden"}
            viewport={{ once: false, amount: 0.1 }} >
            <Accordion collapseAll className="border-none outline-none"  arrowIcon={isOpen ? MinusIcon : PlusIcon}>
                <Accordion.Panel isOpen={isOpen}>


                    <Accordion.Title className="text-black " onClick={handleClick}>
                        <span className="flex items-center">
                            <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                        { header}
                        </span>
                    </Accordion.Title>
                    <Accordion.Content  hidden={isOpen ? false :true}>
                        <p className="text-xs text-black">
                            { content}</p>


                    </Accordion.Content>

                </Accordion.Panel>
            </Accordion>
        </motion.span>
        </>
    
}


