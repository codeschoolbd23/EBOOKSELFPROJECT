import React, { useState } from "react";
import "./MiniCalendar.css";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Get total days in the current month
  const totalDays = new Date(year, month + 1, 0).getDate();
  // Get the starting day index of the week (0 = Sunday, 6 = Saturday)
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  // Generate blank spots for days from the previous month
  const blankDays = Array(firstDayIndex).fill(null);
  // Generate days of the current month
  const monthDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  const allDays = [...blankDays, ...monthDays];

  return (
    <div className="mini-calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {months[month]} {year}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      <div className="calendar-weekdays">
        {daysOfWeek.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {allDays.map((day, index) => {
          if (day === null)
            return <div key={`empty-${index}`} className="day empty" />;

          const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

          const isSelected =
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear();

          return (
            <button
              key={day}
              className={`day-btn ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
