import React from "react";
import { useSelector } from "react-redux";
import EmployeeList from "../components/Employee/EmployeeList";
import { selectEmployees } from "../treatments/reduxtoolkit/employeeSlice";
import Header from "../components/Header/Header";

/**
 * Employee component represents a page displaying a list of current employees.
 *
 * @component
 * @returns {JSX.Element} React component
 */
const Employee = () => {
  /**
   * Redux selector to get the list of employees from the store.
   *
   * @type {Array}
   */
  const employees = useSelector(selectEmployees);

  return (
    <>
      {/* Header component for the employee list page */}
      <Header page="list" />

      {/* Title for the employee list page */}
      <p className="mt-5 mb-4 text-center h2">Current Employees</p>

      {/* EmployeeList component to display the list of employees */}
      <EmployeeList employees={employees} />
    </>
  );
};

export default Employee;
