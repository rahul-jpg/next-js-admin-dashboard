import BarChart from "@/components/charts/BarChart"
import barData from "../../../chartData/barData.json"
import Header from "@/components/Header"

const Bar = () => {
    return (
        <main className="w-full h-[75vh] px-4">
            <Header title="Bar Chart" description="Simple Bar Chart" />
            <div className="w-full h-full overflow-x-scroll">
                <div className="w-full h-full lg:w-[50rem] lg:h-[85%]">
                    <BarChart data={barData} />
                </div>
            </div>
        </main>
    )
}
export default Bar