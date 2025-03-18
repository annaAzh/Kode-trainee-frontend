import { Departments } from '@/shared/types';
import { EmployeesState } from '../model/slice';
import { getNextBirthday } from '@/shared/lib/helpers';

export const updateFilteredState = (state: EmployeesState) => {
  const query = state.searchQuery.toLowerCase();

  const currentFilter = state.filter;

  const filteredEmployeesByDepartment = state.employees.filter((employee) => {
    return state.selectedDepartment === Departments.all ? employee : employee.department === state.selectedDepartment;
  });

  let filteredEmployeesByFilter = filteredEmployeesByDepartment;

  if (currentFilter === 'alphabet') {
    filteredEmployeesByFilter = filteredEmployeesByDepartment.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  if (currentFilter === 'birthday') {
    filteredEmployeesByFilter = filteredEmployeesByDepartment.sort(
      (a, b) => getNextBirthday(a.birthday).getTime() - getNextBirthday(b.birthday).getTime(),
    );
  }

  if (query === '') {
    state.filteredEmployees = filteredEmployeesByFilter;
    return;
  }

  state.filteredEmployees = filteredEmployeesByFilter.filter(
    (employee) =>
      (employee.firstName.toLowerCase() + ' ' + employee.lastName.toLowerCase()).includes(query) ||
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query) ||
      employee.userTag.toLowerCase().includes(query),
  );
};
