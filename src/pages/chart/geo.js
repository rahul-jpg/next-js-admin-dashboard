import GeoChart from "@/components/charts/GeoChart"
import geoData from "../../../chartData/geoData.json"
import Header from "@/components/Header"

const Geo = () => {
    return (
        <main className="w-full h-[70vh] px-4">
            <Header title="Geo Chart" description="Simple Geo Chart" />
            <GeoChart data={geoData} />
        </main>
    )
}
export default Geo