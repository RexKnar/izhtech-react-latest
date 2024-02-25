import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";

export default function feature() {
    return (
        <section>
            <div className="container flex flex-col w-full py-8 mx-auto md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">
                <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }}  className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/branding.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Branding</h2>
                    <p className="pt-2 text-xs text-center">Craft resonant brand identities.<br/> Guide through elevated brand experiences.</p>
                </motion.div>
                <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/digitalmarketing.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Digital Marketing</h2>
                    <p className="pt-2 text-xs text-center">Elevate site appeal, enhance visibility, <br/>generate leads with digital mastery.</p>
                </motion.div>
                <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/webapp.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Web Application</h2>
                    <p className="pt-2 text-xs text-center">Lead in digital solutions.<br/> Rewards drive continuous enterprise improvement.</p>
                </motion.div>
                <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/mobileapp.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Mobile App</h2>
                    <p className="pt-2 text-xs text-center">Master digital debts. Apps boost efficiency, elevate communication, engage customers.</p>
                </motion.div>
                
            </div>
        </section>
    );
}