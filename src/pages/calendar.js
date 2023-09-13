import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import Link from "next/link";

export default class DemoApp extends React.Component {
    render() {
        return (
            <>
                {/* header */}
                <div className="flex flex-col justify-center items-center lg:h-[500px] sm:h-[250px] h-[200px] bg-fixed bg-white">
                    <img
                        src="/profile2.jpg"
                        alt="Image 1"
                        className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-black"
                        width="50"
                        height="50"
                    />

                    <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 lg:mt-10 sm:mt-10 mt-4 lg:text-2xl sm:text-xl text-sm underline">
                        <Link href="/">HOME</Link>
                        <Link href="/blog">BLOG</Link>
                        <Link href="/personal">MY LIFE</Link>
                        <Link href="/calendar">CALENDAR</Link>
                    </div>
                </div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        // Fall 2023
                        // CSC 2221 Leture
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-09-01', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-09-08', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-09-15', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-09-22', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-09-29', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-10-06', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-10-13', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-10-20', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-10-27', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-11-03', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-11-17', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-11-24', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-12-01', time: '14:00', color: 'orange' },
                        { title: 'CSC 2221 (14:00 - 17:00)', date: '2023-12-08', time: '14:00', color: 'orange' },

                        


                        // ECE 1747 Leture
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-09-01', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-09-08', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-09-15', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-09-22', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-09-29', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-10-06', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-10-13', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-10-20', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-10-27', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-11-03', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-11-17', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-11-24', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-12-01', time: '17:30', color: 'blue' },
                        { title: 'ECE 1747 (17:30 - 20:30)', date: '2023-12-08', time: '17:30', color: 'blue' },


                        // CSC 2221 Assignment
                        { title: 'CSC 2221 Assignment 1', date: '2023-09-22', color: 'red' },
                        { title: 'CSC 2221 Assignment 2', date: '2023-10-06', color: 'red' },
                        { title: 'CSC 2221 Assignment 3', date: '2023-10-20', color: 'red' },
                        { title: 'CSC 2221 Assignment 4', date: '2023-11-03', color: 'red' },
                        { title: 'CSC 2221 Assignment 5', date: '2023-11-17', color: 'red' },
                        { title: 'CSC 2221 Assignment 6', date: '2023-12-01', color: 'red' },

                        
                        // Reading Week
                        { title: 'Reading Week', date: '2023-11-04', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-05', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-06', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-07', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-08', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-09', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-10', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-11', color: 'green' },
                        { title: 'Reading Week', date: '2023-11-12', color: 'green' },

                        // Holiday
                        { title: 'Thanksgiving', date: '2023-10-09', color: 'green' },

                        // Personal
                        { title: 'Cat Vaccination (17:15)', date: '2023-09-25', color: 'purple' },

                        // Birthday
                        { title: 'Birthday', date: '2024-08-07', color: 'pink' },
                    ]}
                />
            </>

        )
    }
}

// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }