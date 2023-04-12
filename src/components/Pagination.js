import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage, nextBtn, prevBtn }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="flex items-center space-x-2">
            <li onClick={prevBtn} className="cursor-pointer"><BsChevronLeft className="w-4 h-4" /></li>
            <li>{currentPage}</li>
            <li onClick={nextBtn} className="cursor-pointer"><BsChevronRight className="w-4 h-4" /></li>
        </ul>
    )
}
export default Pagination