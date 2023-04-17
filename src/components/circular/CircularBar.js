import { easeIn, motion } from "framer-motion"

const CircularBar = ({ percent, svgSize, circleSize, circleWidth, adjust }) => {
    const circleLength = circleSize * 6.27
    const per = circleLength - (circleLength * percent / 100)
    return (
        <svg className={svgSize}>
            <circle cx={circleSize} cy={circleSize} r={circleSize} strokeWidth={circleWidth} className={`fill-transparent stroke-blueAccent-400 w-full h-full ${adjust}`}></circle>
            <motion.circle cx={circleSize} cy={circleSize} r={circleSize} strokeWidth={circleWidth} className={`fill-transparent stroke-greenAccent-400 transition-all duration-500 ease-in w-full h-full ${adjust}`} strokeDasharray={circleLength} initial={{ strokeDashoffset: circleLength }} transition={{ duration: 1, delay: 0.5, ease: easeIn }} animate={{ strokeDashoffset: per }} />
        </svg>


    )
}



export default CircularBar

