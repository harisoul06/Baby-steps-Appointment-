import React  from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import AppointmentsPage from "./pages/AppointmentsPage";


function App() {
return(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>

    </Router>
);
}

export default App;
