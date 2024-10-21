import React, { useState, useRef, useEffect } from 'react';
import Calendar from './Calendar';


const DateInput = ({selectedDate,setSelectedDate}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputFocus = () => {
    setShowCalendar(true);
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="date-input-container">
      <input
        ref={inputRef}
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ''}
        onChange={(e) => setSelectedDate(e.target.value)}
        onFocus={handleInputFocus}
        readOnly
        placeholder="Select a date"
         className="inputName"
      />
      {showCalendar && (
        <div ref={calendarRef} className="calendar-popup">
          <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default DateInput;