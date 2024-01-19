import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * DatePicker component is a wrapper around the ReactDatePicker library
 * that provides a date input with specific styling and formatting.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Date} props.value - The selected date value.
 * @param {Function} props.onChange - Callback function triggered when the date changes.
 * @param {string} props.placeholder - Placeholder text for the date input.
 * @returns {JSX.Element} React component
 */
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
