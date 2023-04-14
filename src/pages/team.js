import { useState } from "react";
import { teamData } from "../../teamData"
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";
import TableTools from "@/components/table/TableTools";
import AddAndUpdateUser from "@/components/table/AddAndUpdateUser";
import TableBody from "@/components/table/TableBody";
import Table from "@/components/table/Table";

const Team = () => {

    // CSS VARIABLES
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"

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
        id: false,
        name: false,
        email: false,
        phone: false,
        access: false,
        age: false,
        city: true,
        address: true,
        zipcode: true
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
        age: '',
        address: '',
        city: '',
        zipcode: ''
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
                    item.access.toLowerCase().includes(value) ||
                    item.city.toLowerCase().includes(value) ||
                    item.address.toLowerCase().includes(value) ||
                    item.zipcode.toLowerCase().includes(value)
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
        if (e.target.checked === true) {
            setColumnHide(prev => ({ ...prev, [e.target.name]: true }))
        } else {
            setColumnHide(prev => ({ ...prev, [e.target.name]: false }))
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
            age: '',
            city: '',
            address: '',
            zipcode: '',
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
            <TableBody
                index={index}
                selectAll={selectAll}
                check={check}
                item={item}
                columnHide={columnHide}
                handelOpenModalForUpdateUser={handelOpenModalForUpdateUser}
                handleCheckboxChange={handleCheckboxChange}
            />

        )
    });

    return (
        <main className={`w-full px-6 ${TEXT_COLOR} 2xl:text-sm sm:text-xs sm:px-2 relative`}>

            <Header title="TEAM" description="Managing the Team Members" />

            <TableTools
                handleFilterByOptionChange={handleFilterByOptionChange}
                handleFilterChange={handleFilterChange}
                handleDeleteUser={handleDeleteUser}
                handleOpenModalForNewUser={handleOpenModalForNewUser}
                columDisplayCollapse={columDisplayCollapse}
                handleColumnHideDisplayCollapse={handleColumnHideDisplayCollapse}
                handleColumnHideChange={handleColumnHideChange}
                columnHide={columnHide}
            />

            {/* USERS TABLE */}
            <Table
                selectedRows={selectedRows}
                handleRemoveSelectAll={handleRemoveSelectAll}
                selectAll={selectAll}
                handleSelectAllChange={handleSelectAllChange}
                columnHide={columnHide}
                sortOrder={sortOrder}
                tableRows={tableRows}
                handleSort={handleSort}
            />
            {
                !paginationHide && <div className="flex dark:bg-blueAccent-600 justify-end bg-blueAccent-100 items-center p-2">
                    <label htmlFor="" className="mr-2">Users Per Page:</label>
                    <select onChange={handleUsersPerPageChange} name="" id="" defaultValue={usersPerPage} className={`bg-blueAccent-100 dark:bg-blueAccent-600 border-2 dark:border-dark-TXC-100 border-light-TXC-100 px-2 mr-3 focus:outline-none`}>
                        <option value={5}>5</option>
                        <option value={9}>9</option>
                    </select>
                    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} prevBtn={prevBtn} nextBtn={nextBtn} currentPage={currentPage} />
                </div>
            }

            {/* FORM FOR UPDATE OR ADD USER */}
            <AddAndUpdateUser
                addAndUpdateUserModalToggle={addAndUpdateUserModalToggle}
                handleAddAndUpdateUserModalClose={handleAddAndUpdateUserModalClose}
                handleChangeUserDetails={handleChangeUserDetails}
                addAndUpdateUser={addAndUpdateUser}
                changeBtnBehavior={changeBtnBehavior}
                handleUpdateUser={handleUpdateUser}
                handleAddNewUser={handleAddNewUser}
            />
        </main>
    )
}

export default Team