import React from "react";
import EmployeeForm from "../components/Employee/EmployeeForm";
import Header from "../components/Header/Header";
import { useState, useEffect } from 'react';
import Modal from 'my-modal-success/dist/Modal';

/**
 * Home component represents the main page of the application.
 *
 * @component
 * @returns {JSX.Element} React component
 */
const Home = () => {
  /**
   * State to manage the modal's open/close status.
   *
   * @type {boolean}
   */
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * useEffect hook to synchronize the modalOpen state with local storage.
   *
   * @effect
   */
  useEffect(() => {
  }, [modalOpen]);

  /**
   * Callback function triggered when an employee is saved.
   *
   * @param {Object} employeeData - Data of the saved employee.
   * @function
   */
  const handleSaveEmployee = (employeeData) => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="create-employee">
        <div className={`background ${modalOpen ? 'blur' : ''}`}>
          {/* Header component for the create employee page */}
          <Header page="create" />
          <main>
            <div>
              {/* EmployeeForm component for entering employee data */}
              <EmployeeForm onSaveEmployee={handleSaveEmployee} />
            </div>
          </main>
        </div>

        {/* Modal component for displaying success message */}
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <p>Form submitted successfully!</p>
        </Modal>

      </div>
    </>
  );
};

export default Home;
