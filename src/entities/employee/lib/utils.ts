import { Departments } from '@/shared/types';
import { EmployeesState } from '../model/slice';

export const updateFilteredState = (state: EmployeesState, query: string) => {
  const filteredEmployees = state.employees.filter((employee) => {
    return state.selectedDepartment === Departments.all ? employee : employee.department === state.selectedDepartment;
  });
  if (query === '') {
    state.filteredEmployees = filteredEmployees;
    return;
  }

  state.filteredEmployees = filteredEmployees.filter(
    (employee) =>
      (employee.firstName.toLowerCase() + ' ' + employee.lastName.toLowerCase()).includes(query) ||
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query) ||
      employee.userTag.toLowerCase().includes(query),
  );
};
