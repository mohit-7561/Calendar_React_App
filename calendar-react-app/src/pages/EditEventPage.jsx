import React, { useState, useEffect } from "react";
import useEvent from "../hooks/useEvent";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomeButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const EditEventPage = () => {
  const { id } = useParams(); // Extract `id` from URL parameters using useParams hook
  const { events, updateEvent } = useEvent();
  const [event, setEvent] = useState(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    // Find the event by ID
    const existingEvent = events.find((ev) => ev.id === id);

    if (existingEvent) {
      setEvent(existingEvent); // Set event if found
    } else {
      navigate("/"); // Redirect to home if event not found
    }
  }, [events, id, navigate]);

  // Check if event is null before rendering
  if (event === null) return <div>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.title && event.date && event.category) {
      updateEvent(id, event);
      navigate(`/event/${id}`); // Redirect to event details after update
    } else {
      alert("Please fill out all fields before submitting."); // Alert if fields are empty
    }
  };

  return (
    <FormWrapper>
      <h2>Edit Event</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          placeholder="Event Date"
          value={event.date}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="category"
          placeholder="Event Category"
          value={event.category}
          onChange={handleChange}
        />
        <Button type="submit">Update Event</Button>
      </Form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
      </div>
    </FormWrapper>
  );
};

export default EditEventPage;
