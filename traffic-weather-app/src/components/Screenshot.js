import React from 'react';

const Screenshot = ({ imageUrl }) => {
  return (
    <div>
      <h3>Screenshot</h3>
      <img src={imageUrl} alt="Traffic Cam" />
    </div>
  );
};

export default Screenshot;
