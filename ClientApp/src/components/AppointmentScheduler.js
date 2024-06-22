import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AppointmentScheduler() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = date => {
        setDate(date);
    };

    return (
        <div>
            <h2>Randevu Ayarla</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
            <p>Seçilen Tarih: {date.toDateString()}</p>
        </div>
    );
}

export default AppointmentScheduler;