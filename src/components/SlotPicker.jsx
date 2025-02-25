import { useEffect, useState } from "react";
import { fetchAvailableSlots } from "../api/api";

const SlotPicker = ({ doctorId, date, onSelectSlot }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (doctorId && date) {
      fetchAvailableSlots(doctorId, date).then(setSlots);
    }
  }, [doctorId, date]);

  return (
    <div>
      <h3>Available Slots</h3>
      {slots.length === 0 ? (
        <p>No slots available</p>
      ) : (
        <ul>
          {slots.map((slot) => (
            <li key={slot} onClick={() => onSelectSlot(slot)} style={{ cursor: "pointer" }}>
              {slot}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SlotPicker;
