// components/EmployeeListPage.js
import React from "react";
import { useSelector } from "react-redux";
import EmployeeList from "../components/Employee/EmployeeList";
import { selectEmployees } from "../treatments/reduxtoolkit/employeeSlice";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Header from "../components/Header/Header";

const CreateEmployee = () => {
  const employees = useSelector(selectEmployees);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = () => {
    setIsOpen(true);
  };

  return (

	<>
	<Header page="list" />
    <div className="container">
      <p className="mt-5 mb-4 text-center h2">Current Employees</p>
      {/* Assuming you have the EmployeeForm component (previously created) */}
      {/* <EmployeeForm onSaveEmployee={handleSaveEmployee} /> */}

      {/* Display the list of employees using the EmployeeList component */}
      <EmployeeList employees={employees} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="content">New Employee Successfuly Created !</div>
      </Modal>
    </div>
	</>
  );
};

export default CreateEmployee;
