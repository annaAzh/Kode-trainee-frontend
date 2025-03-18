import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee, Filter } from './types';
import { Departments } from '@/shared/types';
import { updateFilteredState } from '../lib/utils';

export interface EmployeesState {
  employees: Employee[];
  filteredEmployees: Employee[];
  selectedDepartment: Departments;
  searchQuery: string;
  filter: Filter;
}

const initialState: EmployeesState = {
  employees: [],
  filteredEmployees: [],
  selectedDepartment: Departments.all,
  searchQuery: '',
  filter: 'alphabet',
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      updateFilteredState(state);
    },
    setSelectedDepartment: (state, action: PayloadAction<Departments>) => {
      state.selectedDepartment = action.payload;
      updateFilteredState(state);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      updateFilteredState(state);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
      updateFilteredState(state);
    },
  },
});

export const { setEmployees, setSelectedDepartment, setSearchQuery, setFilter } = employeesSlice.actions;

export default employeesSlice.reducer;
