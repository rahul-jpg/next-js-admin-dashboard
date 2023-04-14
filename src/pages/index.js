import Cards from '@/components/Cards';
import Line from '@/components/chart/Line';
import Transactions from '@/components/Transactions';
import BigCircularBar from '@/components/BigCircularBar';
import Bar from '@/components/chart/Bar';
import Geo from '@/components/chart/Geo';
import Header from '@/components/Header';



export default function Home() {
  const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
  const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
  return (
    <>
      <main className="px-6 xs:px-2 w-full">
        <Header title="DASHBOARD" description="Welcome to your dashboard" download={true} />

        <div className='grid grid-cols-12 gap-5 xs:gap-2'>
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
