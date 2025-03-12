import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './types';
import { Departments } from '@/shared/types';
import { updateFilteredState } from '../lib/utils';

export interface EmployeesState {
  employees: Employee[];
  filteredEmployees: Employee[];
  selectedDepartment: Departments;
  searchQuery: string;
}

const initialState: EmployeesState = {
  employees: [],
  filteredEmployees: [],
  selectedDepartment: Departments.all,
  searchQuery: '',
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;

      const query = state.searchQuery.toLowerCase();
      updateFilteredState(state, query);
    },
    setSelectedDepartment: (state, action: PayloadAction<Departments>) => {
      state.selectedDepartment = action.payload;

      const query = state.searchQuery.toLowerCase();
      updateFilteredState(state, query);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;

      const query = action.payload.toLowerCase();
      updateFilteredState(state, query);
    },
  },
});

export const { setEmployees, setSelectedDepartment, setSearchQuery } = employeesSlice.actions;

export default employeesSlice.reducer;
