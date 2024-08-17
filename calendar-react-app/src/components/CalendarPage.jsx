import CalendarView from "../components/CalendarView";
import EventForm from "../components/EventForm";

const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <EventForm />
      <CalendarView />
    </div>
  );
};

export default CalendarPage;
