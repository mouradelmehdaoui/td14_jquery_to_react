import React, { useState } from 'react';
import Employee from '../components/Employee';

function Home() {

	const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleSaveEmployee = (employeeData) => {
    // Implement your saveEmployee logic here
    console.log('Employee data:', employeeData);

    // Show confirmation modal
    setConfirmationVisible(true);

    // You may want to update your employee list state or make an API call to save data
  };
  return (
    <>
      <main>
        <div>
          <Employee onSaveEmployee={handleSaveEmployee}/>
        </div>
      </main>
    </>
  );
}

export default Home;
