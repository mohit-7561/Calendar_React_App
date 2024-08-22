import React from "react";
import CalendarView from "../components/CalendarView";
import EventForm from "../components/EventForm";
import styles from "./CalendarPage.module.css";

const CalendarPage = () => {
  // Get the current month and year
  const today = new Date();
  const monthNames = [
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
  const currentMonth = monthNames[today.getMonth()];
  const currentYear = today.getFullYear();

  return (
    <div>
      <h1 className={styles.calendarHeader}>
        Calendar - {currentMonth} {currentYear}
      </h1>
      <EventForm />
      <CalendarView />
    </div>
  );
};

export default CalendarPage;
