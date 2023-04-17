import { AiFillCaretDown } from 'react-icons/ai';
import { BsDashSquare } from 'react-icons/bs';

const Th = ({ columnHide, sortOrder, handleSort, text }) => {
    return (
        <th
            className={`p-2 items-center group ${columnHide[text.toLowerCase()] ? "hidden" : ""}`}
            onClick={() => handleSort(text.toLowerCase())}
        >
            {text}
            <AiFillCaretDown className={`w-4 h-4 sm:w-3 sm:h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
        </th>
    )
}

const TableHead = ({
    selectedRows,
    selectAll,
    handleRemoveSelectAll,
    handleSelectAllChange,
    columnHide,
    sortOrder,
    handleSort
}) => {
    return (
        <thead className="dark:bg-blueAccent-600 bg-blueAccent-100 text-light-TXC-400 dark:text-dark-TXC-100">
            <tr className="p-2">
                <th className="p-2">
                    {
                        selectedRows.length > 0 && selectAll === false ?
                            <BsDashSquare onClick={handleRemoveSelectAll} className="w-4 h-4 dark:text-dark-TXC-100 text-light-TXC-100" /> :
                            <input
                                className={"w-4 h-4 relative after:w-4 after:h-4 after:absolute after:border-[2px] after:rounded-sm rounded-sm after:dark:border-dark-TXC-100 after:border-light-TXC-100 after:dark:bg-blueAccent-600 after:bg-blueAccent-100 after:dark:checked:bg-transparent  after:checked:bg-transparent  checked:accent-greenAccent-100"
                                }
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange} />
                    }
                </th>

                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Id"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Name"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Email"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Age"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Phone"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"City"}
                /><Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Address"}
                /><Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Zipcode"}
                />
                <Th
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    text={"Access"}
                />
            </tr>
        </thead>
    )
}
export default TableHead