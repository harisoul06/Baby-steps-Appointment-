import { useState } from "react";
import { useParams } from "react-router-dom";
import SlotPicker from "../components/SlotPicker";
import AppointmentForm from "../components/AppointmentForm";

const DoctorPage = () => {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div>
      <h1>Book Appointment</h1>
      <SlotPicker doctorId={id} date="2024-07-31" onSelectSlot={setSelectedSlot} />
      {selectedSlot && <AppointmentForm doctorId={id} slot={selectedSlot} onSuccess={() => alert("Booked!")} />}
    </div>
  );
};

export default DoctorPage;
