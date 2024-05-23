import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import LocationList from './components/LocationList';
import WeatherDisplay from './components/WeatherDisplay';
import Screenshot from './components/Screenshot';
import { fetchTrafficImages, fetchWeather } from './services/api';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (time) => setSelectedTime(time);

  const handleFetchLocations = async () => {
    const images = await fetchTrafficImages(selectedDate, selectedTime);
    setLocations(images);
  };

  const handleLocationSelect = async (location) => {
    setSelectedLocation(location);
    const weatherData = await fetchWeather(location.lat, location.lon);
    setWeather(weatherData);
    setImageUrl(location.imageUrl);
  };

  return (
    <div>
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <TimePicker
        selectedTime={selectedTime}
        handleTimeChange={handleTimeChange}
      />
      <button onClick={handleFetchLocations}>Fetch Locations</button>
      <LocationList
        locations={locations}
        handleLocationSelect={handleLocationSelect}
      />
      {selectedLocation && <WeatherDisplay weather={weather} />}
      {selectedLocation && <Screenshot imageUrl={imageUrl} />}
    </div>
  );
};

export default App;
