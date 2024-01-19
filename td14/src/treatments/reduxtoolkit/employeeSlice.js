import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state for the employee slice.
 *
 * @type {Object}
 * @property {Array} employees - Array to store employee data.
 */
const initialState = {
  employees: [],
};

/**
 * Redux Toolkit createSlice to manage employee-related state.
 *
 * @type {Slice}
 */
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    /**
     * Reducer to add an employee to the state.
     *
     * @param {Object} state - Current state.
     * @param {Object} action - Redux action with payload.
     * @param {Object} action.payload - Employee data to be added.
     */
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  },
});

/**
 * Action creator for adding an employee.
 *
 * @type {Function}
 */
export const { addEmployee } = employeeSlice.actions;

/**
 * Selector to get the list of employees from the state.
 *
 * @type {Function}
 * @param {Object} state - Redux state.
 * @returns {Array} - Array of employees.
 */
export const selectEmployees = (state) => state.employee.employees;

/**
 * Reducer for the employee slice.
 *
 * @type {Function}
 */
export default employeeSlice.reducer;
