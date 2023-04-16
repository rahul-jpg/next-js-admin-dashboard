import Menu from "./Menu";
import { BiMapAlt } from 'react-icons/bi';
import { AiOutlineBarChart, AiOutlinePieChart, AiOutlineLineChart } from 'react-icons/ai';

const ChartMenus = ({ isOpen }) => {
    return (
        <>
            <p className={`${isOpen && "border-b"} w-full mt-8 sm:mt-5 self-start text-sm text-light-TXC-400 dark:text-dark-TXC-600 border-b-light-TXC-600 dark:border-b-dark-TXC-600`}>charts</p>

            <div className="mt-5 self-start flex flex-col space-y-6 font-semibold">
                <Menu
                    isOpen={isOpen}
                    path={"/chart/bar"}
                    logo={<AiOutlineBarChart />}
                    text={"Bar Chart"}
                />
                <Menu
                    isOpen={isOpen}
                    path={"/chart/pie"}
                    logo={<AiOutlinePieChart />}
                    text={"Pie Chart"}
                />
                <Menu
                    isOpen={isOpen}
                    path={"/chart/line"}
                    logo={<AiOutlineLineChart />}
                    text={"Line Chart"}
                />
                <Menu
                    isOpen={isOpen}
                    path={"/chart/geo"}
                    logo={<BiMapAlt />}
                    text={"Geography Chart"}
                />
            </div>
        </>
    )
}
export default ChartMenus