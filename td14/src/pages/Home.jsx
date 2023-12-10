import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';

function Home() {

  const handleSaveEmployee = (employeeData) => {
    // Implement your saveEmployee logic here
    console.log('Employee data:', employeeData);

  };
  return (
    <>
      <main>
        <div>
          <EmployeeForm onSaveEmployee={handleSaveEmployee}/>
        </div>
      </main>
    </>
  );
}

export default Home;
