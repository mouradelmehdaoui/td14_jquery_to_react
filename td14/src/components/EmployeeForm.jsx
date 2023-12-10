// EmployeeForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../treatments/reduxtoolkit/employeeSlice'; // Update the path
import { Link } from 'react-router-dom';
import states  from '../data/states';
import departments from '../data/departments';

const EmployeeForm = ({ onSaveEmployee }) => {

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSaveEmployee = (data) => {
    dispatch(addEmployee(data));
    onSaveEmployee(data);
    reset();
    // Redirect to the employee list page after saving
    navigate('/employee');
  };

  return (
    <div className="container mt-5">
      <div className="mt-3 text-center">

        <Link to="/employee" className="btn btn-success mt-2">View Current Employees</Link>
      </div>
      <h1>HRnet</h1>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit(handleSaveEmployee)}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input {...register('firstName')} type="text" className="form-control" id="first-name" />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input {...register('lastName')} type="text" className="form-control" id="last-name" />
        </div>

        <div className="form-group">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input {...register('dateOfBirth')} type="text" className="form-control" id="date-of-birth" />
        </div>

        <div className="form-group">
          <label htmlFor="start-date">Start Date</label>
          <input {...register('startDate')} type="text" className="form-control" id="start-date" />
        </div>

        <fieldset className="form-group">
          <legend>Address</legend>

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input {...register('street')} type="text" className="form-control" id="street" />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input {...register('city')} type="text" className="form-control" id="city" />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <select {...register('state')} className="form-control" id="state">
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input {...register('zipCode')} type="number" className="form-control" id="zip-code" />
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select {...register('department')} className="form-control" id="department">
            {departments.map((department, index) => (
              <option key={index} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
