import React, { useState } from 'react';

const Employee = ({ onSaveEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('Sales');

  const handleSaveEmployee = () => {
    onSaveEmployee({
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department
    });

    // Reset form fields after saving
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setStartDate('');
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setDepartment('Sales');
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

          <label htmlFor="state">State</label>
          <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
            {/* Add options for states */}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick={handleSaveEmployee}>Save</button>
    </div>
  );
};

export default Employee;
