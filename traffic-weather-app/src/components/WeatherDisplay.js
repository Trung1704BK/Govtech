import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <h3>Weather Information</h3>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherDisplay;
