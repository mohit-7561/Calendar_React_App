import React, { useState } from "react";
import useEvent from "../hooks/useEvent";
import styles from "./EventForm.module.css";

const EventForm = () => {
  const { addEvent } = useEvent(); // Destructure `addEvent` from the `useEvent` hook

  // Local state for form inputs

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("work");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      addEvent({ title, date, category });
      setTitle("");
      setDate("");
      setCategory("work");
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Event</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        <button className={styles.button} type="submit">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
