import React, { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now().toString() }]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map((event) => (event.id === id ? updatedEvent : event)));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const filteredEvents = events.filter(
    (event) => categoryFilter === "all" || event.category === categoryFilter
  );

  return (
    <EventContext.Provider
      value={{
        events: filteredEvents, // Provide filtered events
        allEvents: events, // Provide all events
        categoryFilter,
        setCategoryFilter,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
