import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './types';
import { Departments } from '@/shared/types';

export interface EmployeesState {
  employees: Employee[];
  filteredEmployees: Employee[];
  selectedDepartment: Departments;
}

const initialState: EmployeesState = {
  employees: [],
  filteredEmployees: [],
  selectedDepartment: Departments.all,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      state.filteredEmployees = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.filteredEmployees = state.employees.filter((user) =>
        (user.firstName + ' ' + user.lastName).includes(query),
      );
    },
    setSelectedDepartment: (state, action: PayloadAction<Departments>) => {
      state.selectedDepartment = action.payload;
    },
  },
});

export const { setEmployees, setFilteredUsers, setSelectedDepartment } = employeesSlice.actions;

export default employeesSlice.reducer;
