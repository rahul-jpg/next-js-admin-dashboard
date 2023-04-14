import { AiOutlineClose } from 'react-icons/ai';

const AddAndUpdateUser = ({
    addAndUpdateUserModalToggle,
    handleAddAndUpdateUserModalClose,
    handleChangeUserDetails,
    addAndUpdateUser,
    changeBtnBehavior,
    handleUpdateUser,
    handleAddNewUser
}) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    return (
        <form className={`${addAndUpdateUserModalToggle ? "translate-y-0" : "-translate-y-[30rem]"} w-[50%] shadow-md transition-all duration-300 ease-in absolute top-[0] lg:translate-x-0 lg:left-[20%] sm:left-[15%] xs:left-[5%] translate-x-[50%] flex flex-col space-y-4 bg-light-BGC p-4 xs:p-2 overflow-hidden dark:bg-dark-BGC xs:w-[90%] sm:w-[70%] lg:w-[60%] z-10`}>

            <AiOutlineClose
                className="w-5 h-5 cursor-pointer"
                onClick={handleAddAndUpdateUserModalClose}
            />
            <div className="h-[15rem] overflow-y-scroll flex flex-col space-y-4 w-full">
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
                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.phone}
                    type="text"
                    placeholder="Address"
                    name="address"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />
                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.phone}
                    type="text"
                    placeholder="City"
                    name="city"
                    className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
                />
                <input
                    onChange={handleChangeUserDetails}
                    value={addAndUpdateUser.zipcode}
                    type="text"
                    placeholder="Zipcode"
                    name="zipcode"
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
            </div>
            <button
                onClick={changeBtnBehavior === "UPDATE" ? handleUpdateUser : handleAddNewUser}
                className={`p-2 focus:outline-none ${BACK_GRAOUND_COLOR} ${TEXT_COLOR}`}
            >
                {changeBtnBehavior}
            </button>

        </form>
    )
}
export default AddAndUpdateUser