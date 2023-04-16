import { useRouter } from "next/router"

const Menu = ({ path, isOpen, logo, text }) => {
    const TEXT_COLOR_EXTRA_LIGHT = "text-light-TXC-100 dark:text-dark-TXC-400"
    const Logo = () => {
        let newLogo = { ...logo }
        newLogo.props = { className: text === "Dashboard" ? "w-6 h-6" : 'w-5 h-5' }
        return newLogo
    }
    const router = useRouter()
    return (
        <div className={`flex space-x-8 items-center cursor-pointer hover:text-blueAccent-400 dark:hover:text-blueAccent-400 ${router.asPath === path ? "text-blueAccent-400" : TEXT_COLOR_EXTRA_LIGHT}`} onClick={() => router.push(path)}>
            <Logo />
            <p className={`${isOpen ? "bock" : "hidden"}`}>{text}</p>
        </div>
    )
}
export default Menu