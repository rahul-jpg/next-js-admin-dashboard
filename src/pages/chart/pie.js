import PieChart from "@/components/charts/PieChat"
import pieData from "../../../chartData/pieData.json"
import Header from "@/components/Header"

const Pie = () => {
    return (
        <main className="w-full h-[75vh] px-4 xs:px-2">
            <Header title="Pie Chart" description="Pie Line Chart" />
            <div className="w-full h-full overflow-x-scroll">
                <div className="w-full lg:h-[50%] sm:w-[35rem]">
                    <PieChart data={pieData} />
                </div>
            </div>
        </main>
    )
}
export default Pie