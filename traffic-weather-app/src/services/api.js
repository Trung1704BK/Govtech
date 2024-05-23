import axios from 'axios';

const API1_URL = 'https://api.data.gov.sg/v1/transport/traffic-images';
const API2_URL =
  'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';
export const fetchTrafficImages = async (date, time) => {
  const response = await axios.get(`${API1_URL}?date=${date}&time=${time}`);
  return response.data;
};

export const fetchWeather = async (lat, lon) => {
  const response = await axios.get(`${API2_URL}?lat=${lat}&lon=${lon}`);
  return response.data;
};
