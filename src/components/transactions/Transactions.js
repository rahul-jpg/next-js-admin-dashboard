import TransactionItem from "./TransactionItem"

const Transactions = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    return (
        <div className={` col-span-4 2xl:col-span-6 lg:col-span-12 overflow-y-scroll h-80 relative`}>
            <h2 className={`${TEXT_COLOR} ${BACK_GRAOUND_COLOR} font-semibold p-3 mb-1 sticky top-0`}>Recent Transactions</h2>
            {
                Array.from("rahul").map((item, i) => <>
                    <TransactionItem />
                </>)
            }

        </div>
    )
}
export default Transactions