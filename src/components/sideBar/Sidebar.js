import { AiOutlineHome } from 'react-icons/ai';
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import PageMenus from './PageMenus';
import ChartMenus from './ChartMenus';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const handleClick = () => setIsOpen(!isOpen)
    return (
        <>
            <div className={`
            ${isOpen ? "sm:shadow-xl p-6" : "sm:p-5 sm:rounded-br-full pl-4"} w-full h-full overflow-hidden sm:transition-all sm:duration-150 sm:ease-in-out ${BACK_GRAOUND_COLOR} flex flex-col items-center sm:top-0 sm:left-0 text-sm lg:text-xs`
            }>

                <Hamburger isOpen={isOpen} handleClick={handleClick} />

                <Logo isOpen={isOpen} />

                <div className="mt-8 sm:mt-6 self-start flex font-semibold">
                    <Menu
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        path={"/"}
                        logo={<AiOutlineHome />}
                        text={"Dashboard"}
                    />
                </div>
                <PageMenus isOpen={isOpen} setIsOpen={setIsOpen} />
                <ChartMenus isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>

    )
}
export default Sidebar