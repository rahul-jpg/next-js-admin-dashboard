import CircularBar from "./CircularBar"

const CircularProgress = () => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    return (
        <div className={`col-span-4 3xl:col-span-6 lg:col-span-12 p-5 flex flex-col items-center ${BACK_GRAOUND_COLOR}`}>
            <h2 className={`${TEXT_COLOR} font-semibold self-start mb-4 md:text-sm`}>Campaign</h2>
            <CircularBar percent={80} svgSize="w-32 h-32" circleSize={55} circleWidth={15} adjust="translate-x-2 translate-y-2" />
            <p className={`text-greenAccent-400 mt-4 md:text-sm`}>
                $48,352 revenue generated
            </p>
            <p className={`${TEXT_COLOR} mb-4 md:text-sm xs:text-xs xs:text-center`}>Includes extra misc expenditures and costs</p>
        </div>
    )
}
export default CircularProgress