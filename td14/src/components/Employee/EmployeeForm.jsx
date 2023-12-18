import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../treatments/reduxtoolkit/employeeSlice"; // Update the path
import { Link } from "react-router-dom";
import states from "../../data/states";
import departments from "../../data/departments";
import DatePicker from "../DatePicker/DatePicker";
import CustomSelect from "../Select/Select";
import { useAlert } from "react-alert"; // Import useAlert

const EmployeeForm = ({ onSaveEmployee }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue, watch } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate

  const alert = useAlert();

  const handleSaveEmployee = (data) => {

    const formattedData = {
      ...data,
      // address: {
      //   street: data.street,
      //   city: data.city,
      //   zipCode: data.zipCode,
      //   state: data.state,
      // },
      dateOfBirth: data.dateOfBirth.toLocaleDateString('fr-FR'),
      startDate: data.startDate.toLocaleDateString('fr-FR'),
    };
    dispatch(addEmployee(formattedData));
    onSaveEmployee(data);
    reset();

    alert.show("Employee added successfully!", {
      type: "success",
      onClose: () => {
        // Redirect to the employee list page after the alert is closed (adjust as needed)
        // Example using react-router-dom's useNavigate
        navigate("/employees");
      },
    });
  };

  return (
    <div className="container mt-5 FormEmployee">
      <div className="mt-3 text-center">
        <Link to="/employees" className="btn btn-success mt-2 mb-5 btn-form">
          View Current Employees
        </Link>
      </div>
      <section className="form-header">
        <h2>Create Employee</h2>
      </section>

      <form onSubmit={handleSubmit(handleSaveEmployee)}>
        <fieldset>
          <div className="form-group input">
            <label htmlFor="first-name">First Name</label>
            <input
              {...register("firstName")}
              type="text"
              className="form-control"
              id="first-name"
            />
          </div>

          <div className="form-group input">
            <label htmlFor="last-name">Last Name</label>
            <input
              {...register("lastName")}
              type="text"
              className="form-control"
              id="last-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              value={watch("dateOfBirth")} // using watch from react-hook-form to get real-time changes
              onChange={(date) => setValue("dateOfBirth", date)}
              placeholder="Select Date"
            />
          </div>
        </fieldset>

        <fieldset className="form-group">
 

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              {...register("street")}
              type="text"
              className="form-control"
              id="street"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              {...register("city")}
              type="text"
              className="form-control"
              id="city"
            />
          </div>

          <div className="form-group input">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              {...register("zipCode")}
              type="number"
              className="form-control"
              id="zip-code"
            />
          </div>
          <div className="form-group select">
            <CustomSelect
              name="state"
              label="Select State"
              options={states.map((state) => ({
                value: state.abbreviation,
                label: state.name,
              }))}
              register={register}
              defaultValue={states[0].abbreviation} // Set a default value if needed
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              value={watch("startDate")}
              onChange={(date) => setValue("startDate", date)}
              placeholder=" Select Date"
            />
          </div>
          <div className="form-group select">
            <CustomSelect
              name="department"
              label="Department"
              options={departments.map((department) => ({
                value: department.name,
                label: department.name,
              }))}
              register={register}
              defaultValue={departments[0].name} // Set a default value if needed
            />
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary btn-form">
          Save
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
