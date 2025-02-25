import { useEffect, useState } from "react";
import { fetchDoctors } from "../api/api";
import { Link } from "react-router-dom";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctors()
      .then((data) => {
        setDoctors(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Select a Doctor</h2>
      {doctors.length === 0 ? (
        <p>No doctors available</p>
      ) : (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor._id}>
              <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorList;