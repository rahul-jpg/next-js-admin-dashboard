import { AiFillCaretDown } from 'react-icons/ai';
import { BsDashSquare } from 'react-icons/bs';

const Table = ({
    selectedRows,
    handleRemoveSelectAll,
    selectAll,
    handleSelectAllChange,
    columnHide,
    sortOrder,
    tableRows,
    handleSort,
}) => {
    return (
        <div className="border-2 dark:border-blueAccent-600 max-h-[20rem] border-blueAccent-100 mt-2 overflow-scroll">
            <table className="text-left w-full min-w-[50rem]">
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

                        <th
                            className={`p-2 items-center group ${columnHide.id ? "hidden" : ""}`}
                            onClick={() => handleSort('id')}
                        >
                            Id
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>

                        <th
                            className={`p-2 ${columnHide.name ? "hidden" : ""} group`}
                            onClick={() => handleSort('name')}
                        >
                            Name
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>

                        <th
                            className={`p-2 ${columnHide.email ? "hidden" : ""} group`}
                            onClick={() => handleSort('email')}
                        >
                            Email
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>

                        <th
                            className={`p-2 ${columnHide.age ? "hidden" : ""} group`}
                            onClick={() => handleSort('age')}
                        >
                            Age
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>
                        <th className={`p-2 ${columnHide.phone ? "hidden" : ""} group`}
                            onClick={() => handleSort('phone')}
                        >
                            Phone
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>
                        <th className={`p-2 ${columnHide.city ? "hidden" : ""} group`}
                            onClick={() => handleSort('city')}
                        >
                            City
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>
                        <th className={`p-2 ${columnHide.address ? "hidden" : ""} group`}
                            onClick={() => handleSort('address')}
                        >
                            Address
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>
                        <th className={`p-2 ${columnHide.zipcode ? "hidden" : ""} group`}
                            onClick={() => handleSort('zipcode')}
                        >
                            Zipcode
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>

                        <th
                            className={`p-2 ${columnHide.access ? "hidden" : ""} group`}
                            onClick={() => handleSort('access')}
                        >
                            Access
                            <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
export default Table