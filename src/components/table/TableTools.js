import { FiChevronDown } from 'react-icons/fi';

const TableTools = ({
    handleFilterByOptionChange,
    handleFilterChange,
    handleDeleteUser,
    handleOpenModalForNewUser,
    columDisplayCollapse,
    handleColumnHideDisplayCollapse,
    handleColumnHideChange,
    columnHide,
}) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    return (
        <div className="grid relative flex-wrap grid-cols-12 gap-2">
            <div className="col-span-3 lg:col-span-8 flex items-end">
                {/* SELECT OPTION FOR FILTER USERS */}
                <select
                    defaultValue="id"
                    onChange={handleFilterByOptionChange}
                    className={`dark:bg-dark-BGC bg-light-BGC focus:outline-none border-b-2 dark:border-[#1F2A40] border-dark-TXC-600 p-2 w-[30%]`}
                >
                    <option value="id">
                        Id
                    </option>
                    <option value="name">
                        Name
                    </option>
                    <option value="email">
                        Email
                    </option>
                    <option value="age">
                        Age
                    </option>
                    <option value="phone">
                        Phone
                    </option>
                    <option value="access">
                        Access
                    </option>
                    <option value="city">
                        City
                    </option>
                    <option value="address">
                        Address
                    </option>
                    <option value="zipcode">
                        Zipcode
                    </option>
                    <option value="all">
                        All
                    </option>
                </select>

                {/* INPUT FOR FILTER USERS */}
                <input
                    type="text"
                    onChange={handleFilterChange}
                    placeholder="Filter..."
                    className={`dark:bg-dark-BGC bg-light-BGC border-b-2 dark:border-[#1F2A40] border-dark-TXC-600 focus:outline-none p-2 w-[70%]`}
                />
            </div>

            {/* BUTTON FOR DELETE USER */}
            <button
                onClick={handleDeleteUser}
                className={`py-2 px-3 bg-red-500 text-dark-TXC-100 col-span-3 lg:col-span-4 `}>
                DELETE
            </button>

            {/* BUTTON FOR ADD USER */}
            <button
                onClick={handleOpenModalForNewUser}
                className={`py-2 px-3 ${BACK_GRAOUND_COLOR} ${TEXT_COLOR} col-span-3 lg:col-span-6`}>
                ADD USER
            </button>

            {/*SECTION FOR HIDE COLUMNS  */}
            <div className="col-span-3 lg:col-span-6 relative">
                <div className={`absolute z-10 top-0 left-0 ${columDisplayCollapse ? "max-h-[2.5rem] 2xl:max-h-[2.25rem] sm:max-h-[2rem]" : "max-h-96 shadow-md"} overflow-hidden transition-all duration-300 ease-in cursor-pointer ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}  w-full`}>

                    <div className="p-2 flex items-center justify-between" onClick={handleColumnHideDisplayCollapse}>
                        <h2 >
                            HIDE COLUMNS
                        </h2>
                        <FiChevronDown className={`w-5 h-5 ${columDisplayCollapse ? "rotate-0" : "-rotate-180"} transition-all duration-300 ease-in`} />
                    </div>

                    <ul className="px-4 py-2 flex flex-col space-y-3">

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="id"
                                onChange={handleColumnHideChange}
                                checked={columnHide.id}
                                type="checkbox"
                            />
                            <label htmlFor="">
                                Id
                            </label>
                        </li>

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="name"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.name}
                            />
                            <label htmlFor="">
                                Name
                            </label>
                        </li>

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="age"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.age}
                            />
                            <label htmlFor="">
                                Age
                            </label>
                        </li>

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="email"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.email}
                            />
                            <label htmlFor="">
                                Email
                            </label>

                        </li>

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="phone"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.phone}
                            />
                            <label htmlFor="">
                                Phone
                            </label>

                        </li>

                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="access"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.access}
                            />
                            <label htmlFor="">
                                Access
                            </label>
                        </li>
                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="city"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.city}
                            />
                            <label htmlFor="">
                                City
                            </label>
                        </li>
                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="address"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.address}
                            />
                            <label htmlFor="">
                                Address
                            </label>
                        </li>
                        <li className="flex space-x-5 items-center">
                            <input
                                className={`w-5 h-5`}
                                name="zipcode"
                                onChange={handleColumnHideChange}
                                type="checkbox"
                                checked={columnHide.zipcode}
                            />
                            <label htmlFor="">
                                Zipcode
                            </label>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TableTools