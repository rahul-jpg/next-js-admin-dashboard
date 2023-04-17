import { useRouter } from "next/router"
import { useEffect, useState } from "react";

const Menu = ({ path, isOpen, logo, text, setIsOpen }) => {
    const TEXT_COLOR_EXTRA_LIGHT = "text-light-TXC-100 dark:text-dark-TXC-400"

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    const Logo = () => {
        let newLogo = { ...logo }
        newLogo.props = { className: text === "Dashboard" ? "w-6 h-6" : 'w-5 h-5' }
        return newLogo
    }
    const router = useRouter()

    const handleClick = () => {
        screenWidth <= 703 && setIsOpen(false)
        router.push(path)
    }
    return (
        <div className={`flex space-x-8 items-center cursor-pointer hover:text-blueAccent-400 dark:hover:text-blueAccent-400 ${router.asPath === path ? "text-blueAccent-400" : TEXT_COLOR_EXTRA_LIGHT}`} onClick={handleClick}>
            <Logo />
            <p className={`${isOpen ? "bock" : "hidden"}`}>{text}</p>
        </div>
    )
}
export default Menu