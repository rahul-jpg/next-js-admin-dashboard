import Image from 'next/image'
import { MdDownload, MdPointOfSale } from 'react-icons/md';
import { FaEnvelope, FaUserPlus, FaTrafficLight } from 'react-icons/fa';
import CircularBar from '@/components/CircularBar';
import Card from '@/components/Card';
import data from "../../data.json"
import MyResponsiveLine from '@/components/MyResponsiveLine';
import Cards from '@/components/Cards';
import Line from '@/components/chart/Line';
import Transactions from '@/components/Transactions';
import BigCircularBar from '@/components/BigCircularBar';
import Bar from '@/components/chart/Bar';
import Geo from '@/components/chart/Geo';



export default function Home() {
  const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
  const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
  return (
    <>
      <main className="px-6 xs:px-2">
        <div className='flex justify-between'>
          <div>
            <h1 className={`text-3xl font-bold ${TEXT_COLOR} md:text-2xl sm:text-xl`}>DASHBOARD</h1>
            <p className='text-greenAccent-400 font-semibold mt-2 md:text-sm'>Welcome to your dashboard</p>
          </div>
          <div className='flex space-x-2 items-center self-end px-2 rounded-md h-10 dark:bg-blueAccent-400 bg-blueAccent-100 sm:bg-light-BGC sm:dark:bg-dark-BGC'>
            <MdDownload className={`w-5 h-5 ${TEXT_COLOR} md:w-4 md:h-4 sm:text-greenAccent-400 sm:w-6 sm:h-6`} />
            <button className={`${TEXT_COLOR} text-sm font-bold md:text-xs sm:hidden`}>DOWNLOAD REPORTS</button>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-5 mt-7 xs:gap-2'>
          <Cards />
          <Line />
          <Transactions />

          <div className={`col-span-4 3xl:col-span-6 lg:col-span-12 p-5 flex flex-col items-center ${BACK_GRAOUND_COLOR}`}>
            <h2 className={`${TEXT_COLOR} font-semibold self-start mb-4 md:text-sm`}>Campaign</h2>
            <BigCircularBar />
            <p className={`text-greenAccent-400 mt-4 md:text-sm`}>
              $48,352 revenue generated
            </p>
            <p className={`${TEXT_COLOR} mb-4 md:text-sm xs:text-xs xs:text-center`}>Includes extra misc expenditures and costs</p>
          </div>

          <Bar />
          <Geo />

        </div>
      </main>
    </>

  )
}
