import { easeIn, motion } from "framer-motion"

const CircularBar = ({ percent }) => {
    const per = 120 - (120 * percent / 100)
    return (

        <svg className="w-12 h-12">
            <circle cx="20" cy="20" r="20" strokeWidth={7} className="fill-transparent stroke-blueAccent-400 w-full h-full translate-x-1 translate-y-1"></circle>
            <motion.circle cx="20" cy="20" r="20" strokeWidth={7} className="fill-transparent stroke-greenAccent-400 w-full h-full translate-x-1 translate-y-1" strokeLinecap="round" strokeDasharray={120} initial={{ strokeDashoffset: 120 }} animate={{ strokeDashoffset: per }} transition={{ duration: 1, delay: 0.5, ease: easeIn }} ></motion.circle>

        </svg>
    )
}



export default CircularBar

