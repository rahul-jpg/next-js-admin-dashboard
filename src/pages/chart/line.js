import LineChart from "@/components/charts/LineChart"
import data from "../../../chartData/lineData.json"
import Header from "@/components/Header"

const Line = () => {
    return (
        <main className="w-full h-[75vh] px-4 xs:px-2">
            <Header title="Line Chart" description="Simple Line Chart" />
            <div className="w-full h-full lg:overflow-x-scroll">
                <div className="w-full h-full lg:w-[50rem] lg:h-[85%]">
                    <LineChart data={data} />
                </div>
            </div>
        </main>
    )
}
export default Line