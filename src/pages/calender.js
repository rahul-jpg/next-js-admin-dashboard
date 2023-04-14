import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "@/components/Header";

const Calendar = () => {
    const TEXT_COLOR = "text-light-TXC-600 dark:text-dark-TXC-100"
    const BACK_GRAOUND_COLOR = "bg-light-BGSC dark:bg-dark-BGSC"
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };
    currentEvents.map(event => console.log(event.start))

    return (
        <div className="w-full px-4 xs:px-2">
            <Header title="Calendar" description="Full Calendar Interactive Page" />
            <div className="flex w-full space-x-4 lg:flex-col lg:space-x-0">
                {/* CALENDAR SIDEBAR */}
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

                {/* CALENDAR */}
                <div className={`${TEXT_COLOR} w-[85%] lg:w-full mt-3`}>
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendar;
