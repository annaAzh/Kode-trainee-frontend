import { RootState } from '@/app/store/store';
import { Employee, Filter } from './types';
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

export const getCurrentFilter = (state: RootState): Filter => {
  return state.employees.filter;
};

export const getSearchQuery = (state: RootState): string => {
  return state.employees.searchQuery;
};
