import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";

const EventItem = ({ event }) => {
  const { editEvent, deleteEvent } = useContext(EventContext);

  return (
    <div>
      <h3>{event.title}</h3>
      <button onClick={() => editEvent(event.id)}>Edit</button>
      <button onClick={() => deleteEvent(event.id)}>Delete</button>
    </div>
  );
};

export default EventItem;
