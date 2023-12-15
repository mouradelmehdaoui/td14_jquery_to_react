import React from "react";
import EmployeeForm from "../components/Employee/EmployeeForm";
import Header from "../components/Header/Header";
import { useState } from 'react';



const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSaveEmployee = (employeeData) => {
    // Implement your saveEmployee logic here
    console.log("Employee data:", employeeData);
    setIsOpen(true);
  };
  return (
    <>
     <div className="create-employee">
     <div className={`background ${isOpen ? 'blur' : ''}`}>
      <Header page="create" />
      <main>
        <div>
          <EmployeeForm onSaveEmployee={handleSaveEmployee} />
        </div>
      </main>
      </div>
      </div>
    </>
  );
};

export default Home;
