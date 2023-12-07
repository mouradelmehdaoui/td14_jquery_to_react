import React from 'react';

const EmployeeList = () => {
  // Implement logic to fetch and display employee list
  const employees = [
    // Sample employee data
    // ...
  ];

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName} {employee.lastName} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
