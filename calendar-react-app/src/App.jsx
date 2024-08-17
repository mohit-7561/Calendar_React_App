import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventForm from "./components/EventForm";
import EditEventPage from "./pages/EditEventPage";
import Footer from "./components/Footer";
import "./styles/GlobalStyles.module.css";

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/edit-event/:id" element={<EditEventPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
