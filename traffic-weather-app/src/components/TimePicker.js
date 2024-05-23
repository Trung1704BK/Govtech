import React from 'react';
import TextField from '@material-ui/core/TextField';

const TimePicker = ({ selectedTime, handleTimeChange }) => {
  return (
    <TextField
      id="time"
      label="Choose Time"
      type="time"
      value={selectedTime}
      onChange={(e) => handleTimeChange(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default TimePicker;
