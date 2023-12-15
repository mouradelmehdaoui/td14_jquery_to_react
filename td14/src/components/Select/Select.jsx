import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ name, options, register, label, defaultValue }) => {
  const handleChange = (selectedOption) => {
    // Update the form value using register
    register(name).onChange(selectedOption.value);
  };

  const selectedOption = options.find((option) => option.value === defaultValue);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Select
        {...register(name)}
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default CustomSelect;
