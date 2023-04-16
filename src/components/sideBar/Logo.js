import Image from "next/image"
import profilePic from "../../../public/assets/images/profile_pic.png"

const Logo = ({ isOpen }) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    return (
        <div className={`${isOpen ? "h-[12rem] sm:h-[9rem]" : "h-0"} overflow-hidden sm:transition-all sm:duration-300 sm:ease-in-out flex flex-col items-center justify-center mt-4 xs:mt-2`}>
            <Image src={profilePic} alt="proile-pic" className="h-24 w-24 rounded-full 2xl:h-20 2xl:w-20" />
            <h1 className={`${TEXT_COLOR} text-3xl lg:text-2xl font-bold mt-3`}>Rahul</h1>
            <p className="text-greenAccent-400">Admin Panel</p>
        </div>
    )
}
export default Logo