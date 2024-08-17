import { useParams, useNavigate } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import styles from "./EventDetailsPage.module.css";

const EventDetailsPage = () => {
  const { id } = useParams(); // Extract `id` from URL parameters
  const navigate = useNavigate();
  const { events, deleteEvent } = useEvent();
  const event = events.find((event) => event.id === id); // Match `id` from events

  // Render a message if the event is not found
  if (!event) return <div>Event not found.</div>;

  // Handle event deletion
  const handleDelete = () => {
    deleteEvent(event.id);
    navigate("/");
  };

  return (
    <div className={styles.detailsWrapper}>
      <h1>{event.title}</h1>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Category: {event.category}</p>
      <button
        className={`${styles.button} ${styles.editButton}`}
        onClick={() => navigate(`/edit-event/${event.id}`)}
      >
        Edit
      </button>
      <button
        className={`${styles.button} ${styles.deleteButton}`}
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className={`${styles.button} ${styles.homeButton}`}
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default EventDetailsPage;
