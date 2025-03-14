import { RootState } from '@/app/store/store';
import { Employee } from './types';
import { Departments } from '@/shared/types';

export const getEmployees = (state: RootState): Employee[] => {
  return state.employees.employees;
};

export const getFilteredEmployees = (state: RootState): Employee[] => {
  return state.employees.filteredEmployees;
};

export const getSelectedDepartment = (state: RootState): Departments => {
  return state.employees.selectedDepartment;
};
