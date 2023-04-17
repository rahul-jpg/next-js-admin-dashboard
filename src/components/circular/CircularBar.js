import { useRef } from "react"

const CircularBar = ({ percent, svgSize, circleSize, circleWidth, adjust }) => {
    const circleRef = useRef()
    const circleLength = circleRef.current?.getTotalLength()
    const per = circleLength - (circleLength * percent / 100)
    return (
        <svg className={svgSize}>
            <circle cx={circleSize} cy={circleSize} r={circleSize} strokeWidth={circleWidth} className={`fill-transparent stroke-blueAccent-400 w-full h-full ${adjust}`}></circle>
            <circle ref={circleRef} cx={circleSize} cy={circleSize} r={circleSize} strokeWidth={circleWidth} className={`fill-transparent stroke-greenAccent-400 transition-all duration-500 ease-in w-full h-full ${adjust}`} strokeDasharray={circleLength} strokeDashoffset={`${per}`} ></circle>
        </svg>


    )
}



export default CircularBar

