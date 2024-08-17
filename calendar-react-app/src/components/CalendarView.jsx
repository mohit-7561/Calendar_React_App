import { Link } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import styles from "./CalendarView.module.css";

const CalendarView = () => {
  // Destructure `events`, `categoryFilter`, and `setCategoryFilter` from the `useEvent` hook
  const { events, categoryFilter, setCategoryFilter } = useEvent();

  // Filter events based on the selected category
  const filteredEvents = events.filter((event) =>
    categoryFilter === "all" ? true : event.category === categoryFilter
  );

  // Function to render days of the current month with event links
  const renderDays = () => {
    const today = new Date();
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div className={styles.dayBox} key={i}>
          <div>{i}</div>
          <div className={styles.eventList}>
            {filteredEvents
              .filter((event) => new Date(event.date).getDate() === i)
              .map((event) => (
                <div key={event.id}>
                  <Link className={styles.eventLink} to={`/event/${event.id}`}>
                    {event.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <>
      <div className={styles.filterWrapper}>
        <label className={styles.filterLabel} htmlFor="category-filter">
          Filter by Category:
        </label>
        <select
          className={styles.filterSelect}
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <div className={styles.calendarWrapper}>{renderDays()}</div>
    </>
  );
};

export default CalendarView;
