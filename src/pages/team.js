import { useState } from "react";
import { teamData } from "../../teamData"
import { AiFillCaretDown, AiFillDelete, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { BsDashSquare } from 'react-icons/bs';
import Pagination from "@/components/Pagination";

const Team = () => {

    // CSS VARIABLES
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"


    // ALL STATES
    const [users, setUsers] = useState(teamData);
    const [paginationHide, setPaginationHide] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    let indexOfLastUser = currentPage * usersPerPage
    let indexOfFirstUser = indexOfLastUser - usersPerPage
    let currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const [filteredUsers, setFilteredUsers] = useState(currentUsers);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [columnHide, setColumnHide] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        access: '',
        age: ''
    });
    const [columDisplayCollapse, setColumDisplayCollapse] = useState(true);
    const [filterByOptions, setFilterByOptions] = useState("id");
    const [addAndUpdateUserModalToggle, setAddAndUpdateUserModalToggle] = useState(false);
    const [addAndUpdateUser, setAddAndUpdateUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        access: '',
        age: ''
    });
    const [changeBtnBehavior, setChangeBtnBehavior] = useState("");



    // FUNTION FOR PAGINATION
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        indexOfLastUser = pageNumber * usersPerPage
        indexOfFirstUser = indexOfLastUser - usersPerPage
        currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
        setFilteredUsers(currentUsers)
    }

    // FUNCTION FOR PREV PAGE
    const prevBtn = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            indexOfLastUser = (currentPage - 1) * usersPerPage
            indexOfFirstUser = indexOfLastUser - usersPerPage
            currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
            setFilteredUsers(currentUsers)
        }
    }

    // FUNCTION FOR NEXT PAGE
    const nextBtn = () => {
        if (currentPage < Math.ceil(users.length / usersPerPage)) {
            setCurrentPage(currentPage + 1)
            indexOfLastUser = (currentPage + 1) * usersPerPage
            indexOfFirstUser = indexOfLastUser - usersPerPage
            currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
            setFilteredUsers(currentUsers)
        }

    }

    // ONCHANGE FUNCTION FOR USERS PER PAGE
    const handleUsersPerPageChange = (e) => {
        if (currentPage > 1) {
            setCurrentPage(1)
            setUsersPerPage(Number(e.target.value))
            indexOfLastUser = 1 * Number(e.target.value)
            indexOfFirstUser = indexOfLastUser - Number(e.target.value)
            currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
            setFilteredUsers(currentUsers)

        } else {
            setUsersPerPage(Number(e.target.value))
            indexOfLastUser = currentPage * Number(e.target.value)
            indexOfFirstUser = indexOfLastUser - Number(e.target.value)
            currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
            setFilteredUsers(currentUsers)
        }

    }


    // FUNCTION FOR SORT USER BY INCREASING ORDER OR DECREASING ORDER
    const handleSort = (key) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        const sorted = filteredUsers.sort((a, b) => {
            const comparison = a[key].toString().localeCompare(b[key]);
            return order === 'asc' ? comparison : -comparison;
        });
        setFilteredUsers(sorted);
        setSortOrder(order);
    };

    // ONCHANGE FUNCTION FOR FILTER USER
    const handleFilterChange = (event) => {
        event.target.value !== "" ? setPaginationHide(true) : setPaginationHide(false);
        const value = event.target.value.toLowerCase();
        const filtered = currentUsers.filter((item) => {
            if (filterByOptions === "all") {
                return item.id.toString().includes(value) ||
                    item.name.toLowerCase().includes(value) ||
                    item.email.toLowerCase().includes(value) ||
                    item.age.toString().includes(value) ||
                    item.phone.toString().includes(value) ||
                    item.access.toLowerCase().includes(value)
            } else {
                return item[filterByOptions].toString().toLowerCase().includes(value)
            }
        }
        );
        setFilteredUsers(filtered);
    };

    // ONCHANGE FUNCTION FOR SELECT OPTIONS FOR FILTER USER
    const handleFilterByOptionChange = (e) => {
        setFilterByOptions(e.target.value)
    }

    //ONCHANGE FUNCTION FOR SELECT USER
    const handleCheckboxChange = (event, row) => {
        const checked = event.target.checked;
        if (checked) {
            setSelectedRows([...selectedRows, row]);
        } else {
            setSelectedRows(selectedRows.filter((r) => r.id !== row.id));
        }
    };

    // ONCHANGE FUNCTION FOR SELECT ALL  USER
    const handleSelectAllChange = (event) => {
        const checked = event.target.checked;
        if (checked) {
            setSelectedRows(filteredUsers);
            setSelectAll(true);
        } else {
            setSelectedRows([]);
            setSelectAll(false);
        }
    };

    const handleRemoveSelectAll = () => {
        if (selectedRows.length > 0 && selectAll === false) setSelectedRows([])
    }

    // FUNCTION FOR DELETE USER
    const handleDeleteUser = () => {
        let dataFilter = users.filter(row => selectedRows.find(item => row.id === item.id) === undefined)
        currentUsers = dataFilter.slice(indexOfFirstUser, indexOfLastUser)
        setFilteredUsers(currentUsers)
        setUsers(dataFilter)
        setSelectedRows([])
    }

    // ONCHANGE FUNCTION FOR HIDE COLUMNS
    const handleColumnHideChange = (e) => {
        if (e.target.name === "id") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, id: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, id: "" }))
            }
        }

        if (e.target.name === "name") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, name: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, name: "" }))
            }
        }

        if (e.target.name === "email") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, email: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, email: "" }))
            }
        }

        if (e.target.name === "id") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, phone: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, phone: "" }))
            }
        }
        if (e.target.name === "access") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, access: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, access: "" }))
            }
        }
        if (e.target.name === "age") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, age: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, age: "" }))
            }
        }
        if (e.target.name === "phone") {
            if (e.target.checked === true) {
                setColumnHide(prev => ({ ...prev, phone: "hidden" }))
            } else {
                setColumnHide(prev => ({ ...prev, phone: "" }))
            }
        }
    }

    // FUNCTION FOR COLUMNS HIDE DISPLAY COLLAPSE
    const handleColumnHideDisplayCollapse = () => {
        setColumDisplayCollapse(!columDisplayCollapse)
    }

    // FUNCTION MODAL OPEN FOR UPDATE USER
    const handelOpenModalForUpdateUser = (e) => {
        setChangeBtnBehavior("UPDATE")
        setAddAndUpdateUserModalToggle(true)
        let getData = filteredUsers.filter(item => item.id == e.currentTarget.id)[0]
        setAddAndUpdateUser(getData)
    }

    // FUNCTION FOR UPDATE USER
    const handleUpdateUser = (e) => {
        e.preventDefault()
        setFilteredUsers(prev => prev.map(obj => {
            if (obj.id == addAndUpdateUser.id) {
                return { ...obj, ...addAndUpdateUser }
            } else {
                return obj
            }
        }))
        setUsers(prev => prev.map(obj => {
            if (obj.id == addAndUpdateUser.id) {
                return { ...obj, ...addAndUpdateUser }
            } else {
                return obj
            }
        }))
        setAddAndUpdateUserModalToggle(false)
    }

    // FUNCTION MODAL OPEN FOR NEW USER
    const handleOpenModalForNewUser = (e) => {
        setChangeBtnBehavior("ADD")
        setAddAndUpdateUserModalToggle(true)
    }

    // FUNCTION FOR ADD NEW USER
    const handleAddNewUser = (e) => {
        e.preventDefault()
        setFilteredUsers(prev => [...prev, { ...addAndUpdateUser, id: users.length + 1 }])
        setUsers(prev => [...prev, { ...addAndUpdateUser, id: prev.length + 1 }])
    }

    // FUNCTION FOR CLOSE USER MODAL
    const handleAddAndUpdateUserModalClose = (e) => {
        setAddAndUpdateUserModalToggle(false)
        setAddAndUpdateUser({
            id: '',
            name: '',
            email: '',
            phone: '',
            access: '',
            age: ''
        })
    }


    // ONCHANGE FUNCTION FOR CHANGE USER DETAILS
    const handleChangeUserDetails = (e) => {
        setAddAndUpdateUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // USERS TABLE ROWS
    const tableRows = filteredUsers.map((item, index) => {
        let check = selectedRows.find(row => row.id === item.id)
        return (
            <tr
                key={index}
                className={`${BACK_GRAOUND_COLOR} ${TEXT_COLOR} border-b-2 border-[#141b2d]`}
            >

                <td className={`p-2`}>
                    <input
                        className={"w-4 h-4 relative after:w-4 after:h-4 after:absolute after:border-[2px] after:rounded-sm rounded-sm after:border-greenAccent-100 after:dark:bg-dark-BGSC after:bg-light-BGSC after:dark:checked:bg-transparent  after:checked:bg-transparent  checked:accent-greenAccent-100"}
                        type="checkbox" checked={selectAll || check}
                        onChange={(event) => handleCheckboxChange(event, item)}
                    />
                </td>
                <td className={`p-2 ${columnHide.id}`}>
                    {item.id}
                </td>
                <td className={`p-2 ${columnHide.name}`}>
                    {item.name}
                </td>
                <td className={`p-2 ${columnHide.email}`}>
                    {item.email}
                </td>
                <td className={`p-2 ${columnHide.age}`}>
                    {item.age}
                </td>
                <td className={`p-2 ${columnHide.phone}`}>
                    {item.phone}
                </td>
                <td className={`p-2 ${columnHide.access}  uppercase font-semibold`}>
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
        <main className={`w-full px-6 ${TEXT_COLOR} 2xl:text-sm sm:text-xs sm:px-2 relative`}>

            <div className="grid relative flex-wrap grid-cols-12 gap-2">

                <div className="col-span-3 lg:col-span-8 flex items-center">
                    {/* SELECT OPTION FOR FILTER USERS */}
                    <select
                        defaultValue="id"
                        onChange={handleFilterByOptionChange}
                        className={`${BACK_GRAOUND_COLOR} focus:outline-none p-[0.55rem] w-[30%]`}
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
                        <option value="all">
                            All
                        </option>
                    </select>

                    {/* INPUT FOR FILTER USERS */}
                    <input
                        type="text"
                        onChange={handleFilterChange}
                        placeholder="Filter..."
                        className={`${BACK_GRAOUND_COLOR} focus:outline-none p-2 w-[70%]`}
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
                    <div className={`absolute z-10 top-0 left-0 ${columDisplayCollapse ? "h-[2.5rem] 2xl:h-[2.25rem] sm:h-[2rem]" : "h-72 shadow-md"} overflow-hidden transition-all duration-300 ease-in cursor-pointer ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}  w-full`}>

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
                                    type="checkbox" />
                                <label htmlFor="">
                                    Id
                                </label>
                            </li>

                            <li className="flex space-x-5 items-center">
                                <input
                                    className={`w-5 h-5`}
                                    name="name"
                                    onChange={handleColumnHideChange}
                                    type="checkbox" />
                                <label htmlFor="">
                                    Name
                                </label>
                            </li>

                            <li className="flex space-x-5 items-center">
                                <input
                                    className={`w-5 h-5`}
                                    name="age"
                                    onChange={handleColumnHideChange}
                                    type="checkbox" />
                                <label htmlFor="">
                                    Age
                                </label>
                            </li>

                            <li className="flex space-x-5 items-center">
                                <input
                                    className={`w-5 h-5`}
                                    name="email"
                                    onChange={handleColumnHideChange}
                                    type="checkbox" />
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
                                />
                                <label htmlFor="">
                                    Access
                                </label>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

            {/* USERS TABLE */}
            <div className="border-2 dark:border-blueAccent-600 border-blueAccent-100 mt-2">
                <div className="relative w-full 2xl:overflow-x-scroll overflow-y-scroll h-[30rem]">
                    <table className="w-full text-left absolute 2xl:w-[65rem] xs:top-9">
                        <thead className="dark:bg-blueAccent-600 bg-blueAccent-100 text-light-TXC-400 dark:text-dark-TXC-100">
                            <tr className="p-2">
                                <th className="p-2">
                                    {
                                        selectedRows.length > 0 && selectAll === false ?
                                            <BsDashSquare onClick={handleRemoveSelectAll} className="w-4 h-4 text-greenAccent-400" /> :
                                            <input
                                                className={"w-4 h-4 relative after:w-4 after:h-4 after:absolute after:border-[2px] after:rounded-sm rounded-sm after:border-greenAccent-100 after:dark:bg-blueAccent-600 after:bg-blueAccent-100 after:dark:checked:bg-transparent  after:checked:bg-transparent  checked:accent-greenAccent-100"
                                                }
                                                type="checkbox"
                                                checked={selectAll}
                                                onChange={handleSelectAllChange} />
                                    }
                                </th>

                                <th
                                    className={`p-2 items-center group ${columnHide.id}`}
                                    onClick={() => handleSort('id')}
                                >
                                    Id
                                    <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                                </th>

                                <th
                                    className={`p-2 ${columnHide.name} group`}
                                    onClick={() => handleSort('name')}
                                >
                                    Name
                                    <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                                </th>

                                <th
                                    className={`p-2 ${columnHide.email} group`}
                                    onClick={() => handleSort('email')}
                                >
                                    Email
                                    <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                                </th>

                                <th
                                    className={`p-2 ${columnHide.age} group`}
                                    onClick={() => handleSort('age')}
                                >
                                    Age
                                    <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                                </th>
                                <th className={`p-2 ${columnHide.phone} group`}
                                    onClick={() => handleSort('phone')}
                                >
                                    Phone
                                    <AiFillCaretDown className={`w-4 h-4 ${sortOrder === "desc" && "-rotate-180"} transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 inline`} />
                                </th>

                                <th
                                    className={`p-2 ${columnHide.access} group`}
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
                {
                    !paginationHide && <div className="flex dark:bg-blueAccent-600 justify-end bg-blueAccent-100 items-center p-2">
                        <label htmlFor="" className="mr-2">Users Per Page:</label>
                        <select onChange={handleUsersPerPageChange} name="" id="" defaultValue={usersPerPage} className={`bg-blueAccent-100 dark:bg-blueAccent-600 border-2 border-greenAccent-400 px-2 mr-3 focus:outline-none`}>
                            <option value={5}>5</option>
                            <option value={9}>9</option>
                        </select>
                        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} prevBtn={prevBtn} nextBtn={nextBtn} currentPage={currentPage} />
                    </div>
                }
            </div>


            {/* FORM FOR UPDATE OR ADD USER */}
            <form className={`${addAndUpdateUserModalToggle ? "translate-y-0" : "-translate-y-[30rem]"} w-[50%] shadow-md transition-all duration-300 ease-in absolute top-[0] lg:translate-x-0 lg:left-[20%] sm:left-[15%] xs:left-[5%] translate-x-[50%] flex flex-col space-y-4 bg-light-BGC p-4 xs:p-2 overflow-hidden dark:bg-dark-BGC xs:w-[90%] sm:w-[70%] lg:w-[60%] z-10`}>

                <AiOutlineClose
                    className="w-5 h-5 cursor-pointer"
                    onClick={handleAddAndUpdateUserModalClose}
                />

                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.name}
                    type="text"
                    placeholder="Name"
                    name="name"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />

                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.email}
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />

                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.age}
                    type="text"
                    placeholder="Age"
                    name="age"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />

                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.phone}
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />

                <select
                    onChange={handleChangeUserDetails}
                    name="access"
                    defaultValue={addAndUpdateUser.access}
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                >
                    <option value="user">
                        User
                    </option>
                    <option value="admin">
                        Admin
                    </option>
                    <option value="manager">
                        Manager
                    </option>
                </select>

                <button
                    onClick={changeBtnBehavior === "UPDATE" ? handleUpdateUser : handleAddNewUser}
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                >
                    {changeBtnBehavior}
                </button>

            </form>
        </main>
    )
}

export default Team