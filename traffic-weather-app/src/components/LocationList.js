import React from 'react';

const LocationList = ({ locations, handleLocationSelect }) => {
  return (
    <div>
      <h3>List of Locations</h3>
      <ul>
        {locations.map((location, index) => (
          <li key={index} onClick={() => handleLocationSelect(location)}>
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
