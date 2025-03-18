import { Employee } from '@/entities/employee/model/types';
import { getNextBirthday } from './getNextBirthday';

export const groupByYear = (employees: Employee[]) => {
  const groupByYear: Record<number, Employee[]> = {};

  employees.forEach((employee) => {
    const birthDayYear = getNextBirthday(employee.birthday).getFullYear();
    if (!groupByYear[birthDayYear]) {
      groupByYear[birthDayYear] = [];
    }

    groupByYear[birthDayYear].push(employee);
  });

  return groupByYear;
};
