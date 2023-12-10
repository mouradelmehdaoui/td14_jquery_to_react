// components/EmployeeList.js
import React from "react";
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
  // Assuming entriesPerPage is a variable representing the number of entries per page
  const entriesPerPage = 10;

  // Calculate the range of displayed entries
  const startEntry = 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, employees.length);
  const totalEntries = employees.length;
  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      {/* Header with "Show", "number", "entries", and "Search" */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <label>Show</label>
          <select className="form-control form-control-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>entries</span>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Search:
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Start Date</th>
            <th scope="col">Address</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.startDate}</td>
              <td>
                {employee.street}, {employee.city}, {employee.state}{" "}
                {employee.zipCode}
              </td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>

        {/* Footer displaying the range of entries */}
        <tfoot>
          <tr>
            <td colSpan="6" className="text-center">
              Showing {startEntry} to {endEntry} of {totalEntries} entries
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-3 text-center">
        <p className="mb-0">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </p>
        <Link to="/" className="btn btn-primary mt-2">Return to Home</Link>
      </div>

    </div>
    
  );
};

export default EmployeeList;
