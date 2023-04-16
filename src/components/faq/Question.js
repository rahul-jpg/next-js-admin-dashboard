import { FiChevronDown } from 'react-icons/fi';

const Question = () => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-[#1a1a1a]"
    return (
        <div className={`relative ${BACK_GRAOUND_COLOR} ${TEXT_COLOR} transition-all duration-500 ease-in-out relative expand border-t-[1px] border-[#404040]`}>
            <input type="checkbox" className='absolute w-full h-10 opacity-0 peer' />
            <h2 className={`text-greenAccent-400 sm:text-sm p-3`}>An Important Question</h2>
            <FiChevronDown className='w-5 h-5 absolute right-3 top-3 transition-all duration-500 ease-in-out peer-checked:-rotate-180' />
            <div className={`peer-checked:max-h-[20rem] max-h-0 overflow-hidden transition-all duration-500 ease-in-out`}>
                <p className='m-3 text-sm sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor. Minima eos numquam quibusdam, ipsam commodi ea optio quisquam hic veniam? Necessitatibus aspernatur fugiat voluptas error tempora at, iure quos doloremque mollitia autem quia repellat, eius quaerat dolore optio eum sunt voluptatum pariatur hic illo. Fugit exercitationem nobis sequi tempore!</p>
            </div>
        </div>
    )
}
export default Question