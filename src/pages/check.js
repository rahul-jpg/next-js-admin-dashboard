import { easeIn, motion } from "framer-motion"
import { useRef } from "react"

const BigCircularBar = () => {
    const SIZE = 55
    const per = 338 - (338 * 80 / 100)
    const gl = useRef()
    console.log(gl?.current?.getTotalLength());
    return (
        <svg className="w-32 h-32">
            <circle cx={SIZE} cy={SIZE} r={SIZE} strokeWidth={15} className="fill-transparent stroke-blueAccent-400 w-full h-full translate-x-2 translate-y-2"></circle>
            <circle ref={gl} cx={SIZE} cy={SIZE} r={SIZE} strokeWidth={15} className="fill-transparent stroke-greenAccent-400 w-full h-full translate-x-2 translate-y-2" strokeDasharray={gl?.current?.getTotalLength()}  ></circle>
        </svg>
    )
}
export default BigCircularBar

// initial={{ strokeDashoffset: 338 }} animate={{ strokeDashoffset: per }} transition={{ duration: 1, delay: 0.5, ease: easeIn }}