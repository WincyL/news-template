import { motion } from "framer-motion";


export function FadeInParagraph(props: {text: string}){

    return (
        <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.5, duration: 2}}
            viewport={{once: true}}>
            {props.text}
        </motion.p>
    )
}