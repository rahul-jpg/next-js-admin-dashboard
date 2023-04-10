import { easeIn, motion } from "framer-motion"

const BigCircularBar = () => {
    const SIZE = 55
    const per = 338 - (338 * 80 / 100)
    return (
        <svg className="w-32 h-32">
            <circle cx={SIZE} cy={SIZE} r={SIZE} strokeWidth={15} className="fill-transparent stroke-blueAccent-400 w-full h-full translate-x-2 translate-y-2"></circle>
            <motion.circle cx={SIZE} cy={SIZE} r={SIZE} strokeWidth={15} className="fill-transparent stroke-greenAccent-400 w-full h-full translate-x-2 translate-y-2" strokeLinecap="round" strokeDasharray={338} initial={{ strokeDashoffset: 338 }} animate={{ strokeDashoffset: per }} transition={{ duration: 1, delay: 0.5, ease: easeIn }} ></motion.circle>

        </svg>
    )
}
export default BigCircularBar

