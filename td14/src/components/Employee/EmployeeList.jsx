// components/EmployeeList.js
import React, { useState } from "react";
import Table from "../../components/Table/Table";

const EmployeeList = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const entriesPerPage = 10;
  const startEntry = 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, employees.length);
  const totalEntries = employees.length;

  console.log("Component employee", employees);

  const columns = [
    {
      Header: "First Name",
      accessor: "firstName", // Replace with the actual key in your employee object
    },
    {
      Header: "Last Name",
      accessor: "lastName", // Replace with the actual key in your employee object
    },
    {
      Header: "Date of Birth",
      accessor: "dateOfBirth", // Replace with the actual key in your employee object
    },
    {
      Header: "Street",
      accessor: "street", // Replace with the actual key in your employee object
    },
    {
      Header: "City",
      accessor: "city", // Replace with the actual key in your employee object
    },
    {
      Header: "State",
      accessor: "state", // Replace with the actual key in your employee object
    },
    {
      Header: "Zip Code",
      accessor: "zipCode", // Replace with the actual key in your employee object
    },
    {
      Header: "Start Date",
      accessor: "startDate", // Replace with the actual key in your employee object
    },
    // {
    //   Header: "Address",
    //   accessor: "address",
    //   Cell: ({ row }) => {
    //     console.log("Row Values:", row.values); // Add this line to log row.values
    //     return (
    //       <div>
    //         <p>Street: {row.values.address?.street}</p>
    //         <p>City: {row.values.address?.city}</p>
    //         <p>Zip Code: {row.values.address?.zipCode}</p>
    //         <p>State: {row.values.address?.state}</p>
    //       </div>
    //     );
    //   },
    // },
    {
      Header: "Department",
      accessor: "department", // Replace with the actual key in your employee object
    },
  ];

  return (
    <Table
      data={employees}
      columns={columns}
      searchTerm={searchTerm}
      onSearch={(value) => setSearchTerm(value)}
      startEntry={startEntry}
      endEntry={endEntry}
      totalEntries={totalEntries}
    />
  );
};

export default EmployeeList;
