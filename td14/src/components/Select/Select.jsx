import React from 'react';
import Select from 'react-select';

/**
 * CustomSelect component is a wrapper around the react-select library
 * that provides a custom-styled select input.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the select input field.
 * @param {Array} props.options - Array of options for the select input.
 * @param {Function} props.register - React Hook Form register function.
 * @param {string} props.label - Label for the select input.
 * @param {string} props.defaultValue - Default value for the select input.
 * @returns {JSX.Element} React component
 */
const CustomSelect = ({ name, options, register, label, defaultValue }) => {
  /**
   * Handles the change event of the select input.
   *
   * @param {Object} selectedOption - The selected option object.
   */
  const handleChange = (selectedOption) => {
    // Update the form value using register
    register(name, { value: selectedOption.value }); // Call register with the field name and value
  };

  // Find the selected option based on the defaultValue
  const selectedOption = options.find((option) => option.value === defaultValue);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Select
        name={name}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
      />
    </div>
  );
};

export default CustomSelect;
