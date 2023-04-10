import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import Image from "next/image";
import profilePic from "../../public/assets/images/profile_pic.png"
import { FaHome, FaUsers, FaFileInvoice } from 'react-icons/fa';
import { MdPermContactCalendar } from 'react-icons/md';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const TEXT_COLOR_LIGHT = "text-light-TXC-400 dark:text-dark-TXC-400"
    const TEXT_COLOR_EXTRA_LIGHT = "text-light-TXC-100 dark:text-dark-TXC-400"
    const handleClick = () => setIsOpen(!isOpen)

    return (
        <>
            <div className={`${isOpen ? "w-64 sm:shadow-xl" : "w-20 sm:w-16 sm:p-5 sm:h-12  sm:rounded-br-full"}  overflow-hidden sm:transition-all sm:duration-150 sm:ease-in-out ${BACK_GRAOUND_COLOR} h-screen p-6 flex flex-col items-center sm:fixed sm:top-0 sm:left-0 z-10 `}>

                <div className={`p-2 self-start absolute top-2 left-4 sm:top-2`} onClick={handleClick}>
                    <span className={` bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                    <span className={`bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
                </div>

                <div className={`${isOpen ? "h-[12rem]" : "h-0"} overflow-hidden sm:transition-all sm:duration-300 sm:ease-in-out flex flex-col items-center justify-center mt-4`}>
                    <Image src={profilePic} alt="proile-pic" className="h-24 w-24 rounded-full" />
                    <h1 className={`${TEXT_COLOR} text-3xl font-bold mt-3`}>Rahul</h1>
                    <p className="text-greenAccent-400">Admin Panel</p>
                </div>
                <div className="flex mt-6 space-x-8 items-center self-start">
                    <FaHome className="w-6 h-6 text-blueAccent-400" />
                    <p className={`${isOpen ? "bock" : "hidden"} text-blueAccent-400 font-semibold`}>Dashboard</p>
                </div>
                <p className={`${isOpen && "border-b"} w-full mt-8 self-start text-sm text-light-TXC-400 dark:text-dark-TXC-600 border-b-light-TXC-600 dark:border-b-dark-TXC-600`}>data</p>

                <div className="mt-5 self-start flex flex-col space-y-6 text-[0.85rem] font-semibold">
                    <div className="flex space-x-8 items-center">
                        <FaUsers className={`w-5 h-5 ${TEXT_COLOR_LIGHT}`} />
                        <p className={`${isOpen ? "bock" : "hidden"} ${TEXT_COLOR_EXTRA_LIGHT}`}>
                            Manage Team
                        </p>
                    </div>
                    <div className="flex space-x-8 items-center">
                        <MdPermContactCalendar className={`w-5 h-5 ${TEXT_COLOR_LIGHT}`} />
                        <p className={`${isOpen ? "bock" : "hidden"} ${TEXT_COLOR_EXTRA_LIGHT}`}>Contacts Information</p>
                    </div>
                    <div className="flex space-x-8 items-center">
                        <FaFileInvoice className={`w-5 h-5 ${TEXT_COLOR_LIGHT}`} />
                        <p className={`${isOpen ? "bock" : "hidden"} ${TEXT_COLOR_EXTRA_LIGHT}`}>Invoices Balances</p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Sidebar