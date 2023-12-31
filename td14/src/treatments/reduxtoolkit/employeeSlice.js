// employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  },
});

export const {addEmployee} = employeeSlice.actions;
export const selectEmployees = (state) => state.employee.employees;

export default employeeSlice.reducer;
