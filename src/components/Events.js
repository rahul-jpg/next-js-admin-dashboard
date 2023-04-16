import { formatDate } from '@fullcalendar/core'

const Events = ({ currentEvents }) => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    return (
        <div className={`w-[15%] ${BACK_GRAOUND_COLOR} p-4 ${TEXT_COLOR} text-sm min-w-[11rem] lg:w-full md:p-2 sm:text-xs sm:p-1`}>
            <h5>Events</h5>
            <div className="md:overflow-x-scroll">
                <ul className="flex flex-col space-y-2 p-2 lg:flex-row lg:space-y-0 lg:space-x-2">
                    {currentEvents.map((event) => (
                        <li
                            key={event.id}
                            className="bg-greenAccent-400 p-4 rounded-md md:p-2 sm:p-1 sm:rounded-sm min-w-[5rem]"
                        >
                            <h2>{event.title}</h2>
                            <p>
                                {formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Events