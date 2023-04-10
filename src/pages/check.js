import { easeIn, motion } from "framer-motion"

const Check = () => {
    const per = 55 + (120 * 50 / 100)
    console.log(per);
    return (

        <svg >
            <circle cx="20" cy="20" r="20" strokeWidth={7} className="fill-transparent stroke-blueAccent-400 w-full h-full translate-x-1 translate-y-1"></circle>
            <motion.circle cx="20" cy="20" r="20" strokeWidth={7} className="fill-transparent stroke-greenAccent-400 w-full h-full translate-x-1 translate-y-1" strokeLinecap="round" strokeDasharray={175} strokeDashoffset={55} initial={{ strokeDashoffset: 175 }} animate={{ strokeDashoffset: per }} transition={{ duration: 1, delay: 0.5, ease: easeIn }}></motion.circle>

        </svg>
    )
}
export default Check

