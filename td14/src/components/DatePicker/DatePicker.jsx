// components/DatePicker.js
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ value, onChange, placeholder }) => {
  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat="dd/MM/yyyy"
      showTimeInput={false}  
      className="form-control w-100"
    />
  );
};

export default DatePicker;
