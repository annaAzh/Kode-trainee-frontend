import { RootState } from '@/app/store/store';
import { Employee } from './types';

export const getEmployees = (state: RootState): Employee[] => {
  return state.employees.employees;
};

export const getFilteredEmployees = (state: RootState): Employee[] => {
  return state.employees.filteredEmployees;
};
