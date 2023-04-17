import { AiFillCaretDown } from 'react-icons/ai';
import { BsDashSquare } from 'react-icons/bs';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({
    selectedRows,
    handleRemoveSelectAll,
    selectAll,
    handleSelectAllChange,
    columnHide,
    sortOrder,
    handleSort,
    handelOpenModalForUpdateUser,
    handleCheckboxChange,
    filteredUsers
}) => {
    return (
        <div className="border-2 dark:border-blueAccent-600 max-h-[20rem] border-blueAccent-100 mt-2 overflow-scroll">
            <table className="text-left w-full min-w-[60rem]">
                <TableHead
                    selectedRows={selectedRows}
                    selectAll={selectAll}
                    handleRemoveSelectAll={handleRemoveSelectAll}
                    handleSelectAllChange={handleSelectAllChange}
                    columnHide={columnHide}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                />
                <TableBody
                    selectAll={selectAll}
                    columnHide={columnHide}
                    handelOpenModalForUpdateUser={handelOpenModalForUpdateUser}
                    handleCheckboxChange={handleCheckboxChange}
                    filteredUsers={filteredUsers}
                    selectedRows={selectedRows}
                />
            </table>
        </div>
    )
}
export default Table