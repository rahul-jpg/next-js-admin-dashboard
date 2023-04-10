import { BiSearch, BiMoon, BiBell, BiSun } from 'react-icons/bi';
import { GrSettingsOption } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useContext } from 'react';
import ThemeContext from '@/context/themeContext';

const Topbar = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const [mode, setMode] = useThemeSwitcher()
    const { setThemeMode } = useContext(ThemeContext)
    const handleModeChange = () => {
        if (mode === "dark") {
            setMode("light")
            setThemeMode("light")
        } else {
            setMode("dark")
            setThemeMode("dark")
        }
    }
    return (
        <header className='p-3 flex justify-between w-full h-20 items-center sm:justify-end xs:justify-between xs:space-x-0 sm:space-x-4 mb-2 xs:flex-col-reverse xs:px-2 xs:h-28'>
            <div className='relative sm:w-[54%] xs:w-full'>
                <input type="text" className={`${BACK_GRAOUND_COLOR} p-2 outline-none rounded-md pr-8 sm:w-full`} placeholder='Search' />
                <BiSearch className={`w-4 h-4 ${TEXT_COLOR} absolute top-3 right-2`} />
            </div>
            <div className='flex items-center justify-center space-x-5 xs:space-x-10 xs:w-full xs:justify-end'>
                <div onClick={handleModeChange}>
                    {
                        mode === "dark" ?
                            <BiSun className='w-6 h-6 text-dark-TXC-100 md:w-5 md:h-5' /> :
                            <BiMoon className='w-6 h-6 text-light-TXC-400 md:w-5 md:h-5' />
                    }
                </div>
                <BiBell className={`w-6 h-6 ${TEXT_COLOR} md:w-5 md:h-5`} />
                <FiSettings className={`w-5 h-5 ${TEXT_COLOR} md:w-4 md:h-4`} />
                <FaRegUser className={`w-5 h-5 ${TEXT_COLOR} md:w-4 md:h-4`} />
            </div>
        </header>
    )
}
export default Topbar