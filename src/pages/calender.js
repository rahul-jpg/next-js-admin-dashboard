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
        <div className="w-full px-4">
            <Header title="Calendar" description="Full Calendar Interactive Page" />
            <div className="flex w-full space-x-4 md:flex-col md:space-x-0">
                {/* CALENDAR SIDEBAR */}
                <div className={`w-[15%] ${BACK_GRAOUND_COLOR} p-4 ${TEXT_COLOR} text-sm min-w-[11rem] md:w-full md:p-2 sm:text-xs`}>
                    <h5>Events</h5>
                    <ul className="flex flex-col space-y-2 p-2 md:flex-row md:space-y-0 md:space-x-2">
                        {currentEvents.map((event) => (
                            <li
                                key={event.id}
                                className="bg-greenAccent-400 p-4 rounded-md md:p-2"
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

                {/* CALENDAR */}
                <div className={`${TEXT_COLOR} w-[85%] md:w-full`}>
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
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
