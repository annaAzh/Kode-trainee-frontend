import { FC } from 'react';
import { EmployeeInfo } from './EmployeeInfo';
import { Employee } from '../../model/types';
import { EmployeeHeader } from './EmployeeHeader';

interface Props {
  normalizedBirthday: string;
  employee: Employee;
  employeeAge: string;
}

export const EmployeeDetails: FC<Props> = ({ normalizedBirthday, employee, employeeAge }) => {
  return (
    <>
      <EmployeeHeader employee={employee} />
      <EmployeeInfo normalizedBirthday={normalizedBirthday} employee={employee} employeeAge={employeeAge} />
    </>
  );
};
