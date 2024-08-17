import React, { createContext, useState } from "react";

// Create a Context for managing events

export const EventContext = createContext();

// Define a Provider component to wrap around parts of the app that need access to event data
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  // Function to edit an existing event by ID
  const editEvent = (id, updatedEvent) => {
    setEvents(events.map((event) => (event.id === id ? updatedEvent : event)));
  };

  // Function to delete an event by ID
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};
