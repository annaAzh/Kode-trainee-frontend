import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './types';

export interface EmployeesState {
  employees: Employee[];
  filteredEmployees: Employee[];
}

const initialState: EmployeesState = {
  employees: [],
  filteredEmployees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      state.filteredEmployees = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.filteredEmployees = state.employees.filter((user) =>
        (user.firstName + ' ' + user.lastName).includes(query),
      );
    },
  },
});

export const { setUsers, setFilteredUsers } = employeesSlice.actions;

export default employeesSlice.reducer;
