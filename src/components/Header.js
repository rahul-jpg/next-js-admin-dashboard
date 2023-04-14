import { MdDownload } from 'react-icons/md';

const Header = ({ title, description, download }) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    return (
        <div className='flex justify-between mb-7'>
            <div>
                <h1 className={`text-3xl font-bold ${TEXT_COLOR} md:text-2xl sm:text-xl`}>{title}</h1>
                <p className='text-greenAccent-400 font-semibold mt-2 md:text-sm'>{description}</p>
            </div>
            {
                download && <div className='flex space-x-2 items-center self-end px-2 rounded-md h-10 dark:bg-blueAccent-400 bg-blueAccent-100 sm:bg-light-BGC sm:dark:bg-dark-BGC'>
                    <MdDownload className={`w-5 h-5 ${TEXT_COLOR} md:w-4 md:h-4 sm:text-greenAccent-400 sm:w-6 sm:h-6`} />
                    <button className={`${TEXT_COLOR} text-sm font-bold md:text-xs sm:hidden`}>DOWNLOAD REPORTS</button>
                </div>
            }
        </div>
    )
}
export default Header