// components/EmployeeListPage.js
import React from "react";
import { useSelector } from "react-redux";
import EmployeeList from "../components/Employee/EmployeeList";
import { selectEmployees } from "../treatments/reduxtoolkit/employeeSlice";
import Header from "../components/Header/Header";

const Employee = () => {
  const employees = useSelector(selectEmployees);
  return (

	<>
	<Header page="list" />
      <p className="mt-5 mb-4 text-center h2">Current Employees</p>
      <EmployeeList employees={employees} />
	</>
  );
};

export default Employee;
