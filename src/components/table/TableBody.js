import { AiOutlineEdit } from 'react-icons/ai';

const TableBody = ({
    selectAll,
    columnHide,
    handelOpenModalForUpdateUser,
    handleCheckboxChange,
    filteredUsers,
    selectedRows
}) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"

    const tableRows = filteredUsers.map((item, index) => {
        let check = selectedRows.find(row => row.id === item.id)
        return (
            <tr
                key={index}
                className={`${BACK_GRAOUND_COLOR} ${TEXT_COLOR} border-b-2 border-[#141b2d]`}
            >

                <td className={`p-2`}>
                    <input
                        className={"w-4 h-4 relative after:w-4 after:h-4 after:absolute after:border-[2px] after:rounded-sm rounded-sm after:dark:border-dark-TXC-100 after:border-light-TXC-100 after:dark:bg-dark-BGSC after:bg-light-BGSC after:dark:checked:bg-transparent  after:checked:bg-transparent  checked:accent-greenAccent-100"}
                        type="checkbox" checked={selectAll || check}
                        onChange={(event) => handleCheckboxChange(event, item)}
                    />
                </td>
                <td className={`p-2 ${columnHide.id ? "hidden" : ""}`}>
                    {item.id}
                </td>
                <td className={`p-2 ${columnHide.name ? "hidden" : ""}`}>
                    {item.name}
                </td>
                <td className={`p-2 ${columnHide.email ? "hidden" : ""}`}>
                    {item.email}
                </td>
                <td className={`p-2 ${columnHide.age ? "hidden" : ""}`}>
                    {item.age}
                </td>
                <td className={`p-2 ${columnHide.phone ? "hidden" : ""}`}>
                    {item.phone}
                </td>
                <td className={`p-2 ${columnHide.city ? "hidden" : ""}`}>
                    {item.city}
                </td>
                <td className={`p-2 ${columnHide.address ? "hidden" : ""}`}>
                    {item.address}
                </td>
                <td className={`p-2 ${columnHide.zipcode ? "hidden" : ""}`}>
                    {item.zipcode}
                </td>
                <td className={`p-2 ${columnHide.access ? "hidden" : ""}  uppercase font-semibold`}>
                    {item.access}
                    <AiOutlineEdit
                        id={item.id}
                        onClick={handelOpenModalForUpdateUser}
                        className="inline w-5 h-5 float-right"
                    />
                </td>
            </tr>

        )
    });

    return (
        <tbody>
            {tableRows}
        </tbody>
    )
}
export default TableBody