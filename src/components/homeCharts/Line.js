import { MdDownload } from 'react-icons/md';
import data from "../../../chartData/LineData.json"
import MyResponsiveLine from '@/components/charts/LineChart';

const Line = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    return (
        <div className={`col-span-8 3xl:col-span-12 h-80 ${BACK_GRAOUND_COLOR} lg:overflow-x-scroll relative`}>
            <div className='pt-6 px-8 flex justify-between items-center'>
                <div>
                    <span className={`block ${TEXT_COLOR} font-semibold md:text-xs`}>Revenue Generated</span>
                    <span className='block text-greenAccent-400 text-xl font-bold md:text-lg'>$59,342.32</span>
                </div>
                <MdDownload className='w-6 h-6 text-greenAccent-400' />
            </div>
            <div className='h-[85%] w-full lg:w-[50rem]   absolute bottom-0'>
                <MyResponsiveLine data={data} />
            </div>
        </div>
    )
}

export default Line