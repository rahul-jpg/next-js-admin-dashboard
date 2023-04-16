const TransactionItem = () => {
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const TEXT_COLOR_LIGHT = "text-light-TXC-400 dark:text-dark-TXC-400"
    const TEXT_COLOR_EXTRA_LIGHT = "text-light-TXC-100 dark:text-dark-TXC-400"
    return (
        <div className={`${BACK_GRAOUND_COLOR + " " + TEXT_COLOR_LIGHT} flex items-center justify-between p-3 text-sm xs:text-xs mb-1`}>
            <div>
                <h5 className="text-greenAccent-400">01e4dsa</h5>
                <h5>johndoe</h5>
            </div>
            <span>2021-09-01</span>
            <button className="bg-greenAccent-400 px-2 p-1 rounded-md">$43.95</button>
        </div>
    )
}
export default TransactionItem