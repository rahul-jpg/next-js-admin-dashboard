import GeoChart from "@/components/charts/GeoChart"
import geoData from "../../../chartData/geoData.json"
import Header from "@/components/Header"

const Geo = () => {
    return (
        <main className="w-full h-[70vh] px-4 xs:px-2">
            <Header title="Geo Chart" description="Simple Geo Chart" />
            <div className="w-full h-full lg:overflow-x-scroll">
                <div className="w-full h-full lg:w-[50rem] lg:h-[85%]">
                    <GeoChart data={geoData} legendsDisplay={true} projectionValue={200} />
                </div>
            </div>
        </main>
    )
}
export default Geo