import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ name, options, register, label, defaultValue }) => {
  const handleChange = (selectedOption) => {
    // Update the form value using register
    register(name, { value: selectedOption.value }); // Call register with the field name and value
  };

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
