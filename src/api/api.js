import axios from "axios";

export const BACKEND_ENDPOINT = "http://localhost:5000"; // Backend URL

export const fetchDoctors = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/doctors`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export const fetchAvailableSlots = async (doctorId, date) => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/doctors/${doctorId}/slots`, {
            params: { date },
        });
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export const bookAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${BACKEND_ENDPOINT}/appointments`, appointmentData);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export const fetchAppointments = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/appointments`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};
