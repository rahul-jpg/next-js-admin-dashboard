const Hamburger = ({ isOpen, handleClick }) => {
    return (
        <div className={`p-2 self-start absolute top-2 left-2`} onClick={handleClick}>
            <span className={` bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
            <span className={`bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-light-TXC-100 dark:bg-dark-TXC-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </div>
    )
}
export default Hamburger