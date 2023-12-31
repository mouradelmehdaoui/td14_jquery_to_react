import React from "react";
import EmployeeForm from "../components/Employee/EmployeeForm";
import Header from "../components/Header/Header";
import { useState, useEffect } from 'react';
import Modal from 'my-modal-success/dist/Modal';

const Home = () => {

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Sync isOpen state with local storage
    localStorage.setItem("modalOpen", JSON.stringify(modalOpen));
  }, [modalOpen]);

  const handleSaveEmployee = (employeeData) => {
    setModalOpen(true);
  };
  return (
    <>
     <div className="create-employee">
     <div className={`background ${modalOpen ? 'blur' : ''}`}>
      <Header page="create" />
      <main>
        <div>
          <EmployeeForm onSaveEmployee={handleSaveEmployee} />
        </div>
      </main>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Form submitted successfully!</p>
      </Modal>
      </div>
    </>
  );
};

export default Home;
