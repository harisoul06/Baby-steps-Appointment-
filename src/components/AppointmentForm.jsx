import { useState } from "react";
import { bookAppointment } from "../api/api";

const AppointmentForm = ({ doctorId, slot, onSuccess }) => {
  const [patientName, setPatientName] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorId,
      date: slot,
      duration: 30,
      appointmentType,
      patientName,
    };
    await bookAppointment(appointmentData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Appointment</h3>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Appointment Type"
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
        required
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;
