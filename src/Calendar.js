import React, { useState } from 'react';
import arrow1 from "./icons/arrowleftthree.svg"
import arrow2 from "./icons/arrow-right.svg"

const Calendar = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onDateChange(newDate);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, () => '');

  return (
   <>
     <div className="blurDiv2">
           
    </div>
    <div className="calendar">
      <div className="calendar-header">
        <span className='monthYear'>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
        <button className='prevButton' onClick={handlePrevMonth}><img src={arrow1} alt='prev'/></button>
        <button className='nextButton' onClick={handleNextMonth}><img src={arrow2} alt='next'/></button>
      </div>
      <div className="calendar-days">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {emptyDays.map((_, index) => (
          <div key={index} className="calendar-day empty"></div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Calendar;