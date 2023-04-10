import MyResponsiveBar from '@/components/MyResponsiveBar';
import barData from "../../../barData.json"

const Bar = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    return (
        <div className={` col-span-4 3xl:col-span-6 lg:col-span-12 h-80 ${BACK_GRAOUND_COLOR} lg:overflow-x-scroll relative`}>
            <h2 className={`block ${TEXT_COLOR} font-semibold pt-6 px-8 md:text-sm`}>Revenue Generated</h2>
            <div className='h-[90%] w-full absolute bottom-0 lg:w-[50rem]'>
                <MyResponsiveBar data={barData} />
            </div>
        </div>
    )
}
export default Bar