import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePicker = ({ selectedDate, handleDateChange }) => {
  return (
    <TextField
      id="date"
      label="Choose Date"
      type="date"
      value={selectedDate}
      onChange={(e) => handleDateChange(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePicker;
