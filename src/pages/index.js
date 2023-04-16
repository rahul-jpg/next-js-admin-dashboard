import Cards from '@/components/cards/Cards';
import Line from '@/components/homeCharts/Line';
import Transactions from '@/components/transactions/Transactions';
import Bar from '@/components/homeCharts/Bar';
import Geo from '@/components/homeCharts/Geo';
import Header from '@/components/Header';
import CircularProgress from '@/components/circular/CircularProgress';

export default function Home() {

  return (
    <>
      <main className="px-6 xs:px-2 w-full">
        <Header title="DASHBOARD" description="Welcome to your dashboard" download={true} />

        <div className='grid grid-cols-12 gap-5 xs:gap-2'>
          <Cards />
          <Line />
          <Transactions />
          <CircularProgress />
          <Bar />
          <Geo />
        </div>
      </main>
    </>

  )
}
