// components/EmployeeListPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import { selectEmployees } from '../treatments/reduxtoolkit/employeeSlice'; // Update the path

const Employee = () => {

	const employees = useSelector(selectEmployees);

	return (
	  <div className="container">
		<h1 className="mt-5 mb-4">Current Employees</h1>
  
		{/* Assuming you have the EmployeeForm component (previously created) */}
		{/* <EmployeeForm onSaveEmployee={handleSaveEmployee} /> */}
  
		{/* Display the list of employees using the EmployeeList component */}
		<EmployeeList employees={employees} />
	  </div>
	);
};

export default Employee;
