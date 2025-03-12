import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paths } from '@/shared/types';
import { useEmployeeInfo } from './useEmployeeInfo';
import { EmployeeDetails } from '@/entities/employee/ui/EmployeeDetails/EmployeeDetails';

export const EmployeePage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      navigate(Paths.NOT_FOUND);
      return;
    }
  }, [id, navigate]);

  const { employee, employeeAge, normalizedBirthday } = useEmployeeInfo(id as string);

  if (!employee) return null;

  return <EmployeeDetails employee={employee} employeeAge={employeeAge} normalizedBirthday={normalizedBirthday} />;
};
