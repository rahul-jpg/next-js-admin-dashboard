import CircularBar from '@/components/circular/CircularBar';

const Card = ({ logo, value, title, percent }) => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const Logo = () => {
        let newLogo = { ...logo }
        newLogo.props = { className: 'text-greenAccent-400 w-6 h-6 md:w-5 md:h-5 xs:absolute xs:right-1 top-1' }
        return newLogo
    }
    return (
        <div className={`col-span-3 2xl:col-span-6   ${BACK_GRAOUND_COLOR} flex justify-between p-7 h-36 sm:flex-col-reverse sm:p-4 xs:p-2 xs:h-28 relative`}>
            <div className='flex flex-col justify-between sm:flex-row sm:items-center '>
                <Logo />
                <div>
                    <p className={`${TEXT_COLOR} font-bold text-lg md:text-base sm:text-sm`}>{value}</p>
                    <p className='text-greenAccent-400 md:text-sm sm:text-xs'>{title}</p>
                </div>

            </div>
            <div className='flex flex-col justify-between items-center sm:flex-row xs:relative xs:justify-center'>
                <CircularBar percent={percent} svgSize="h-12 w-12" circleSize={20} circleWidth={7} adjust="translate-x-1 translate-y-1" />
                <p className='italic text-greenAccent-400 md:text-sm sm:text-lg xs:absolute xs:text-xs xs:left-1/5'>+{percent}%</p>
            </div>
        </div>
    )
}
export default Card