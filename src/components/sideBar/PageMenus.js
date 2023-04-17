import { AiOutlineCalendar, AiOutlineQuestionCircle, AiOutlineTeam } from 'react-icons/ai';
import Menu from "./Menu";

const PageMenus = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <p className={`${isOpen && "border-b"} w-full mt-8 sm:mt-5 text-sm text-light-TXC-400 dark:text-dark-TXC-600 border-b-light-TXC-600 dark:border-b-dark-TXC-600`}>pages</p>

            <div className="mt-5 self-start flex flex-col space-y-6 font-semibold">
                <Menu
                    isOpen={isOpen}
                    path={"/team"}
                    logo={<AiOutlineTeam />}
                    text={"Manage Team"}
                    setIsOpen={setIsOpen}
                />
                <Menu
                    isOpen={isOpen}
                    path={"/calender"}
                    logo={<AiOutlineCalendar />}
                    text={"Calender"}
                    setIsOpen={setIsOpen}
                />
                <Menu
                    isOpen={isOpen}
                    path={"/faq"}
                    logo={<AiOutlineQuestionCircle />}
                    text={"FAQ Page"}
                    setIsOpen={setIsOpen}
                />
            </div>
        </>
    )
}
export default PageMenus